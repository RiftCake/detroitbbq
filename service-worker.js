"use strict";var precacheConfig=[["/myawilliams11/detroitbbq.git/index.html","cd2264e4bcea48cf1659a513e893fa91"],["/myawilliams11/detroitbbq.git/static/css/main.4875e800.css","14347a1b3b838d0da68b185e8792bc57"],["/myawilliams11/detroitbbq.git/static/js/main.e48bc0df.js","acfaa297cc185951065a2a40c43511e5"],["/myawilliams11/detroitbbq.git/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/myawilliams11/detroitbbq.git/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/myawilliams11/detroitbbq.git/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/myawilliams11/detroitbbq.git/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/myawilliams11/detroitbbq.git/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/myawilliams11/detroitbbq.git/static/media/facebook-logo.c3be75dc.png","c3be75dc18f6c8081be871cffaac58fd"],["/myawilliams11/detroitbbq.git/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/myawilliams11/detroitbbq.git/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/myawilliams11/detroitbbq.git/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/myawilliams11/detroitbbq.git/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/myawilliams11/detroitbbq.git/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/myawilliams11/detroitbbq.git/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/myawilliams11/detroitbbq.git/static/media/ken.68696fed.png","68696fed68d63317feb9b861f226d253"],["/myawilliams11/detroitbbq.git/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/myawilliams11/detroitbbq.git/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/myawilliams11/detroitbbq.git/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/myawilliams11/detroitbbq.git/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/myawilliams11/detroitbbq.git/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/myawilliams11/detroitbbq.git/static/media/rib1.77496d4d.jpg","77496d4dfed94893843a4b13e7259d88"],["/myawilliams11/detroitbbq.git/static/media/ribs.49564888.png","4956488879864dbf47dcc701f749c544"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,i){var n=new URL(e);return i&&n.pathname.match(i)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],i=new URL(t,self.location),n=createCacheKey(i,hashParamName,a,/\.\w{8}\./);return[i.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return i.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),i="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,i),e=urlsToCacheKeys.has(a));var n="/myawilliams11/detroitbbq.git/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});