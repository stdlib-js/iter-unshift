// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,j=Array.isArray;function E(e){return e!=e}function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,o,a,u,l,s,f,p,g,d,h;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(n=e[s],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),u+=n.arg||"",l+=1}return u}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var O,C=Object.prototype,F=C.toString,I=C.__defineGetter__,$=C.__defineSetter__,P=C.__lookupGetter__,R=C.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var B=O;function L(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function Z(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&X.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,N="function"==typeof D?D.toStringTag:"";var Q=W()?function(e){var r,t,n;if(null==e)return M.call(e);t=e[N],r=z(e,N);try{e[N]=void 0}catch(r){return M.call(e)}return n=M.call(e),r?e[N]=t:delete e[N],n}:function(e){return M.call(e)},q=Boolean,H=Boolean.prototype.toString;var J=W();function K(e){return"object"==typeof e&&(e instanceof q||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function Y(e){return Z(e)||K(e)}L(Y,"isPrimitive",Z),L(Y,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ne="object"==typeof te?te:null,ie="object"==typeof globalThis?globalThis:null;var oe=function(e){if(arguments.length){if(!Z(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ie)return ie;if(ee)return ee;if(re)return re;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=oe.document&&oe.document.childNodes,ce=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var le=/^\s*function\s*([^(]*)/i;L(ue,"REGEXP",le);var se=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function fe(e){return null!==e&&"object"==typeof e}function pe(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return fe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(fe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!se(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(fe));var ge="function"==typeof G||"object"==typeof ce||"function"==typeof ae?function(e){return pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?pe(e).toLowerCase():r};function de(e){return"function"===ge(e)}var he="function"==typeof D&&"symbol"==typeof D("foo")&&z(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;function ye(e){var r,t,n,i,o,a;if(a=typeof(o=e),null===o||"object"!==a&&"function"!==a||!de(o.next))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0QD46",e));for(r=[],i=1;i<arguments.length;i++)r.push(arguments[i]);return n=0,i=-1,L(t={},"next",(function t(){var o;if(2===n)return{done:!0};if(1===n)return(o=e.next()).done&&(n=2),o;if((i+=1)>=r.length)return n=1,t();return{value:r[i],done:!1}})),L(t,"return",(function(e){if(n=2,arguments.length)return{value:e,done:!0};return{done:!0}})),he&&de(e[he])&&L(t,he,(function(){var t,n;for(t=[e[he]()],n=0;n<r.length;n++)t.push(r[n]);return ye.apply(null,t)})),t}export{ye as default};
//# sourceMappingURL=mod.js.map
