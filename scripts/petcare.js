document.addEventListener('DOMContentLoaded', () => {

  const accordionItems = document.querySelectorAll('.accordion__item');

  // Add click event to each accordion header
  accordionItems.forEach(item => {
    
    const header = item.querySelector('.accordion__header');

    // Make sure header exists
    if (header) {
      header.addEventListener('click', () => {
        // Toggle 'active' class to open/close
        item.classList.toggle('accordion__item--active');
      });
    }
  });
});