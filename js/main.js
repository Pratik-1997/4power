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
  speed: 1000,
  spaceBetween: 10,
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: true,
    waitForTransition: false,
  },
});

// Additional styles to ensure smooth transitions
document.querySelector(".swiper-wrapper").style.transitionTimingFunction =
  "linear";

// Hamburger
$(document).ready(function () {
  $(".ham").on("click", function () {
    $(this).toggleClass("active");
    $("nav").toggleClass("active");
  });
});

// What We Do
var swiper = new Swiper(".swiper.myWeDo", {
  slidesPerView: '1.4',
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 3,
      slidesPerColumn: 3,
      slidesPerColumnFill: "row",
      loop: false,
      grid: {
        rows: 3
      },
    },
  },
});


// We Serve
var swiper = new Swiper(".swiper.weServeSwiper", {
  slidesPerView: '1.4',
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 3,
      slidesPerColumn: 3,
      slidesPerColumnFill: "row",
      loop: false,
      grid: {
        rows: 2
      },
    },
  },
});
