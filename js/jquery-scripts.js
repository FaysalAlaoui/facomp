(function($){
// Flexslider Settings

	jQuery( document ).ready( function( $ ) {

    	$( '.logo-carousel' ).flexslider( {
    		minItems: 1,
    		maxItems: 4,
    		move: 1,
    		itemWidth: 200,
    		itemMargin: 0,
    		animation: 'slide',
    		slideshow: true,
    		slideshowSpeed: 3000,
    		directionNav: false,
    		controlNav: false,
    		after: function( slider ) {
    			if ( ! slider.playing ) {
    				slider.pause();
    				slider.play();
    				slider.off( 'mouseenter mouseleave' );
    				slider.off( 'mouseover mouseout' );
    				slider.mouseover( function() {
    					if ( ! slider.manualPlay && ! slider.manualPause ) {
    						slider.pause();
    					}
    				} ).mouseout( function() {
    					if ( ! slider.manualPause && ! slider.manualPlay && ! slider.stopped ) {
    						slider.play();}
    					});
        		}
        	}
        });
    });




})(jQuery);