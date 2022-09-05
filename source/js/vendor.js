// Swiper 7.4.1
// import './vendor/swiper';
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiperReviews = new Swiper('.reviews__wrapper', {
  spaceBetween: 40,
  //  slidesPerView: 1,
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
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews__button--next.swiper-button-next',
    prevEl: '.reviews__button--previous.swiper-button-prev',
  },
});

const swiperCoaches = new Swiper('.coaches__slider', {
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
  modules: [Navigation],
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
  },
});

swiperReviews.init();
swiperCoaches.init();
