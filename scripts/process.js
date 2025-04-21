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


  