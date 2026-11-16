/* Dimenced tanıtım sitesi: dil, tema, işletim sistemi algısı ve indirme bağlantıları. */
(function () {
  "use strict";

  /* ---------- Ayarlar (yayın durumuna göre burası güncellenir) ---------- */
  var REPO = "KaanAlper/Dimenced";
  var PLAY_URL = "https://play.google.com/store/apps/details?id=com.kaanalper.deminced";
  var PLAY_LIVE = false; // Google Play'de yayınlandığında true yap
  var RELEASES = "https://github.com/" + REPO + "/releases/latest";

  /* ---------- Metinler (Türkçe, HTML'in içinde; burada İngilizce) ---------- */
  var EN = {
    "skip": "Skip to content",
    "nav.features": "Features", "nav.gallery": "Gallery", "nav.download": "Download", "nav.faq": "FAQ",
    "hero.title": "Place your lines on planes and walk around them in 3D.",
    "hero.lead": "Dimenced puts the lines you draw, just like in a sketchbook, onto invisible planes. Orbit the camera and draw from another angle, and a new plane appears on its own.",
    "cta.see": "See downloads",
    "feat.title": "As easy as paper, and everything you draw lives in three dimensions",
    "f1.h": "Drawing on planes", "f1.p": "Your strokes have a real position in the scene. Orbit, pan and zoom. There is no “new plane” button to hunt for: draw from a different angle and the plane is created for you.",
    "f2.h": "Smart assist", "f2.p": "Hold a stroke for 0.4 seconds and it becomes a line, circle or box. Endpoint snapping, axis and parallel inference do the aligning for you.",
    "f3.h": "Rich brush engine", "f3.p": "Pens that respond to pressure, speed and tilt, calligraphy nibs, a stabilizer and adjustable curves. Ready-made graphite, marker, ink and brush presets come built in.",
    "f4.h": "Paint on curved surfaces", "f4.p": "Draw and fill on bulging surfaces like a cylinder. The stroke stays on top of the surface and its color never bleeds into the fill.",
    "f5.h": "Animation and timelapse", "f5.p": "Frame-by-frame animation, onion skin, loop and ping-pong. Watch your drawing sped up from start to finish and move the camera freely. Photo mode saves the scene from any angle.",
    "f6.h": "Pen and tablet support", "f6.p": "Pressure sensing, palm rejection and stylus button shortcuts. While the pen draws, you can rotate, pan and zoom the canvas with your hand.",
    "f7.h": "And more", "f7.p": "Layers, live symmetry, a room tool, fill bucket, vector and pixel drawing modes, ready-made themes (Catppuccin, Nord, Gruvbox, Dracula and more) and 12 languages.",
    "gal.title": "What it looks like",
    "gal.c1": "A curved surface fill with a line drawn on a plane next to it. Dark theme.",
    "gal.c2": "The workspace: tool rail, plane panel, layers.",
    "gal.c3": "Three planes, three depths: every stroke lives on its own plane.",
    "gal.a1": "Dimenced in the dark theme, showing a curved cylinder surface and a loop drawn next to it",
    "gal.a2": "Dimenced workspace in the light theme: toolbar, plane panel and layer list",
    "gal.a3": "Three colored drawing planes with an arch drawn across them",
    "how.title": "From drawing to export in three steps",
    "s1.h": "Draw", "s1.p": "Pick a brush and draw as you would in a sketchbook. Your strokes sit on an invisible plane.",
    "s2.h": "Orbit", "s2.p": "Turn the camera. Draw from the new angle and a new plane is created; push a plane in depth with Shift and the mouse wheel.",
    "s3.h": "Export", "s3.p": "PNG, JPEG, WebP, GIF, SVG and PDF for 2D. OBJ, PLY, GLB and VTK for 3D. A timelapse pack too.",
    "dl.title": "Download the version for your system",
    "dl.lead": "The latest version is downloaded from GitHub Releases.",
    "dl.fine": "On Linux, make the AppImage executable with <code>chmod +x Dimenced-x86_64.AppImage</code>.",
    "faq.title": "Frequently asked",
    "q1": "Is it free?", "a1": "The app is free. 2D and timelapse exports are free too. 3D exports use tokens; you get 100 free tokens on first launch.",
    "q2": "Do I need an account? Where is my data?", "a2": "No account and no ads. Your drawings stay on your device. Details are on the privacy page.",
    "q3": "Which systems does it run on?", "a3": "Windows 10 and 11, macOS (Apple Silicon and Intel), Linux (x86_64) and Android 8.0 or newer. An iPad and iOS version is planned.",
    "q4": "Can I use it with a pen or tablet?", "a4": "Yes. Pressure sensing, palm rejection and stylus button shortcuts are built in. On Android it is designed for tablets and pens.",
    "q5": "Is there a .deb package for Linux?", "a5": "For now we offer an AppImage and a .tar.gz. The AppImage runs on most distributions without installation.",
    "foot.privacy": "Privacy policy", "foot.releases": "All releases"
  };

  var UI = {
    tr: {
      version: function (v) { return "Sürüm " + v + " en güncel sürüm. Aşağıda tüm sistemler için bağlantılar var."; },
      youAre: "Senin sistemin", soon: "Yakında", all: "Tüm indirmeler",
      theme: "Temayı değiştir", themeTitle: "Açık / koyu tema",
      dlFor: { windows: "Windows için indir", macos: "macOS için indir", linux: "Linux için indir", android: "Android için APK indir", ios: "Masaüstü sürümünü indir" },
      meta: function (v, size, rest) { return "Sürüm " + v + (size ? ", " + size : "") + ". " + rest; },
      rest: { windows: "Windows 10 ve 11, 64 bit.", macos: "Apple Silicon ve Intel.", linux: "x86_64, AppImage.", android: "Android 8.0 ve üzeri. Google Play sürümü yakında.", ios: "iPad ve iOS sürümü planlanıyor.", other: "" },
      play: "Google Play", playSoon: "Google Play (yakında)",
      fileLabels: { exe: "Yükleyici (.exe)", dmg: "Disk görüntüsü (.dmg)", appimage: "AppImage", targz: ".tar.gz", apk: "APK" },
      platforms: {
        windows: ["Windows", "Windows 10 ve 11, 64 bit."],
        macos: ["macOS", "Apple Silicon ve Intel (universal)."],
        linux: ["Linux", "x86_64. AppImage çoğu dağıtımda kurulum gerektirmez."],
        android: ["Android", "Android 8.0 ve üzeri. Tablet ve kalem için tasarlandı."],
        ios: ["iPad ve iOS", "Planlanıyor."]
      }
    },
    en: {
      version: function (v) { return "Version " + v + " is the latest. Links for every system are below."; },
      youAre: "Your system", soon: "Coming soon", all: "All downloads",
      theme: "Switch theme", themeTitle: "Light / dark theme",
      dlFor: { windows: "Download for Windows", macos: "Download for macOS", linux: "Download for Linux", android: "Download APK for Android", ios: "Get the desktop version" },
      meta: function (v, size, rest) { return "Version " + v + (size ? ", " + size : "") + ". " + rest; },
      rest: { windows: "Windows 10 and 11, 64-bit.", macos: "Apple Silicon and Intel.", linux: "x86_64, AppImage.", android: "Android 8.0 or newer. Google Play version coming soon.", ios: "An iPad and iOS version is planned.", other: "" },
      play: "Google Play", playSoon: "Google Play (coming soon)",
      fileLabels: { exe: "Installer (.exe)", dmg: "Disk image (.dmg)", appimage: "AppImage", targz: ".tar.gz", apk: "APK" },
      platforms: {
        windows: ["Windows", "Windows 10 and 11, 64-bit."],
        macos: ["macOS", "Apple Silicon and Intel (universal)."],
        linux: ["Linux", "x86_64. The AppImage runs on most distributions without installing."],
        android: ["Android", "Android 8.0 or newer. Designed for tablets and pens."],
        ios: ["iPad and iOS", "Planned."]
      }
    }
  };

  /* ---------- Yardımcılar ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* özel pencere */ } }
  };

  // Türkçe metinler HTML'in içinde; değiştirmeden önce sakla.
  $$("[data-i18n]").forEach(function (el) { el.dataset.tr = el.textContent; });
  $$("[data-i18n-html]").forEach(function (el) { el.dataset.trHtml = el.innerHTML; });
  $$("[data-i18n-alt]").forEach(function (el) { el.dataset.trAlt = el.getAttribute("alt"); });
  var TITLE_TR = document.title;
  var DESC_EL = $('meta[name="description"]');
  var DESC_TR = DESC_EL ? DESC_EL.getAttribute("content") : "";

  /* ---------- İşletim sistemi algısı ---------- */
  function detectOS() {
    var ua = navigator.userAgent || "";
    var plat = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
    if (/android/i.test(ua)) return "android";
    if (/iPhone|iPad|iPod/i.test(ua) || (plat === "MacIntel" && navigator.maxTouchPoints > 1)) return "ios";
    if (/^Win/i.test(plat) || /Windows/i.test(ua)) return "windows";
    if (/^Mac/i.test(plat) || /Macintosh/i.test(ua)) return "macos";
    if (/Linux|X11|CrOS/i.test(plat + " " + ua)) return "linux";
    return "other";
  }
  var OS = detectOS();

  /* ---------- Sürüm bilgisi (GitHub API, hata olursa sabit bağlantılar) ---------- */
  var release = null;

  var FILES = {
    windows: [{ key: "exe", re: /Setup\.exe$/i, fallback: "Dimenced-Setup.exe" }],
    macos: [{ key: "dmg", re: /\.dmg$/i }],
    linux: [{ key: "appimage", re: /\.AppImage$/i, fallback: "Dimenced-x86_64.AppImage" }, { key: "targz", re: /linux.*\.tar\.gz$/i, quiet: true }],
    android: [{ key: "apk", re: /universal.*\.apk$/i, fallback: "Dimenced-universal.apk" }]
  };

  function resolve(f) {
    var asset = release && release.assets && release.assets.filter(function (a) { return f.re.test(a.name); })[0];
    if (asset) return { url: asset.browser_download_url, size: asset.size };
    if (f.fallback) return { url: "https://github.com/" + REPO + "/releases/latest/download/" + f.fallback, size: 0 };
    return { url: RELEASES, size: 0 };
  }
  function mb(bytes) { return bytes ? (bytes / 1048576).toFixed(bytes > 10485760 ? 0 : 1) + " MB" : ""; }
  function version() { return release && release.tag_name ? release.tag_name.replace(/^v/, "") : ""; }

  /* ---------- Dil ---------- */
  var lang = store.get("dimenced-lang");
  if (lang !== "tr" && lang !== "en") lang = /^tr\b/i.test(navigator.language || "") ? "tr" : "en";

  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) {
      el.textContent = lang === "en" && EN[el.dataset.i18n] != null ? EN[el.dataset.i18n] : el.dataset.tr;
    });
    $$("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = lang === "en" ? EN[el.dataset.i18nHtml] : el.dataset.trHtml;
    });
    $$("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", lang === "en" ? EN[el.dataset.i18nAlt] : el.dataset.trAlt);
    });
    document.title = lang === "en" ? "Dimenced: 3D line drawing app" : TITLE_TR;
    if (DESC_EL) DESC_EL.setAttribute("content", lang === "en" ? "Draw your lines in 3D space. A calm, powerful ink sketchbook. Download for Windows, macOS, Linux and Android." : DESC_TR);
    $$("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    var t = $("#theme");
    t.setAttribute("aria-label", UI[lang].theme);
    t.setAttribute("title", UI[lang].themeTitle);
    renderCTA();
    renderDownloads();
  }

  $$("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { lang = b.dataset.lang; store.set("dimenced-lang", lang); applyLang(); });
  });

  /* ---------- Tema: kayıtlı seçim yoksa tarayıcı tercihi ---------- */
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function effectiveTheme() { return document.documentElement.dataset.theme || (mq && mq.matches ? "dark" : "light"); }
  $("#theme").addEventListener("click", function () {
    var next = effectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set("dimenced-theme", next);
  });

  /* ---------- Hero düğmesi ---------- */
  var ICON_DL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M6.5 10.5 12 16l5.5-5.5M4 20h16"/></svg>';

  function renderCTA() {
    var ui = UI[lang];
    var main = $("#cta-main");
    var meta = $("#cta-meta");
    var files = FILES[OS];
    if (!files) {
      main.setAttribute("href", "#indir");
      main.innerHTML = (OS === "ios" ? ICON_DL + ui.dlFor.ios : EN_OR("cta.see"));
      meta.textContent = OS === "ios" ? ui.rest.ios : "";
      return;
    }
    var r = resolve(files[0]);
    main.setAttribute("href", r.url);
    main.innerHTML = ICON_DL + ui.dlFor[OS];
    var ver = version();
    meta.innerHTML = "";
    var span = document.createElement("span");
    span.textContent = (ver ? ui.meta(ver, mb(r.size), ui.rest[OS]) : ui.rest[OS]) + " ";
    var a = document.createElement("a");
    a.href = "#indir";
    a.textContent = ui.all;
    meta.appendChild(span);
    meta.appendChild(a);
  }
  function EN_OR(key) {
    var el = $('[data-i18n="' + key + '"]');
    return lang === "en" ? EN[key] : (el ? el.dataset.tr : "");
  }

  /* ---------- İndirme listesi ---------- */
  function btn(href, label, quiet, disabled) {
    var a = document.createElement("a");
    a.className = "btn" + (quiet ? " quiet" : "");
    a.href = disabled ? "#indir" : href;
    if (disabled) a.setAttribute("aria-disabled", "true");
    a.textContent = label;
    return a;
  }

  function renderDownloads() {
    var ui = UI[lang];
    var list = $("#dl-list");
    list.innerHTML = "";
    ["windows", "macos", "linux", "android", "ios"].forEach(function (id) {
      var row = document.createElement("div");
      row.className = "dl" + (id === OS ? " you" : "");
      var left = document.createElement("div");
      var h = document.createElement("h3");
      h.textContent = ui.platforms[id][0];
      left.appendChild(h);
      var badge = document.createElement("span");
      badge.className = "you-badge";
      badge.textContent = ui.youAre;
      left.appendChild(badge);
      var p = document.createElement("p");
      p.textContent = ui.platforms[id][1];
      var acts = document.createElement("div");
      acts.className = "acts";
      if (id === "ios") {
        acts.appendChild(btn("#", ui.soon, true, true));
      } else {
        if (id === "android") {
          acts.appendChild(PLAY_LIVE ? btn(PLAY_URL, ui.play, false, false) : btn("#", ui.playSoon, true, true));
        }
        FILES[id].forEach(function (f, i) {
          var r = resolve(f);
          var size = mb(r.size);
          var label = ui.fileLabels[f.key] + (size ? " " + size : "");
          acts.appendChild(btn(r.url, label, id === "android" ? true : (i > 0 || f.quiet), false));
        });
      }
      row.appendChild(left);
      row.appendChild(p);
      row.appendChild(acts);
      list.appendChild(row);
    });
    var v = version();
    var lead = $("#dl-version");
    if (v) lead.textContent = ui.version(v);
    else lead.textContent = lang === "en" ? EN["dl.lead"] : lead.dataset.tr;
  }

  /* ---------- Başlat ---------- */
  applyLang();

  var CACHE_KEY = "dimenced-release-v1";
  function useRelease(r) {
    if (r && r.tag_name) { release = r; renderCTA(); renderDownloads(); }
  }
  try {
    var cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
    if (cached && Date.now() - cached.at < 600000) useRelease(cached.data);
  } catch (e) { /* önbellek yok */ }
  if (!release && window.fetch) {
    fetch("https://api.github.com/repos/" + REPO + "/releases/latest", { headers: { Accept: "application/vnd.github+json" } })
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(function (data) {
        useRelease(data);
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: { tag_name: data.tag_name, assets: (data.assets || []).map(function (a) { return { name: a.name, size: a.size, browser_download_url: a.browser_download_url }; }) } })); } catch (e) { /* dolu */ }
      })
      .catch(function () { /* sabit bağlantılar kalır */ });
  }
})();
