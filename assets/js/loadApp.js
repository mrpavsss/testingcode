/* eslint-disable */

function supportsES6() {
    'use strict';
    var es6Test = 'class ಠ extends Array{constructor(j=`a`,...c){const q=(({u: e})=>{return {[`${c}`]:Symbol(j)};})({});super(j,q,...c)}}new Promise(f=>{const a=function*(){return "\\u{20BB7}".match(/./u)[0].length===2||!0};for (let z of a()){const [x,y,w,k]=[new Set(),new WeakSet(),new Map(), new WeakMap()];break}f(new Proxy({},{get:(h,i) =>i in h ?h[i]:"j".repeat(0o2)}))}).then(t => new ಠ(t.d))';
    try {
        eval(es6Test);
        return true;
    }
    catch (e) {
        return false;
    }
}

function isIE10OrLess() {
    return window.navigator.userAgent.indexOf('MSIE ') > 0;
}

var script = document.querySelector('script[data-id="tp-app-loader"]');
var cb = script.getAttribute('data-cb');
var name = script.getAttribute('data-name');
var host = script.getAttribute('data-host');
var widget = script.getAttribute(('data-widget'));

if (!widget && name !== 'corporate' && isIE10OrLess()) {
    window.location = '/browserupgrade';
}
else {
    var distUrl = (host ? 'https://' + host : '') + '/dist/' + cb + (!supportsES6() ? 'legacy/' : '');
    var jsSource = distUrl + name + '.js';
    var cssSource = distUrl + name + '.css';

    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        var appCss = document.createElement("link");
        appCss.type = "text/css";
        appCss.rel = 'stylesheet';
        appCss.href = cssSource;

        document.getElementsByTagName('head')[0].appendChild(appCss);
    }

    var appScript = document.createElement("script");
    appScript.type = "text/javascript";
    appScript.src = jsSource;

    if(script.insertAdjacentElement) {
        script.insertAdjacentElement('afterend', appScript);
    }
    else {
        script.parentElement.appendChild(appScript);
    }
}