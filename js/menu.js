// Menu
const menuCheckbox = document.getElementById('menu-checkbox');
    const mobileNav = document.getElementById('mobile-nav');

    menuCheckbox.addEventListener('change', () => {
      if (menuCheckbox.checked) {
        mobileNav.style.display = 'block';
      } else {
        mobileNav.style.display = 'none';
      }
    });