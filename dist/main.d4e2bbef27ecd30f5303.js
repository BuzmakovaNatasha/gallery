(()=>{var e={153:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var i=r(81),n=r.n(i),o=r(645),a=r.n(o)()(n());a.push([e.id,"*{margin:0;padding:0}.container{max-width:900px;width:100%;margin:0 auto}h2{color:red;margin:30px 0;font-size:27px}.gallery{display:flex;flex-wrap:wrap;justify-content:space-between}.gallery-item{display:flex;flex-direction:column;border:1px solid rgba(0,0,0,.205);margin-bottom:20px;width:285px}.gallery-item__file-wrap{display:flex;justify-content:center;align-items:center;width:100%;height:160px;background-color:#f1f3f4}.gallery-item__img{display:block;width:100%;height:100%}.gallery-item__video{width:100%;height:100%}.gallery-item__title{text-align:center;padding:3px 0;box-sizing:border-box;border-top:1px solid rgba(0,0,0,.205)}",""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",i=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),i&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),i&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,i,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);i&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),n&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=n):p[4]="".concat(n)),t.push(p))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},947:(e,t,r)=>{e.exports=r.p+"media/images/1.webp"},650:(e,t,r)=>{e.exports=r.p+"media/images/2.webp"},809:(e,t,r)=>{e.exports=r.p+"media/images/3.webp"},910:(e,t,r)=>{e.exports=r.p+"media/images/4.gif"},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,i=0;i<t.length;i++)if(t[i].identifier===e){r=i;break}return r}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],l=i.base?c[0]+i.base:c[0],p=o[l]||0,u="".concat(l," ").concat(p);o[l]=p+1;var d=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=n(f,i);i.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var o=i(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=r(o[a]);t[s].references--}for(var c=i(e,n),l=0;l<o.length;l++){var p=r(o[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=c}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var i=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var i="";r.supports&&(i+="@supports (".concat(r.supports,") {")),r.media&&(i+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(i+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),i+=r.css,n&&(i+="}"),r.media&&(i+="}"),r.supports&&(i+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";var e=r(379),t=r.n(e),i=r(795),n=r.n(i),o=r(569),a=r.n(o),s=r(565),c=r.n(s),l=r(216),p=r.n(l),u=r(589),d=r.n(u),f=r(153),m={};m.styleTagTransform=d(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=p(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g={image:function(e){const t=document.createElement("img");return t.src=e.file,t.alt="photo",t.classList="gallery-item__img",t},audio:function(e){const t=document.createElement("audio");return t.src=e.file,t.classList="gallery-item__audio",t.controls=!0,t},video:function(e){const t=document.createElement("video");return t.src=e.file,t.classList="gallery-item__video",t.controls=!0,t}};var v=r(947),y=r.n(v),h=r(650),x=r.n(h),b=r(809),w=r.n(b),_=r(910),E=r.n(_);const C=r.p+"media/audio/1.mp3",T=r.p+"media/audio/2.mp3",S=r.p+"media/audio/3.mp3",L=r.p+"media/video/1.mp4",j=r.p+"media/video/2.mp4",M=[{file:y(),type:"image",title:"Мельница у реки"},{file:x(),type:"image",title:"Горы осенью"},{file:w(),type:"image",title:"Деревня летом"},{file:E(),type:"image",title:"Анимированный котик"},{file:C,type:"audio",title:"Птички летом"},{file:T,type:"audio",title:"Ручеек в ущелье"},{file:S,type:"audio",title:"Закат в лесу"},{file:L,type:"video",title:"Посадка лебедя на воду"},{file:j,type:"video",title:"Природа"}],A=document.querySelector(".gallery");M.map((e=>A.appendChild(function(e){const t=document.createElement("div");t.classList="gallery-item";const r=document.createElement("div");r.classList="gallery-item__file-wrap";const i=g[e.type];r.appendChild(i(e));const n=document.createElement("span");return n.classList="gallery-item__title",n.textContent=e.title,t.appendChild(r),t.appendChild(n),t}(e))))})()})();