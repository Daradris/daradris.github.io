(function ($) {
    "use strict";

    function loading() {
        "use strict";
        $('.loading').delay(500).fadeOut(500);
    }

    $("#left-menu").load("../html/menu.html");

    $(window).on("load", function () {
        "use strict";
        loading();
    });

})(jQuery);