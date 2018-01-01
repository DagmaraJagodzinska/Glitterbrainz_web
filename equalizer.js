$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $(".equilizer").each(function(i) {
      var bottom_of_object =
        $(this).offset().top + $(this).outerWidth(); // cause of rotation 90deg
      var middle_of_object =
        $(this).offset().top + $(this).outerWidth()/2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
var top_of_window = $(window).scrollTop();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > middle_of_object && top_of_window < middle_of_object) {
        $(this).addClass("visible");
      } else {
        $(this).removeClass("visible");
      }
    });
  });
});
