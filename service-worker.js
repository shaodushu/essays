/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["G:/测试/essays/public/2018/07/05/http-state/index.html","1244c322041e3072193f5506c5e8fe71"],["G:/测试/essays/public/2018/07/05/http-state/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["G:/测试/essays/public/404.html","3b0fe0c1854a20e8e517feb1997f0b06"],["G:/测试/essays/public/about/index.html","63739996037983cc1e1e81d4b94f5f1e"],["G:/测试/essays/public/archives/index.html","999f46977ec80e6955170c0572cf1e02"],["G:/测试/essays/public/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["G:/测试/essays/public/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["G:/测试/essays/public/css/highlight.css","5afb7060313fde9f0cd28b67787b001a"],["G:/测试/essays/public/css/hux-blog.css","c8dfbb18ef0d30220168f4a7a22222af"],["G:/测试/essays/public/css/hux-blog.min.css","d1088ac9c43b1b1c7e25ccf6ec1e59ba"],["G:/测试/essays/public/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["G:/测试/essays/public/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["G:/测试/essays/public/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["G:/测试/essays/public/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["G:/测试/essays/public/i_dont_wanna_use_default_archives/2018/07/index.html","63d369ebf33d219ca5d866df50d8faac"],["G:/测试/essays/public/i_dont_wanna_use_default_archives/2018/index.html","1e6a675e01a55a03c972599af2ef3b28"],["G:/测试/essays/public/i_dont_wanna_use_default_archives/index.html","4d5cffb0e7afe5d19b455e092bbd8201"],["G:/测试/essays/public/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["G:/测试/essays/public/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["G:/测试/essays/public/img/avatar.jpg","5eb0d754366ee210ad5f5cf4a3e938e7"],["G:/测试/essays/public/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["G:/测试/essays/public/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["G:/测试/essays/public/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["G:/测试/essays/public/img/icon_wechat.png","fd571e20dc4e1b87aa412a1ccd046e18"],["G:/测试/essays/public/img/logo.png","369fefa396f49670d87a5e7cb3759d64"],["G:/测试/essays/public/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["G:/测试/essays/public/index.html","dd9dc0d4252de7f493c27acc045d7a7e"],["G:/测试/essays/public/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["G:/测试/essays/public/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["G:/测试/essays/public/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["G:/测试/essays/public/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["G:/测试/essays/public/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["G:/测试/essays/public/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["G:/测试/essays/public/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["G:/测试/essays/public/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["G:/测试/essays/public/tags/index.html","d37cbc0ceab17d4c6afa2701c3bc7f2f"],["G:/测试/essays/public/tags/笔记/index.html","0151609ef25d48b2097469caeb19018b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







