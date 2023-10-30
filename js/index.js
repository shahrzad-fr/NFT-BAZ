var swiper = new Swiper(".mySwiper-test", {
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      //   initialSlid: 1,
      //   loop: true,
      //   centeredSlides: true,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-ul", {
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 25,
      //   initialSlid: 1,
      //   loop: true,
      //   centeredSlides: true,
    },
    375: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 13,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// var swiper = new Swiper(".swiper-blog", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     loop: true,
//     breakpoints: {
// 768: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//         },

//         768: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//         },

//     },
// });
