/*--nabvar--*/
$(function(){
	$(window).on("resize load", function(){
		if($(window).width() > 480) {
			$("nav ul").show();
		} else{
			$("nav ul").hide();
			$("nav").addClass("off");
		}
	});	

	$("nav").click(function(){
		$("ul").stop().slideToggle();

		if($("nav").hasClass("off")){
			$("nav").removeClass("off");
		}else{
			$("nav").addClass("off");

		}
	});
});
/*--scroll--*/
$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});
/*--introduction--*/
$(function(){
	// 要素をマウスオーバー
	$(".swiper-slide").hover(function(){
		// キャプション部分の追加
		$(this).append("<div><a>" + $(this).attr("alt") + "</a></div>");

		// キャプション部分の表示：フェードイン
		$(this).children("div").stop().fadeIn(300);
		
		// キャプションのテキスト位置：10pxから0pxへ移動
		$(this).children("div").children("a").stop().animate({"top" : "30%"}, 300);

	}, function(){
		// キャプション部分の非表示：フェードアウト
		$(this).children("div").stop().fadeOut(300);

		// キャプションのテキスト位置：0pxから10pxへ移動
		$(this).children("div").children("a").stop().animate({"top":"10px"}, 300, function(){
			$(this).parent("div").remove();
		});

	});

});