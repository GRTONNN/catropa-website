document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backBtn');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Show back button on scroll down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {  // appears after scrolling 100px
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  // Show back button when clicking nav links (except Home)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetHash = link.getAttribute('href');
      if (targetHash !== '#home') {
        backBtn.classList.add('visible');
      }
    });
  });

  // Scroll to top when clicking Back button
  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
