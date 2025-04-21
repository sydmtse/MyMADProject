

// backToTop.js

const backToTopButton = document.getElementById('backToTop');

// Show button after scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
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