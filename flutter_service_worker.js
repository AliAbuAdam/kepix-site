'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "234209540c413c9acda6e32f4941db7a",
"version.json": "6d4f1f30a3420dbdc01bc258af59b083",
"index.html": "3aebe3739d6561932004eb02aa8445cd",
"/": "3aebe3739d6561932004eb02aa8445cd",
"main.dart.js": "b89aa482109ccc792382f7c3d94a26a9",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "c86f1453a7e653f75013b08550ee5eba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "35edc987b6a7bbdaaf9648c03960e70d",
"assets/AssetManifest.json": "072960444df2c4fa7264eefd7facc38e",
"assets/NOTICES": "888b06b3c6642ba760bc77405aa56026",
"assets/FontManifest.json": "8ea50db1d9b49fe81f257115ecf29369",
"assets/AssetManifest.bin.json": "fb4c55ba558e44efbaa85aa047246dc0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0a3303093d2fec6e4388f0eb2f18f955",
"assets/fonts/MaterialIcons-Regular.otf": "42917c101070bd95c8e6bce0947f74d9",
"assets/assets/images/svg/cap_pres_14.svg": "86e54416e92c4d3ad45b355db6a8bcbb",
"assets/assets/images/svg/cap_pres_6.svg": "a19a2e29097bcf46551bae69e81780a2",
"assets/assets/images/svg/cap_pres_7.svg": "387d3e2e107ac429541f21e26e9fdde4",
"assets/assets/images/svg/cap_pres_15.svg": "c75db2f0444217ee4290b17100cf53a0",
"assets/assets/images/svg/cap_base.svg": "8bfaadce25c028b0ccbe971f4a86b396",
"assets/assets/images/svg/cap_pres_17.svg": "9f50d5480c11b343bc23a738f49123fd",
"assets/assets/images/svg/cap_pres_5.svg": "c63ea2ebd4497677d98aa0bf07ac95fb",
"assets/assets/images/svg/cap_pres_4.svg": "5e66989cd48d8a59059a91dbe75d584e",
"assets/assets/images/svg/cap_pres_16.svg": "dce5e69a422df9f9e9e5ceebc6c79d3d",
"assets/assets/images/svg/cap_pres_12.svg": "2d0e0f3c1742116f870ebe4e1a126f8b",
"assets/assets/images/svg/cap_pres_13.svg": "963f59f0bb3caeb08406bcf193074d37",
"assets/assets/images/svg/cap_pres_1.svg": "48b48a3e72ab3a294a1caa5a27fbac02",
"assets/assets/images/svg/cap_pres_3.svg": "ec34e6799b64b2c86a18882c4bd07d37",
"assets/assets/images/svg/cap_pres_11.svg": "b98747b9415caebce0183852cc99a72b",
"assets/assets/images/svg/cap_pres_10.svg": "242c6cb6b377703c007915157b188dac",
"assets/assets/images/svg/cap_pres_2.svg": "6b829ce1f864086449464069ebbbf494",
"assets/assets/images/svg/cap_back.svg": "eb7752eeed0836bc04af4466bd4c6a3e",
"assets/assets/images/svg/cap_emblem.svg": "dd433b467e00539fc7a2553acf96b0d0",
"assets/assets/images/svg/cap_pres_20.svg": "12368a0e4e914e7cf44e75c9c6f79332",
"assets/assets/images/svg/cap.svg": "a93a459f25b6c96e4301560e65afcc06",
"assets/assets/images/svg/logo.svg": "fb4ebac0bc183d590019610735279771",
"assets/assets/images/svg/cap_pres_9.svg": "eaafdba3ae07537be43a9ee9b3b803a4",
"assets/assets/images/svg/cap_pres_8.svg": "3ba3a864c6d1b93a06351158b7bb860d",
"assets/assets/images/svg/cap_side.svg": "fc97ad4322d24ba94f553308d8a98be9",
"assets/assets/images/svg/cap_pres_18.svg": "5fadd7ef005e9f7df264e16cfb6a484a",
"assets/assets/images/svg/cap_pres_19.svg": "890d502035b13601f43c893a655e24cc",
"assets/assets/images/svg/cap_visor.svg": "cf66ea320e731127027f25cf04f11e8c",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
