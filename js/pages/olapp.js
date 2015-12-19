$(function() {

	common_menu.init();

	var olapp_ideas_swiper = new Swiper('._four_columns', {
		slidesPerView: 4,
		speed: 100,
		simulateTouch : false,
		slideClass: '_column',
		wrapperClass: '_columns',
		nextButton: '._four_columns ._control_left',
		prevButton: '._four_columns ._control_right',
		breakpoints: {
			500: {
				slidesPerView: 1,
			}
		}
	});


});
