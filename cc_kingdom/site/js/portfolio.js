    (function($){
		"use strict";
		var fselector = 0;
		var portfolio_grid = $("#portfolio-grid");
     	var isotope_mode;
     		if (portfolio_grid.hasClass("masonry")){
         		isotope_mode = "masonry";
     		} else{
         		isotope_mode = "fitRows"
     		}
     
     		portfolio_grid.imagesLoaded(function(){
            	portfolio_grid.isotope({
                itemSelector: '.mix',
                layoutMode: isotope_mode,
                filter: fselector
            });
        });
        
        $(".filter").click(function(){
            $(".filter").removeClass("active");
            $(this).addClass("active");
            fselector = $(this).attr('data-filter');
            
            portfolio_grid.isotope({
                itemSelector: '.mix',
                layoutMode: isotope_mode,
                filter: fselector
            });
            return false;
        });

		$(".masonry").imagesLoaded(function(){
            $(".masonry").masonry();
        });
    })(jQuery);