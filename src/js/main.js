// Disclaimer: The code below was mostly generated using ChatGPT.

// Navbar resize on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("small");
  } else {
    navbar.classList.remove("small");
  }
});

// Smooth scrolling + position indicator
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth"});
  });
});

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + navbar.offsetHeight + 400;
  links.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (section) {
      if (section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop) {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
});

// Carousel
let index = 0;
const slides = document.querySelectorAll(".slide");
const showSlide = n => {
  slides.forEach(s => s.classList.remove("active"));
  slides[n].classList.add("active");
};
document.querySelector(".next").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};
document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};
showSlide(index);

// Modal
const items = document.querySelectorAll(".item");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

modals.forEach(m => m.style.display = "none");

items.forEach(item => {
  item.addEventListener("click", () => {
    const modal = document.getElementById(item.dataset.modal);
    modal.style.display = "flex";
  });
});

closes.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  modals.forEach(m => {
    if (e.target === m) m.style.display = "none";
  });
});
