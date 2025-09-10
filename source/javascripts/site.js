const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('max-h-0')) {
    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-screen');
  } else {
    mobileMenu.classList.add('max-h-0');
    mobileMenu.classList.remove('max-h-screen');
  }
});
