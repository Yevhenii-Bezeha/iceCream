(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');
  const mobileListClose = document.querySelector('[data-anchor-close]');
  const mobileBuyClose = document.querySelector('[data-buy-close]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    // document.body.classList.toggle('body-hidden');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    // document.body.classList.toggle('body-hidden');
  });

    mobileListClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    // document.body.classList.toggle('body-hidden');
  });

      mobileBuyClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    // document.body.classList.toggle('body-hidden');
  });

})();
