(function($) {
"use strict";

/* ==============================================
MENU -->
=============================================== */

$('ul.dropdown-menu [data-toggle=dropdown]').bind('click', function(event) {
    event.preventDefault(); 
    event.stopPropagation(); 
    $(this).parent().addClass('open');
    $(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
});

/* ==============================================
LIGHTBOX -->
=============================================== */

jQuery('a[data-gal]').each(function() {
	jQuery(this).attr('rel', jQuery(this).data('gal')); });     
jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:true,overlay_gallery: true,social_tools:false,deeplinking:false});

/* ==============================================
PARALLAX -->
=============================================== */

jQuery(window).trigger('resize').trigger('scroll');

/* ==============================================
ACCORDION -->
=============================================== */

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('fa-minus fa-plus');
    }
    $('#accordion').bind('hidden.bs.collapse', toggleChevron);
    $('#accordion').bind('shown.bs.collapse', toggleChevron);

/* ==============================================
LOADER -->
=============================================== */

    $(window).load(function() {
        $('#loader').delay(300).fadeOut('slow');
            $('#loader-container').delay(200).fadeOut('slow');
        $('body').delay(300).css({'overflow':'visible'});
    })

/* ==============================================
FUN -->
=============================================== */

    function count($this){
        var current = parseInt($this.html(), 10);
            current = current + 10;
            $this.html(++current);
            if(current > $this.data('count')){
            $this.html($this.data('count'));
            } 
            else {    
            setTimeout(function(){count($this)}, 10);
            }
            }        
            $(".stat-count").each(function() {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
        count($(this));
    });

/* ==============================================
BACK TOP -->
=============================================== */

    jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 1) {
    jQuery('.backtotop').css({bottom:"25px"});
    } else {
    jQuery('.backtotop').css({bottom:"-100px"});
    }
    });
    jQuery('.backtotop').click(function(){
    jQuery('html, body').animate({scrollTop: '0px'}, 800);
    return false;
    });

/* ==============================================
AFFIX -->
=============================================== */

    $('#headeraffix').affix({
      offset: {
        top: 100,
        bottom: function () {
          return (this.bottom = $('.footer').outerHeight(true))
        }
      }
    })
    
/* ---------------------------------------------
WINDOWS HEIGHT JS -->
 --------------------------------------------- */
    $(".js-height-full").height($(window).height());
        $(".js-height-parent").each(function(){
        $(this).height($(this).parent().first().height());
    });

})(jQuery);