// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function i(o){var d,l,m,u;if(!r(o))throw new TypeError(s("0QD46",o));for(d=[],u=1;u<arguments.length;u++)d.push(arguments[u]);return m=0,u=-1,e(l={},"next",(function e(){var t;if(2===m)return{done:!0};if(1===m)return(t=o.next()).done&&(m=2),t;if((u+=1)>=d.length)return m=1,e();return{value:d[u],done:!1}})),e(l,"return",(function(e){if(m=2,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&t(o[n])&&e(l,n,(function(){var e,t;for(e=[o[n]()],t=0;t<d.length;t++)e.push(d[t]);return i.apply(null,e)})),l}export{i as default};
//# sourceMappingURL=index.mjs.map
