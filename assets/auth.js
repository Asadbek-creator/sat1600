/* SAT 1600 — shared Supabase auth logic.
   Included on every page that has the nav's Log in / Sign up buttons.
   Requires the Supabase JS CDN script to be loaded before this file. */

(function () {
  var SUPABASE_URL = 'https://dmljiksevcvqbfdlqbxs.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_91T94nawz_Uwc-I4ai5mKg_o28iBTJ7';

  if (!window.supabase) {
    console.error('Supabase JS library not loaded — check the CDN script tag.');
    return;
  }

  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  window.sbClient = sb; // exposed so other pages/scripts (mocks.html, player.html) can reuse the same client
  window.currentAuthUser = null;

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function firstName(user) {
    var meta = user.user_metadata || {};
    if (meta.full_name) return meta.full_name.split(' ')[0];
    return (user.email || 'there').split('@')[0];
  }

  async function refreshAuthUI() {
    var navActions = document.querySelector('.nav-actions');
    var data;
    try {
      var res = await sb.auth.getSession();
      data = res.data;
    } catch (e) {
      data = { session: null };
    }
    var session = data.session;
    window.currentAuthUser = session ? session.user : null;

    if (!navActions) return;

    if (window.currentAuthUser) {
      navActions.innerHTML =
        '<span class="nav-user">Hi, ' + escapeHtml(firstName(window.currentAuthUser)) + '</span>' +
        '<button class="btn-login" onclick="handleSignOut()">Log out</button>';
    } else {
      navActions.innerHTML =
        '<button class="btn-login" onclick="openModal(\'login\')">Log in</button>' +
        '<button class="btn-signup" onclick="openModal(\'signup\')">Sign up</button>';
    }

    // let other scripts on the page (e.g. mocks.html) react to auth state
    document.dispatchEvent(new CustomEvent('sat1600:authchange', { detail: { user: window.currentAuthUser } }));
  }

  function openModal(type) {
    var overlay = document.getElementById('modalOverlay');
    if (!overlay) return;
    overlay.classList.add('open');
    setMode(type);
    clearModalError();
  }

  function closeModal() {
    var overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.classList.remove('open');
  }

  function setMode(type) {
    var overlay = document.getElementById('modalOverlay');
    var title = document.getElementById('modalTitle');
    var nameField = document.getElementById('modalNameField');
    var submit = document.getElementById('modalSubmit');
    var switchText = document.getElementById('modalSwitchText');
    if (!overlay || !title) return;
    overlay.dataset.mode = type;
    if (type === 'signup') {
      title.textContent = 'Create your account';
      if (nameField) nameField.style.display = 'block';
      submit.textContent = 'Sign up';
      switchText.innerHTML = 'Already have an account? <a onclick="openModal(\'login\')">Log in</a>';
    } else {
      title.textContent = 'Log in';
      if (nameField) nameField.style.display = 'none';
      submit.textContent = 'Log in';
      switchText.innerHTML = 'Don\'t have an account? <a onclick="openModal(\'signup\')">Sign up</a>';
    }
  }

  function clearModalError() {
    var err = document.getElementById('modalError');
    if (err) { err.textContent = ''; err.style.display = 'none'; }
  }

  function showModalError(msg) {
    var err = document.getElementById('modalError');
    if (err) { err.textContent = msg; err.style.display = 'block'; }
  }

  async function handleModalSubmit(e) {
    e.preventDefault();
    var overlay = document.getElementById('modalOverlay');
    var mode = (overlay && overlay.dataset.mode) || 'login';
    var emailField = document.getElementById('modalEmailField');
    var passwordField = document.getElementById('modalPasswordField');
    var nameField = document.getElementById('modalNameField');
    var submitBtn = document.getElementById('modalSubmit');
    var email = emailField ? emailField.value.trim() : '';
    var password = passwordField ? passwordField.value : '';
    var name = nameField ? nameField.value.trim() : '';

    clearModalError();

    if (!email || !password) {
      showModalError('Please fill in email and password.');
      return;
    }
    if (mode === 'signup' && password.length < 6) {
      showModalError('Password must be at least 6 characters.');
      return;
    }

    var originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Please wait…';

    try {
      if (mode === 'signup') {
        var signUpRes = await sb.auth.signUp({
          email: email,
          password: password,
          options: { data: { full_name: name || null } }
        });
        if (signUpRes.error) throw signUpRes.error;
      } else {
        var signInRes = await sb.auth.signInWithPassword({ email: email, password: password });
        if (signInRes.error) throw signInRes.error;
      }
      await refreshAuthUI();
      closeModal();
      if (emailField) emailField.value = '';
      if (passwordField) passwordField.value = '';
      if (nameField) nameField.value = '';
    } catch (err) {
      showModalError((err && err.message) || 'Something went wrong. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  }

  async function handleSignOut() {
    await sb.auth.signOut();
    await refreshAuthUI();
  }

  // expose globally for inline onclick handlers
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.setMode = setMode;
  window.handleSignOut = handleSignOut;

  document.addEventListener('DOMContentLoaded', function () {
    refreshAuthUI();
    var overlay = document.getElementById('modalOverlay');
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === this) closeModal();
      });
      var form = overlay.querySelector('form');
      if (form) form.addEventListener('submit', handleModalSubmit);
    }
    sb.auth.onAuthStateChange(function () { refreshAuthUI(); });
  });
})();
