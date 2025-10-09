const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion__header');

  header.addEventListener('click', () => {
    item.classList.toggle('accordion__item--active');
  });
});