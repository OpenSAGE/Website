!function(l){function e(e){for(var n,t,r=e[0],o=e[1],a=e[2],c=0,i=[];c<r.length;c++)t=r[c],s[t]&&i.push(s[t][0]),s[t]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(l[n]=o[n]);for(m&&m(e);i.length;)i.shift()();return f.push.apply(f,a||[]),u()}function u(){for(var e,n=0;n<f.length;n++){for(var t=f[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==s[a]&&(r=!1)}r&&(f.splice(n--,1),e=d(d.s=t[0]))}return e}var t={},s={1:0},f=[];function d(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return l[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(a){var e,n=[],t=s[a];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(e,n){t=s[a]=[e,n]});n.push(t[2]=r);var o,c=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=d.p+"templates/"+({2:"src-containers-Post",3:"src-pages-404",4:"src-pages-blog",5:"src-pages-index",7:"vendors~src-containers-Post"}[e=a]||e)+"."+{2:"520a7ab8",3:"31a580b9",4:"4f20723c",5:"4fd5076b",7:"b53d019e"}[e]+".js",o=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=s[a];if(0!==n){if(n){var t=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+a+" failed.\n("+t+": "+r+")");o.type=t,o.request=r,n[1](o)}s[a]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,c.appendChild(i)}return Promise.all(n)},d.m=l,d.c=t,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)d.d(t,r,function(e){return n[e]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var m=r;f.push([44,0,6]),u()}({113:function(e,n,t){"use strict";t.r(n);var r,o=t(0),a=t.n(o),c=t(24),i=t.n(c),l=(t(82),t(19)),u=t(16),s=(t(104),function(e){var n=e.children;return a.a.createElement("nav",{className:"navbar"},a.a.createElement("ol",{className:"navbar__items"},n))}),f=function(e){var n=e.name,t=e.to;return a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{href:t},n))},d=function(e){var n=e.name,t=e.to;return a.a.createElement("li",{className:"nav-item"},a.a.createElement(u.Link,{to:t},n))},m=(t(106),function(e){var n=e.children;return a.a.createElement("header",null,a.a.createElement(u.Link,{to:"/"},a.a.createElement("div",{className:"header__logo"})),n)}),p=(t(108),new Date(Date.now()).getFullYear()),h=function(){return a.a.createElement("footer",null,a.a.createElement("div",{className:"footer__content"},a.a.createElement("p",null,"OpenSAGE is an open source project and not associated with Electronic Arts or any other company. All trademarks are property of their respective owners. Screenshots of copyrighted works are only used for demonstration purposes."),a.a.createElement("p",null,"© OpenSAGE ",p)))},v=(t(110),function(){return a.a.createElement(l.Root,{className:"page"},a.a.createElement(l.Head,null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Noto+Serif+TC|Source+Code+Pro",rel:"stylesheet"})),a.a.createElement(m,null,a.a.createElement(s,null,a.a.createElement(d,{name:"About",to:"/"}),a.a.createElement(d,{name:"Blog",to:"/blog"}),a.a.createElement(f,{name:"GitHub",to:"https://github.com/OpenSAGE/OpenSAGE"}),a.a.createElement(f,{name:"Discord",to:"https://discord.gg/G2FhZUT"}))),a.a.createElement("div",{id:"main-content"},a.a.createElement(l.Routes,null)),a.a.createElement(h,null))});n.default=v;if("undefined"!=typeof document){var g=i.a.hydrate||i.a.render;r=v,g(a.a.createElement(r,null),document.getElementById("root"))}},25:function(e,m,p){"use strict";p.r(m),function(e){p.d(m,"template404ID",function(){return d});var n=p(5),t=p.n(n),r=p(6),o=p.n(r),a=p(7),c=p.n(a);Object(a.setHasBabelPlugin)();var i={loading:function(){return null},error:function(e){return console.error(e.error),React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")}},l=c()(o()({id:"../src/pages/404.js",load:function(){return Promise.all([p.e(3).then(p.bind(null,40))]).then(function(e){return e[0]})},path:function(){return t.a.join(e,"../src/pages/404.js")},resolve:function(){return 40},chunkName:function(){return"src-pages-404"}}),i),u=c()(o()({id:"../src/pages/blog.js",load:function(){return Promise.all([p.e(4).then(p.bind(null,41))]).then(function(e){return e[0]})},path:function(){return t.a.join(e,"../src/pages/blog.js")},resolve:function(){return 41},chunkName:function(){return"src-pages-blog"}}),i),s=c()(o()({id:"../src/containers/Post",load:function(){return Promise.all([Promise.all([p.e(0),p.e(7),p.e(2)]).then(p.bind(null,42))]).then(function(e){return e[0]})},path:function(){return t.a.join(e,"../src/containers/Post")},resolve:function(){return 42},chunkName:function(){return"src-containers-Post"}}),i),f=c()(o()({id:"../src/pages/index.js",load:function(){return Promise.all([p.e(5).then(p.bind(null,43))]).then(function(e){return e[0]})},path:function(){return t.a.join(e,"../src/pages/index.js")},resolve:function(){return 43},chunkName:function(){return"src-pages-index"}}),i),d=0;m.default=[l,u,s,f]}.call(this,"/")},44:function(e,n,t){t(45),e.exports=t(78)},49:function(e,n,t){var r={".":13,"./":13,"./index":13,"./index.js":13};function o(e){var n=a(e);return t(n)}function a(e){var n=r[e];if(n+1)return n;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return Object.keys(r)},o.resolve=a,(e.exports=o).id=49}});
//# sourceMappingURL=main.041403d0.js.map