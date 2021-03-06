'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e002702333951be08eb0903eef7af4e4",
"assets/assets/android-chrome-192x192.png": "587dcd12d269f218ace91a7605f926cc",
"assets/assets/android-chrome-512x512.png": "159a23aea2cf26c12bde76b3f1a31564",
"assets/assets/apple-touch-icon.png": "6c3a08cb4b438ee2e380dedf3b807545",
"assets/assets/beer_cap.png": "0a5e2037673cb5571202ee331084b99d",
"assets/assets/beer_cap_yellow.png": "8efd2be9e1ff27a8e0f2f9792b35e241",
"assets/assets/borderBronze.png": "ae99799a085ea2c12770223bfdd90c08",
"assets/assets/borderChallenger.png": "d1dd62a81fdfd225ce6324997cb37ad2",
"assets/assets/borderDiamond.png": "deb82e764bd1d871995ea42628ef3e35",
"assets/assets/borderGold.png": "645db8e69fdc70efdc19f88439b8c956",
"assets/assets/borderPlatinum.png": "d33ee633a0fb346dd558e46bce76bf29",
"assets/assets/borderSilver.png": "a883ce17ba1113af956b22bf2dc139af",
"assets/assets/chaine.png": "985a437aee6417c41545bb40d4dc4e78",
"assets/assets/chain_empty.png": "0fc5712d9ac6772e2a3a98b1380e4112",
"assets/assets/favicon-16x16.png": "14f62592f678e9ec6a7816e7b373b6b8",
"assets/assets/favicon-32x32.png": "168bdf9c0ded58f145c42c8c14b689e0",
"assets/assets/favicon.ico": "36d2c4105bcae1136d489646493f08db",
"assets/assets/fr.png": "396c9ee0956442556d861b33f79731aa",
"assets/assets/googleimage.png": "e11c0a15d0c89046ed77b622dd3113f7",
"assets/assets/huh-scare.gif": "0558f5bc2bb82fa444520aebe0e5de5b",
"assets/assets/huhcat.gif": "672fb20ab72eb82ac5eff7b0cb1b17ef",
"assets/assets/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/assets/us.png": "2d6373c21ed9fdabae01d62159370def",
"assets/assets/visiere.png": "d32254c66ee4edccbc5e35c4f402982c",
"assets/assets/visiere_empty.png": "3bf0be440470c87f00cda95b5e8a80bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b1f666611637cd1f68e9de163793dd49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-chrome-192x192.png": "587dcd12d269f218ace91a7605f926cc",
"icons/android-chrome-512x512.png": "159a23aea2cf26c12bde76b3f1a31564",
"icons/favicon-16x16.png": "14f62592f678e9ec6a7816e7b373b6b8",
"icons/favicon-32x32.png": "168bdf9c0ded58f145c42c8c14b689e0",
"icons/favicon.ico": "36d2c4105bcae1136d489646493f08db",
"index.html": "c75fac14589cd75caa9b4d0638c8eed9",
"/": "c75fac14589cd75caa9b4d0638c8eed9",
"main.dart.js": "1b131635f81d68cb4990eb49c7885712",
"manifest.json": "f84c82192467bb5fe15686ed36eea46c",
"splash/img/dark-1x.png": "ed388fd731b0b164359ac3683b9f7bd0",
"splash/img/dark-2x.png": "70eaf901352d7742400d5585e34303b5",
"splash/img/dark-3x.png": "73f4e24e5a2592ba2a27b70b32d40f37",
"splash/img/dark-4x.png": "5b2bb566937ce43aa67d3eb9c2f558c8",
"splash/img/light-1x.png": "ed388fd731b0b164359ac3683b9f7bd0",
"splash/img/light-2x.png": "70eaf901352d7742400d5585e34303b5",
"splash/img/light-3x.png": "73f4e24e5a2592ba2a27b70b32d40f37",
"splash/img/light-4x.png": "5b2bb566937ce43aa67d3eb9c2f558c8",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "b076920cc8080a91f2104a5567d66851",
"test/firebase-messaging-sw.js": "ab4be13c2c2a3e54181b7307d10cd07a",
"version.json": "769dedd5a08d0711eb8930a7e05052f7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
