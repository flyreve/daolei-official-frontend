  $(document).ready(function(){
  //   $(".wrap_head .menu-list .menu_item_li").hover(function(){
	// 		var list=$('.drop-down-menu')
  //     for(var i=0;i < list.length;i++){
  //         $(list[i]).css({
  //             "display": "none"
  //         });
  //     }

  //     var showClass = $(this).id
  //     if(showClass){
  //       $('#' + id).show()
  //     }
  //     console.log(showClass)
	// 	},function(){      
  //     var list=$('.drop-down-menu')
  //     for(var i=0;i < list.length;i++){
  //         $(list[i]).css({
  //             "display": "none"
  //         });
  //     }
  //   });
    
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
})