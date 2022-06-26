//  Navbar Toggling
const navbarToggleButton = document.querySelector('.navbar-toggle-button');
const navbarContainer = document.querySelector('.navbar-container');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggleButton.addEventListener('click', function () {
  const navbarContainerHeight = navbarContainer.getBoundingClientRect().height;
  const linksHeight = navbarLinks.getBoundingClientRect().height;
  if (navbarContainerHeight === 0) {
    navbarContainer.style.height = `${linksHeight / 10}rem`;
  } else {
    navbarContainer.style.height = `${0}rem`;
  }
});

// Dynamically setting Copyright date

const copyrightDate = document.querySelector('.copyright-date');

const currentYear = new Date().getFullYear();
copyrightDate.textContent = currentYear;

//Show top
const topButton = document.querySelector('.top-button');
window.addEventListener('scroll', function () {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 200) {
    topButton.classList.add('show-top-button');
  } else {
    topButton.classList.remove('show-top-button');
  }
});

// Testimonails Slider
const testimonails = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

testimonails.forEach(function (testimonail, index) {
  testimonail.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {
  counter++;
  if (counter < 3) {
    slideTestimonails(counter);
  } else {
    counter = 0;
    slideTestimonails(counter);
  }
});

prevBtn.addEventListener('click', function () {
  counter--;
  if (counter >= 0) {
    slideTestimonails(counter);
  } else {
    counter = testimonails.length - 1;
    slideTestimonails(counter);
  }
});

function slideTestimonails(counter) {
  testimonails.forEach(function (testimonail) {
    testimonail.style.transform = `translateX(-${counter * 100}%)`;
  });
}
