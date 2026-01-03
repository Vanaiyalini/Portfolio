// Smooth scroll for nav links
document.querySelectorAll('.nav-links a[href^="#"], .hero-actions a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky header style on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// IntersectionObserver for reveal animations
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach(el => observer.observe(el));

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// Contact form -> send to Formspree + show status message
const form = document.querySelector('.contact-form');
const formNote = document.getElementById('form-note');

if (form && formNote) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // we stop default, but send manually via fetch

    formNote.textContent = 'Sending…';

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        form.reset();
        formNote.textContent = 'Thanks for reaching out! I will reply shortly.';
      } else {
        formNote.textContent = 'Something went wrong. Please try again.';
      }
    } catch (err) {
      formNote.textContent = 'Network error. Please check your connection.';
    }
  });
}


const root = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleIcon = document.getElementById("theme-toggle-icon");

  // 1. Load saved theme or system preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    root.setAttribute("data-theme", savedTheme);
  } else {
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  // Set correct icon
  function updateIcon() {
    const current = root.getAttribute("data-theme");
    themeToggleIcon.textContent = current === "dark" ? "☀️" : "🌙";
  }
  updateIcon();

  // 2. Toggle on click
  themeToggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const nextTheme = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateIcon();
  });

  document.getElementById('cvBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = 'assets/Pirakash_CV.pdf';
  link.download = 'Pirakash_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const revealEls = document.querySelectorAll('.reveal');

  const observerabout = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // If you don't want it to animate again when scrolled back:
          observerabout.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach(el => observerabout.observe(el));

   const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.85) el.classList.add('visible');
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // initial trigger

  const revealss = document.querySelectorAll('.reveal');

  const observerpills = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observerpills.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealss.forEach((el) => observerpills.observe(el));

   const revealz = document.querySelectorAll('.reveal');

  const observerhero = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observerhero.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealz.forEach((el) => observerhero.observe(el));

  /* =========================
   Filter + Masonry + Reveal
   ========================= */

const grid = document.getElementById("galleryGrid");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const items = Array.from(document.querySelectorAll(".gallery-item"));

/* ----- Masonry with CSS Grid Row Spans ----- */
function getRowHeight() {
  const styles = getComputedStyle(grid);
  return parseInt(styles.getPropertyValue("grid-auto-rows"), 10);
}

function getRowGap() {
  const styles = getComputedStyle(grid);
  return parseInt(styles.getPropertyValue("gap"), 10);
}

function resizeMasonryItem(item) {
  if (item.style.display === "none") return;

  const img = item.querySelector("img");
  if (!img) return;

  const rowHeight = getRowHeight();
  const rowGap = getRowGap();

  // height of the image after it renders
  const itemHeight = img.getBoundingClientRect().height;

  // calculate row span
  const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = `span ${rowSpan}`;
}

function resizeAllMasonryItems() {
  items.forEach(resizeMasonryItem);
}

/* Resize after each image loads */
items.forEach(item => {
  const img = item.querySelector("img");
  if (!img) return;

  if (img.complete) {
    resizeMasonryItem(item);
  } else {
    img.addEventListener("load", () => resizeMasonryItem(item));
  }
});

window.addEventListener("load", () => {
  resizeAllMasonryItems();
  revealObserverStart();
});

window.addEventListener("resize", () => {
  // small debounce
  clearTimeout(window.__galleryResizeTimer);
  window.__galleryResizeTimer = setTimeout(resizeAllMasonryItems, 120);
});

/* ----- Filtering ----- */
function setActiveButton(activeBtn) {
  filterButtons.forEach(btn => {
    const isActive = btn === activeBtn;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function applyFilter(filter) {
  grid.classList.add("is-filtering");

  // 1) First pass: decide what should be shown
  const shouldShow = new Map();

  items.forEach(item => {
    const cats = (item.dataset.category || "")
      .split(" ")
      .map(c => c.trim())
      .filter(Boolean);

    const match = filter === "all" || cats.includes(filter);
    shouldShow.set(item, match);

    if (match) {
      // bring back to layout
      item.style.display = "";
    }
  });

  // 2) Next frame: animate in visible ones
  requestAnimationFrame(() => {
    items.forEach(item => {
      if (shouldShow.get(item)) {
        item.classList.remove("is-hidden");
      } else {
        item.classList.add("is-hidden");
      }
    });

    // update masonry for visible items
    requestAnimationFrame(() => resizeAllMasonryItems());
  });

  // 3) After fade-out finish: remove hidden from layout
  clearTimeout(window.__filterHideTimer);
  window.__filterHideTimer = setTimeout(() => {
    items.forEach(item => {
      if (!shouldShow.get(item)) {
        item.style.display = "none";
        item.style.gridRowEnd = "";
      }
    });

    grid.classList.remove("is-filtering");
    resizeAllMasonryItems();
  }, 220);
}


filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setActiveButton(btn);
    applyFilter(btn.dataset.filter);
  });
});

/* ----- Reveal on scroll ----- */
let revealObserver;

function revealObserverStart() {
  const revealEls = document.querySelectorAll(".reveal");

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.15
  });

  revealEls.forEach(el => revealObserver.observe(el));
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let galleryImages = Array.from(document.querySelectorAll(".gallery-item img"));
let currentIndex = 0;

function openLightbox(index){
  currentIndex = index;
  lightboxImg.src = galleryImages[index].src;
  lightbox.classList.add("show");
}

function closeLightbox(){
  lightbox.classList.remove("show");
}

galleryImages.forEach((img, index) => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => openLightbox(index));
});

lightbox.addEventListener("click", closeLightbox);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});




