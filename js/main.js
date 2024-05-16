// Spotlight
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Marquee Block
const swiper1 = new Swiper(".companies.swiper", {
  loop: true,
  slidesPerView: 5,
  slidesPerGroup: 1,
  speed: 5000,
  spaceBetween: 10,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  cssMode: false,
  freeMode: false,
  loopAdditionalSlides: 3,
});

// Additional styles to ensure smooth transitions
document.querySelector(".swiper-wrapper").style.transitionTimingFunction =
  "linear";
