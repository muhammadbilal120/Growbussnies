(function ($) {
  "use strict";

  // mobile menu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991.98",
    onePage: false
  });
  $(window).on('load', function () {
    
    if (document.querySelector('#preloader')) {
      var preLoder = $("#preloader");
      preLoder.fadeOut(0);
    }

    // back to top animate
    $(".back-to-top").on('click', function () {
      $("html").animate({
        "scrollTop": "0"
      }, 1000);
    });

  });
})(jQuery);
