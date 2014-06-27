// ==UserScript==
// @name       Mod_Cluster Basic Styling
// @namespace  nl.topicus
// @version    0.11
// @description  Some basic html and css styling for mod_cluster
// @match      https://*.digdag.nl/mod_cluster-manager
// @copyright  2014+, Kevin Rummler
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

function main(){
    $('body').contents().filter(function() {
        return this.nodeType == 3;
    }).wrap('<span></span>')
    
    $("br").remove();
    $('div:empty').remove();
    $("span:contains('Aliases')").addClass('aliases');
    $("span:contains('LBGroup')").addClass('lbgroup').wrap('<h3></h3>');
    $("span:contains('Node')").addClass('node').wrap('<h4></h4>');
    
    $("pre:contains('ENABLED')").addClass('enabled');
    $("pre:contains('DISABLED')").addClass('disabled');
    
    $("h4 span:contains('NOTOK')").addClass('notok');
}

function addGlobalStyle(css) {
    var head, style;
    head = $('head')[0];
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

main();
