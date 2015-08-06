// ==UserScript==
// @name         Space is hell
// @namespace    HLETRD
// @version      0.1
// @description  Space ㅗㅗ
// @author       HLETRD
// @match        http://stackoverflow.com/*
// @grant        none
// ==/UserScript==

for (var i in document.getElementsByTagName("code")) {
    document.getElementsByTagName("code")[i].innerHTML = document.getElementsByTagName("code")[i].innerHTML.replace(/    /g, "\t");
    document.getElementsByTagName("code")[i].setAttribute('style', 'tab-size: 4');
}


