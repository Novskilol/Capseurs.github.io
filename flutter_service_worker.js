'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "18b56b9dd507589dd3581e0375d6ae79",
"assets/AssetManifest.smcbin": "15f1395bda6771085d89b8d887b9e872",
"assets/assets/android-chrome-192x192.png": "587dcd12d269f218ace91a7605f926cc",
"assets/assets/android-chrome-512x512.png": "159a23aea2cf26c12bde76b3f1a31564",
"assets/assets/apple-touch-icon.png": "6c3a08cb4b438ee2e380dedf3b807545",
"assets/assets/badge.png": "b5657bdc3af8eefd7a6a52ebf290f1e1",
"assets/assets/beer_cap.png": "0a5e2037673cb5571202ee331084b99d",
"assets/assets/beer_cap_yellow.png": "8efd2be9e1ff27a8e0f2f9792b35e241",
"assets/assets/borderBronze.png": "ae99799a085ea2c12770223bfdd90c08",
"assets/assets/borderChallenger.png": "d1dd62a81fdfd225ce6324997cb37ad2",
"assets/assets/borderDiamond.png": "deb82e764bd1d871995ea42628ef3e35",
"assets/assets/borderGold.png": "645db8e69fdc70efdc19f88439b8c956",
"assets/assets/borderPlatinum.png": "d33ee633a0fb346dd558e46bce76bf29",
"assets/assets/borderSilver.png": "a883ce17ba1113af956b22bf2dc139af",
"assets/assets/chaine.png": "58008df3777bc080bc1d5c1a62f6df35",
"assets/assets/chain_empty.png": "0fc5712d9ac6772e2a3a98b1380e4112",
"assets/assets/favicon-16x16.png": "14f62592f678e9ec6a7816e7b373b6b8",
"assets/assets/favicon-32x32.png": "168bdf9c0ded58f145c42c8c14b689e0",
"assets/assets/favicon.ico": "36d2c4105bcae1136d489646493f08db",
"assets/assets/fr.png": "396c9ee0956442556d861b33f79731aa",
"assets/assets/googleimage.png": "e11c0a15d0c89046ed77b622dd3113f7",
"assets/assets/huh-scare.gif": "0558f5bc2bb82fa444520aebe0e5de5b",
"assets/assets/huhcat.gif": "672fb20ab72eb82ac5eff7b0cb1b17ef",
"assets/assets/laugh.png": "7efedb02efc5ae2e5b427bbb389c7a4e",
"assets/assets/puke.png": "7843130b6bd61442b5a33efa0e66deff",
"assets/assets/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/assets/us.png": "2d6373c21ed9fdabae01d62159370def",
"assets/assets/visiere.png": "8ca7a16db0f16c5281a8b90433f035ea",
"assets/assets/visiere_empty.png": "3bf0be440470c87f00cda95b5e8a80bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "57b0ade3d6a9f0944f9c2d9e1112ca77",
"assets/NOTICES": "a3c49ad36818abb1d6e5605eb5edcca9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "587dcd12d269f218ace91a7605f926cc",
"icons/android-chrome-512x512.png": "159a23aea2cf26c12bde76b3f1a31564",
"icons/favicon-16x16.png": "14f62592f678e9ec6a7816e7b373b6b8",
"icons/favicon-32x32.png": "168bdf9c0ded58f145c42c8c14b689e0",
"icons/favicon.ico": "36d2c4105bcae1136d489646493f08db",
"index.html": "2ae9a5fec2feb7680aa2d9ff36109019",
"/": "2ae9a5fec2feb7680aa2d9ff36109019",
"main.dart.js": "f1b540f22130cebe5c85ec1effaf0b12",
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
"stack.txt": "2d0b86bd48c0444c5c1b14354f1f9ab1",
"version.json": "769dedd5a08d0711eb8930a7e05052f7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
