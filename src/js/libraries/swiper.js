import Swiper from 'swiper';

var mySwiper = new Swiper ('.slider', {
  direction: 'horizontal',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});