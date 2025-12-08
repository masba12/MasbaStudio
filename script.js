/* ==========================
   MASBA STUDIO - SCRIPT.JS
   ========================== */

// Sidebar toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

if (menuToggle && sidebar && closeBtn) {
  menuToggle.addEventListener('click', () => sidebar.classList.add('active'));
  closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));
}

// Active Nav Link Highlight
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll('.nav-links a, .sidebar a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Scroll Animation for sections
const fadeInElements = document.querySelectorAll("section, .service-card, .product-card, .mission-card");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

fadeInElements.forEach(el => appearOnScroll.observe(el));

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
