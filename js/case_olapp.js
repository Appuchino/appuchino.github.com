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

	var colorific_screens_swiper = new Swiper('.process_steps', {
		slidesPerView: 1,
		autoplay : 3000,
		speed: 100,
		simulateTouch : false,
		slideClass: 'olapp_dev_slide',
		wrapperClass: '_columns',
		nextButton: '.olapp_development ._control_left',
		prevButton: '.olapp_development ._control_right'
	});

});
