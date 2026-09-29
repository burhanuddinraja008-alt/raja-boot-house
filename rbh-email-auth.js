/* Optional email/password login alongside Google. Firebase Auth owns the session. */
(function () {
  'use strict';
  var pop = document.getElementById('loginpop');
  var form = document.getElementById('rbh-email-form');
  if (!pop || !form) return;
  var auth;
  try { auth = firebase.auth(); } catch (e) { auth = null; }
  var mode = 'signin';
  var email = document.getElementById('rbh-email');
  var password = document.getElementById('rbh-password');
  var confirm = document.getElementById('rbh-password-confirm');
  var confirmWrap = document.getElementById('rbh-confirm-wrap');
  var submit = document.getElementById('rbh-email-submit');
  var switchMode = document.getElementById('rbh-email-mode');
  var reset = document.getElementById('rbh-email-reset');
  var message = document.getElementById('rbh-email-msg');
  function say(text) { message.textContent = text; }
  function setMode(next) {
    mode = next;
    confirmWrap.hidden = next !== 'signup';
    confirm.required = next === 'signup';
    password.autocomplete = next === 'signup' ? 'new-password' : 'current-password';
    confirm.value = '';
    password.value = '';
    submit.textContent = next === 'signup' ? 'Create account' : 'Sign in with email';
    switchMode.textContent = next === 'signup' ? 'Have an account? Sign in' : 'New here? Create an account';
    reset.hidden = next === 'signup';
    say('');
  }
  switchMode.addEventListener('click', function () { setMode(mode === 'signin' ? 'signup' : 'signin'); });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!auth) { say('Email sign-in is unavailable right now. Please try later.'); return; }
    var address = email.value.trim();
    var secret = password.value;
    if (!address || !email.validity.valid) { say('Enter a valid email address.'); return; }
    if (mode === 'signup' && secret.length < 6) { say('Password needs at least 6 characters.'); return; }
    if (mode === 'signup' && secret !== confirm.value) { say('Passwords do not match.'); return; }
    submit.disabled = true; switchMode.disabled = true; reset.disabled = true;
    say(mode === 'signup' ? 'Creating account...' : 'Signing in...');
    var operation = mode === 'signup' ? auth.createUserWithEmailAndPassword(address, secret) : auth.signInWithEmailAndPassword(address, secret);
    operation.then(function () {
      password.value = ''; confirm.value = '';
      if (mode === 'signup') {
        return auth.currentUser.sendEmailVerification().then(function () {
          say('Verification email sent. Open the link, then come back and sign in.');
          return auth.signOut();
        });
      }
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        return auth.currentUser.sendEmailVerification().then(function () {
          say('Verification email sent. Open the link, then come back and sign in.');
          return auth.signOut();
        });
      }
      say('Signed in.'); pop.hidden = true;
    }).catch(function (error) {
      var code = error && error.code;
      if (code === 'auth/email-already-in-use') say('This email already has an account. Try signing in or use Google.');
      else if (code === 'auth/weak-password') say('Choose a password with at least 6 characters.');
      else if (code === 'auth/invalid-email') say('Check your email address.');
      else if (code === 'auth/account-exists-with-different-credential') say('This email uses Google sign-in. Continue with Google.');
      else if (code === 'auth/invalid-credential') say('Sign-in did not work. Check your email and password.');
      else if (code === 'auth/operation-not-allowed') say('Email accounts are not available yet. Please try Google sign-in.');
      else if (code === 'auth/too-many-requests') say('Too many attempts. Wait a while before trying again.');
      else say('Sign-in did not work. Check your details, or reset your password.');
    }).finally(function () { submit.disabled = false; switchMode.disabled = false; reset.disabled = false; });
  });
  reset.addEventListener('click', function () {
    if (!auth) { say('Password reset is unavailable right now.'); return; }
    var address = email.value.trim();
    if (!address || !email.validity.valid) { say('Enter your email address first.'); return; }
    reset.disabled = true;
    auth.sendPasswordResetEmail(address).then(function () {
      say('If this email has an account, check its inbox for the reset link.');
    }).catch(function (error) {
      if (error && error.code === 'auth/too-many-requests') say('Too many attempts. Please try later.');
      else say('Could not send a reset email. Please try again later.');
    }).finally(function () { reset.disabled = false; });
  });
  setMode('signin');
})();
