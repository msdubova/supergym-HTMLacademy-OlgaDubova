new Swiper('.reviews__wrapper', {
  spaceBetween: 40,
  autoHeight: true,
  direction: 'horizontal',
  simulateTouch: true,
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  loop: false,
  navigation: {
    nextEl: '.reviews__button--next.swiper-button-next',
    prevEl: '.reviews__button--previous.swiper-button-prev',
  },
});

new Swiper('.coaches__slider', {
  spaceBetween: 0,
  slidesPerView: 1,
  direction: 'horizontal',
  simulateTouch: true,
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  navigation: {
    nextEl: '.coaches__button--next',
    prevEl: '.coaches__button--previous',
  },

  breakpoints: {
    320: {
      spaceBetween: 40,
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
      initialSlide: 2,
    },
    1200: {
      spaceBetween: 40,
      slidesPerView: 4,
      initialSlide: 0,
    },
  }});
