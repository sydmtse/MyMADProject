

// carousel animation

document.addEventListener("scroll", function () {
    let carouselItems = document.querySelectorAll(".carousel-item");
    let container = document.querySelector(".carousel-container");
    let rect = container.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        carouselItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, index * 300); // Delay each item
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const designThatSection = document.querySelector("#design-that-section");
    const whoAmISection = document.querySelector("#who-am-i-section");

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const designThatBottom = designThatSection.offsetTop + designThatSection.offsetHeight;
        const whoAmIBottom = whoAmISection.offsetTop + whoAmISection.offsetHeight;

        // Show image only after scrolling past the "design-that-section"
        if (scrollPosition > designThatBottom) {
            whoAmIImage.classList.add("visible");
        } else {
            whoAmIImage.classList.remove("visible");
        }

        // Prevent the image from scrolling past the "who-am-i-section"
        let maxScroll = whoAmIBottom - window.innerHeight;
        if (scrollPosition >= maxScroll) {
            whoAmIImage.style.position = "absolute";
            whoAmIImage.style.bottom = "10vh";
        } else {
            whoAmIImage.style.position = "fixed";
            whoAmIImage.style.bottom = "auto";
        }
    }

    window.addEventListener("scroll", handleScroll);
});



let hasRevealed = false;

function revealSubheadings() {
    if (hasRevealed) return;
    const subheadings = document.querySelectorAll(".subheading");
    subheadings.forEach((subheading, index) => {
        setTimeout(() => {
            subheading.classList.add("visible");
        }, index * 200);
    });
    hasRevealed = true;
}

  

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


  
