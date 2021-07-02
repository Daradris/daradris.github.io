/* -----------------------------------------------
					Js Main
--------------------------------------------------
    Template Name: Mariam - Personal Portfolio Template
--------------------------------------------------

Table of Content

	. Preloader
	. Menu
    . magnificPopup
    . Share Media
    . Testimonials
	. All Functions


----------------------------------- */
(function ($) {
    "use strict";
    /* -----------------------------------
             Preloader
    ----------------------------------- */

    function menu() {
        "use strict";
        $("#menuToggle").on("click", function () {
            $(".header-left").toggleClass("open");
            $(".main").toggleClass("open");
        });
        $(".cross").on("click", function () {
            $(".header-left").removeClass("open");
        });
        $(".nav-link").on("click", function () {
            $(".header-left").removeClass("open");
        });
    }

    /* ----------------------------------
          Share Media
   -----------------------------------*/
    function shareMedia() {
        $('.btn-share').on("click", function () {
            $('.social-footer').toggleClass('active');
        });
    }

    /* -----------------------------------
         Testimonials
    -----------------------------------*/
    function testimonials() {
        $(".testimonials .owl-carousel").owlCarousel({
            loop: true,
            stagePadding: 5,
            margin: 10,
            nav: false,
            autoplay: false,
            center: false,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1200: {
                    margin: 40,
                    items: 2,
                },
            }
        });
    }

    function magnificPopup() {
        "use strict";
        $(".works-items .view-work").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }

    /* -----------------------------------
	      All functions
    -----------------------------------*/

    $(document).on("ready", function () {
        "use strict";
        shareMedia();
        menu();
        testimonials();
        magnificPopup();

    });

})(jQuery);