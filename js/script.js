const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Category filter
const tabs = document.querySelectorAll(".tab");
const products = document.querySelectorAll(".product-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    products.forEach(product => {
      if (product.dataset.category === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Testimonial slider
let current = 0;
const testimonials = document.querySelectorAll(".testimonial");

document.getElementById("next").addEventListener("click", () => {
  testimonials[current].classList.remove("active");
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
  testimonials[current].classList.remove("active");
  current = (current - 1 + testimonials.length) % testimonials.length;
  testimonials[current].classList.add("active");
});
