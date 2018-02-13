$(function(){
	
	var Slide = $('<div class=\'Slide\'>[HIDE/SHOW]</div>');
	Slide.insertBefore( $('img') );
	$('img').addClass( "SlideIMG" );
	$(".SlideIMG:not(.profile)").hide(0);
	
	$(document).on('click', '.SlideIMG', function(){
		$(this).slideToggle();
	});
	
	$(document).on('click', '.Slide', function(){
		$(this).next().slideToggle();
	});
});