(function($) {
	'use strict';
      $("#owl-testimoni").owlCarousel({
        autoPlay : 6000,stopOnHover : true,navigation : true,pagination : false,paginationSpeed : 1000,goToFirstSpeed : 2000,singleItem : true,autoHeight : true
      });
      $("#our-client").owlCarousel({
        itemsCustom : [
          [0, 2],
		  [320, 1],
          [450, 2],
          [600, 3],
          [700, 3],
          [1000, 3],
          [1200, 4],
          [1400, 4],
          [1600, 4]
        ],
        navigation : true,pagination : false
      });
      $(".image-slide").owlCarousel({
        autoPlay : 6000,stopOnHover : true,navigation : false,pagination : true,paginationSpeed : 1000,goToFirstSpeed : 2000,singleItem : true,transitionStyle : "fade",autoHeight : true
      });
      $(".owl-slide").owlCarousel({
        autoPlay : 6000,stopOnHover : true,navigation : true,pagination : false,paginationSpeed : 1000,goToFirstSpeed : 2000,singleItem : true,autoHeight : true
      });
})(jQuery);