!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={name:"Textra",props:{data:{type:Array,required:!0},filter:{type:String,default:"simple"},timer:{type:String,required:!0},interval:{type:Number,default:0}},data:function(){return{defaultStyle:"transition: "+this.timer+"s;",currentWord:this.data[0],liStl:null,dataCounter:0,displayState:"shown",filters:{simple:["opacity:0","opacity:1"],"bottom-top":["transform:translateY(10px);opacity:0;","transform:translateY(0px);opacity:1;"],"top-bottom":["transform:translateY(-10px);opacity:0;","transform:translateY(0px);opacity:1;"],"right-left":["transform:translateX(10px);opacity:0;","transform:translateX(0px);opacity:1;"],"left-right":["transform:translateX(-10px);opacity:0;","transform:translateX(0px);opacity:1;"],press:["letter-spacing: 4px;opacity:0;","opacity:1;"],scale:["transform:scaleY(1.4);opacity:0;","opacity:1;"],flash:["transform:skewX(-70deg);opacity:0;","transform:skewX(0deg);opacity:1;"],flip:["transform:rotateX(-180deg);opacity:0;","transform:rotate(0deg);opacity:1;"]}}},computed:{mainStyleComputed:function(){return this.defaultStyle+this.liStl}},created:function(){var t=this,e=setInterval(function(){"shown"===t.displayState?(t.liStl=t.filters[t.filter][0],t.displayState="hidden"):(t.liStl=t.filters[t.filter][1],t.displayState="shown",t.dataCounter++,t.currentWord=t.data[t.dataCounter]),t.dataCounter===t.data.length&&clearInterval(e)},1e3*(+this.timer+ +this.interval))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a={install:function(t){t.component("textra",r.a)}};e.default=a,"undefined"!=typeof window&&window.Vue&&window.Vue.use(a)},function(t,e,n){"use strict";function r(t){n(3)}var a=n(0),o=n(9),i=n(8),s=r,u=i(a.a,o.a,!1,s,"data-v-d225e096",null);e.a=u.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("7b26317b",r,!0)},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".textra[data-v-d225e096]{height:auto;width:auto;display:block}",""])},function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));l[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var o=p++;r=d||(d=a()),e=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var a=c(t,e);return r(a),function(e){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=l[i.id];s.refs--,n.push(s)}e?(a=c(t,e),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=o[0],s=o[1],u=o[2],c=o[3],l={id:t+":"+a,css:s,media:u,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},function(t,e){t.exports=function(t,e,n,r,a,o){var i,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId=a);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=r),l){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(t,e){return l.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:s,options:c}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textra"},[n("div",{staticClass:"mainTextra",style:t.mainStyleComputed,domProps:{innerHTML:t._s(t.currentWord)}})])},a=[],o={render:r,staticRenderFns:a};e.a=o}]);
//# sourceMappingURL=textra.js.map