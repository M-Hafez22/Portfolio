import {menuBtn, hamburger, nav, menuNav, navItems} from "./config";

let showMenu = false;

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}


export const burger = () => {
  menuBtn.addEventListener('click', toggleMenu);
  menuNav.addEventListener('click', toggleMenu);
}