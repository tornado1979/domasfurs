"use strict";var precacheConfig=[["/domasfurs/index.html","d23fbe6c8d10cd1a8a389cddd78281a0"],["/domasfurs/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/domasfurs/static/js/main.4154056d.js","7b70c44f7d999e5ddf0bb1f7ad02727a"],["/domasfurs/static/media/Lorem-Ipsum3.94e530e3.jpg","94e530e3fb59af2d34a78cc6057e3fa4"],["/domasfurs/static/media/aboutus1.24ff83cc.jpg","24ff83cc46f5eb64f3982ffc3e862e43"],["/domasfurs/static/media/aboutus4.aa75cf60.jpg","aa75cf6018ed9165fcb2839bbf2524f0"],["/domasfurs/static/media/aboutus5.b5a7e6aa.jpg","b5a7e6aa8cdd02384f5901509068c543"],["/domasfurs/static/media/aboutus6.01d47105.jpg","01d471052edc60d4b538418bac59da01"],["/domasfurs/static/media/bg-750x360.c9c598e7.jpg","c9c598e735804910291ed6ec151f1014"],["/domasfurs/static/media/cat1.6a5a40e3.jpg","6a5a40e30b67b233f3e94c1d2b4db83f"],["/domasfurs/static/media/cat2.eebb8115.jpg","eebb8115619614fcb28ec0bb2b30b7e7"],["/domasfurs/static/media/cat3.98812029.jpg","98812029cd40199ca411c38997839b77"],["/domasfurs/static/media/contactus1.bfcaace7.jpg","bfcaace72f4b5834a35e6173f1805b6b"],["/domasfurs/static/media/doca-new.a8a0736f.jpg","a8a0736f399cd2df25d9d99019b52f8c"],["/domasfurs/static/media/img1.41e3cab7.jpg","41e3cab712de62751aa980a5957f0db0"],["/domasfurs/static/media/img10.32518507.jpg","325185074d3e4c940273fccd26e75bfd"],["/domasfurs/static/media/img11.267caa03.jpg","267caa038a2bc6e525c6ee761c5b2548"],["/domasfurs/static/media/img12.fe9426ec.jpg","fe9426ecde52a12232b0c397e69309c7"],["/domasfurs/static/media/img13.bebd345a.jpg","bebd345a1cc0f44914544a45bfa3cee4"],["/domasfurs/static/media/img14.dd723be4.jpg","dd723be4923c44bb19fdf7872cef7ac7"],["/domasfurs/static/media/img15.2f02a328.jpg","2f02a328832c4bfac2eb147c4308b710"],["/domasfurs/static/media/img2.b827270c.jpg","b827270c0a3b5974bd9d8b75569ae831"],["/domasfurs/static/media/img3.f38f6a35.jpg","f38f6a356e4551e6448539054129a30a"],["/domasfurs/static/media/img4.f3761a3f.jpg","f3761a3fc1c90c01fa11d9e8b8dbce1a"],["/domasfurs/static/media/img5.442ffa19.jpg","442ffa19b4d5845f3cb093d4214126ee"],["/domasfurs/static/media/img6.f73a8193.jpg","f73a8193028d75d8686d6b8762c0657f"],["/domasfurs/static/media/img7.a655e313.jpg","a655e3135309b8d18938a388081dc254"],["/domasfurs/static/media/img8.64760f4d.jpg","64760f4d212bfad1d19e7f09ed77b257"],["/domasfurs/static/media/img9.64ab81d2.jpg","64ab81d23c9642fcfdd397bff1f7ec7c"],["/domasfurs/static/media/maxresdefault.4f05c096.jpg","4f05c0964eee0c90a6904be2533d5a4f"],["/domasfurs/static/media/payments.15ea23fb.jpg","15ea23fbedb9a0b4a7856ecfbbc5b285"],["/domasfurs/static/media/promo1.f6f9d982.jpg","f6f9d982e31313ed8fcb779ad6f368f9"],["/domasfurs/static/media/promo2.bda42219.jpg","bda422194eb74c2d263f8b8e8af8d036"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],s=new URL(a,self.location),c=createCacheKey(s,hashParamName,t,/\.\w{8}\./);return[s.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,s),e=urlsToCacheKeys.has(t));var c="/domasfurs/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});