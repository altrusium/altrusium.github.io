(function($) {
	'use strict';
	$.vegas('slideshow', {
		delay:8000,
		backgrounds:[
		{ src:'img/slider/slide-bg10.jpg', fade:4000 },
		{ src:'img/slider/slide-bg11.jpg', fade:4000 },
		{ src:'img/slider/slide-bg12.jpg', fade:4000 }
		]
	})('overlay', {
		src:'img/bg-overlay.png'
	});
})(jQuery);
