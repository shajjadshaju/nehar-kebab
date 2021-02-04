
/*------------------------------------
 *Author:FortunaTheme
 *Template:Rezumate
 *Version:1.1
 *-------------------------------------*/
(function ($) {
	"use strict";

   
$( document ).ready(function() {
   
	$('.main-slider').owlCarousel({
	autoplay:true,
    loop:true,
    nav:true,
	navText:[ '<i class="fa fa-angle-left">','<i/><i class="fa fa-angle-right"><i/>'],
	animateIn:'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(".main-slider").on("translate.owl.carousel", function(){
  $(".slide-tablecell h1").removeClass("animated fadeInUp").css("opacity","0");
  $(".slide-tablecell p").removeClass("animated fadeInUp").css("opacity","0");
   $(".slide-tablecell a").removeClass("animated fadeInUp").css("opacity","0");
});
$(".main-slider").on("translated.owl.carousel", function(){
  $(".slide-tablecell h1").addClass("animated fadeInUp").css("opacity","1");
  $(".slide-tablecell p").addClass("animated fadeInUp").css("opacity","1");
  $(".slide-tablecell a").addClass("animated fadeInUp").css("opacity","1");
});

  

});

$('.featered-food-slider').owlCarousel({
	autoplay:true,
    loop:true,
    nav:true,
	navText:[ '<i class="fa fa-angle-left">','<i/><i class="fa fa-angle-right"><i/>'],
	animateIn:'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
})

 new WOW().init();
 
 
 
 

 /*-----------------smooth scrol--------------
 --------------------------------------------------*/
  $('.page-scroll').on('click', function(event) {
  var $anchor = $(this),
          headerH = '55';
      $('html , body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
       }, 1200, 'easeInOutExpo');

      event.preventDefault();
         
		 });
	

	
	
	 var mixer = mixitup('.storeGallery');
	var mixer = mixitup(containerEl);
}(jQuery));	