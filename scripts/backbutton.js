document.addEventListener('DOMContentLoaded', () => {

  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {

    // Show button when user scrolls down
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('button--is-visible');
      } else {
        scrollTopBtn.classList.remove('button--is-visible');
      }
    });

    // On click, scroll smoothly to the top
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});