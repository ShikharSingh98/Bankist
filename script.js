const navbarToggleButton = document.querySelector('.navbar-toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggleButton.addEventListener('click', function () {
  navbarLinks.classList.toggle('show-links');
});
