$(document).ready(function() {
    $('.js-example-basic-single').select2();
 //    $('.js-example-basic-single').select2({
	//   placeholder: 'Select an option'
	// });

	$('.product-thumbnail').click(function() {
		$(".main-property-img").attr('src', $(this).attr('src'));
	})

	// Advanced Property Search
	$('.dropdown-filter').click(function() {
		$('.full-filter-wrap').toggle();
	})

    // Service Slider
	$('.service-slide-inner').owlCarousel({
	  loop:true,
	  margin:10,
	  items:1,
	  autoplay:true,
	  navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	  nav:false,
	  dots:true,
	  autoplayTimeout:2000,
	  autoplayHoverPause: false,
	  autoplaySpeed: 2500,
	  animateOut: 'fadeOut',
	  animateIn: 'fadeIn',
	  responsive:{
	      0:{
	          items:2,
	          nav:false,
	      },
	      767:{
	          items:2,
	          nav:false,
	      },
	      992:{
	          items:7,
	          nav:true
	      },
	      1200:{
	          items:6,
	          nav:true
	      },
	      1600:{
	          items:5,
	          nav:true
	      }
	  }
	});
    
    // Property Slide
   
	// $('.advertiser-filter-box a').click(function() {
	//     // Check for active
	//     $('.advertiser-filter-box').removeClass('active-tab');
	//     $(this).parent().addClass('active-tab');

	//     // Display active tab
	//     let currentTab = $(this).attr('href');
	//     $(currentTab).show();
	//     $('.advitiser-category-wise-property-wrap div').hide();
	//     return false;
	// });
	
	// Smooth Scrool
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 3000);
	});
});



(function ($) {
    "use strict";
    var PUS = {};
        /*==========================================
                :: slicknav
        ==========================================*/
        PUS.slicknav = function () {
            $(".site-menu").slicknav({
                allowParentLinks: true,
                prependTo: '#mobile-menu-wrap',
                label: '',
            });

            $(".mobile-menu-trigger").on("click", function(e) {
                $(".mobile-menu-container").addClass("menu-open");
                $("body").css("overflow-y","hidden");
                e.stopPropagation();
            });

            $(".mobile-menu-close").on("click", function(e) {
                $(".mobile-menu-container").removeClass("menu-open");
                $("body").css("overflow-y","auto");
                e.stopPropagation();
            });  
        };
        $(document).ready(function () {
            PUS.slicknav();
        });
    })(jQuery);