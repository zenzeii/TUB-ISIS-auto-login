# TUB-ISIS-auto-login (still beta)
login automatically into ISIS with Userscript (Autofill required!)

This Userscript was made for https://isis.tu-berlin.de/

## Steps

1. Make sure your autofill is turned on for ISIS in your browser.

2. Add the Browser Extension Tampermonkey (https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

3. Tap Tampermonkey-icon in your browser > create new script > copy paste code from main.js or below > save

```javascript
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

var TULoginButton;
TULoginButton = document.evaluate(".//input[@type='submit' and @value='TU-Login']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

var shibbolethLoginButton;
shibbolethLoginButton = document.evaluate(".//button[@class='mail-default submit-button']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (!TULoginButton) {
	// comment this out if you are caught in loop when logging in
    window.addEventListener('load', shibbolethLoginButton.click(), false);
} else {
	window.addEventListener('load', TULoginButton.click(), false);
}

```

## Problems?

If you are caught in a loop while loggin in, please remove or comment out the marked line in main.js