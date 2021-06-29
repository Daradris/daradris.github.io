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
             Random Link button
    ----------------------------------- */
    function randomDate(){
        var links=new Array()
        links[0]="http://www.javascriptkit.com"
        links[1]="http://www.dynamicdrive.com"

        var myrandom=Math.round(Math.random() * (links.length - 1))
        window.location=links[myrandom]
    }
    /* -----------------------------------
	      All functions
    -----------------------------------*/
    $('#btn-random-date').click(function(){ randomDate(); return false; });

})(jQuery);