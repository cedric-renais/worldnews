import './sass/style.scss';

// On selectione les éléments du DOM
const body = document.querySelector('body');
const navOpen = document.querySelector('.nav__open');
const navClose = document.querySelector('.nav__close');
const mediaQuery = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

// Fonction pour ouvrir le menu mobile
function openMobileMenu() {
  // On ajoute l'attribut aria-expanded pour indiquer que le menu est ouvert
  navOpen.setAttribute('aria-expanded', 'true');
  // On ajoute la classe noscroll pour empêcher le scroll de la page
  body.classList.add('noscroll');
}

// Fonction pour fermer le menu mobile
function closeMobileMenu() {
  // On retire l'attribut aria-expanded pour indiquer que le menu est fermé
  navOpen.setAttribute('aria-expanded', 'false');
  // On retire la classe noscroll pour permettre le scroll de la page
  body.classList.remove('noscroll');
}

// Fonction pour gérer l'affichage du menu en fonction de la taille de l'écran
function setupNav(e) {
  // Si l'écran est de taille mobile
  if (e.matches) {
    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 200);
  }
  // Si l'écran est de taille desktop
  else {
    navContent.style.display = '';
  }
}

navOpen.addEventListener('click', openMobileMenu);
navClose.addEventListener('click', closeMobileMenu);

mediaQuery.addEventListener('change', (e) => {
  setupNav(e);
});

// Pour les utilisateurs qui naviguent avec le clavier
document.addEventListener('keyup', (e) => {
  if (e.key === 'tab') {
  }
});
