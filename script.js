//  Navbar Toggling
const navbarToggleButton = document.querySelector('.navbar-toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggleButton.addEventListener('click', function () {
  navbarLinks.classList.toggle('show-links');
});

// Dynamically setting Copyright date

const copyrightDate = document.querySelector('.copyright-date');

const currentYear = new Date().getFullYear();
copyrightDate.textContent = currentYear;
