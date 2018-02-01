
$(document).ready(function () {
    var smallMediaWidth = 768;
    var viewportWidth = $(window).outerWidth();
    var firstStripes = $(".stripes-first").find('.stripe');
    $(firstStripes).each(function (i) {
        var top_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop();

        if (top_of_object > top_of_window) {
            $(this).addClass("visible");
        }
    });

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $(".stripe").each(function (i) {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var top_of_object = $(this).offset().top;
            var middle_of_object =
                $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();
            /* If the object is completely visible in the window, fade it it */

            if (viewportWidth < smallMediaWidth) {
                if (top_of_object < bottom_of_window) {
                    $(this).addClass("visible");
                }
            }
            else {
                if (bottom_of_window > bottom_of_object) {
                    $(this).addClass("visible");
                }
            }
        });
    });

});
