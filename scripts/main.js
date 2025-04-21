
const clickSound = document.getElementById("click-sound");

// CLICK AUDIO
  const navButtons = document.querySelectorAll(".nav-button");

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const clickSound = new Audio("click.mp3"); 
      clickSound.play();
    });
  });

  

// CAROSEL ANIMATION

document.addEventListener("scroll", function () {
    let carouselItems = document.querySelectorAll(".carousel-item");
    let container = document.querySelector(".carousel-container");
    let rect = container.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        carouselItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, index * 300); 
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

      
        if (scrollPosition > designThatBottom) {
            whoAmIImage.classList.add("visible");
        } else {
            whoAmIImage.classList.remove("visible");
        }

      
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

  
// BACK TO TOP BTN
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
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


  const video = document.querySelector('.home-video');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause(); 
      }
    });
  }, { threshold: 0.5 }); 

  observer.observe(document.querySelector('.home-video-container'));
