"use strict";var p=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var c=p(function(b,l){
var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=require('@stdlib/assert-is-function/dist'),h=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/symbol-iterator/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist');function v(n){var r,i,u,t;if(!h(n))throw new TypeError(q('0QD46',n));for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);return u=0,t=-1,i={},s(i,"next",f),s(i,"return",m),o&&d(n[o])&&s(i,o,g),i;function f(){var e;return u===2?{done:!0}:u===1?(e=n.next(),e.done&&(u=2),e):(t+=1,t>=r.length?(u=1,f()):{value:r[t],done:!1})}function m(e){return u=2,arguments.length?{value:e,done:!0}:{done:!0}}function g(){var e,a;for(e=[n[o]()],a=0;a<r.length;a++)e.push(r[a]);return v.apply(null,e)}}l.exports=v
});var x=c();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
