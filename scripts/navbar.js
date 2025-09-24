document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return; // safety check

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
      // At the very top → show navbar
      navbar.classList.remove("hidden");
    } else {
      // Anywhere else → hide navbar
      navbar.classList.add("hidden");
    }
  });
});

document.querySelectorAll(".view-more").forEach(button => {
  button.addEventListener("click", () => {
    const story = document.getElementById("juliet-story");
    story.style.display = story.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".view-more").forEach(button => {
  button.addEventListener("click", () => {
    const story = document.getElementById("mikmik-story");
    story.style.display = story.style.display === "block" ? "none" : "block";
  });
});
