$(document).ready(function () {
  'use strict';
    // Opens/closes the sidebar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $(".sidebar-wrapper").toggleClass("active");
  });

  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  $(function () {
    var width = $(window).width();
    if (width <= 1200) {
      $('section#portfolio.portfolio').removeClass('data-featherlight data-featherlight-filter="a" data-featherlight-type="iframe" data-featherlight-iframe-height="720" data-featherlight-iframe-width="1080"');
    }
  });
});