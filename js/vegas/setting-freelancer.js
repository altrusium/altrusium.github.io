/* global $ jQuery */
(function ($) {
  'use strict'
  $.vegas('slideshow', {
    delay: 8000,
		backgrounds: [
      { src: 'img/slideshow/1-mba-right.jpg', fade: 4000 },
      { src: 'img/slideshow/2-imac-ipad-keyboard.jpg', fade: 4000 },
      { src: 'img/slideshow/3-mba-espresso-right.jpg', fade: 4000 },
      { src: 'img/slideshow/4-imac-reflection.jpg', fade: 4000 },
      { src: 'img/slideshow/5-mba-closed-glasses.jpg', fade: 4000 }
		]
	})('overlay', {
		src: 'img/bg-overlay.png'
	})
})(jQuery)
