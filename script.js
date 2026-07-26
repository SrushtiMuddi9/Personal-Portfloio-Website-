// ============================
// Mobile nav toggle
// ============================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ============================
// Dark / light theme toggle
// ============================
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'light' ? '🌞' : '🌙';
}

// Default to dark theme (in-memory only, no persistence)
applyTheme('dark');

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(current);
});

// ============================
// Back to top button
// ============================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================
// Contact form (front-end only demo)
// ============================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // NOTE: This is a static, front-end-only demo.
  // To make this form actually send messages, connect it to a service such as
  // Formspree, EmailJS, Netlify Forms, or your own backend API endpoint.
  formStatus.textContent = 'Thanks for reaching out! (Connect this form to a backend or service like Formspree/EmailJS to receive real messages.)';
  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = '';
  }, 6000);
});

// ============================
// Footer year
// ============================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================
// Highlight active nav link on scroll
// ============================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach((a) => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});
