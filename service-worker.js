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

var precacheConfig = [["README.md","8304c737660a778f1b5c74b035f81bf1"],["acreedores.html","fefce79d7894fdaefda1ef100cf7ebf5"],["agencias.html","8f2b00ef0c02e8d81812643eb8dcc686"],["agentes.html","e94dcf8fd159c114b45d11cf7daf8139"],["almacenes.html","aff72f41f14388bfac852563d655d063"],["bancos.html","5c63ef96f32f35cc5c370e705553be33"],["cambiarcontrasena.html","f1450b27a6598767a9d0832a0d5bc412"],["clientes.html","7bd6ade9f773b65249392bffbc6e329a"],["contract.png","57f44c7e84e8db553271cc408bbaad22"],["cuentasremesas.html","75dfeeae0686dd93f42c3dfac1684099"],["cuentastesoreria.html","8f046f910acf1746beea71d4bf1f9bdf"],["departamentos.html","7b1ef22db79de77edad2c1acec1aece8"],["descargas/down/Entradas_y_bar_Cinesa.pdf","d41d8cd98f00b204e9800998ecf8427e"],["deudores.html","3a6a77ca2dfd7fe8d45cc93d7587e01c"],["divisas.html","09bfd44f03f1aa828dcfe1b440efea36"],["empresas.html","ebd081bf0012fb20ca961fdedf3a0b11"],["formaspago.html","e790d06286351c88a335b5d8e93e038c"],["gestiondocumental.html","af5c19d4074e4e0693d8f2d06cd0ac44"],["gruposclientes.html","a6649a9fa7314cb7bd80b6df44fa1f32"],["gruposusuarios.html","67ed6bef591f28ea98ec3f0deda9c132"],["icon192.png","086fc2da5b8890ade8054726efee2a48"],["icon512.png","a8c80e8e38f2d7ec3edb0308a4f4ad4b"],["index.html","c48f3923404a9486e353dfbd83ddcffa"],["index1.html","c48f3923404a9486e353dfbd83ddcffa"],["indexOri.html","9ee87d6fa643eb191123a7a4903218de"],["ini.html","826b2da6701411fe68265943a10d0980"],["libgp01.js","f2421574437244740b087bfde5d078bc"],["logo.ico","909e6305003b4c95d4dceddd4b009a82"],["logo.png","c9a7acf28061fec56161c957ad93a92e"],["manifest.json","6458288ab56be0c5efff71a5f9fca958"],["myscripts.js","298e946e4029dce801f90d9c6ce3cc44"],["package.json","22c2d1da810a12b8cc2d6cb10607075c"],["php/acreedor.php","be7e370d4e12bda8a0bbb214e9a55eb9"],["php/agencia.php","2af9dd60fb5951fe3528bf4f47db9bab"],["php/agente.php","291b1930a7d05ecdebb95e571a7626f4"],["php/almacen.php","146dbeabf691b061ab745fcf449441d5"],["php/banco.php","55ba1e0b1fb239e8500d37bf6dba91b9"],["php/cambiarEmpresaActiva.php","b02e338a2460b80fee871dd60e9844b7"],["php/cambiocontrasena.php","a30b249c02b0d18543ea3a2762061cfa"],["php/cliente.php","1bd603ce0351684acd3602462b1d4778"],["php/compDatos.php","d18afb805ed6e57195dd095acc11e9a7"],["php/compEntrada.php","6887b7aa513439912aeb307390dff000"],["php/compartido.php","08ddccd8904f7ef8e2452b688b84f257"],["php/comprobar_antes_de_editar_o_eliminar.php","6857467167b047e7536bac17b9a9096a"],["php/conectar.php","b943e26bbd600166f2c6c535985e8b1e"],["php/conectar_su.php","6254f2753ff271c75be8903cb780e118"],["php/conectarempresas.php","87def2f947005bc20059adff42938275"],["php/credenciales.php","932f1fd4dfc298078f19bbe42e87211c"],["php/cuentaremesas.php","50f4cf04c03be6d4a64595a99b2f9bb7"],["php/cuentatesoreria.php","6b325f90e8b52c8a45365a78de0b9705"],["php/datosSubform.php","c4fbb1a3eba6610c098c4278b6e41944"],["php/datosTabla.php","7a646f150258b28eda433f99750a34d4"],["php/datosTablaEmpresas.php","c9173dec10c78d64eb0863262f0dfbba"],["php/departamento.php","3702ae35e294d06f78abde753e08b928"],["php/descargarfichero.php","9dfcb4ce9f499d991d78a651ddf0ec67"],["php/deudor.php","77d7c286dc98517821022e83323dfd85"],["php/divisa.php","3c0196773f395dd146acfb8b20d68b5b"],["php/documento.php","fd479a551174e555d4dc4e60836e9815"],["php/empresa.php","fd2dfa2697c134fefa09ccd003ba4733"],["php/empresaext.php","6b0c33c5cb558d8550d9cc12ccd36425"],["php/estadoSuscripcion.php","0beb7b6550b27861aecdfcbd6be61962"],["php/exportar.php","a034cd9bf347686d18b753dd4c885da7"],["php/formapago.php","b31656f3c90506151b5295cf76e4a5a7"],["php/gesdocprev.php","ef03cb2143f478bab75847acc4dfe6c9"],["php/gruposclientes.php","cfbb5918ca2b914a92d6601c95c8af57"],["php/grupousuarios.php","a9116a3d17518fb471a4b0a69b341f6b"],["php/impresora.php","238c8df4037c5f9bac5c5831bcbaf81c"],["php/listado.php","7ae5b20dfe509b43a2d4be412dfe9683"],["php/listadoAfichero.php","3ec239a6b657646ee6602e9fa809c241"],["php/listado_campos.php","7c3a31134c26a85d60ee26734add7a0c"],["php/multiselect.php","85ff928d4d88d1c17345b9e8fcae90ef"],["php/multiselect1.php","91c8516b353eb60cdb93c67c14a610c8"],["php/multiselectempresas.php","c4665ff308c99d7efa791b5d594566ec"],["php/pdf.php","5f29f1298abefb190a54493b75a9d1c8"],["php/proveedor.php","3b44037f79b3dbff09c90544f51e6eb5"],["php/proyecto.php","f1fa595789942047c5e27e935fbf0cb7"],["php/pruebaConexionApi.php","20dc4f4c92783912ea14362d01e36875"],["php/suscripcion.php","92d847fd31855efacd4210f19ff32417"],["php/suscripcionMailchimp.php","bcf4f69bc06c319b1b807d4b95ce8b98"],["php/tipoatencion.php","ed3ee5a8c4aec007b9b1ea70b4563c53"],["php/usuario.php","037011ab0b754dcef678259c30c27316"],["php/zona.php","e1b3735ba4018767e5a7c6db4ecefb14"],["principal.html","dae6d61a36a0ac83c237e64ca7c26ded"],["proveedores.html","996d91f4237fa713a1d6c69b33290d31"],["proyectos.html","3944336fa20f65126d54cc9d47390a89"],["style.css","db5c9670f5872e533e5332e374f9f4ff"],["styleOri.css","db5c9670f5872e533e5332e374f9f4ff"],["tiposatencion.html","4ba3f5a0249e337881a8cd72faf4b2ec"],["usuarios.html","04eb4510577a07a9754151ca532de571"],["zonas.html","cd4f0b546be26edd73fa08d5aa3f222b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







