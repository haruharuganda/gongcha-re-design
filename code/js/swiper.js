const main = new Swiper('.main-carousel .swiper', {
   speed: 400,
   spaceBetween: 100,
   loop: true,

   autoplay: true,
});

const menu = new Swiper('.menu-description .mySwiper', {
   slidesPerView: 3,
   centeredSlides: true,
   spaceBetween: 30,
   rewind: true,
   //  autoplay: true,
   pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      1024: {
         slidesPerView: 3,
         spaceBetween: 90,
      },
      0: {
         slidesPerView: 2,
         spaceBetween: 60,
      },
   },
});
