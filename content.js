console.log("Script Started");
var bod = document.getElementsByTagName("body")[0];
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
console.log(chrome.runtime.getURL("/popup.html"));
xmlHttp.open("GET", chrome.runtime.getURL("/popup.html"), true);
xmlHttp.onload = function (e) {
	console.log(xmlHttp.responseText);
	bod.insertAdjacentHTML('afterbegin', xmlHttp.responseText);
}
xmlHttp.send(null);
// console.log(xmlHttp.responseText);
// $.get(chrome.runtime.getURL("/popup.html"), function
// bod.insertAdjacentHTML("afterbegin", '<div style="top: 0; right: 0; z-index: 2147483647; margin: 16px; float: right; display: inline-block; position: fixed;">Hello World!<div>');
