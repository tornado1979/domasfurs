"use strict";var precacheConfig=[["/domasfurs/index.html","cad2e8fed06d217c0577d094ac7a792f"],["/domasfurs/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/domasfurs/static/js/main.f4166c49.js","29732814d9b1166029f3083e46547fd7"],["/domasfurs/static/media/Lorem-Ipsum3.94e530e3.jpg","94e530e3fb59af2d34a78cc6057e3fa4"],["/domasfurs/static/media/Page-not-found.953dd785.png","953dd785698f1ba1bbb1c42cfafa850b"],["/domasfurs/static/media/aboutus1.24ff83cc.jpg","24ff83cc46f5eb64f3982ffc3e862e43"],["/domasfurs/static/media/aboutus4.aa75cf60.jpg","aa75cf6018ed9165fcb2839bbf2524f0"],["/domasfurs/static/media/aboutus5.b5a7e6aa.jpg","b5a7e6aa8cdd02384f5901509068c543"],["/domasfurs/static/media/aboutus6.01d47105.jpg","01d471052edc60d4b538418bac59da01"],["/domasfurs/static/media/bg-750x360.c9c598e7.jpg","c9c598e735804910291ed6ec151f1014"],["/domasfurs/static/media/branch.aed3740b.jpg","aed3740b31f45dbcd6f866e33a5a884e"],["/domasfurs/static/media/cat1.6a5a40e3.jpg","6a5a40e30b67b233f3e94c1d2b4db83f"],["/domasfurs/static/media/cat2.eebb8115.jpg","eebb8115619614fcb28ec0bb2b30b7e7"],["/domasfurs/static/media/cat3.98812029.jpg","98812029cd40199ca411c38997839b77"],["/domasfurs/static/media/contactus1.8515052d.jpg","8515052d988a46ffaef2dbc0c9e48687"],["/domasfurs/static/media/img1.16287f25.jpg","16287f25221cec1bed5cff73a508893d"],["/domasfurs/static/media/img10.b09020c3.jpg","b09020c3fbcf73fe5765e3ea7c09bd8c"],["/domasfurs/static/media/img11.200460b7.jpg","200460b7c6786d74e4265c32a1ed7719"],["/domasfurs/static/media/img12.18b5773f.jpg","18b5773feb96f1a7ab2bccf5887e40ef"],["/domasfurs/static/media/img13.37217d49.jpg","37217d49e956b4cb305bb67ce9acf66a"],["/domasfurs/static/media/img2.ca2f9827.jpg","ca2f9827a94990b76062fecac9191152"],["/domasfurs/static/media/img3.ad4a7eb7.jpg","ad4a7eb76ad814d7eff8891265a72309"],["/domasfurs/static/media/img4.1a8509d1.jpg","1a8509d199ebf3a339e9edb8a4c43823"],["/domasfurs/static/media/img5.0a1ae9e2.jpg","0a1ae9e2dab0b141e42142f05de06437"],["/domasfurs/static/media/img6.8dafceb0.jpg","8dafceb04677da39682cbc116beac6f0"],["/domasfurs/static/media/img7.de624962.jpg","de624962bd8273f2c497a1bd9eaf1640"],["/domasfurs/static/media/img8.af52393d.jpg","af52393d75c4588aea71411934c00bf2"],["/domasfurs/static/media/img9.7d1ca8a0.jpg","7d1ca8a094680bf2d96348c1e53c5955"],["/domasfurs/static/media/main-store.05bc95df.jpg","05bc95dfb573a313774c7e93dcd32e49"],["/domasfurs/static/media/main.f34c790a.png","f34c790a165335c71e3986c35f2404ee"],["/domasfurs/static/media/maxresdefault.4f05c096.jpg","4f05c0964eee0c90a6904be2533d5a4f"],["/domasfurs/static/media/payments.15ea23fb.jpg","15ea23fbedb9a0b4a7856ecfbbc5b285"],["/domasfurs/static/media/promo1.f6f9d982.jpg","f6f9d982e31313ed8fcb779ad6f368f9"],["/domasfurs/static/media/promo2.bda42219.jpg","bda422194eb74c2d263f8b8e8af8d036"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],s=new URL(a,self.location),c=createCacheKey(s,hashParamName,t,/\.\w{8}\./);return[s.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,s),e=urlsToCacheKeys.has(t));var c="/domasfurs/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});