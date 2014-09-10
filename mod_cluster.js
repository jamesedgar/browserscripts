// ==UserScript==
// @name       Mod_Cluster Basic Styling
// @namespace  nl.topicus
// @version    0.12
// @description  Some basic html and css styling for mod_cluster
// @match      https://*/mod_cluster-manager*
// @copyright  2014+, Kevin Rummler
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==



$('body').contents().filter(function() {
    return this.nodeType == 3;  // Only text nodes
}).wrap('<span></span>')

$("br").remove();
$('span:empty').remove();
$("span:contains('Aliases')").addClass('aliases');
$("span:contains('LBGroup')").addClass('lbgroup').wrap('<h2></h2>');
$("span:contains('Node')").addClass('node').wrap('<h3></h3>');

$("pre:contains('ENABLED')").addClass('enabled');
$("pre:contains('DISABLED')").addClass('disabled');
$("pre:contains('STOPPED')").addClass('disabled');

$("h3 span:contains('NOTOK')").addClass('notok');

$("span:contains('start of')").addClass('listitem');
$("span:contains('mod_proxy_cluster.c')").addClass('listitem');
$("span:contains('mod_sharedmem.c')").addClass('listitem');
$("span:contains('Protocol supported')").addClass('listitem');
$("span:contains('mod_advertise.c')").addClass('listitem');
$("span:contains('end of')").addClass('listitem');

$("a:contains('Enable')").addClass('green');
$("a:contains('Disable')").addClass('gray');
$("a:contains('Stop')").addClass('red');
$("a:contains('Nodes')").addClass('floatleftbutton');
$("a:contains('Contexts')").addClass('floatleftbutton');

$("span:contains('end of')").addClass('listitem');

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('h2{margin-top:50px;}');
addGlobalStyle('h3 span.notok{color:red;}');
addGlobalStyle("h3 {  margin-left: 30px; margin-top:30px; }");
addGlobalStyle('a { padding-left:6px; padding-right:6px;}');
addGlobalStyle('pre { margin-left:60px;}');
addGlobalStyle('span.aliases{ margin-left:100px;}');
addGlobalStyle('pre.disabled{ color:red;}');
addGlobalStyle("body{ font: 14px 'Helvetica Neue', Arial, sans-serif; color: #1C1C1C; background-color: #F2F2F2;}");

addGlobalStyle(".listitem{display:block; margin-left:20px; margin-bottom:8px; }");

addGlobalStyle(".floatleftbutton {margin-left:40px;}");
addGlobalStyle("a {	border-radius:2px;	text-indent:0px;	display:inline-block;	font-family:Verdana;	font-size:11px;	font-weight:normal;	font-style:normal;	height:16px;	line-height:16px;		text-decoration:none;	text-align:center;");
addGlobalStyle("a:active {	position:relative;	top:1px;");

addGlobalStyle("a.gray {	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #F3F3F3) );	background-color:#f9f9f9;	color:#666666;		border:1px solid #E9E9E9;");
addGlobalStyle("a.red {	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #f5e0df), color-stop(1, #f5e0df) );	background-color:#f5e0df;	color:#611616;	border:1px solid #EBBCB8;");
addGlobalStyle("a.green{	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #f8fcf4), color-stop(1, #F5FFED) );	background-color:#f8fcf4;	border:1px solid #CBE9C6;	color:#306108;");
addGlobalStyle("a.red:hover {	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #c62d1f), color-stop(1, #f24537) );	background-color:#c62d1f;");
addGlobalStyle("a.green:hover {	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #8cb82b), color-stop(1, #9dce2c) );	background-color:#8cb82b;");
addGlobalStyle("a.gray:hover {	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, #f9f9f9) );	background-color:#e9e9e9;");
