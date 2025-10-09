const storyModal = document.getElementById('storyModal');
const openModalBtn = document.querySelector('a[href="#submit-story"]');
const closeModalBtn = document.getElementById('closeModalBtn');

if (storyModal && openModalBtn && closeModalBtn) {
  openModalBtn.addEventListener('click', (event) => {
    event.preventDefault();
    storyModal.classList.add('story-modal--is-visible');
  });

  closeModalBtn.addEventListener('click', () => {
    storyModal.classList.remove('story-modal--is-visible');
  });

  storyModal.addEventListener('click', (event) => {
    if (event.target === storyModal) {
      storyModal.classList.remove('story-modal--is-visible');
    }
  });
}