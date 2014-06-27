// ==UserScript==
// @name       My Fancy New Userscript
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      https://rest.digdag.nl/mod_cluster-manager
// @copyright  2012+, You
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

function main() {
    jQ('body').contents().filter(function() {
        return this.nodeType == 3;
    }).wrap('<span></span>')
    
    jQ("br").remove();
    jQ('div:empty').remove();
    jQ("span:contains('Aliases')").addClass('aliases');
    jQ("span:contains('LBGroup')").addClass('lbgroup').wrap('<h3></h3>');
    jQ("span:contains('Node')").addClass('node').wrap('<h4></h4>');
    
    jQ("pre:contains('ENABLED')").addClass('enabled');
    jQ("pre:contains('DISABLED')").addClass('disabled');
    
    jQ("h4 span:contains('NOTOK')").addClass('notok');
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('h3{margin-top:50px;}');
addGlobalStyle('h4 span.notok{color:red;}');
addGlobalStyle('a { padding-left:6px; padding-right:6px;}');
addGlobalStyle('pre { margin-left:30px;}');
addGlobalStyle('span.aliases{ margin-left:60px;}');
addGlobalStyle('pre.disabled{ color:red;}');
addGlobalStyle("body{ font: 14px 'Helvetica Neue', Arial, sans-serif; color: #1C1C1C; background-color: #F2F2F2;}");

// load jQuery and execute the main function
addJQuery(main);

