// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterUnshift=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(t,e)||f.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[g],e=m(t,g);try{t[g]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[g]=r:delete t[g],n}:function(t){return v.call(t)},h=Boolean.prototype.toString;var j=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function S(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",w);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,T="object"==typeof global?global:null;var x=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=x.document&&x.document.childNodes,P=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(C,"REGEXP",V);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function G(t){return null!==t&&"object"==typeof t}function L(t){var e,r,n,o;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=V.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!k(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var U="function"==typeof y||"object"==typeof P||"function"==typeof B?function(t){return L(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?L(t).toLowerCase():e};function F(t){return"function"===U(t)}function I(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&F(t.next)}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function R(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function t(e){var r,n,o,u;if(!I(e))throw new TypeError(R("0D14J",e));for(r=[],u=1;u<arguments.length;u++)r.push(arguments[u]);return o=0,u=-1,a(n={},"next",i),a(n,"return",l),M&&F(e[M])&&a(n,M,f),n;function i(){var t;return 2===o?{done:!0}:1===o?((t=e.next()).done&&(o=2),t):(u+=1)>=r.length?(o=1,i()):{value:r[u],done:!1}}function l(t){return o=2,arguments.length?{value:t,done:!0}:{done:!0}}function f(){var n,o;for(n=[e[M]()],o=0;o<r.length;o++)n.push(r[o]);return t.apply(null,n)}}}));
//# sourceMappingURL=index.js.map
