
const clickSound = document.getElementById("click-sound");

  // Find all nav buttons (adjust the selector to fit your structure)
  const navButtons = document.querySelectorAll(".nav-button");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const clickSound = new Audio("../click.mp3"); // Create a fresh audio instance
      clickSound.play();
    });
  });



const backToTopButton = document.getElementById('backToTop');
const bad_cv  = document.getElementById("bad-cv");
const bad_blurbs = document.querySelector(".bad-blurb"); // <- Corrected selector

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// bad_cv.addEventListener('mouseover', () => {
//   bad_blurbs.style.display = 'block';
// });

// bad_cv.addEventListener('mouseout', () => {
//   bad_blurbs.style.display = 'none';
// });
