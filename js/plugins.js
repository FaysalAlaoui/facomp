$(document).ready(function()
{
	"use strict";

	// Nice Scroll
	//$("html").niceScroll();


	// Carousel Slide Time
	$('.carousel').carousel({
		interval: 6000
	});

	//Show Color Option Div When Clicking The .gear_check
	$(".gear_check").click(function()
	{
		$(".color_option").fadeToggle();
	});

	
	//Change Theme Color On Click
	var colorLi = $(".color_option ul li");

	colorLi
		.eq(0).css("backgroundColor", "#E41B17").end()
		.eq(1).css("backgroundColor", "#1db6f1").end()
		.eq(2).css("backgroundColor", "#9a0bb5").end()
		.eq(3).css("backgroundColor", "#77da7a").end()
		.eq(4).css("backgroundColor", "#f79010");

	colorLi.click(function()
	{
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));

		//$("link[href*='theme']").remove(); //removes the style line from the page

		//console.log($(this).attr("data-value")) //check if the javascipt file targets the correct data.
	});

	// Cashing The Scroll Button


	var scrollButton = $("#scroll_top");

	$(window).scroll(function()
	{
		console.log($(this).scrollTop());
		
		if ( $(this).scrollTop() >= 700)
		{
			scrollButton.fadeIn(500);
		}
		else
		{
			scrollButton.fadeOut(500);
		}
	});
	// Click to Scroll Top
	scrollButton.click(function(){
		$("html, body").animate({ scrollTop : 0}, 600);
	});

});

// Loading Screen
$(window).load(function(){

	// Show THe Whole Body with The Scroll
	$(".loading_overlay .spinner").fadeOut(2000, 
		function(){
			$(this).parent().show(2000, 
				function(){
					$("body").css("overflow", "auto");
					$(this).remove();
			});
		});
});


