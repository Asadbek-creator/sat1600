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
  window.currentUserProfile = null; // { coins, streak_count }

  function showToast(html, ms) {
    var el = document.createElement('div');
    el.innerHTML = html;
    el.style.cssText = 'position:fixed;bottom:22px;left:50%;transform:translateX(-50%);' +
      'background:#18181b;color:#fff;padding:.85rem 1.3rem;border-radius:12px;font-family:Inter,-apple-system,sans-serif;' +
      'font-size:.9rem;font-weight:600;box-shadow:0 12px 30px -8px rgba(0,0,0,.4);z-index:4000;opacity:0;' +
      'transition:opacity .25s, transform .25s;display:flex;align-items:center;gap:.5rem;';
    document.body.appendChild(el);
    requestAnimationFrame(function () {
      el.style.opacity = '1';
      el.style.transform = 'translateX(-50%) translateY(-6px)';
    });
    setTimeout(function () {
      el.style.opacity = '0';
      setTimeout(function () { el.remove(); }, 300);
    }, ms || 3200);
  }
  window.sat1600Toast = showToast;

  async function fetchProfile(userId) {
    try {
      var res = await sb.from('profiles').select('coins, streak_count').eq('id', userId).single();
      if (res.error) return { coins: 0, streak_count: 0 };
      return res.data || { coins: 0, streak_count: 0 };
    } catch (e) {
      return { coins: 0, streak_count: 0 };
    }
  }

  async function bumpStreakIfNeeded() {
    if (!window.currentAuthUser) return;
    try {
      var res = await sb.rpc('bump_daily_streak');
      if (res.error) return;
      var d = res.data;
      if (d && d.changed) {
        if (window.currentUserProfile) {
          window.currentUserProfile.streak_count = d.streak;
          window.currentUserProfile.coins = d.coins;
        }
        updateNavCoinDisplay();
        showToast('🔥 Day ' + d.streak + ' streak — +' + d.reward + ' coin' + (d.reward === 1 ? '' : 's') + '!');
      }
    } catch (e) { /* ignore */ }
  }

  function updateNavCoinDisplay() {
    var coinEl = document.getElementById('navCoinCount');
    if (coinEl && window.currentUserProfile) coinEl.textContent = window.currentUserProfile.coins;
  }
  window.updateNavCoinDisplay = updateNavCoinDisplay;
  window.sat1600FetchProfile = fetchProfile;

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

    if (window.currentAuthUser) {
      window.currentUserProfile = await fetchProfile(window.currentAuthUser.id);
    } else {
      window.currentUserProfile = null;
    }

    if (navActions) {
      if (window.currentAuthUser) {
        navActions.innerHTML =
          '<span class="nav-user">Hi, ' + escapeHtml(firstName(window.currentAuthUser)) + '</span>' +
          '<span class="nav-coins">🪙 <span id="navCoinCount">' + (window.currentUserProfile ? window.currentUserProfile.coins : 0) + '</span></span>' +
          '<button class="btn-login" onclick="handleSignOut()">Log out</button>';
      } else {
        navActions.innerHTML =
          '<button class="btn-login" onclick="openModal(\'login\')">Log in</button>' +
          '<button class="btn-signup" onclick="openModal(\'signup\')">Sign up</button>';
      }
    }

    // let other scripts on the page (e.g. mocks.html, player.html) react to auth state
    document.dispatchEvent(new CustomEvent('sat1600:authchange', { detail: { user: window.currentAuthUser, profile: window.currentUserProfile } }));
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

  async function handleGoogleSignIn() {
    clearModalError();
    try {
      var res = await sb.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.href }
      });
      if (res.error) throw res.error;
      // browser will redirect to Google, then back here — refreshAuthUI() runs
      // again on page load via the DOMContentLoaded handler below.
    } catch (err) {
      showModalError((err && err.message) || 'Could not start Google sign-in. Please try again.');
    }
  }

  // expose globally for inline onclick handlers
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.setMode = setMode;
  window.handleSignOut = handleSignOut;
  window.handleGoogleSignIn = handleGoogleSignIn;

  // --- Live "who's online" presence ---
  // Every page that loads this script joins a shared Realtime presence channel.
  // admin.html reads the same channel's presence state to show a live visitor count.
  function startPresenceHeartbeat() {
    try {
      var sessionKey = 'sat1600_presence_id';
      var myId = sessionStorage.getItem(sessionKey);
      if (!myId) {
        myId = (window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
        sessionStorage.setItem(sessionKey, myId);
      }
      var channel = sb.channel('site-online', { config: { presence: { key: myId } } });
      channel.subscribe(function (status) {
        if (status === 'SUBSCRIBED') {
          channel.track({ page: window.location.pathname, online_at: new Date().toISOString() });
        }
      });
      window.sat1600PresenceChannel = channel;
    } catch (e) { /* presence is best-effort; never block the page on it */ }
  }
  window.sat1600StartPresence = startPresenceHeartbeat;

  document.addEventListener('DOMContentLoaded', async function () {
    await refreshAuthUI();
    bumpStreakIfNeeded();
    startPresenceHeartbeat();
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
