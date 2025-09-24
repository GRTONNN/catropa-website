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



