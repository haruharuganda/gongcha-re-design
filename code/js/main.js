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
