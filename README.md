# Blooket Hacks
These are hacks for blooket. There are hacks such as give tokens for buying blooks (sadly only 500 per day), and cheats in-game like infinite gold in tower of doom or gold rush!
I took cheats from another github repo, revised the code a bit, and made it into an html website.

# How to hack
Go to **https://dacuteraccoon.github.io/blooket/main/** to find scripts to paste in your JavaScript console.
Then paste the code you want into the JavaScript console. For example, if you want 500 credits, just type this into the console:

# Auto Tokens
This UserScript adds 500 tokens each time you go to Blooket. To install, you must have the Tampermonkey, Greasemonkey, etc. extension installed on your browser. Make a new userscript, delete all the code already there, and paste in the following:

```js
// ==UserScript==
// @name         Blooket Auto Coins
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This app gives you coins with one function.
// @author       DaCuteRaccoon
// @match        /^https?\:\/\/blooket\..*\/.*$/
// @icon         https://www.google.com/s2/favicons?domain=blooket.com
// @grant        none
// ==/UserScript==

fetch("https://raw.githubusercontent.com/DaCuteRaccoon/blooket/main/auto/app.js")
.then((res) => res.text()
.then((t) => eval(t)))
```
Now go to blooket, and it should add the coins!

### Note to self, please remember to update the URLs, as they are probably not incorrect.

```js
fetch("https://raw.githubusercontent.com/DaCuteRaccoon/blooket/hacks/")
.then((res) => res.text()
.then((t) => eval(t)))
```
If you want the original version, just go to **https://github.com/glixzzy/blooket-hack/**.

#### Happy hacking :)
