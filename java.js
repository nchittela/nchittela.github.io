const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar a');
const h1 = document.querySelector('.h1');

allEventListners();

function allEventListners() {
  hamburger.addEventListener('click', togglerClick);
}

function togglerClick() {
  hamburger.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
  h1.classList.toggle('mainNavopen');
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
