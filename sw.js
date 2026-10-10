var CACHE = 'rbh-v50-audit-2026';
var CORE = ['./', 'index.html', 'rbh-diwali-2026.css?v=2', 'rbh-diwali-2026.js?v=1', '1-10-36-rbh-app-limited3.js?v=audit-20261010', '41-style.css?v=22', '42-premium.css?v=2', '44-polish.css?v=1', '45-final-polish.css?v=1', '42-app.js?v=22', 'terms.html', 'privacy.html', 'rbh-hours-enquiries.js?v=1', 'manifest.json', '1-logo-new.jpg', '1-icon-192.png', '2-icon-512.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE.map(function (url) { return new Request(url, { cache: "reload" }); })); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.endsWith(".mp4") || e.request.headers.has("range")) return; // Let the browser handle media byte ranges directly.
  var isHtml = e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  if (isHtml) {
    e.respondWith(
      fetch(e.request, { cache: "no-cache" }).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function () { return caches.match(e.request); })
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      var net = fetch(e.request, { cache: "no-cache" }).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    })
  );
});


// Firebase Messaging uses this existing site service worker for background delivery.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyBWl9NX064CJAZa03ltvVoF97X7_1BkGzs',
  authDomain: 'raja-boot-house-dharni.firebaseapp.com',
  projectId: 'raja-boot-house-dharni',
  storageBucket: 'raja-boot-house-dharni.firebasestorage.app',
  messagingSenderId: '983191567554',
  appId: '1:983191567554:web:8feb614da884b5df29cf5b'
});
try { firebase.messaging(); } catch (error) { console.warn('Push unavailable:', error); }
