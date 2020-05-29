$(document).ready(function(){
    $(".wrap_head .menu_item_li").hover(function(){
        var list=$('.drop-down-menu')
      for(var i=0;i < list.length;i++){
          $(list[i]).css({
              "display": "none"
          });
      }

      var showClass = $(this).data('id')
      if(showClass){
        $(showClass).show()
      }
      console.log($(this))
        }
    //     ,function(){      
    //         console.log(213123)
    //   var list=$('.drop-down-menu')
    //   for(var i=0;i < list.length;i++){
    //       $(list[i]).css({
    //           "display": "none"
    //       });
    //   }
    // }
    );

    $(".drop-down-menu").mouseleave(function () { 
        $(this).hide()
    });
})