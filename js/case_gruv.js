$(function() {

	common_menu.init();

	var colorific_achieves_swiper = new Swiper('._four_columns', {
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

	var colorific_screens_swiper = new Swiper('.screens', {
		slidesPerView: 1,
		speed: 100,
		simulateTouch : false,
		slideClass: 'colorific_screen',
		wrapperClass: 'screens_wrapper',
		nextButton: '.pad_container ._control_left',
		prevButton: '.pad_container ._control_right'
	});


});
