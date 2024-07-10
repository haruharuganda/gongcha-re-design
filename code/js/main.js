$(function () {
   $('.sub-menu').hide();
   $('nav')
      .mouseover(function () {
         $('header').addClass('after-visible');
         $('.sub-menu').stop().slideDown();
      })
      .mouseout(function () {
         $('header').removeClass('after-visible');
         $('.sub-menu').stop().slideUp();
      });

   $('.main-carousel .post-wrapper').slick({
      swipeToSlide: true,
      touchMove: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      arrows: false,
      autoplaySpeed: 3000,
   });

   $('.menu-description .post-wrapper').slick({
      swipeToSlide: true,
      touchMove: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      arrows: false,
      autoplaySpeed: 3000,
   });

   const scrollHeight = 100;
   let debounceTimeout = null;

   function handleScroll() {
      if ($(window).scrollTop() > scrollHeight) {
         $('header').css('background-color', 'white');
      } else {
         $('header').css('background-color', 'transparent');
      }
   }

   $(window).scroll(function () {
      if (debounceTimeout) {
         clearTimeout(debounceTimeout);
      }
      debounceTimeout = setTimeout(handleScroll, 100);
   });
});
