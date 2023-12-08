

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    renderFraction: function (currentClass, totalClass) {
      return '<div class="custom-button-prev"></div> <span class="' + currentClass + '"></span>' +
              ' / ' +
              '<span class="' + totalClass + '"></span>';
  },
    type: 'fraction',
   },
   
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    hashNavigation:{
      watchState: true,
    },
  });

  export default swiper();