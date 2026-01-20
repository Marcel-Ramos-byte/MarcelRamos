(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav.nav-menu');
  const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

  const closeMenu = () => {
    if (!navMenu || !toggle) {
      return;
    }
    navMenu.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          closeMenu();
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });
  }
})();
