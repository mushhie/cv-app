// =====================================================
// app.js — service worker, mobile menu, dynamic data,
// carousel, gallery, languages, achievements,
// dark mode, copy-to-clipboard, scroll progress bar.
// =====================================================

/* ----------------------------------------------------------
   TODO[CV_DATA]: edit this object to update your CV content.
---------------------------------------------------------- */
const cvData = {
  name: "Amal Basirah Abdullah",
  role: "IT Student @ IBTE",
  tagline: "✨ Welcome to my interactive mobile CV! ✨",

  // Personal info — shown on About page
  personalInfo: {
    name:         "Amal Basirah binti Abdullah",
    ic:           "01-149470 (Y)",
    address:      "No 317, Spg 373, Block C4, Flat MDPMAMB, Mukim Gadong B, Bandar Seri Begawan, Brunei Muara, BE3719",
    phone:        "+673 887 6389",
    phoneHref:    "tel:+6738876389",
    email:        "malbsrh2412@gmail.com",
    emailHref:    "mailto:malbsrh2412@gmail.com",
    studentEmail: "25070893H@student.edu.bn",
    // student mail → Outlook web compose (school accounts open in Outlook)
    studentHref:  "https://outlook.office.com/mail/deeplink/compose?to=25070893H@student.edu.bn"
  },

  skills: [
    { name: "HTML5",        level: 75 },
    { name: "Python",       level: 70 },
    { name: "JavaScript",   level: 65 },
    { name: "PWA",          level: 70 },
    { name: "UI/UX Design", level: 80 }
  ],

  softSkills: ["Teamwork", "Communication", "Creativity", "Time Management", "Adaptability"],

  // Tools — each chip gets a hover tooltip. Edit `hover` text freely!
  tools: [
    { name: "VS Code",      hover: "My main code editor for HTML, CSS & JS." },
    { name: "Android Studio",hover: "My main code editor for creating application." },
    { name: "Figma",        hover: "For UI/UX wireframes and design mockups." },
    { name: "Canva",        hover: "Quick posters, social posts and graphics." },
    { name: "GitHub",       hover: "Version control & hosting my projects." },
    { name: "Live Server",  hover: "VS Code extension for instant preview." },
    { name: "Draw.io",      hover: "Flowcharts, ER diagrams & Floorplans." },
    { name: "ProjectLibre", hover: "Project planning & Gantt charts." },
    { name: "MS Access",    hover: "Databases, queries & forms." },
    { name: "SmartDraw",    hover: "Polished diagrams & visual layouts." },
    { name: "Adobe Photoshop",    hover: "Poster design for campus events & social media." },
    { name: "Adobe After Effects",    hover: "Logo animation for digital advertisements." }
  ],

  languages: [
    { name: "Malay",   level: 100, label: "Native" },
    { name: "English", level: 100,  label: "Fluent" },
    { name: "Arabic",  level: 40,  label: "Basic"  }
  ],

  achievements: [
    { year: "MAY 2026",  title: "Mobile CV PWA",               desc: "Designed & built an installable 5-page PWA from scratch." },
    { year: "APR 2026",  title: "TVET Challenge — Champion",   desc: "Won 1st Place in the 3rd Year TVET Challenge under IBTE." },
    { year: "JAN 2026",  title: "IBTE Open-Day Performance",   desc: "Performed for IBTE Open-Day for January Intakes." },
    { year: "NOV 2025",  title: "Gala Night @ Mahkota Hall",   desc: "Performed at Mahkota Hall, Times Square for Gala Night." },
    { year: "OCT 2025",  title: "IBTE Teacher's Day",          desc: "Performed for Teacher's Day in IBTE." },
    { year: "JUN 2025",  title: "IBTE HNTec in IT",            desc: "Began HNTec in Information Technology at IBTE." },
    { year: "APR 2025",  title: "BICTA Volunteer",             desc: "Volunteered in BICTA under AITI — event support team." },
    { year: "OCT 2024",  title: "COSMO Diploma in IT",         desc: "Began Diploma in IT at Cosmopolitan College of Commerce & Technology." },
    { year: "JAN 2018", title: "SUAMPRIPAHS",                  desc: "Began Highschool and achieved 5'0'Level Qualifications"},
    { year: "JAN 2016", title: "SPABSB",                       desc: "Began Lower Secondary and achieved 4'A's in PSR"}
  ],

  // Work / Project experience — rendered on Skills page
  experiences: [
    {
      title: "Volunteer — BICTA under AITI",
      role:  "Volunteer · Event Support",
      date:  "May 2024",
      bullets: [
        "Assisted in ushering BICTA participants.",
        "Supported judging panels and managed participant registration.",
        "Gained hands-on experience in event management and teamwork under pressure.",
        "Communicated with multiple stakeholders to ensure smooth event flow.",
        "Managed time-keeping for 10+ pitching teams – Demonstrated punctuality, fairness, and clear communication under pressure during live competition rounds."
      ]
    },
    {
      title: "Gala Night Performance",
      role:  "Performer · Dance Club SICT SSRC",
      date:  "Nov 2025",
      bullets: [
        "Collaborated with a team of 10+ performers to deliver choreographed routines for 50+ attendees.",
        "Attended regular rehearsals and demonstrated discipline, punctuality and adaptability."
      ]
    },
    {
      title: "1st Place — 3rd Year TVET Challenge",
      role:  "Competitor",
      date:  "April 2026",
      bullets: [
        "Developed problem-solving, coding, presentation and project management under time constraints.",
        "Demonstrated resilience, critical thinking and teamwork under competition pressure."
      ]
    },
    {
      title: "Mobile CV PWA (this app!)",
      role:  "Personal Project",
      date:  "2026",
      bullets: [
        "Designed and built a 5-page installable PWA from scratch.",
        "Implemented offline support with a service worker cache.",
        "Created a pastel design system in pure CSS."
      ]
    }
  ],

  hobbies: [
    { title: "Digital Art",
      img:"../images/digitalart-poster-ui.png" ,
      desc: "Sketching characters & UI ideas using tools like Figma, Photoshop and other art programs." },

    { title: "Plants",
      img:"../images/plant-planting.png" ,
      desc: "Helping out my parents grow plants and make use of hydroponic method." },

    { title: "Classical Music",
      img:"../images/classical-spotify-playlist.jpeg",              
      desc: "Soundtrack for every coding session." },

    { title: "Crafting", 
      img:"../images/crafting-stickers.png",                      
      desc: "Turning my digital art into stickers and prints to sell at vendor fairs." },

    { title: "Crocheting", 
      img:"../images/dancing-performance.png" ,  
      desc: "Crocheting hats occasionally and practicing to make plushie in my spare time" },

    { title: "Performing", 
      img:"../images/dancing-performance.png",                 
      desc: "Stage performances at IBTE events." }
  ],

  iotSlides: [
    { title: "Temperature & Humidity",
      img: "../images/temp-n-humidity-sensor.jpeg",
      desc: "A DHT22 sensor reports the air temp and humidity around the plant so I know if it's too dry or too hot." },

    { title: "Soil Moisture",
      img: "../images/soil-moisture-sensor.jpeg",
      desc: "Capacitive probe in the soil tells me exactly when the plant is thirsty — no more guessing!" },

    { title: "Water Level",
      img: "../images/water-level-sensor.jpeg",
      desc: "It tracks how full the water reservoir is, so the auto-watering never runs dry." },

    { title: "Distance Detection",
      img: "../images/distance-sensor.jpeg",
      desc: "an ultrasonic sensor to detect when someone enters the room. When a person is within a certain distance, the living room lights turn on automatically." },

    { title: "Light Sensor",
      img: "../images/light-sensor.jpeg",
      desc: "A light sensor that turns the light off when there is enough natural light, and turns it on when there isn't."}
  ],

  projects: [
    { title: "Mobile CV PWA",
      desc:  "The very app you're using! Installable, offline-capable, pastel-themed.",
      img:   "../images/icon-square-app.png", link: "#" },

    { title: "Brunei Tourism Website",
      desc:  "A website made in Google Site for Brunei Tourism",
      img:   "../images/brunei-tourism-website.png", link: "#https://sites.google.com/view/roboticstechonologyclub/" },

    { title: "Spark.bn Web App",
      desc:  "An app prototype platform of Spark.bn created during TVeT Challenge and further refined during NatHack with my team.",
      img:   "../images/spark.bn-app-UI.png", link: "#https://sparkbn.lovable.app/" },

    { title: "Mini To-Do List App Design",
      desc:  "A mini project design using Figma tool for a To-Do List Application as part of school assignment.",
      img:   "../images/to-do-list-mobapp-design.png", link: "#" },
      
    { title: "Book Website Design",
      desc:  "Wireframe design for a book website as part of a mini school project.",
      img:   "../images/readit-wireframe.png", link: "#" },
  ]
};

/* ---------- 1. Register the service worker ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../serviceworker.js")
      .then((reg) => console.log("Service Worker registered:", reg.scope))
      .catch((err) => console.warn("SW registration failed:", err));
  });
}

/* ---------- 2. Theme (dark mode) — apply ASAP ---------- */
(function applyStoredTheme() {
  try {
    const t = localStorage.getItem("cv-theme");
    if (t === "dark") document.documentElement.setAttribute("data-theme", "dark");
  } catch (e) {}
})();

/* ---------- 3. DOM ready ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  if (btn && nav) btn.addEventListener("click", () => nav.classList.toggle("open"));

  // Mark active link
  const path = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // Inject scroll progress bar + dark mode toggle + toast container
  injectScrollBar();
  injectThemeToggle();
  injectToast();

  // Render everything (functions no-op if their slot isn't on this page)
  renderHero();
  renderPersonalInfo();
  renderSkills();
  renderTools();
  renderLanguages();
  renderAchievements();
  renderHobbies();
  renderExperiences();
  renderProjects();
  initCarousel();
  wireCopyButtons();
});

/* ---------- 4. Render helpers ---------- */
function renderHero() {
  const set = (sel, val) => {
    const el = document.querySelector(`[data-js='${sel}']`);
    if (el) el.textContent = val;
  };
  set("name", cvData.name);
  set("role", cvData.role);
  set("tagline", cvData.tagline);
}

function renderPersonalInfo() {
  const wrap = document.querySelector("[data-js='personal-info']");
  if (!wrap) return;
  const p = cvData.personalInfo;
  wrap.innerHTML = `
    <ul class="info-list">
      <li><span class="info-key">Name</span><span class="info-val">${p.name}</span></li>
      <li><span class="info-key">IC No</span><span class="info-val">${p.ic}</span></li>
      <li><span class="info-key">Address</span><span class="info-val">${p.address}</span></li>
      <li><span class="info-key">Contact</span><span class="info-val"><a href="${p.phoneHref}">${p.phone}</a></span></li>
      <li>
        <span class="info-key">Personal Email</span>
        <span class="info-val">
          <a href="${p.emailHref}">${p.email}</a>
          <button class="copy-btn" data-copy="${p.email}" aria-label="Copy email">📋</button>
        </span>
      </li>
      <li>
        <span class="info-key">Student Email</span>
        <span class="info-val">
          <a href="${p.studentHref}" target="_blank" rel="noopener">${p.studentEmail}</a>
          <button class="copy-btn" data-copy="${p.studentEmail}" aria-label="Copy student email">📋</button>
        </span>
      </li>
    </ul>
  `;
}

function renderSkills() {
  const tech = document.querySelector("[data-js='tech-skills']");
  if (tech) {
    tech.innerHTML = cvData.skills.map((s) => `
      <div class="skill-row">
        <div class="label"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="bar"><span style="width:${s.level}%"></span></div>
      </div>
    `).join("");
  }
  const soft = document.querySelector("[data-js='soft-skills']");
  if (soft) {
    soft.innerHTML = cvData.softSkills.map((s) => `<span class="chip">${s}</span>`).join("");
  }
}

function renderTools() {
  const wrap = document.querySelector("[data-js='tools']");
  if (!wrap) return;
  wrap.innerHTML = cvData.tools.map((t) =>
    `<span class="chip chip-hover" data-tip="${t.hover.replace(/"/g, "&quot;")}" tabindex="0">${t.name}</span>`
  ).join("");
}

function renderLanguages() {
  const wrap = document.querySelector("[data-js='languages']");
  if (!wrap) return;
  wrap.innerHTML = cvData.languages.map((l) => `
    <div class="skill-row">
      <div class="label"><span>${l.name} <em style="color:var(--brown-soft); font-style:normal;">— ${l.label}</em></span><span>${l.level}%</span></div>
      <div class="bar"><span style="width:${l.level}%"></span></div>
    </div>
  `).join("");
}

function renderAchievements() {
  const wrap = document.querySelector("[data-js='achievements']");
  if (!wrap) return;
  wrap.innerHTML = cvData.achievements.map((a) => `
    <div class="timeline-item">
      <div class="timeline-year">${a.year}</div>
      <div class="timeline-body">
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderHobbies() {
  const wrap = document.querySelector("[data-js='hobbies']");
  if (!wrap) return;
  const colors = ["pink", "yellow", "cream"];
  wrap.innerHTML = cvData.hobbies.map((h, i) => {
    const color = h.color || colors[i % colors.length];
    const content = h.img 
      ? `<img src="${h.img}" alt="${h.title}" class="tile-img">`
      : `<span class="tile-emoji">${h.emoji || "✨"}</span>`;
    return `
      <div class="gallery-tile tile-${color}">
        ${content}
        <span class="tile-title">${h.title}</span>
        <span class="tile-overlay">${h.desc || ""}</span>
      </div>
    `;
  }).join("");
}

function renderExperiences() {
  const wrap = document.querySelector("[data-js='experiences']");
  if (!wrap) return;
  wrap.innerHTML = cvData.experiences.map((x) => `
    <div class="exp-item">
      <h3>${x.title}</h3>
      <p class="exp-meta"><em>${x.role} — ${x.date}</em></p>
      <ul class="bullets">
        ${x.bullets.map((b) => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderProjects() {
  const wrap = document.querySelector("[data-js='projects']");
  if (!wrap) return;
  wrap.innerHTML = cvData.projects.map((p) => `
    <div class="card project">
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join("");
}

/* ---------- 5. Carousel ---------- */
function initCarousel() {
  const track = document.querySelector("[data-js='carousel-track']");
  const dotsWrap = document.querySelector("[data-js='carousel-dots']");
  const carousel = document.querySelector("[data-js='carousel']");
  if (!track || !carousel) return;

  const slides = cvData.iotSlides;
  track.innerHTML = slides.map((s, i) => `
    <div class="slide slide-${i % 3}" data-index="${i}">
      ${s.img ? `<img class="slide-img" src="${s.img}" alt="${s.title}">` : (s.emoji ? `<div class="slide-emoji">${s.emoji}</div>` : '')}
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join("");

  dotsWrap.innerHTML = slides.map((_, i) =>
    `<button class="dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join("");

  let current = 0;
  const total = slides.length;

  const go = (i) => {
    current = (i + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll(".dot").forEach((d, di) =>
      d.classList.toggle("active", di === current));
  };

  carousel.querySelector(".prev").addEventListener("click", () => go(current - 1));
  carousel.querySelector(".next").addEventListener("click", () => go(current + 1));
  dotsWrap.querySelectorAll(".dot").forEach((d) =>
    d.addEventListener("click", () => go(parseInt(d.dataset.index, 10))));

  let startX = 0;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1));
  });

  let timer = setInterval(() => go(current + 1), 5000);
  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", () => { timer = setInterval(() => go(current + 1), 5000); });
}

/* ---------- 6. Scroll progress bar ---------- */
function injectScrollBar() {
  if (document.querySelector(".scroll-progress")) return;
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.innerHTML = `<span></span>`;
  document.body.prepend(bar);
  const fill = bar.querySelector("span");
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    fill.style.width = pct + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ---------- 7. Dark mode toggle ---------- */
function injectThemeToggle() {
  const header = document.querySelector("header");
  if (!header || header.querySelector(".theme-btn")) return;

  const btn = document.createElement("button");
  btn.className = "theme-btn";
  btn.setAttribute("aria-label", "Toggle dark mode");
  const setIcon = () =>
    btn.textContent = document.documentElement.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
  setIcon();

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      try { localStorage.setItem("cv-theme", "light"); } catch (e) {}
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      try { localStorage.setItem("cv-theme", "dark"); } catch (e) {}
    }
    setIcon();
  });

  // Insert before the menu button so it sits in the top-right cluster
  const menuBtn = header.querySelector(".menu-btn");
  if (menuBtn) menuBtn.parentNode.insertBefore(btn, menuBtn);
  else header.appendChild(btn);
}

/* ---------- 8. Copy to clipboard + toast ---------- */
function injectToast() {
  if (document.querySelector(".cv-toast")) return;
  const t = document.createElement("div");
  t.className = "cv-toast";
  document.body.appendChild(t);
}

function showToast(msg) {
  const t = document.querySelector(".cv-toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 1800);
}

function wireCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((b) => {
    b.addEventListener("click", async () => {
      const text = b.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
        showToast("Copied: " + text);
      } catch (e) {
        // Fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); showToast("Copied: " + text); }
        catch (_) { showToast("Copy failed"); }
        ta.remove();
      }
    });
  });
}

/* ---------- 9. PWA Custom Install Prompt Banner ---------- */
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Show our custom install banner if it's not dismissed already
  if (localStorage.getItem("cv-install-dismissed") !== "true") {
    showInstallBanner();
  }
});

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function isInStandaloneMode() {
  return ("standalone" in window.navigator) && window.navigator.standalone;
}

window.addEventListener("DOMContentLoaded", () => {
  // Show iOS install instructions banner after a short delay
  setTimeout(() => {
    if (isIOS() && !isInStandaloneMode() && localStorage.getItem("cv-ios-install-dismissed") !== "true") {
      showIOSInstallBanner();
    }
  }, 2500);
});

function showInstallBanner() {
  if (document.querySelector(".pwa-install-banner")) return;
  
  const banner = document.createElement("div");
  banner.className = "pwa-install-banner";
  banner.innerHTML = `
    <div class="pwa-banner-content">
      <img src="../images/icon-circle.png" alt="App Icon" class="pwa-banner-icon">
      <div class="pwa-banner-text">
        <h4>Install My CV PWA</h4>
        <p>Add to your home screen for quick offline access!</p>
      </div>
      <div class="pwa-banner-actions">
        <button class="pwa-btn-install" id="pwa-install-btn">Install</button>
        <button class="pwa-btn-close" id="pwa-close-btn" aria-label="Dismiss">✕</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
  
  // Trigger animation
  setTimeout(() => banner.classList.add("show"), 100);

  document.getElementById("pwa-install-btn").addEventListener("click", () => {
    banner.classList.remove("show");
    setTimeout(() => banner.remove(), 300);
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        deferredPrompt = null;
      });
    }
  });

  document.getElementById("pwa-close-btn").addEventListener("click", () => {
    banner.classList.remove("show");
    setTimeout(() => banner.remove(), 300);
    localStorage.setItem("cv-install-dismissed", "true");
  });
}

function showIOSInstallBanner() {
  if (document.querySelector(".pwa-install-banner")) return;
  
  const banner = document.createElement("div");
  banner.className = "pwa-install-banner ios-banner";
  banner.innerHTML = `
    <div class="pwa-banner-content">
      <img src="../images/icon-circle.png" alt="App Icon" class="pwa-banner-icon">
      <div class="pwa-banner-text">
        <h4>Install My CV PWA</h4>
        <p>Tap the Share button <span class="share-icon-placeholder">⎋</span> and select <strong>'Add to Home Screen'</strong> 📲</p>
      </div>
      <div class="pwa-banner-actions">
        <button class="pwa-btn-close" id="pwa-ios-close-btn">Got it</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
  
  // Trigger animation
  setTimeout(() => banner.classList.add("show"), 100);

  document.getElementById("pwa-ios-close-btn").addEventListener("click", () => {
    banner.classList.remove("show");
    setTimeout(() => banner.remove(), 300);
    localStorage.setItem("cv-ios-install-dismissed", "true");
  });
}
