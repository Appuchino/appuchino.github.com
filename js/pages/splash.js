$(function() {

	common_menu.init();

	var services_swiper = new Swiper('._three_columns', {
		slidesPerView: 3,
		speed: 100,
		simulateTouch : false,
		slideClass: '_column',
		wrapperClass: '_columns',
		nextButton: '._three_columns ._control_left',
		prevButton: '._three_columns ._control_right',
		breakpoints: {
			500: {
				slidesPerView: 1,
			}
		}
	});

	var responses_swiper = new Swiper('.swiper-container', {
		speed: 100,
		simulateTouch : false,
		nextButton: '.swiper-container .swiper-button-next',
		prevButton: '.swiper-container .swiper-button-prev',
	});

});
