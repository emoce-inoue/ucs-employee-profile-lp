window.addEventListener('load', () => {
  document.querySelectorAll('.js-load').forEach((loadElement) => {
    loadElement.classList.add('js-load--loaded');
  });
});
