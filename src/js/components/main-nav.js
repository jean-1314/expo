
  const mainNav = document.querySelector('.main-nav');
  const mainNavBtn = document.querySelector('.main-nav__toggle');
  const mainNavLink = document.querySelectorAll('.main-nav__link');
  const mainLogo = document.querySelector('.main-nav__logo');


  mainNav.classList.add('main-nav--closed');
  const openNav = () => {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    if (window.innerWidth < 768) {
      document.body.classList.add('no-overflow');
    }
  };

  const closeNav = () => {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    if (window.innerWidth < 768) {
      document.body.classList.remove('no-overflow');
    }
  };


  mainNavBtn.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--closed')) {
      openNav();
    } else {
      closeNav();
    }
  });
  mainNavLink.forEach((e) => {
    e.addEventListener('click', () => {
      closeNav();
    });
  });
  if (window.innerWidth < 768) {
    mainLogo.addEventListener('click', () => {
      closeNav();
    });
  }
