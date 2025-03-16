document.addEventListener("DOMContentLoaded", function () {
    let navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener("click", function () {
        if (navbarToggler.innerHTML.includes("navbar-toggler-icon")) {
            navbarToggler.innerHTML = "&#10006;";
        } else {
            navbarToggler.innerHTML = "<span class='navbar-toggler-icon'></span>";
        }
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-box");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto Slide every 4 seconds
setInterval(nextSlide, 4000);