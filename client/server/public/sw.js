var __wpo = {"assets":{"main":["/app/src/components/LogoImage/crown.3a7ee6e43b9b3dd086d6d2a6a3e5d32f.png","/app/src/components/ResponsiveImage/missing-visual.a36832a1e392634b93b1f2e54dc81960.png","/main.7dddd454fa105c8e6282.js","/vendor.55deb384aa40be55d31f.js","/main.13d4c363b90286151d6dec02eeb9f7d5.css"],"additional":["/0.d1de69659066495a85f6.chunk.js","/1.5a0a88cbf49781331eb5.chunk.js","/2.0389c20e086c3c99a648.chunk.js","/3.a29ae05d75c943df8784.chunk.js","/4.97794391b9a43a7f9156.chunk.js","/5.c54733f3f22ed5183fc8.chunk.js","/6.f44a591134a82d0519f2.chunk.js","/7.21370576805daba8c8f5.chunk.js","/8.8b40116e16b25da5b196.chunk.js","/9.d80d0866f80e9ce82ea1.chunk.js","/10.221338acd42b71977e6b.chunk.js","/11.3431c11028608e4ca280.chunk.js","/12.dec6c22538e3f6d59ff0.chunk.js"],"optional":[]},"hashesMap":{"3a7ee6e43b9b3dd086d6d2a6a3e5d32f":"/app/src/components/LogoImage/crown.3a7ee6e43b9b3dd086d6d2a6a3e5d32f.png","a36832a1e392634b93b1f2e54dc81960":"/app/src/components/ResponsiveImage/missing-visual.a36832a1e392634b93b1f2e54dc81960.png","d1de69659066495a85f657744ccd3aae":"/0.d1de69659066495a85f6.chunk.js","5a0a88cbf49781331eb5b3f22a4c1c6b":"/1.5a0a88cbf49781331eb5.chunk.js","0389c20e086c3c99a648c48704479c15":"/2.0389c20e086c3c99a648.chunk.js","a29ae05d75c943df878463ed359bebe9":"/3.a29ae05d75c943df8784.chunk.js","97794391b9a43a7f91560463822924dd":"/4.97794391b9a43a7f9156.chunk.js","c54733f3f22ed5183fc89d2e51d92cd9":"/5.c54733f3f22ed5183fc8.chunk.js","f44a591134a82d0519f27ff79881ad71":"/6.f44a591134a82d0519f2.chunk.js","21370576805daba8c8f572eeb3cc19b9":"/7.21370576805daba8c8f5.chunk.js","8b40116e16b25da5b196cd53b86a215e":"/8.8b40116e16b25da5b196.chunk.js","d80d0866f80e9ce82ea16d96f4673e29":"/9.d80d0866f80e9ce82ea1.chunk.js","221338acd42b71977e6b19315a5ef6b1":"/10.221338acd42b71977e6b.chunk.js","3431c11028608e4ca280cf0f6fa83d41":"/11.3431c11028608e4ca280.chunk.js","dec6c22538e3f6d59ff0a908d4849321":"/12.dec6c22538e3f6d59ff0.chunk.js","7dddd454fa105c8e6282a0b6056fa469":"/main.7dddd454fa105c8e6282.js","55deb384aa40be55d31f2d422c79fcfc":"/vendor.55deb384aa40be55d31f.js","13d4c363b90286151d6dec02eeb9f7d5":"/main.13d4c363b90286151d6dec02eeb9f7d5.css"},"strategy":"all","version":"10/31/2016, 9:19:21 PM","name":"webpack-offline","relativePaths":false};

!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,e,t){Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=2)}([function(n,e){},function(n,e){"use strict"},function(n,e,t){"use strict";function r(n){function e(){if(!p.additional.length)return Promise.resolve();u&&console.log("[SW]:","Caching additional");var n=void 0;return n="changed"===v?r("additional"):t("additional"),n["catch"](function(n){console.error("[SW]:","Cache section `additional` failed to load")})}function t(e){var t=p[e];return caches.open(S).then(function(e){return o(e,t,{bust:n.version})}).then(function(){s("Cached assets: "+e,t)})["catch"](function(n){throw console.error(n),n})}function r(e){return f().then(function(r){if(!r)return t(e);var i=r[0],c=r[1],a=r[2],u=a.hashmap,f=a.version;if(!a.hashmap||f===n.version)return t(e);var l=Object.keys(u).map(function(n){return u[n]}),h=c.map(function(n){var e=new URL(n.url);return e.search="",e.toString()}),d=p[e],v=[],m=d.filter(function(n){return h.indexOf(n)===-1||l.indexOf(n)===-1});Object.keys(g).forEach(function(n){var e=g[n];if(d.indexOf(e)!==-1&&m.indexOf(e)===-1&&v.indexOf(e)===-1){var t=u[n];t&&h.indexOf(t)!==-1?v.push([t,e]):m.push(e)}}),s("Changed assets: "+e,m),s("Moved assets: "+e,v);var x=Promise.all(v.map(function(n){return i.match(n[0]).then(function(e){return[n[1],e]})}));return caches.open(S).then(function(e){var t=x.then(function(n){return Promise.all(n.map(function(n){return e.put(n[0],n[1])}))});return Promise.all([t,o(e,m,{bust:n.version})])})})}function c(){return caches.keys().then(function(n){var e=n.map(function(n){if(0===n.indexOf(x)&&0!==n.indexOf(S))return console.log("[SW]:","Delete cache:",n),caches["delete"](n)});return Promise.all(e)})}function f(){return caches.keys().then(function(n){for(var e=n.length,t=void 0;e--&&(t=n[e],0!==t.indexOf(x)););if(t){var r=void 0;return caches.open(t).then(function(n){return r=n,n.match(new URL(W,location).toString())}).then(function(n){if(n)return Promise.all([r,r.keys(),n.json()])})}})}function l(){return caches.open(S).then(function(e){var t=new Response(JSON.stringify({version:n.version,hashmap:g}));return e.put(new URL(W,location).toString(),t)})}function h(n){return n["catch"](function(){}).then(function(n){return n&&n.ok?n:(u&&console.log("[SW]:","Loading navigation fallback ["+w+"] from cache"),i(w,S))})}function d(){Object.keys(p).forEach(function(n){p[n]=p[n].map(function(n){var e=new URL(n,location);return e.search="",e.toString()})}),g=Object.keys(g).reduce(function(n,e){var t=new URL(g[e],location);return t.search="",n[e]=t.toString(),n},{})}var v=n.strategy,p=n.assets,g=n.hashesMap,m={all:n.version,changed:n.version},x=n.name,O=m[v],S=x+":"+O,W="__offline_webpack__data";d();var k=[].concat(p.main,p.additional,p.optional),w=n.navigateFallbackURL;self.addEventListener("install",function(n){console.log("[SW]:","Install event");var e=void 0;e="changed"===v?r("main"):t("main"),n.waitUntil(e)}),self.addEventListener("activate",function(n){console.log("[SW]:","Activate event");var t=e();t=t.then(l),t=t.then(c),t=t.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),n.waitUntil(t)}),self.addEventListener("fetch",function(n){var e=new URL(n.request.url);e.search="";var t=e.toString();if("GET"!==n.request.method||k.indexOf(t)===-1)return w&&a(n.request)?void n.respondWith(h(fetch(n.request))):void(e.origin!==location.origin&&navigator.userAgent.indexOf("Firefox/44.")!==-1&&n.respondWith(fetch(n.request)));var r=i(t,S).then(function(e){if(e)return u&&console.log("[SW]:","URL ["+t+"] from cache"),e;var r=fetch(n.request).then(function(n){if(!n||!n.ok)return u&&console.log("[SW]:","URL ["+t+"] wrong response: ["+n.status+"] "+n.type),n;u&&console.log("[SW]:","URL ["+t+"] fetched");var e=n.clone();return caches.open(S).then(function(n){return n.put(t,e)}).then(function(){console.log("[SW]:","Cache asset: "+t)}),n});return w&&a(n.request)?h(r):r});n.respondWith(r)}),self.addEventListener("message",function(n){var e=n.data;if(e)switch(e.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}function o(n,e,t){var r=t&&t.bust;return Promise.all(e.map(function(n){return r&&(n=c(n,r)),fetch(n)})).then(function(t){if(t.some(function(n){return!n.ok}))return Promise.reject(new Error("Wrong response status"));var r=t.map(function(t,r){return n.put(e[r],t)});return Promise.all(r)})}function i(n,e){return caches.match(n,{cacheName:e})["catch"](function(){})}function c(n,e){var t=n.indexOf("?")!==-1;return n+(t?"&":"?")+"__uncache="+encodeURIComponent(e)}function a(n){return"navigate"===n.mode||n.headers.get("Upgrade-Insecure-Requests")||(n.headers.get("Accept")||"").indexOf("text/html")!==-1}function s(n,e){console.groupCollapsed("[SW]:",n),e.forEach(function(n){console.log("Asset:",n)}),console.groupEnd()}if("undefined"==typeof u)var u=!1;t(1),r(__wpo),n.exports=t(0)}]);