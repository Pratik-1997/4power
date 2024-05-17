// Aos Animation
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 0, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 30, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "cubic-bezier(0.165, 0.84, 0.44, 1)", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// Header
let prevScrollPos = $(window).scrollTop();
const header = $("#sticky-header");
let timer;
function hideHeader() {
  header.addClass("hidden");
}
function showHeader() {
  clearTimeout(timer);
  const currentScrollPos = $(window).scrollTop();
  if (currentScrollPos < prevScrollPos || currentScrollPos === 0) {
    header.removeClass("hidden");
  } else {
    header.addClass("hidden");
    timer = setTimeout(hideHeader, 4000); // Adjust the timeout duration as needed (4000ms = 4 seconds)
  }
  prevScrollPos = currentScrollPos;
}
header.removeClass("hidden");
$(window).scroll(showHeader);

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
  slidesPerView: 3,
  speed: 1000,
  spaceBetween: 10,
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: true,
    waitForTransition: false,
  },
  breakpoints: {
    // when window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 4,
    },
  },
});

// Additional styles to ensure smooth transitions
document.querySelector(".swiper-wrapper").style.transitionTimingFunction =
  "linear";

// Hamburger
$(document).ready(function () {
  // Hamburger
  $(".ham").on("click", function () {
    $(this).toggleClass("active");
    $("nav").toggleClass("active");
    $("body").toggleClass("overlayHidden");
  });

  // Toggle Navigation

  if ($(window).width() < 480) {
    $(".has-child > a").click(function (event) {
      event.preventDefault();

      var $parentLi = $(this).parent(".has-child");
      var $megaMenu = $parentLi.find(".mega-menu");

      if ($parentLi.hasClass("active")) {
        $megaMenu.slideUp(300);
        $parentLi.removeClass("active");
      } else {
        $(".has-child .mega-menu").slideUp(300);
        $(".has-child").removeClass("active");
        $megaMenu.slideDown(300);
        $parentLi.addClass("active");
      }
    });
  }
});

// What We Do
var swiper = new Swiper(".swiper.myWeDo", {
  slidesPerView: "1.4",
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
        rows: 3,
      },
    },
  },
});

// We Serve
var swiper = new Swiper(".swiper.weServeSwiper", {
  slidesPerView: "1.4",
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
        rows: 2,
      },
    },
  },
});
