import './sass/style.scss';

///////////////////////////////////////
// On selectione les éléments du DOM //
///////////////////////////////////////
const buttonOpen = document.querySelector('.header__open');
const buttonClose = document.querySelector('.header__close');
const mediaQuery = window.matchMedia('(width < 40em)');
const menu = document.querySelector('.header__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

////////////////////////////////////////////////////////////////
// Fonction pour ouvrir le menu                               //
// On change l'attribut aria-expanded pour le bouton sur true //
// On enlève l'attribut inert sur le menu                     //
// On enlève l'attribut style pour la transition              //
// On ajoute l'attribut inert sur le main                     //
// On ajoute la classe noscroll sur le body                   //
// On focus sur le bouton de fermeture                        //
////////////////////////////////////////////////////////////////
function openMenu() {
  buttonOpen.setAttribute('aria-expanded', 'true');
  menu.removeAttribute('inert');
  menu.removeAttribute('style');
  main.setAttribute('inert', '');
  body.classList.add('noscroll');
  buttonClose.focus();
}

/////////////////////////////////////////////////////////////////
// Fonction pour fermer le menu                                //
// On change l'attribut aria-expanded pour le bouton sur false //
// On ajoute l'attribut inert sur le menu                      //
// On ajoute un setTimeout pour enlever la transition          //
// On enlève l'attribut inert sur le main                      //
// On enlève la classe noscroll sur le body                    //
// On focus sur le bouton d'ouverture                          //
/////////////////////////////////////////////////////////////////
function closeMenu() {
  buttonOpen.setAttribute('aria-expanded', 'false');
  menu.setAttribute('inert', '');
  main.removeAttribute('inert');
  body.classList.remove('noscroll');
  buttonOpen.focus();

  setTimeout(() => {
    menu.style.transition = 'none';
  }, 200);
}

///////////////////////////////////////////////////////////
// On check si le media query pour les mobiles est actif //
// Si oui, on ajoute l'attribut inert sur le menu        //
// et on enlève la transition pour éviter les bugs       //
// Si non, on appelle la fonction closeMenu()            //
// et on enlève l'attribut inert sur le menu             //
///////////////////////////////////////////////////////////
function setupMenu(e) {
  if (e.matches) {
    menu.setAttribute('inert', '');
    menu.style.transition = 'none';
  } else {
    closeMenu();
    menu.removeAttribute('inert');
  }
}

/////////////////////////////////////////////////////////////////
// On appelle la fonction setupMenu() pour initialiser le menu //
// On ajoute un event listener sur le media query              //
// Si le media query change, on appelle la fonction setupMenu  //
/////////////////////////////////////////////////////////////////
setupMenu(mediaQuery);
mediaQuery.addEventListener('change', function (e) {
  setupMenu(e);
});

///////////////////////////////////////////////////////////////////////////////////////
// On ajoute les event listeners sur les boutons d'ouverture et de fermeture du menu //
///////////////////////////////////////////////////////////////////////////////////////
buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);
