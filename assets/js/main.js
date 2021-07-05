(function ($) {
    "use strict";

    function loading() {
        "use strict";
        $('.loading').delay(500).fadeOut(500);
    }

    $("#left-menu").load("https://www.randomdatenight.com/assets/html/menu.html");

    $("#bottom-social").load("https://www.randomdatenight.com/assets/html/social.html");



    $(window).on("load", function () {
        "use strict";
        loading();
    });

})(jQuery);