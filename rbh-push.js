/* Raja Boot House: optional new-stock web push. No registration before an explicit click. */
(function () {
  'use strict';
  var button = document.getElementById('tog-stock-push');
  var status = document.getElementById('stock-push-status');
  if (!button || !status) return;
  var VAPID = 'BGTD7wow1mgDkQf_68SuG02nSSwK6ItFvSpJ8dCFMX0rix3w2nAddLE-3EmEdtrFLjPOU_jKrDdZsZ1zhcyoIjQ';
  var KEY = 'rbhStockPushOptIn';
  var busy = false;
  function enabled() { try { return localStorage.getItem(KEY) === 'yes'; } catch (e) { return false; } }
  function save(on) { try { on ? localStorage.setItem(KEY, 'yes') : localStorage.removeItem(KEY); } catch (e) {} }
  function show(text) { status.textContent = text; button.setAttribute('aria-pressed', enabled() ? 'true' : 'false'); }
  function basicSupport() {
    return !!(window.isSecureContext && 'serviceWorker' in navigator && 'Notification' in window &&
      window.firebase && firebase.messaging && firebase.messaging.isSupported);
  }
  function worker() { return navigator.serviceWorker.register('sw.js').then(function () { return navigator.serviceWorker.ready; }); }
  function messaging() { return firebase.messaging(); }
  function options(registration) { return { vapidKey: VAPID, serviceWorkerRegistration: registration }; }
  function unsubscribe() {
    if (!basicSupport()) { save(false); show('Off on this device. Check browser settings if you also allowed notifications there.'); return Promise.resolve(); }
    return worker().then(function (registration) { return messaging().deleteToken(); }).then(function () {
      save(false); show('Off. This device is unsubscribed from new-stock alerts.');
    }).catch(function () {
      // Stay opted in if FCM could not revoke the registration; otherwise a silent push could still arrive.
      show('Could not unsubscribe yet. Please retry, or block notifications for this site in browser settings.');
    });
  }
  function subscribe() {
    if (!basicSupport()) { show('Push alerts are not supported in this browser. Try Chrome or install the app.'); return Promise.resolve(); }
    if (Notification.permission === 'denied') { show('Notifications are blocked in browser settings. Allow this site there, then try again.'); return Promise.resolve(); }
    // The user clicked this button; the permission request is never shown on page load.
    return Notification.requestPermission().then(function (permission) {
      if (permission !== 'granted') { show('Off. Browser notification permission was not granted.'); return null; }
      return worker().then(function (registration) { return messaging().getToken(options(registration)); });
    }).then(function (token) {
      if (!token) return;
      save(true);
      show('On for this device. New-stock alerts are allowed. Turn this switch off to unsubscribe.');
    }).catch(function () { show('Could not turn on alerts right now. Please try again later.'); });
  }
  if (new URLSearchParams(location.search).get('rbhPushTest') === '1') {
    var copy = document.createElement('button');
    copy.type = 'button'; copy.textContent = 'Copy test ID'; copy.hidden = true;
    copy.className = 'btn'; copy.style.cssText = 'margin-top:8px;min-height:40px;padding:8px 12px';
    function syncCopy() { copy.style.display = enabled() ? 'inline-block' : 'none'; }
    status.parentNode.insertBefore(copy, status.nextSibling);
    var oldShow = show;
    show = function (text) { oldShow(text); syncCopy(); };
    syncCopy();
    copy.addEventListener('click', function () {
      if (!enabled() || Notification.permission !== 'granted') return;
      worker().then(function (registration) { return messaging().getToken(options(registration)); })
        .then(function (token) { if (!token) throw Error('no-token'); return navigator.clipboard.writeText(token); })
        .then(function () { status.textContent = 'Test ID copied. Paste it only in your private chat with RBH setup support.'; })
        .catch(function () { status.textContent = 'Could not copy test ID. Try Chrome, or check clipboard permission.'; });
    });
  }
  button.addEventListener('click', function () {
    if (busy) return;
    busy = true; button.disabled = true;
    firebase.messaging.isSupported().then(function (supported) {
      if (!supported) { show('Push alerts are not supported in this browser.'); return; }
      return enabled() ? unsubscribe() : subscribe();
    }).catch(function () { show('Push alerts could not start. Please try again later.'); }).finally(function () { busy = false; button.disabled = false; });
  });
  if (!basicSupport()) show('Push alerts are not supported in this browser. The site still works normally.');
  else firebase.messaging.isSupported().then(function (supported) {
    if (!supported) { button.disabled = true; show('Push alerts are not supported in this browser. The site still works normally.'); return; }
    if (enabled() && Notification.permission === 'granted') {
      // Refresh an existing, deliberate opt-in only. Never seek permission or create a token for everyone.
      worker().then(function (registration) { return messaging().getToken(options(registration)); }).then(function (token) {
        if (token) show('On for this device. Turn this switch off to unsubscribe.');
        else show('Alerts need a fresh opt-in. Turn this switch off, then on again.');
      }).catch(function () { show('Alerts could not reconnect. Please try again later.'); });
    } else if (enabled()) show('Browser permission is off. Turn this switch off to unsubscribe.');
    else show('Off. Choose this to get new-stock alerts on this device. You can turn them off here any time.');
  }).catch(function () { button.disabled = true; show('Push alerts are unavailable on this device.'); });
  try {
    if (basicSupport()) messaging().onMessage(function (payload) {
      if (!enabled()) return;
      var notification = payload.notification || {};
      var text = [notification.title || 'Raja Boot House', notification.body || 'New stock is here.'].join(': ');
      var key = 'rbhNotifs';
      var old = JSON.parse(localStorage.getItem(key) || '[]');
      old.unshift({ t: text, ts: Date.now() });
      localStorage.setItem(key, JSON.stringify(old.slice(0, 20)));
      var badge = document.getElementById('bell-badge');
      if (badge) { badge.hidden = false; badge.textContent = String(old.length); }
    });
  } catch (e) {}
})();
