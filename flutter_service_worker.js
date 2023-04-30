'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5674876311452bcec548dd4c9e099518",
"index.html": "a879b56d26ebda7e91209087bb060aa4",
"/": "3c98d0ac3406b477e383c17886931958",
"main.dart.js": "30ed29505070938b98a8aa3a2bc3bd1c",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cc79fbf7e44fc36b111a90c4a5ae58ed",
"assets/web/index.html": "3c98d0ac3406b477e383c17886931958",
"assets/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/web/manifest.json": "cc79fbf7e44fc36b111a90c4a5ae58ed",
"assets/AssetManifest.json": "99cd13c50f5f84721a2ecaec79387aef",
"assets/NOTICES": "02ebce3eaf87e638be51afde0b62ae91",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/pack_puppy_1.png": "2db69767625b314db79c443b8afbd0b1",
"assets/assets/images/ads_purina_beneful.jpeg": "47a723ec3d38f7a0e6443983fe5e744c",
"assets/assets/images/ads_4.png": "e4cf0ea6634e2e48ac14f72d174ab7db",
"assets/assets/images/ads_1.png": "d8104d6336ac6908b8ce9c5822814d3c",
"assets/assets/images/ads_2.png": "6d8ae3dc0f24af1178e9f01c333138fc",
"assets/assets/images/ads_3.png": "bd1debcef13cf51ad0028cd78bd822b6",
"assets/assets/images/ads_wiggles_and_wags.jpeg": "2f9156e526faad994d847b4819b6957f",
"assets/assets/images/ads_greenies_dental_treats.jpeg": "321e27f7f99c3b25d398f8bbe343c7a2",
"assets/assets/images/cover_misha.png": "35f533e88bf5c2f25d1f045b576a9b71",
"assets/assets/images/logo_comfortaa_white.png": "5b53ac1c4df9a95a562c3bbd0409d6a4",
"assets/assets/images/cover_vladimir.png": "fe1266566ca9e1af92c8ae7e3067ff4d",
"assets/assets/icons/syringe_FILL0_wght200_GRAD0_opsz48.png": "0c9db0df9af29a8ecd820cd0f00fe57c",
"assets/assets/icons/agender_FILL0_wght200_GRAD0_opsz48.png": "ba60b909c5a8cf8873a57b2e5e695d27",
"assets/assets/icons/bolt_FILL0_wght200_GRAD0_opsz48.png": "8cb69b12f62aec497d116512fcf61ae7",
"assets/assets/icons/host_a_party.png": "99f46acd9294c8f6717c752183ae35d5",
"assets/assets/icons/social_icon.png": "3e05e97b4b1fe4ca78523a2eea00cc62",
"assets/assets/icons/genetics_FILL0_wght200_GRAD0_opsz48.png": "002a9d867df643006a8cd53e6f7b8f3f",
"assets/assets/icons/dog_profile_management_icon.png": "0f2d9d50f6bbdb7483738fa157acf830",
"assets/assets/icons/playmates_white_space.png": "d41d622c5b3b17457e4e3242574094e7",
"assets/assets/icons/form_a_pack.png": "461918a868dcdc2b73273d43b3357d79",
"assets/assets/icons/add_a_dog.png": "83fe9643a17a33e9a39fc237f7eb3e89",
"assets/assets/data/dogs.json": "8bfaa61a607a890943b9cc697711d22c",
"assets/assets/data/packs.json": "3b9a473882f8441a623ec3f07922af77",
"assets/assets/data/ads.json": "00e829fc53fe7933da10624df375ad11",
"assets/assets/data/user.json": "1737b7c33251f1a3f73ccbb004bab915",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
