// ==UserScript==
// @name         TUB-ISIS auto-login
// @version      0.1
// @description  automatically login into ISIS (Autofill required)
// @author       zenzeii
// @match        https://*.tu-berlin.de/*
// @grant        none
// @run-at       document-idle
// @downloadURL  https://raw.githubusercontent.com/zenzeii/TUB-ISIS-auto-login/main/main.js
// @updateURL    https://raw.githubusercontent.com/zenzeii/TUB-ISIS-auto-login/main/main.js
// ==/UserScript==

var isisLoginButton;
isisLoginButton = document.evaluate(".//input[@type='submit' and @value='TU-Login']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

var shibbolethLoginButton;
shibbolethLoginButton = document.evaluate(".//button[@class='mail-default submit-button']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (!isisLoginButton) {
	// comment this out if you are caught in loop when logging in
    window.addEventListener('load', shibbolethLoginButton.click(), false);
} else {
	window.addEventListener('load', isisLoginButton.click(), false);
}
