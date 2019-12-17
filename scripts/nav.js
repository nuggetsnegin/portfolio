const menu = document.querySelector('.mobileMenu');
const nav = document.querySelector('.secondNav');
const btn = menu.querySelector('.navTarget');
btn.addEventListener('click', event => {
  if (menu.className.indexOf('active') === -1) {
    menu.classList.add('active');
    nav.style.cssText = 'display: flex';
  } else {
    menu.classList.remove('active');
    nav.style.cssText = 'display: none';
  }
})