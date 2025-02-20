(function ($) {
  "use strict";

  var WidgetDefaultHandler = function ($scope) {

    "use strict"
    // mobile menu
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "991.98",
      onePage: false
    });

    // // color switch
    if ($scope.find("#checkbox").length) {
      const checkbox = document.getElementById("checkbox")
      checkbox.addEventListener("change", () => {
        document.body.classList.toggle("light-theme")
      })
    }
    if ($scope.find(".counter").length) {
      // counter up
      $('.counter').counterUp({
        delay: 10,
        time: 1500
      });
    }
    if ($scope.find(".accordion-list").length) {
      // accordion
      $(".accordion-list > li:nth-child(2)").addClass("active").find(".answer").show();
      $('.accordion-list > li:not(:nth-child(2)) .answer').hide();

      $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".answer").slideUp();
        } else {
          $(".accordion-list > li.active .answer").slideUp();
          $(".accordion-list > li.active").removeClass("active");
          $(this).addClass("active").find(".answer").slideDown();
        }
      });
    }
    if ($scope.find(".tab-link").length) {
      // service details tab
      $('.tab-link').on('click', function (event) {
        event.preventDefault(); // Prevent the default action of the <a> tag

        var tab_id = $(this).attr('data-tab');

        $('.tab-link').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
      });
    }
    if ($scope.find(".portfolio-slider").length) {
      // portfolio slider
      $('.portfolio-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        ]
      });
    }
    if ($scope.find(".brand-slider").length) {
      // brand slider
      $('.brand-slider').slick({
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 6,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: false,
        centerMode: true,
        variableWidth: true,
      });
    }
    if ($scope.find(".testimonial-slider").length) {
      // testimonial slider
      $('.testimonial-slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="arrow-up"><i class="fa-solid fa-angle-up"></i></span>',
        nextArrow: '<span class="arrow-down"><i class="fa-solid fa-angle-down"></i></span>',
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 992,
          settings: {
            dots: false,
            arrows: false,
          }
        }],
      });
    }
    if ($scope.find(".blog-slider").length) {
      // blog slider
      $('.blog-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        ]
      });
    }
    if ($scope.find(".popup-gallery").length) {
      // magnific popup init
      $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
          enabled: true
        },
      });
    }
    if ($scope.find(".popup-youtube, .popup-vimeo, .popup-gmaps").length) {
      $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }
    // navbar home 02
    if ($scope.find(".nav-bar").length) {
      $('.nav-bar').on('click', function () {
        $('.main-menu').toggleClass('active');
      })
      $('.nav-bar').on('click', function () {
        $('.nav-bar').toggleClass('active');
      })
    }
    if ($scope.find(".single-service-2").length) {
      // service item 02
      $('.single-service-2').hover(function () {
        $('.single-service-2').removeClass('active');
        $(this).addClass('active');
      });
      $('.single-service-2:nth-child(4)').addClass('active');
    }

    if ($scope.find(".portfolio-slider-2").length) {
      // portfolio slider 02
      $('.portfolio-slider-2').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="arrow-left"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="arrow-right"><i class="fas fa-arrow-right"></i></span>',
        centerMode: true,
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        ]
      });
    }
    // case filter tab
    if ($scope.find(".case-items .case-single").length) {
      var $caseItems = $('.case-items .case-single');
      var $filterTabs = $('.case-filter-tab li');

      $filterTabs.on('click', function () {
        var $this = $(this); // Cache the current 'li' element
        var filter = $this.attr('data-filter');

        $this.addClass('active').siblings().removeClass('active');

        if (filter === 'all') {
          $caseItems.fadeIn().removeClass('item-hidden');
        } else {
          $caseItems.each(function () {
            var $caseItem = $(this); // Cache the current case item
            if ($caseItem.hasClass(filter)) {
              $caseItem.fadeIn().removeClass('item-hidden');
            } else {
              $caseItem.fadeOut().addClass('item-hidden');
            }
          });
        }
      });
    }

    if ($scope.find(".testimonial-slider-2").length) {
      // testimonial slider 02
      $('.testimonial-slider-2').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        ]
      });
    }

    if ($scope.find(".blog-slider-2").length) {
      // blog slider 02
      $('.blog-slider-2').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        ]
      });
    }
    if ($scope.find(".brand-slider-3").length) {
      // brand slider 03
      $('.brand-slider-3').slick({
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 8,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: false,
        responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        ]
      });
    }
    // service tab 03
    if ($scope.find(".tab-menu-item").length) {
      $('.tab-menu-item').on('click', function () {
        var tabId = $(this).data('tab');

        // Remove active class from all tabs and content items
        $('.tab-menu-item').removeClass('active');
        $('.tab-content-item').removeClass('active').hide(); // Hide all content items

        // Add active class to the clicked tab
        $(this).addClass('active');

        // Animate the corresponding content item with fade-in-up effect
        $('#' + tabId).addClass('active').css({
          display: 'block',
          opacity: 0,
          top: '20px'
        }).animate({
          opacity: 1,
          top: '0'
        }, 1200); // 500ms for the effect duration
      });
    }

    // testimonial slider 03
    if ($scope.find(".testimonial-slider-home-3").length) {
      $('.testimonial-slider-home-3').slick({
        dots: false,
        infinite: true,
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: false,
        centerMode: true,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            speed: 5000,
          }
        },
        ]
      });
    }
    if ($scope.find(".testimonial-slider-2-home-3").length) {
      $('.testimonial-slider-2-home-3').slick({
        dots: false,
        infinite: true,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: false,
        centerMode: true,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            speed: 4000,
          }
        },
        ]
      });
    }

    // pricing toggle
    if ($scope.find(".pricing-toggle-btn").length) {
      $('.monthly-plans').show();
      $('.yearly-plans').hide();
      $('.pricing-toggle-btn').on('click', function () {
        $('.pricing-toggle-btn').removeClass('active');
        $(this).addClass('active');

        var pricingType = $(this).data('pricing');
        if (pricingType === 'monthly') {
          $('.monthly-plans').show();
          $('.yearly-plans').hide();
        } else if (pricingType === 'yearly') {
          $('.monthly-plans').hide();
          $('.yearly-plans').show();
        }
      });
    }

    // mouseover   
    if ($scope.find(".single-choose-item").length) {
      var singleChoose = $('.single-choose-item')
      singleChoose.mouseover(function () {
        singleChoose.removeClass('active');
        $(this).addClass('active');
      });
    }
    if ($scope.find(".contact-info-area .single-info").length) {
      var singleInfo = $('.contact-info-area .single-info')
      singleInfo.mouseover(function () {
        singleInfo.removeClass('active');
        $(this).addClass('active');
      });
    }

    // working process slider
    if ($scope.find(".working-process-slider").length) {
      $('.working-process-slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        ]
      });
    }

    // process slider 2
    if ($scope.find(".process-slider-2").length) {
      $('.process-slider-2').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="arrow-left"><i class="fa-solid fa-angle-left"></i></span>',
        nextArrow: '<span class="arrow-right"><i class="fa-solid fa-angle-right"></i></span>',
        responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        ]
      });
    }

    // Tab functionality
    $('.tab-menu-item').on('click', function () {
      var tabId = $(this).data('tab');

      // Remove active class from all tab-menu-item and tab-content-item
      $('.tab-menu-item').removeClass('active');
      $('.tab-content-item').removeClass('active');

      // Add active class to the clicked tab-menu-item and corresponding tab-content-item
      $(this).addClass('active');
      $('#' + tabId).addClass('active');
    });

    // Accordion functionality
    $('.accordion-header').on('click', function () {
      // Remove active class from all accordion-header and accordion-content
      $('.accordion-header').removeClass('active');
      $('.accordion-content').removeClass('active');

      // Add active class to the clicked accordion-header and corresponding accordion-content
      $(this).addClass('active');
      $(this).next('.accordion-content').addClass('active');
    });

    // Ensure one accordion item is active initially
    $('.accordion-item:first-child .accordion-header').addClass('active');
    $('.accordion-item:first-child .accordion-content').addClass('active');

    if (document.querySelector('.procus-cursor')) {

      var cursor = document.querySelector('.procus-cursor');
      var cursorinner = document.querySelector('.procus-cursor2');
      var a = document.querySelectorAll('a');

      document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      });

      document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
      });

      document.addEventListener('mousedown', function () {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
      });

      document.addEventListener('mouseup', function () {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
      });

      a.forEach(item => {
        item.addEventListener('mouseover', () => {
          cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
        });
      })
    }

    $(window).on('scroll', function () {

      // back to top scroll
      var ScrollTop = $('.back-to-top');

      if ($(window).scrollTop() > 1000) {
        ScrollTop.fadeIn(1000);
      } else {
        ScrollTop.fadeOut(1000);
      }

      // navbar fixed
      if ($scope.find(".pc-sticky-header").length) {
        const headerHeight = $(".header-area").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
          $('.pc-sticky-header').addClass("fixed-top");
        } else {
          $('.pc-sticky-header').removeClass("fixed-top");
        }
      }

    });

    $(window).on('load', function () {
      // wow js
      new WOW().init();
    });
  };


  //elementor front start
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/widget",
      WidgetDefaultHandler
    );
  });

})(jQuery);
