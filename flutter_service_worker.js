'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "63d767112a66e87252ddc52fc4ca206c",
"favicon.ico": "27c74009b550082117272c6f55d0b60e",
"index.html": "a4c79f167245747ab56df197e9e22951",
"/": "a4c79f167245747ab56df197e9e22951",
"main.dart.js": "aa91870e5eaa809d831a9c43eaf1f9c5",
"favicon.png": "ee8a755cd0665aeb0c1f835fd78811e0",
"icons/Icon-192.png": "ee8a755cd0665aeb0c1f835fd78811e0",
"icons/Icon-512.png": "ee8a755cd0665aeb0c1f835fd78811e0",
"manifest.json": "aaf616bed1a06ee4d631e7823ed7d315",
".git/config": "56b3aeaa6c957f1c868c5ace873fe063",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3e/ac4de2d56c77e866e44809e8a70dcbb572594b": "5186afcc4a640baad2241a47f6fce035",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/9721a25abae1314a1564915ca29301b0ccf309": "0bd18e7319e9817f374debf4a40c2141",
".git/objects/6f/d0dbfe6afcfa8b70eaa7a6591285b81be28ed5": "73f1e731ae94f4dfea0df964137ffc2d",
".git/objects/9b/d6776616665bda72358abba9ebd29f766e1b56": "d066d2e0c7f554dba1620f67706dc6dc",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/60/a546000caea38cd62e963078568eb59755513e": "e5d269cb9de33dbe2cd2d275bff46430",
".git/objects/05/7696093bb697451efa72ed12a7e75dbdf2a457": "a3fe47be9600e0137dca98c7a6f77759",
".git/objects/05/7f54f2ec7339180619e4c3aaaaeaf6efce781e": "7b35a8055df7f5f075b21acf4cc164bf",
".git/objects/d1/809a65ec627770ed32632febbadd38e75c00b6": "769f63f2f754c688fbf2405d169c7b85",
".git/objects/bc/7fbfb58028130c18ce1fb909e6537e429abefc": "87ac9f70e135c2c0d5e139304b8b62dd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/67f618ccff33a40cc378273b6164dc74ff8009": "29af17a22449054137231b658b860447",
".git/objects/c8/71d0b6360997f4b32eb8a563a2d8ea6990acba": "2b1e832293282ea41f8e8ac1df1341ef",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/16/12471b1916164594f6233bd8472cfa1506c609": "a62564dbd3231a4a429051092e32c39c",
".git/objects/1f/33872c459be1e4ef07fcdf3dfd69de50e00dfb": "e21ad04aa61851f4b07ad8bd18cd6936",
".git/objects/17/0cc557d5fd7e08e83b50274e04ff246b316f87": "b20a545343492f4a4a5680d7b74db598",
".git/objects/38/997125e44f4ed83ff18ad1dafc2eb97266b89b": "3e66e724d528fcf606fbfd8dcce26544",
".git/objects/5c/c89a21f85965163252a40fbfd34bb88c575517": "fde7ec550cf56dd757056daad6b42928",
".git/objects/53/1e13c269e5b2733a1b03d29a4720a6ee49d878": "7c60d4cb75b3203cb342d8f1749b8f37",
".git/objects/5e/3f5c2b03bbb9bc8e85fbbb7b2967fee2473c36": "81def735bd2ce7154f7686e743983d59",
".git/objects/55/de742d04a54621d8459ba93d4625ae86e3defc": "d827823779e4182e9af297902045201d",
".git/objects/97/86b35b483025dbd84fe4489253722c1a15442e": "b02e618ae9651a77e5d57ab7ab4b0f5f",
".git/objects/dc/9f17639d4fdc014d66a37e5aa079f4bba3fc0a": "bd2a3a6461c50d6feef2bde1d433539d",
".git/objects/a8/ded56a6a9b301ca2fa7c36da827a82c6d69c18": "0aec183f70151d76283db3b321ae10d1",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/c136db72ad2d6d50bc155e7e09a4c55f16f8f6": "19ee8ad1ce7662fbd32bbf45122de12e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/53cc0c0e2d0c45ac74e2f89d0de7df1b621efb": "faae749d654dabe7848b2353cad467d8",
".git/objects/cd/9457030e520df5296a47d7fc651accc5f446d7": "0f4cc396d3e8bd5441e27337fd1951fc",
".git/objects/f7/88df1313e2ba1ce7b2cd1c03e340a3723701ba": "b2787130b0388acfe3bdb4b9a2af07d2",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e0/b8ffd7e21ffa3f8a192cdccbed7a946b37df9c": "6e2e2cb3a9080d3ae581fb5ad645d7de",
".git/objects/46/f7ed56987313fb0b8f574066ac8a962a794f2b": "3b85c233a996c2bdd07f8458231846e3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/12/8c336c7c0e8c2c75936c49c2cda8ce2d4df891": "7558649454cafe16c7bd0369a4dc9474",
".git/objects/85/d53e93e2cc9d535e3fbe08d5129380a3437b1a": "39dc70eb1bcccd9f7e0343ac94f6fd65",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/25/6ef8deb4ac0d5d0893dcbc3ea5c59f9850d8a8": "c71917caf1f880b9a423ca2f0d983b20",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "afa7e151aa6bbaf82b40d055c5173e2f",
".git/logs/refs/heads/master": "afa7e151aa6bbaf82b40d055c5173e2f",
".git/logs/refs/remotes/origin/master": "ebd9cb70ea7b8bcb8ddeceb7c3ee4f49",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "9b350f3891f0a31125067258976bc2e1",
".git/refs/remotes/origin/master": "9b350f3891f0a31125067258976bc2e1",
".git/index": "7368f0f61a9d331f2d8cab2a5631506d",
".git/COMMIT_EDITMSG": "8808d6b95468bab115c0863b6135d1a2",
"assets/AssetManifest.json": "6174d0cefb6457ad0b8262e0a3045e9d",
"assets/NOTICES": "a0b2c10b6e0f1194f167347f2fa6c775",
"assets/FontManifest.json": "44a1b578e084ca54b4891813bd9936e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/config/env.json": "78b6529e372cffb88edd27a09be74f80",
"assets/assets/icons/github.svg": "617870e422d4b75087cdcf9ff298032e",
"assets/assets/icons/instagram.svg": "662a4f1472618eb2eb3b507d7459741f",
"assets/assets/icons/facebook.svg": "1901cad6de0b2e140e2edab8457037f4",
"assets/assets/icons/globe.svg": "4e84a27e5632393900c77917ea199ae5",
"assets/assets/fonts/Shippori_Mincho/ShipporiMincho-Bold.ttf": "8d13feb433121c572356f89dcc078cff",
"assets/assets/fonts/Shippori_Mincho/ShipporiMincho-SemiBold.ttf": "1bbe08d96cf5aa6db7fec3c0d1166d7a",
"assets/assets/fonts/Shippori_Mincho/ShipporiMincho-Regular.ttf": "edf4f18eeb36276badf7a66d7014eca1",
"assets/assets/fonts/Shippori_Mincho/ShipporiMincho-Medium.ttf": "4067cc46aef5d1c4588ec293afac42d5",
"assets/assets/fonts/Shippori_Mincho/ShipporiMincho-ExtraBold.ttf": "14f9ecd2ec2b386f15253d8c5fad0088",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
