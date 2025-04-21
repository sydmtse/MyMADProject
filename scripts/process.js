
const clickSound = document.getElementById("click-sound");

  // Find all nav buttons (adjust the selector to fit your structure)
  const navButtons = document.querySelectorAll(".nav-button");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const clickSound = new Audio("../click.mp3"); // Create a fresh audio instance
      clickSound.play();
    });
  });

  


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      // Toggle class on the content div
      content.classList.toggle("open");

      // Optional: toggle aria-expanded for accessibility
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !expanded);
    });
  });
});

const backToTopButton = document.getElementById('backToTop');

// Show button after scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

  