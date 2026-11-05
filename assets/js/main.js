(function () {
  "use strict";

  localStorage.removeItem("theme"); // clear any old light-mode preference

  /* ---------------- Project data ----------------
     Edit this list to add / reorder projects.
     cat: any of "ai", "mobile", "web"
     fit: "contain" for wide logos, "pad" for square logos that need breathing room
  ------------------------------------------------ */
  const projects = [
    {
      title: "EyeVoice",
      meta: "AI Accessibility App · 2024",
      featured: true,
      cat: ["ai", "mobile"],
      img: "assets/img/eyevoice.png.jpeg",
      summary: "A Flutter app that turns printed text into spoken summaries for people with low vision or dyslexia.",
      points: [
        "Unified 6 tools (OCR, AI summarization, speech-to-text and text-to-speech) into one flow that turns printed text into spoken summaries.",
        "Added Firebase-backed caregiver support with real-time alerts and progress tracking.",
        "Earned 4.8/5 user satisfaction and a 60% reduction in reported reading difficulty."
      ],
      tags: ["Flutter", "Dart", "Firebase", "OCR", "Speech APIs"],
      links: [{ label: "GitHub", url: "https://github.com/4khadija/Eye_Voice", icon: "bi-github" }]
    },
    {
      title: "iMouse",
      meta: "Eye-Gaze Cursor Control · 2024",
      featured: true,
      cat: ["ai"],
      img: "assets/img/iMouse.png",
      summary: "Hands-free computer control using only a webcam, your eyes and a blink.",
      points: [
        "Real-time eye-gaze cursor using OpenCV and Dlib facial landmarks to map gaze to screen coordinates for fully hands-free control.",
        "Over 90% accuracy, with blink-triggered clicks detected via eye aspect ratio (EAR).",
        "Adaptive EAR and illumination thresholds, plus a PyQt5 settings panel for per-user calibration."
      ],
      tags: ["Python", "OpenCV", "Dlib", "Pynput", "PyQt5"],
      links: [{ label: "GitHub", url: "https://github.com/4khadija", icon: "bi-github" }]
    },
    {
      title: "Caravanz",
      meta: "Personalized Travel Planner · 2023",
      featured: true,
      cat: ["ai", "web"],
      img: "assets/img/caravanz_Logo.png",
      fit: "pad",
      summary: "A conversational trip planner that predicts the cheapest fares and builds an itinerary around you.",
      points: [
        "Trained a Random Forest on 2,000+ flight records (airline, route, timing, duration, stops) to predict the cheapest fares with 90% accuracy.",
        "Built a conversational planner on AWS Lex with a JavaScript front end that recommends flights, hotels, attractions and activities."
      ],
      tags: ["Random Forest", "AWS Lex", "JavaScript"],
      links: [{ label: "Live demo", url: "https://4khadija.github.io/Caravanz/", icon: "bi-box-arrow-up-right" }]
    },
    {
      title: "GoldCast",
      meta: "Price Prediction App",
      cat: ["ai", "mobile"],
      img: "assets/img/goldcast.png",
      summary: "Gold price forecasting with a Random Forest model inside a clean Flutter app.",
      points: [
        "Random Forest model predicting gold prices with 85% accuracy on 2,000+ rows of historical data.",
        "Shipped inside a Flutter mobile app designed for quick, friendly interaction."
      ],
      tags: ["Python", "scikit-learn", "Flutter"],
      links: [{ label: "GitHub", url: "https://github.com/4khadija/Gold-Price-Prediction", icon: "bi-github" }]
    },
    {
      title: "Solace",
      meta: "Health Web App",
      cat: ["web"],
      img: "assets/img/portfolio/solace_logo.png",
      fit: "contain",
      summary: "Appointments, medication, insurance and mental-health support in one place.",
      points: [
        "Web app for booking appointments and managing basic medication, insurance and equipment usage.",
        "Includes 'Insight', a space to help people cope with anxiety and depression."
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      links: [{ label: "Live demo", url: "https://4khadija.github.io/Solace/", icon: "bi-box-arrow-up-right" }]
    },
    {
      title: "Mobile Theft Protection",
      meta: "Android App",
      cat: ["mobile"],
      img: "assets/img/mobiletheft_logo.jpeg",
      summary: "An alarm that sounds when someone moves, unplugs or pockets your phone.",
      points: [
        "Uses motion, charger and proximity sensors to detect tampering.",
        "Triggers a loud alarm when the phone is moved, unplugged or taken out of a pocket."
      ],
      tags: ["Java", "Android"],
      links: [{ label: "GitHub", url: "https://github.com/4khadija/Mobile-Theft-App", icon: "bi-github" }]
    },
    {
      title: "Whiteboard",
      meta: "Web App",
      cat: ["web"],
      img: "assets/img/whiteboard_logo.png",
      summary: "An online whiteboard with sticky notes, images, undo/redo and export.",
      points: [
        "Draw, erase, undo and redo on an HTML canvas.",
        "Add sticky notes and images, then download the canvas."
      ],
      tags: ["HTML", "CSS", "JavaScript", "Canvas"],
      links: [{ label: "Live demo", url: "https://4khadija.github.io/Whiteboard/", icon: "bi-box-arrow-up-right" }]
    },
    {
      title: "GreenMinds",
      meta: "Web App",
      cat: ["web"],
      img: "assets/img/greenminds_logo.jpeg",
      summary: "Request an area clean-up from nearby NGO workers, in support of Swachh Bharat Abhiyan.",
      points: ["A website connecting citizens with nearby NGO workers to get areas cleaned up."],
      tags: ["HTML", "CSS"],
      links: [{ label: "Live demo", url: "https://4khadija.github.io/GreenMinds/", icon: "bi-box-arrow-up-right" }]
    },
    {
      title: "My Resume App",
      meta: "Android App",
      cat: ["mobile"],
      img: "assets/img/resumeapp_logo.jpeg",
      summary: "My education, skills, certifications and experience in one native Android app.",
      points: ["An Android app built in Java that presents my education, skills, certifications and experience in one place."],
      tags: ["Java", "Android"],
      links: [{ label: "GitHub", url: "https://github.com/4khadija/MyResume-App", icon: "bi-github" }]
    }
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------------- Render projects ---------------- */
  const grid = $("#projectGrid");
  grid.innerHTML = projects.map((p, i) => `
    <button class="project reveal${p.featured ? " featured" : ""}" data-index="${i}" data-cat="${p.cat.join(" ")}">
      ${p.featured ? '<span class="star">Featured</span>' : ""}
      <div class="project-media"><img class="cover${p.fit ? " " + p.fit : ""}" src="${p.img}" alt="${p.title}" loading="lazy"><span class="play" aria-hidden="true"><i class="bi bi-play-fill"></i></span></div>
      <div class="project-body">
        <span class="project-meta">${p.meta}</span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <span class="project-more">View details <i class="bi bi-arrow-right"></i></span>
      </div>
    </button>`).join("");

  /* ---------------- Filters ---------------- */
  $$(".filters button").forEach(btn => btn.addEventListener("click", () => {
    $$(".filters button").forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".project").forEach(card => {
      const show = f === "all" || card.dataset.cat.split(" ").includes(f);
      card.classList.toggle("hide", !show);
      if (show) {
        card.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }],
          { duration: 400, easing: "cubic-bezier(.22,.61,.36,1)" });
      }
    });
  }));

  /* ---------------- Modal ---------------- */
  const modal = $("#modal");
  let lastFocus = null;

  function openModal(p) {
    lastFocus = document.activeElement;
    $("#modalImg").src = p.img;
    $("#modalImg").alt = p.title;
    $("#modalImg").className = "cover" + (p.fit ? " " + p.fit : "");
    $("#modalMeta").textContent = p.meta;
    $("#modalTitle").textContent = p.title;
    $("#modalPoints").innerHTML = p.points.map(x => `<li>${x}</li>`).join("");
    $("#modalTags").innerHTML = p.tags.map(t => `<span>${t}</span>`).join("");
    $("#modalLinks").innerHTML = p.links.map((l, i) =>
      `<a class="btn${i ? " btn-ghost" : ""}" href="${l.url}" target="_blank" rel="noopener"><i class="bi ${l.icon}"></i> ${l.label}</a>`).join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    $(".modal-close").focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }
  grid.addEventListener("click", e => {
    const card = e.target.closest(".project");
    if (card) openModal(projects[+card.dataset.index]);
  });
  $$("[data-close]", modal).forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  /* ---------------- Reveal on scroll ---------------- */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      // small stagger for siblings revealed together
      const siblings = $$(".reveal:not(.in)", el.parentElement);
      el.style.transitionDelay = Math.min(siblings.indexOf(el), 4) * 70 + "ms";
      el.classList.add("in");
      revealObs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach(el => revealObs.observe(el));

  /* ---------------- Count-up stats ---------------- */
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, end = +el.dataset.count;
      const pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
      const start = performance.now(), dur = 1400;
      const tick = now => {
        const t = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - t, 3);
        el.textContent = pre + Math.round(end * eased) + suf;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObs.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach(el => countObs.observe(el));

  /* ---------------- Nav: scrolled state, progress, active link ---------------- */
  const nav = $("#nav"), bar = $(".progress-bar");
  const links = $$(".nav-links a");
  const sections = links.map(a => $(a.getAttribute("href")));

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 10);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

    let current = null;
    const probe = y + innerHeight * 0.35;
    sections.forEach((s, i) => { if (s && s.offsetTop <= probe) current = i; });
    if (innerHeight + y >= document.documentElement.scrollHeight - 4) current = sections.length - 1;
    links.forEach((a, i) => a.classList.toggle("active", i === current));
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile menu ---------------- */
  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.innerHTML = `<i class="bi ${open ? "bi-x-lg" : "bi-list"}"></i>`;
  });
  links.forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.innerHTML = '<i class="bi bi-list"></i>';
  }));

  /* ---------------- Copy email ---------------- */
  const toast = $("#toast");
  const showToast = msg => {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => toast.classList.remove("show"), 2200);
  };
  $("#copyEmail").addEventListener("click", async e => {
    const email = e.currentTarget.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email copied to clipboard ✓");
    } catch {
      location.href = "mailto:" + email;
    }
  });

  $("#year").textContent = new Date().getFullYear();
})();
