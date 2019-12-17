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

AOS.init({
  disable: 'phone'
  // disable: function() {
  //   const maxWidth = 600;
  //   console.log('call');
  //   return window.innerWidth < maxWidth;
  // }
});