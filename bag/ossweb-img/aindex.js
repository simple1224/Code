

$(window).scroll(function(){
	var al = $('.wrap_p01').offset().top;
	if($(window).scrollTop() >= (al / 2)){
		$(".ce_nav").fadeIn(500); // 开始淡入
	} else {
		$(".ce_nav").stop().fadeOut(300);
	}
});

$(function () {
	$('.ce_nav a').click(function () {
		var idx = $(this).index() + 1;
		if(idx <= 5) {
			var sTop = $('.wrap_p0' + idx).offset().top;
			$('html, body').animate({scrollTop: sTop}, 'slow');
			//document.body.scrollTop = document.documentElement.scrollTop = 0;
		} else {
			$('html, body').animate({scrollTop: 0}, 'slow');
			//document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	})
	// 导航动画
	$('.t_nav').addClass('animated bounceInLeft');
	/*$(".t_nav").hover(function () {
		$(".t_nav").stop().animate({top:"254px"});
	}, function () {
		$(".t_nav").stop().animate({top:"224px"});
	});*/
	// 按钮动画
	$('.t_buttons a').hover(function () {
		$(this).stop().animate({top:"-15px"}, 'slow')
	}, function () {
		$(this).stop().animate({top:"0px"}, 'slow')
	});
	// 趴--动画
	$('.t_buttons').addClass('animated bounceInUp');
	// 第一部分动画
	$(window).scroll(function(){
		if($(window).scrollTop() >= ($('.wrap_title').offset().top - 20 )){
			$('.p01_tit').addClass('animated rollIn');
		} else {
			$('.p01_tit').removeClass('animated rollIn');
		}
	});
	// 第 2 部分动画
	$(window).scroll(function(){
		if($(window).scrollTop() >= ($('.wrap_p01').offset().top - 20 )){
			$('.p02_tit').addClass('animated shake');
		} else {
			$('.p02_tit').removeClass('animated shake');
		}
	});
	$('.p02_item01').mouseenter(function () {
		$(this).stop().animate({left: '60px'});
	});
	$('.p02_item01').mouseleave(function () {
		$(this).stop().animate({left: '80px'});
	});
	$('.p02_item02').mouseenter(function () {
		$(this).stop().animate({right: '80px'});
	});
	$('.p02_item02').mouseleave(function () {
		$(this).stop().animate({right: '50px'});
	});
	$('.p02_item03').mouseenter(function () {
		$(this).stop().animate({left: '15px'});
	});
	$('.p02_item03').mouseleave(function () {
		$(this).stop().animate({left: '00px'});
	});
	$('.p02_item04').mouseenter(function () {
		$(this).stop().animate({left: '521px'});
	});
	$('.p02_item04').mouseleave(function () {
		$(this).stop().animate({left: '506px'});
	});
	$('.p02_item05').mouseenter(function () {
		$(this).stop().animate({left: '794px'});
	});
	$('.p02_item05').mouseleave(function () {
		$(this).stop().animate({left: '774px'});
	});
	// 第 3 部分动画
	$(window).scroll(function(){
		if($(window).scrollTop() >= ($('.wrap_p02').offset().top - 100)){
			$('.p03_tit').addClass('animated zoomInDown');
		} else {
			$('.p03_tit').removeClass('animated zoomInDown');
		}
	});
	// 第 4 部分动画
	$(window).scroll(function(){
		if($(window).scrollTop() >= ($('.wrap_p03').offset().top - 100 )){
			$('.p04_tit').addClass('animated jackInTheBox');
		} else {
			$('.p04_tit').removeClass('animated jackInTheBox');
		}
	});
	// 第 5 部分动画
	$(window).scroll(function(){
		if($(window).scrollTop() >= ($('.wrap_p04').offset().top - 100 )){
			$('.p05_tit').addClass('animated flipInY');
		} else {
			$('.p05_tit').removeClass('animated flipInY');
		}
	});

	// 模块整体动画
	$(window).scroll(function() {
		var _top = $(document).scrollTop();

		if(_top >= ($('.wrap_title').offset().top) + 50) {
			$('.wrap .w').removeClass('active')
			$('.wrap_p01 .w').addClass('active');
		}
		if(_top >= ($('.wrap_p01').offset().top) + 50) {
			$('.wrap .w').removeClass('active')
			$('.wrap_p02 .w').addClass('active');
		}
		if(_top >= ($('.wrap_p02').offset().top) + 50) {
			$('.wrap .w').removeClass('active')
			$('.wrap_p03 .w').addClass('active');
			$('.p03_btn01').addClass('animated fadeInDown');
			$('.p03_btn02').addClass('animated fadeInRight');
			$('.p03_btn03').addClass('animated fadeInUp');
		}
		if(_top >= ($('.wrap_p03').offset().top) + 50) {
			$('.wrap .w').removeClass('active')
			$('.wrap_p04 .w').addClass('active');
			$('.p04_c01').addClass('animated fadeInLeft');
			$('.p04_c02').addClass('animated fadeInRight');
		}
		if(_top >= ($('.wrap_p04').offset().top) + 50) {
			$('.wrap .w').removeClass('active')
			$('.wrap_p05 .w').addClass('active');
		}
	});
})

