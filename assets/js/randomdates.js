/* -----------------------------------------------
                    Js RandomDates

Table of Content
    . List of dates
    . Dates
----------------------------------- */

(function ($) {
    "use strict";
    var links=new Array()
    links[0]="dates/naked-lotus"
    links[1]="dates/from-dry-to-wet"

    /* -----------------------------------
             Random Link button
    ----------------------------------- */

    function randomDate(){
        var myrandom=Math.round(Math.random() * (links.length - 1))
        window.location=links[myrandom]
    }

    /* -----------------------------------
          All functions
    -----------------------------------*/
    $('.btn-random-date').on('click', function(){ randomDate(); return false; });

})(jQuery);