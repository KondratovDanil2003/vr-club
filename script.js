const swiper = new Swiper(".promo-section__swiper", {
  direction: "horizontal",
  //   loop: true,
  slidesPerView: 3,
  effect: "coverflow",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const gallery__swiper = new Swiper(".swiper-gallery", {
  direction: "horizontal",
  //   loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".gallery-swiper__btn-right",
    prevEl: ".gallery-swiper__btn-left",
  },
});
