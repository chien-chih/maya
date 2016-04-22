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
    rename = require("gulp-rename"),
    runSequence = require('run-sequence'),
    ignore = require('gulp-ignore'),
    changed = require('gulp-changed');

var project=require("./package.json");
var DEBUG_PATH='./output/debug/';
var RELEASE_PATH='./output/release/';

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
    function swallowError (error) {
        console.log(error.toString());
        this.emit('end');
    }
    var watch = require('gulp-watch');
    watch(['./src/**/*.ts'], function() {
        clear();logTypescript('src:js','');
        runSequence(
            ['src:js'],
            ['app:js']
        );
    }).on('error', swallowError);
    watch(['./src/**/*.less'], function() {clear();logCss('src:css','');gulp.start('src:css')});
    watch(['./app/**/*.less'], function() {clear();logCss('app:css','');gulp.start('app:css')});
    watch(['./app/**/*.ts'], function() {clear();logTypescript('app:js','');gulp.start('app:js')});
    watch(['./app/**/*.html'], function() {clear();logHtml('app:html','');gulp.start('app:html')});
    watch(['./test/**/*.ts','./test/**/*.html'], function() {clear();logTypescript('test','');gulp.start('test')});
});

/*
    build & clean
*/
var rimraf = require('rimraf');
gulp.task('clean', function (cb) {
    rimraf('node_modules/'+project.name+'/*', function(){
        rimraf(DEBUG_PATH+'**/*', cb);
    });

});

gulp.task('build',['clean'], function () {
    runSequence(
        ['src:css','src:js'],
        ['app:css','app:html','app:js','test']
        );
});

/*
    src
*/
gulp.task('src:css', function () {
    function showError (error) {
        logError(error.message,error.extract+'');
        this.emit('end');
    }
    return gulp.src('src/**/*.less')
            .pipe(sourcemaps.init())
            .pipe(less().on('error', showError))
            .pipe(concat(project.name+".css"))
            .pipe(sourcemaps.write())
		    .pipe(gulp.dest(DEBUG_PATH));
});

function logTypescript(name,description){console.log(colors.white(name).bgBlue+" : "+description.blue);}
function logIgnore(name,description){console.log(colors.black(name).bgWhite+" : "+description.gray);}
function logCss(name,description){console.log(colors.white(name).bgYellow+" : "+description.yellow);}
function logHtml(name,description){console.log(colors.white(name).bgGreen+" : "+description.green);}
function logError(name,description){console.log(colors.white(name).bgRed+" : "+description.red);}

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
    //,noExternalResolve:true
});
gulp.task('src:js', function () {

    clear();
    logTypescript('src:js','compile src script');
    srcError=false;
    var tsResult = gulp.src(['./src/**/*.ts'])
        .pipe(sourcemaps.init())
		.pipe(ts(srcProject,{},ts.reporter.fullReporter()))
		.on('error', function () {
		    srcError=true;
            console.log('src:js error!!!');
            this.emit("end");
        })
        ;

    return merge([
    		tsResult.dts
        		.pipe(ignore.exclude('typing.d.ts'))
    		    .pipe(gulp.dest('./node_modules/'+project.name))
		,
    		tsResult.js
		        .pipe(sourcemaps.write())
		        .pipe(gulp.dest(DEBUG_PATH+project.name))
    	]);
});

/*
    app
*/
gulp.task('app:css', function () {
    logCss('app:css','compile app css');
    return gulp.src('app/**/*.less')
        .pipe(changed(DEBUG_PATH))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat("index.css"))
        .pipe(sourcemaps.write())
	    .pipe(gulp.dest(DEBUG_PATH));
});

gulp.task('app:html', function () {
    logHtml('app:html','compile app html');
    return gulp.src('app/**/*.html')
        .pipe(changed(DEBUG_PATH))
        .pipe(processHtml('debug'))
	    .pipe(gulp.dest(DEBUG_PATH));
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
        logIgnore('app:js','skip compile because src error');
        return;
    }
    logTypescript('app:js','compile app script');
    var tsResult = gulp.src('app/**/*s')
        .pipe(sourcemaps.init())
		.pipe(ts(appProject,{},ts.reporter.fullReporter()));

    return tsResult.js
	        .pipe(sourcemaps.write())
	        .pipe(gulp.dest(DEBUG_PATH))
	        ;
});

/*
    release
*/
var cssnano = require('gulp-cssnano');

var currentVersion,srcRepository;
gulp.task('release:version', function () {clear();
    var jeditor = require("gulp-json-editor");
    return merge([
    gulp.src("./package.json")
        .pipe(jeditor(function(json) {
            var index=json.version.lastIndexOf(".");
            var ver=parseInt(json.version.substring(index+1,json.version.length));
            var tag=json.version.substring(0,index+1);
            json.version = tag+(++ver);
            currentVersion=json.version;
            srcRepository=RELEASE_PATH+project.name+'/'+json.version;
            logTypescript('release','prepare release version '+project.name +" "+currentVersion);
            return json;
        }))
      .pipe(gulp.dest("./"))
    ]);
});

gulp.task('release:clean',['release:version'], function (cb) {
    rimraf(RELEASE_PATH+'**/*', cb);
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
    logTypescript('release','compile script/css/html ');
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
    		appLess.pipe(gulp.dest(RELEASE_PATH)),
		    appHtml.pipe(gulp.dest(RELEASE_PATH)),
            appTs.js
    		        .pipe(addModuleName('app')) //add module name that typescript should add
                    .pipe(uglify())
                    .pipe(rename(function (path) {
                        path.dirname += "."+currentVersion;
                      }))
		            .pipe(sourcemaps.write('.'))
    		        .pipe(gulp.dest(RELEASE_PATH))
        	]);
});

gulp.task('release:bootstrapcss', function () {
    logTypescript('release','bootstrap css to self execute js');
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
    logTypescript('release','link all scripts to single file');
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
var testProject = ts.createProject({
    target: "ES5",
    module: "system",
    moduleResolution: "node",
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    noImplicitAny: false
});
gulp.task('test', function () {
    logTypescript('test','compile test script');
    var compileTest = gulp.src('test/**/*.ts')
        .pipe(sourcemaps.init())
		.pipe(ts(testProject),{},ts.reporter.fullReporter());

    var htmlTest= gulp.src('test/**/*.html')
                .pipe(changed(DEBUG_PATH))
                ;

    return merge([
		    htmlTest.pipe(gulp.dest(DEBUG_PATH))
		    ,
            compileTest.js
		        .pipe(sourcemaps.write())
    		    .pipe(gulp.dest(DEBUG_PATH))
    	]);
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

function processHtml(mode) {

    function firstCharUppercase(text){
        var c=text.substring(0,1);
        text=c.toUpperCase() + text.substring(1,text.length);
        return text;
    }

    function transform(file, cb) {
        var filename=path.basename(file.path,'.html');
        var replaceFrom="<head>";
        var replaceTo
        if(mode==="debug")
        {
            var includeFiles="";
            for(var i=0;i<angularInclude.length;i++)
                includeFiles+="\n<script src='/node_modules/"+angularInclude[i]+"'></script>";

            replaceTo=
                "<head>"+includeFiles+
                "\n<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>"+
                "\n<link href='index.css' rel='stylesheet' type='text/css'>"+
                "\n<link href='"+project.name+".css' rel='stylesheet' type='text/css'>"+
                "\n<script>"+
                    "System.config({packages: { "+filename+": {defaultExtension: 'js'},"+project.name+": {defaultExtension: 'js'}} });"+
                    "System.import('"+filename+"/"+firstCharUppercase(filename)+"App');"+
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
