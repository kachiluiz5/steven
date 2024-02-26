/**
 * This script initializes Swiper sliders with custom settings for different breakpoints.
 * It uses data attributes on the '.slider-main_component' elements to set these settings.
 *
 * Attributes:
 * swiper-loop: Enables loop mode if set to "true". Set on '.slider-main_component'.
 * swiper-duration: Sets the speed of transition between slides (in ms). Set on '.slider-main_component'.
 * swiper-desktop: Sets the number of slides per view on desktop. Default is "auto". Set on '.slider-main_component'.
 * swiper-tablet: Sets the number of slides per view on tablet. Default is "auto". Set on '.slider-main_component'.
 * swiper-mobile: Sets the number of slides per view on mobile. Default is 1. Set on '.slider-main_component'.
 * swiper-auto: Sets the duration (in ms) for automatic slide change. Set on '.slider-main_component'.
 * swiper-start: Sets the starting window width to activate swiper. Default is 0 (always activated). Set on '.slider-main_component'.
 * swiper-start: Start swiper when window width less than 992px, It also deactivates swiper when the window size exceeds the specified limit.
 */

// Initialize Swiper on window load and resize
function initializeSwiper() {
  $(".slider-main_component").each(function () {
    let loopMode = $(this).attr("swiper-loop") === "true";
    let sliderDuration = $(this).attr("swiper-duration") !== undefined ? +$(this).attr("swiper-duration") : 300;

    let autoplaySettings = false;
    if ($(this).attr("swiper-auto")) {
      autoplaySettings = {
        delay: parseInt($(this).attr("swiper-auto"), 10),
        disableOnInteraction: false
      };
    }

    let swiperOptions = {
      speed: sliderDuration,
      loop: loopMode,
      grabCursor: true,
      autoHeight: false,
      centeredSlides: loopMode,
      followFinger: true,
      freeMode: false,
      slideToClickedSlide: false,
      slidesPerView: "auto",
      spaceBetween: "2%",
      rewind: false,
      mousewheel: {forceToAxis: true},
      autoplay: autoplaySettings,
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0],
        bulletActiveClass: "is-active",
        bulletClass: "swiper-bullet",
        bulletElement: "button",
        clickable: true,
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled",
      },
      scrollbar: {
        el: $(this).find(".swiper-drag-wrapper")[0],
        draggable: true,
        dragClass: "swiper-drag",
        snapOnRelease: true,
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    };

    // Cards effect configuration
    if ($(this).attr("swiper-type") === "cards") {
      $.extend(swiperOptions, {
        effect: "cards",
        cardsEffect: {
          perSlideOffset: 5,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: true,
        },
      });
    }

    // Check if swiper should be activated based on window width
    const startWidth = $(this).attr("swiper-start") || 0;
    const windowWidth = $(window).width();
    const activateSwiper = startWidth === 0 || windowWidth < parseInt(startWidth);

    // Initialize Swiper only if it should be activated
    if (activateSwiper) {
      const swiper = new Swiper($(this).find(".swiper")[0], swiperOptions);

      // Pause autoplay on hover and restart on mouse leave
      $(this).hover(
        function () {
          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
          }
        },
        function () {
          if (autoplaySettings) {
            swiper.autoplay.start();
          }
        }
      );
    }
  });
}

// Call initializeSwiper on window load and resize
$(window).on('load resize', function() {
  initializeSwiper();
});
