(() => {
  const refs = {
    openModalaboutBtn: document.querySelector('[data-about-modal-open]'),
    closeModalaboutBtn: document.querySelector('[data-about-modal-close]'),
    modalabout: document.querySelector('[data-about-modal]'),
  };

  refs.openModalaboutBtn.addEventListener('click', toggleModalabout);
  refs.closeModalaboutBtn.addEventListener('click', toggleModalabout);

  function toggleModalabout() {
    refs.modalabout.classList.toggle('is-hidden-about-modal');
  }
})();