import {menuBtn, hamburger, nav, menuNav, navItems} from "./config";

function toggleMenu() {
  // toggle burger button
  hamburger.classList.toggle('open');
  // toggle menu 
  nav.classList.toggle('open');
  menuNav.classList.toggle('open');
  // Animate menu items
  navItems.forEach((item, i) => {
    item.classList.toggle('open');
    item.style.transitionDelay = `${(i * 0.1) + 0.2}s`;
    });
}

export const burger = () => {
  menuBtn.addEventListener('click', toggleMenu);
  menuNav.addEventListener('click', toggleMenu);
}