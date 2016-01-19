(function(dict,css){
    for (var i = 0; i < dict.length; i++)
        css = css.replace(new RegExp('\\' + dict[i][1], 'g'), dict[i][0]);
    var csslink = document.createElement('style');
    if (csslink.styleSheet) csslink.styleSheet.cssText = css; 
    else csslink.appendChild(document.createTextNode(css));
    csslink.setAttribute('type', 'text/css');
    document.getElementsByTagName("head")[0].appendChild(csslink);    
})(T_DICT,T_CSS);