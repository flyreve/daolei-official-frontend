  $(document).ready(function(){
      $("#solution").mouseenter(function(){
          $('#drop-down-solution').css("display", "block");
          $('#drop-down-product').css("display", "none");
      });
      $("#drop-down-solution").mouseleave(function(){
          $('#drop-down-solution').css("display", "none");
      });

      $("#product").mouseenter(function(){
          $('#drop-down-product').css("display", "block");
          $('#drop-down-solution').css("display", "none");
      });
      $("#drop-down-product").mouseleave(function(){
          $('#drop-down-product').css("display", "none");
      });
   });
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('.operators-swiper-slide', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });