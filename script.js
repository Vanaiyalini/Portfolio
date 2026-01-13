// ===== Reveal (single observer) =====
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Menu panel (Editorial style) =====
const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");

function openMenu() {
  menuPanel.classList.add("open");
  menuPanel.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
}
function closeMenu() {
  menuPanel.classList.remove("open");
  menuPanel.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn?.addEventListener("click", () => {
  const isOpen = menuPanel.classList.contains("open");
  isOpen ? closeMenu() : openMenu();
});

menuPanel?.addEventListener("click", (e) => {
  // Close if clicked outside links area
  if (e.target === menuPanel) closeMenu();
});

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Smooth scroll for menu links
document.querySelectorAll('.menu-links a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
    document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Tabs jump row (like categories) =====
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const id = btn.dataset.jump;
    if (id) document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  });
});

// Gesture: drag-to-scroll tabs row
const tabRow = document.getElementById("tabRow");
let isDown = false, startX = 0, scrollLeft = 0;

tabRow?.addEventListener("pointerdown", (e) => {
  isDown = true;
  tabRow.setPointerCapture(e.pointerId);
  startX = e.clientX;
  scrollLeft = tabRow.scrollLeft;
});
tabRow?.addEventListener("pointermove", (e) => {
  if (!isDown) return;
  const dx = e.clientX - startX;
  tabRow.scrollLeft = scrollLeft - dx;
});
tabRow?.addEventListener("pointerup", () => { isDown = false; });
tabRow?.addEventListener("pointercancel", () => { isDown = false; });

// ===== Theme (light/dark/auto) =====
const root = document.documentElement;
const themeBtns = document.querySelectorAll(".theme-btn");

function setTheme(mode) {
  themeBtns.forEach(b => b.classList.toggle("is-active", b.dataset.theme === mode));

  if (mode === "auto") {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    localStorage.setItem("theme-mode", "auto");
    return;
  }

  root.setAttribute("data-theme", mode);
  localStorage.setItem("theme-mode", mode);
}

const savedMode = localStorage.getItem("theme-mode") || "auto";
setTheme(savedMode);

themeBtns.forEach(b => b.addEventListener("click", () => setTheme(b.dataset.theme)));

// Update auto theme if system changes
window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if ((localStorage.getItem("theme-mode") || "auto") === "auto") setTheme("auto");
});

// ===== Gallery filter =====
const filters = Array.from(document.querySelectorAll(".gfilter"));
const items = Array.from(document.querySelectorAll(".gitem"));

function setActiveFilter(btn) {
  filters.forEach(b => {
    const active = b === btn;
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function applyFilter(filter) {
  items.forEach(it => {
    const match = filter === "all" || (it.dataset.category || "").includes(filter);
    it.style.display = match ? "" : "none";
  });
}

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    setActiveFilter(btn);
    applyFilter(btn.dataset.filter);
  });
});

// ===== Lightbox =====
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");
const galleryImgs = Array.from(document.querySelectorAll(".gitem img"));

function openLb(src) {
  lbImg.src = src;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLb() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lbImg.src = "";
}

galleryImgs.forEach(img => img.addEventListener("click", () => openLb(img.src)));
lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLb(); });
lbClose?.addEventListener("click", closeLb);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

// ===== Contact form status (Formspree) =====
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  note.textContent = "Sending…";

  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      note.textContent = "Thanks! I’ll reply shortly.";
    } else {
      note.textContent = "Something went wrong. Please try again.";
    }
  } catch {
    note.textContent = "Network error. Please check your connection.";
  }
});
