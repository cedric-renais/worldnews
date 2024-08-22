import './sass/style.scss';

// On selectione les éléments du DOM
const body = document.querySelector('body');
const main = document.querySelector('main');
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
  // On retire l'attribut inert pour permettre l'accès au menu avec le clavier
  navContent.removeAttribute('inert', '');
  // On ajoute l'attribut inert pour empêcher l'accès au reste de la page avec le clavier quand le menu est ouvert
  main.setAttribute('inert', '');
  // Placement du focus sur le bouton de close à l'ouverture du menu
  navClose.focus();
}

// Fonction pour fermer le menu mobile
function closeMobileMenu() {
  // On retire l'attribut aria-expanded pour indiquer que le menu est fermé
  navOpen.setAttribute('aria-expanded', 'false');
  // On retire la classe noscroll pour permettre le scroll de la page
  body.classList.remove('noscroll');
  // On ajoute l'attribut inert pour empêcher l'accès au menu avec le clavier
  navContent.setAttribute('inert', '');
  // On retire l'attribut inert pour permettre l'accès au reste de la page avec le clavier quand le menu est fermé
  main.removeAttribute('inert', '');
  // Placement du focus sur le bouton open à la fermeture du menu
  navOpen.focus();
}

// Fonction pour gérer l'affichage du menu en fonction de la taille de l'écran
function setupNav(e) {
  // Si l'écran est de taille mobile
  if (e.matches) {
    // On ajoute l'attribut inert pour empêcher l'accès au menu avec le clavier
    navContent.setAttribute('inert', '');

    // On ajoute un setTimeout pour éviter un bug d'affichage
    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 200);
  }
  // Si l'écran est de taille desktop
  else {
    // On retire l'attribut inert pour permettre l'accès au menu avec le clavier
    navContent.removeAttribute('inert', '');
    main.removeAttribute('inert', '');
    // On retire les styles display
    navContent.style.display = '';
  }
}

// On ajoute les écouteurs d'événements
navOpen.addEventListener('click', openMobileMenu);
navClose.addEventListener('click', closeMobileMenu);

// On vérifie la taille de l'écran au chargement de la page
mediaQuery.addEventListener('change', (e) => {
  setupNav(e);
});

// Pour les utilisateurs qui naviguent avec le clavier
document.addEventListener('keyup', (e) => {
  if (e.key === 'tab') {
  }
});
