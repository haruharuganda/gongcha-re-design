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

   $(document).ready(function () {
      // 스크롤 이벤트 설정
      $(window).scroll(function () {
         // 특정 뷰포트 위치 계산 (예: 화면의 중간)
         var viewportTop = $(window).scrollTop();
         var viewportBottom = viewportTop + $(window).height();
         var triggerAt = viewportBottom + 150; // 오브젝트가 보여질 위치 (여기서는 화면 아래에서 200px 위)

         // 오브젝트의 위치 계산
         $('.scroll-spy').each(function () {
            var objectTop = $(this).offset().top;

            // 오브젝트가 특정 뷰포트에 들어왔을 때 애니메이션 적용
            if (objectTop < triggerAt) {
               $(this).addClass('animate'); // animate 클래스를 추가하여 애니메이션 효과를 줌
            } else {
               $(this).removeClass('animate');
            }
         });
      });
   });
});
