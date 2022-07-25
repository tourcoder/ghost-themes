/**
 * Main JS file for Paperleaf behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
  "use strict";

  var $document = $(document);

  $document.ready(function () {

    /**
     * FitVids.js for responsive videos
     */
    var $postContent = $(".post-content");
    $postContent.fitVids();

    /**
     * Masonry grid
     */
    var $grid = $('.js-grid').imagesLoaded( function() {
      $grid.masonry({
        itemSelector       : '.post',
        percentPosition    : true,
        transitionDuration : '0.25s'
      });
      $.force_appear();
    });

    /**
     * Add class to elements that appear in viewport
     */
    $('.post--grid').appear();
    $('.post--grid').on('appear', function(event, $all_appeared_elements) {
      $(this).addClass('animate');
    });

    /**
     * Preloader
     */
    $('body').imagesLoaded( function() {
      $('.js-loader').fadeOut(250);
    });

    /**
     * Handle sidebar height for phones and tablets
     */
    $(window).on('resize', function(event) {
      sidebarHeight();
    });
    sidebarHeight();

    $('.js-toggle-nav').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('open');
      $('.js-nav').toggleClass('is-visible');
    });

  });

})(jQuery);

function sidebarHeight() {
  var innerHeight = jQuery('.js-sidebar-inner').height();
  var footerHeight = jQuery('.js-sidebar-footer').height();
  var windowHeight = jQuery(window).height();
  var switchClass = ( innerHeight + footerHeight + 192 ) > windowHeight ? true : false;
  if ( switchClass ) {
    jQuery('.js-sidebar-footer').addClass('sidebar-footer-static');
  } else {
    jQuery('.js-sidebar-footer').removeClass('sidebar-footer-static');
  }
}
