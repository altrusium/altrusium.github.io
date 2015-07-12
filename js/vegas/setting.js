(function($) {
	'use strict';
	$.vegas('slideshow', {
		delay:8000,
		backgrounds:[
		{ src:'img/slider/slide-bg04.jpg', fade:4000 },
		{ src:'img/slider/slide-bg05.jpg', fade:4000 },
		{ src:'img/slider/slide-bg06.jpg', fade:4000 }
		]
	})('overlay', {
		src:'img/bg-overlay.png'
	});
})(jQuery);
