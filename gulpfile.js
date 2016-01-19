var gulp = require("gulp"),
    fs = require("fs"),
    path = require('path'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    merge = require('merge2'),
    less = require('gulp-less'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject-string'),
    clear = require('clear'),
    colors = require('colors'),
    rename = require("gulp-rename")
    ; 

var project=require("./package.json");
var angularInclude=[
    "angular2/bundles/angular2-polyfills.js",
    "systemjs/dist/system.src.js",
    "rxjs/bundles/Rx.js",
    "angular2/bundles/angular2.dev.js",
    ];

var angularRelease=[
    "systemjs/dist/system.js",
    "rxjs/bundles/Rx.min.js",
    "angular2/bundles/angular2-polyfills.min.js",
    "angular2/bundles/angular2.min.js"
    ];

/*
    wath file and perform realtime build
*/
gulp.task('watch', function () {
    var gaze = require('gaze');
    gaze(['./src/**/*.ts'], function () {this.on('all', function () {gulp.start('src:js')});this.on('error', function() {})});
    gaze(['./src/**/*.less'], function () {this.on('all', function () {gulp.start('src:css')});this.on('error', function() {})});
    gaze(['./app/**/*.less'], function () {this.on('all', function () {gulp.start('app:css')});this.on('error', function() {})});
    gaze(['./app/**/*.ts'], function () {this.on('all', function () {gulp.start('app:js')});this.on('error', function() {})});
    gaze(['./app/**/*.html'], function () {this.on('all', function () {gulp.start('app:html')});this.on('error', function() {})});
    gaze(['./test/**/*.ts','!./test/ai.d.ts'], function () {this.on('all', function () {gulp.start('test')});this.on('error', function() {})});
});

/*
    build & clean
*/
var rimraf = require('rimraf');
gulp.task('clean', function (cb) {
    rimraf('node_modules/'+project.name+'/*', function(){
        rimraf('web/**/*', cb);        
    });
    
});

gulp.task('build',['clean'], function () {
    var runSequence = require('run-sequence');
    runSequence(
        ['src:css','src:js'],
        ['app:css','app:html','app:js']
        );
});

/*
    src
*/
gulp.task('src:css', function () {
    return gulp.src('src/**/*.less')
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(concat(project.name+".css"))
            .pipe(sourcemaps.write())
		    .pipe(gulp.dest('./web'));
});

function log(name,description){console.log(colors.white(name).bgGreen+" : "+description.green);}
function ignore(name,description){console.log(colors.black(name).bgWhite+" : "+description.gray);}
function error(name,description){console.log(colors.white(name).bgRed+" : "+description.red);}
function warning(name,description){console.log(colors.white(name).bgYellow+" : "+description.yellow);}

function addModuleName(srcRoot,namespace) {
    function transform(file, cb) {
        var index=file.path.indexOf(srcRoot);
        var tag=file.path.substring(index+srcRoot.length+1,file.path.length-3);
        var folder='';
        if(namespace) folder=namespace+"/";
        var js = String(file.contents);
        js = js.replace("System.register([", "System.register('"+folder+tag+"',[");
        file.contents = new Buffer(js);
        cb(null, file);
    }
    return require('event-stream').map(transform);
}

var srcError=false;
var srcProject = ts.createProject({
    target: "ES5",
    module: "system",
    moduleResolution: "node",
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    noImplicitAny: false,
    sortOutput: true,
    declaration: true
});
gulp.task('src:js', function () {clear(); 
    log('src:js','typescript compiler');
    srcError=false;
    var tsResult = gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
		.pipe(ts(srcProject,{},ts.reporter.fullReporter()))
		
        .on('error', function () {
            srcError=true;
            this.emit("end");
        });

    return merge([
    		tsResult.dts
    		    //.pipe(concat(project.name+".d.ts"))
    		    .pipe(gulp.dest('./node_modules/'+project.name))
    		    ,
    		tsResult.js
		        //.pipe(concat(project.name+".js"))
		        .pipe(sourcemaps.write())
		        //.pipe(rename({extname: ""}))
		        .pipe(gulp.dest('./web/'+project.name))
    	]);		
});

/*
    app
*/

gulp.task('app:css', function () {
    return gulp.src('app/**/*.less')
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(concat("index.css"))
            .pipe(sourcemaps.write())
		    .pipe(gulp.dest('./web'));
});

gulp.task('app:html', function () {
    var htmlResult= gulp.src('app/**/*.html')
            .pipe(processHtml('debug'))
		    .pipe(gulp.dest('./web'));
});

var appProject = ts.createProject({
    "target": "ES5",
    module: "system",
    moduleResolution: "node",
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    noImplicitAny: false,
    removeComments: true
});
gulp.task('app:js', function () {
    
    if(srcError) {
        ignore('app:js','typescript compiler');
        return;   
    }
    log('app:js','typescript compiler');
    var tsResult = gulp.src('app/**/*s')
        .pipe(sourcemaps.init())
		.pipe(ts(appProject,{},ts.reporter.fullReporter()));

    return tsResult.js
    		        .pipe(sourcemaps.write())
    		        //.pipe(rename({extname: ""}))
    		        .pipe(gulp.dest('./web'))
    		        ;
    			
});

function processHtml(mode) {
    function transform(file, cb) {
        var filename=path.basename(file.path,'.html');
        var replaceFrom="<head>";
        var replaceTo
        if(mode==="debug")
        {
            var includeFiles="";
            for(var i=0;i<angularInclude.length;i++)
                includeFiles+="\n<script src='../node_modules/"+angularInclude[i]+"'></script>";
            
            replaceTo=
                "<head>"+includeFiles+
                "\n<link rel='stylesheet' type='text/css' href='index.css'>"+
                "\n<link rel='stylesheet' type='text/css' href='"+project.name+".css'>"+
                //"\n<script src='"+project.name+".js'></script>"+
                "\n<script>"+
                    "System.config({packages: { "+filename+": {defaultExtension: 'js'},"+project.name+": {defaultExtension: 'js'}} });"+
                    "System.import('"+filename+"/app');"+
                "</script>";

        }
        else
        {
            var tag=filename+'.'+currentVersion;
            replaceTo=
                "<head>"+
                "<link rel='stylesheet' type='text/css' href='index."+currentVersion+".css'>"+
                "<script src='"+project.name+'/'+currentVersion+'/'+project.name+".js'></script>"+
                "\n<script>System.config({bundles:{'"+tag+"/app.js': ['"+filename+"/app']}});"+
                "System.import('"+filename+"/app');"+
                "</script>";
        }

        var html = String(file.contents);
        html = html.replace(replaceFrom, replaceTo);
        file.contents = new Buffer(html);
        cb(null, file);
    }
    return require('event-stream').map(transform);
}

/*
    release
*/
var cssnano = require('gulp-cssnano');

var currentVersion,srcRepository;
gulp.task('release:version', function () {clear(); 
    log('release','start packing '+project.name);
    var jeditor = require("gulp-json-editor");
   return merge([ 
    gulp.src("./package.json")
        .pipe(jeditor(function(json) {
            var index=json.version.lastIndexOf(".");
            var ver=parseInt(json.version.substring(index+1,json.version.length));
            var tag=json.version.substring(0,index+1);
            json.version = tag+(++ver);
            currentVersion=json.version;
            srcRepository='./release/'+project.name+'/'+json.version;
            return json; 
        }))
      .pipe(gulp.dest("./"))
    ]);
});

gulp.task('release:clean',['release:version'], function (cb) {
    rimraf('release/**/*', cb);
});

var uglify = require('gulp-uglify');
//var closureCompiler = require('google-closure-compiler').gulp();
/*
    return result.pipe(closureCompiler({
        compilation_level: 'ADVANCED',
        warning_level: 'VERBOSE',
        language_out: 'ECMASCRIPT5_STRICT'
    }));
*/          
gulp.task('release:build', function (cb) {
    var srcRelease = ts.createProject({
        target: "ES5",
        module: "system",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        noImplicitAny: false,
        removeComments: true,
        declaration: true
    });
    var appRelease = ts.createProject({
        target: "ES5",
        module: "system",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        noImplicitAny: false,
        removeComments: true
    });

    //src
    var srcTs = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(srcRelease,{},ts.reporter.fullReporter()))
        ;

    var srcLess= gulp.src('src/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cssnano())
        .pipe(concat(project.name+".css"))
        .pipe(sourcemaps.write('.'))
		;

    //app
    var appLess=gulp.src('app/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cssnano())
        .pipe(concat("index."+currentVersion+".css"))
        .pipe(sourcemaps.write('.'))
	    ;

    var htmlmin = require('gulp-htmlmin');
    var appHtml= gulp.src('app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(processHtml('release'))
	    ;

    var appTs = gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
		.pipe(ts(appRelease,{},ts.reporter.fullReporter()));

    return merge([ 
    		srcTs.dts
    		        .pipe(concat(project.name+".d.ts"))
    		        .pipe(gulp.dest(srcRepository))
    		        ,
    		srcTs.js
    		        .pipe(addModuleName('src',project.name)) //add module name that typescript should add
    		        .pipe(concat(project.name+".js"))
    		        .pipe(uglify())
    		        .pipe(sourcemaps.write('.'))
    		        .pipe(gulp.dest(srcRepository))
    		        ,
            srcLess.pipe(gulp.dest(srcRepository)),
    		appLess.pipe(gulp.dest('./release')),
		    appHtml.pipe(gulp.dest('./release')),
            appTs.js
    		        .pipe(addModuleName('app')) //add module name that typescript should add
                    .pipe(uglify())
                    .pipe(rename(function (path) {
                        path.dirname += "."+currentVersion;
                      }))
		            .pipe(sourcemaps.write('.'))
    		        .pipe(gulp.dest('./release'))
        	]);		
});

gulp.task('release:bootstrapcss', function () {
    function bootstrapCss(){
        function transform(file, cb) {
            var dict = readFileString("./config/stylename.txt");
            dict = dict.replace(/\n/g, "");
            
            var css = String(file.contents);
            css = css.replace(/"/g, "'");
            css = css.replace(/\n/g, "");
            css = styleNameShrink(css, dict);
        
            var js = readFileString("./config/bootcss.js");
            js = js.replace(/\n/g, "");
            js=js.replace("T_DICT",dict);
            js=js.replace("T_CSS",'"'+css+'"');
    
            file.contents = new Buffer(js);
            cb(null, file);
        }
        return require('event-stream').map(transform);
    }
    return gulp.src(srcRepository+'/'+project.name+'.css')
            .pipe(bootstrapCss())
            .pipe(uglify())
	        .pipe(gulp.dest(srcRepository))
            ;
});

gulp.task('release:link', function () {
    function combineCssJs(){
        function transform(file, cb) {
            var js = String(file.contents);
            js=js.concat(
                readFileString(srcRepository+'/'+project.name+".css"),
                readFileString(srcRepository+'/'+project.name+".js")
                );
            var del = require('del');
            
            del([srcRepository+'/'+project.name+".css"]);
            file.contents = new Buffer(js);
            cb(null, file);
        }
        return require('event-stream').map(transform);
    }

    var combineFiles=[];
    for(var i=0;i<angularRelease.length;i++)
        combineFiles.push("./node_modules/" + angularRelease[i]);

    var strip = require('gulp-strip-comments');
    var replace = require('gulp-replace');
    return gulp.src(combineFiles)
            .pipe(replace('\n', ''))
            .pipe(strip())
            .pipe(concat(project.name+".js"))
	        .pipe(combineCssJs())
	        .pipe(gulp.dest(srcRepository))
	        ;
});

gulp.task('release', function () {
    var runSequence = require('run-sequence');
    runSequence(
        ['release:version','release:clean'],
        ['release:build'],
        ['release:bootstrapcss'],
        ['release:link']
        );
});

/*
    test
*/

gulp.task('test:js',['src:js'], function () {
    var prepareJs = gulp.src('web/'+project.name+'.js')
                .pipe(inject.append('module.exports ='+project.name))
                ;

    var compileTestTS = gulp.src('test/**/*.ts')
		.pipe(ts({
            target: 'ES5',
            module: 'commonjs',
            noEmitOnError: true,
            noImplicitAny: true,
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        },{},ts.reporter.fullReporter()));
        
    return merge([
            prepareJs
                .pipe(gulp.dest('./test')),
            compileTestTS.js
    		        .pipe(gulp.dest('./test/output'))
        ]);

});

gulp.task('test',['test:js'], function () {
    var mocha = require('gulp-mocha');
    return gulp.src(['./test/output/**/*.js'])
        .pipe(mocha({ reporter: 'spec', ui: 'bdd' }));
});




function readFileString(filename) {
    var data = fs.readFileSync(filename, { encoding: 'utf8' }).toString()
    data = data.replace(/^\uFEFF/, '');
    return data;
}
function writeFileString(filename, content) {
    var wstream = fs.createWriteStream(filename, 'utf8');
    wstream.write(content);
    wstream.end();
}

function styleNameShrink(css, styleNames) {
    styleNames = styleNames.replace(new RegExp("\\[", 'g'), "");
    styleNames = styleNames.replace(new RegExp('\\]', 'g'), '');
    styleNames = styleNames.replace(new RegExp("'", 'g'), '');
    var pair = styleNames.split("\n");
    for (var i = 0; i < pair.length; i++) {
        if (pair[i].length > 0) {
            var cmd = pair[i].split(",");
            css = css.replace(new RegExp(cmd[0], 'g'), cmd[1]);
        }
    }
    return css;
}


