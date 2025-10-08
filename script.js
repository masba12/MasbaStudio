// Banner Slideshow (fade in / fade out)
let slideIndex = 0;
const slides = document.querySelectorAll(".banner-slideshow img");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === slideIndex) {
      slide.classList.add("active");
    }
  });

  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;

  setTimeout(showSlides, 4000); // tukar gambar setiap 4 saat
}

if (slides.length > 0) {
  showSlides();
}

// WhatsApp Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsappForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
      const phone = "60123456789"; // tukar ke nombor WhatsApp anda

      const url = `https://wa.me/${phone}?text=Hello, my name is ${encodeURIComponent(name)}.%0A${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  }

    // Sidebar Menu for Mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    }

});
