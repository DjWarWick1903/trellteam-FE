(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function toLogin() {
    document.choice_form.action = "Login.html";
    return true;
}

function toRegister() {
    document.choice_form.action = "Login.html";
    return true;
}

module.exports.toLogin = toLogin;
module.exports.toRegister = toRegister;
},{}],2:[function(require,module,exports){
(function (global){(function (){
const welcome = require('./modules/Welcome.js');

global.window.welcome = welcome;
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/Welcome.js":1}]},{},[2]);
