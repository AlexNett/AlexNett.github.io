$(function(){
	
	var Slide = $('<div class=\'Slide\'>[HIDE/SHOW]</div>');
	Slide.insertBefore( $('.SlideIMG') );

	
	$(document).on('click', '.SlideIMG', function(){
		$(this).slideToggle();
	});
	
	$(document).on('click', '.Slide', function(){
		$(this).next().slideToggle();
	});
	
});