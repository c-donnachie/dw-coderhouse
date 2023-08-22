var swiper = new Swiper(".slide-content", {
  slidesPerView: 6,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1250: {
      slidesPerView: 6,
    },
  },
})

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