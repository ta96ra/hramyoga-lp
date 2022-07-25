$(function(){

  // スクロールボタンのフェード
  var toTop = $('.to-top');
  toTop.hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 60){
      toTop.fadeIn();
    }else{
      toTop.fadeOut();
    }
  });

  // スクロール
  $('.to-top a').click(function(){
    $('html,body').animate({scrollTop:0},500);
  });

  // 個人情報保護方針の同意の有無
  


});