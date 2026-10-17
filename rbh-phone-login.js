/* Name + mobile one-tap login (no OTP, no password).
   Uses a free Firebase anonymous session; name and mobile are saved on the
   customer record so the owner panel can show them and send a WhatsApp welcome. */
(function () {
  'use strict';
  var form = document.getElementById('rbh-phone-form');
  var pop = document.getElementById('loginpop');
  if (!form || !pop) return;
  var nameEl = document.getElementById('rbh-phone-name');
  var phoneEl = document.getElementById('rbh-phone-number');
  var submit = document.getElementById('rbh-phone-submit');
  var msg = document.getElementById('rbh-phone-msg');
  function say(t) { if (msg) msg.textContent = t; }
  function showWelcome(name) {
    var box = document.getElementById('rbh-welcome');
    if (!box) return;
    var title = document.getElementById('rbh-welcome-title');
    if (title) title.textContent = 'Welcome, ' + name + '!';
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    var card = document.getElementById('rbh-welcome-card');
    if (card && card.focus) card.focus();
  }
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var auth, db;
    try { auth = firebase.auth(); db = firebase.firestore(); } catch (e) { auth = null; db = null; }
    if (!auth || !db) { say('Login is not available right now - check your internet.'); return; }
    if (auth.currentUser) { say('You are already signed in.'); pop.hidden = true; return; }
    var name = nameEl.value.trim();
    var raw = phoneEl.value.replace(/[^\d]/g, '');
    if (raw.length === 12 && raw.indexOf('91') === 0) raw = raw.slice(2);
    if (raw.length === 11 && raw.charAt(0) === '0') raw = raw.slice(1);
    if (name.length < 2 || name.length > 60) { say('Enter your name (2 to 60 characters).'); return; }
    if (!/^[6-9]\d{9}$/.test(raw)) { say('Enter a valid 10-digit mobile number.'); return; }
    submit.disabled = true;
    say('Signing you in...');
    var user;
    auth.signInAnonymously().then(function (cred) {
      user = cred.user;
      return user.updateProfile({ displayName: name });
    }).then(function () {
      var ref = db.collection('customers').doc(user.uid);
      return ref.get().then(function (snap) {
        var d = {
          name: name,
          email: '',
          photo: '',
          phone: raw,
          lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        if (!snap.exists) d.firstLoginAt = firebase.firestore.FieldValue.serverTimestamp();
        return ref.set(d, { merge: true }).then(function () { return !snap.exists; });
      });
    }).then(function (firstLogin) {
      say('');
      pop.hidden = true;
      try { sessionStorage.setItem('rbhWelcomeShown:' + user.uid, '1'); } catch (e) {}
      if (firstLogin) showWelcome(name);
      window.dispatchEvent(new Event('rbh-signup-ready'));
    }).catch(function (error) {
      var code = error && error.code;
      if (code === 'auth/admin-restricted-operation' || code === 'auth/operation-not-allowed') say('Mobile login is not available yet - please use Google or email.');
      else say('Could not sign you in right now - please try again.');
    }).finally(function () { submit.disabled = false; });
  });

  // Owner sign-in toggle: reveals the hidden Google button for the store owner only.
  var ownerToggle = document.getElementById('rbh-owner-toggle');
  var ownerLogin = document.getElementById('rbh-owner-login');
  if (ownerToggle && ownerLogin) {
    ownerToggle.addEventListener('click', function () {
      ownerLogin.hidden = !ownerLogin.hidden;
      ownerToggle.textContent = ownerLogin.hidden ? 'Store owner? Sign in' : 'Hide owner sign-in';
    });
  }
})();
