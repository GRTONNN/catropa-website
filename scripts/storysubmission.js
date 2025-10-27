// Wait for the HTML page to finish loading
document.addEventListener('DOMContentLoaded', () => {

  // Modal open/close controls
  const storyModal = document.getElementById('storyModal');
  const openModalBtn = document.querySelector('a[href="#submit-story"]');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Form validation elements
  const storyForm = document.getElementById('story-form');
  const userName = document.getElementById('userName');
  const catName = document.getElementById('catName');
  const userStory = document.getElementById('userStory');
  const errorMessage = document.getElementById('story-error-message');


  // Check if main modal elements exist
  if (storyModal && openModalBtn && closeModalBtn) {

    // Show modal
    openModalBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Stop link from jumping
      
      // Clear errors on open
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
      // Reset form on open
      if (storyForm) {
        storyForm.reset();
      }
      
      storyModal.classList.add('story-modal--is-visible');
    });

    // Close modal (X button)
    closeModalBtn.addEventListener('click', () => {
      storyModal.classList.remove('story-modal--is-visible');
    });

    // Close modal (background click)
    storyModal.addEventListener('click', (event) => {
      if (event.target === storyModal) {
        // (class name fix)
        storyModal.classList.remove('story-modal--is-visible');
      }
    });
  }

  // Form validation logic
  // Check if form elements exist
  if (storyForm && userName && catName && userStory && errorMessage) {
    
    // Handle form submit
    storyForm.addEventListener('submit', (event) => {
      
      // Stop default page reload
      event.preventDefault(); 
      
      // Check for empty required fields
      if (userName.value.trim() === '' || catName.value.trim() === '' || userStory.value.trim() === '') {
        
        // Show error message
        errorMessage.textContent = 'Please fill out your name, your cat\'s name, and the story.';
        errorMessage.style.display = 'block';

      } else {
        // On success:
        errorMessage.style.display = 'none';
        
        // (Simulate submit by closing modal)
        console.log('Form submitted (simulated)');
        storyModal.classList.remove('story-modal--is-visible');
        
        // Reset form
        storyForm.reset(); 
      }
    });
  }

});

