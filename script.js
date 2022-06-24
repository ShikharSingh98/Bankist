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
