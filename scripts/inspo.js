
const clickSound = document.getElementById("click-sound");

  // CLICK
  const navButtons = document.querySelectorAll(".nav-button");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const clickSound = new Audio("../click.mp3"); 
      clickSound.play();
    });
  });


// <- BACK TO TOP BTN
const backToTopButton = document.getElementById('backToTop');
const bad_cv  = document.getElementById("bad-cv");
const bad_blurbs = document.querySelector(".bad-blurb");

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