(function($, BootstrapDialog) {
  $(document).ready(function() {
    maximizeSections();
    activateNavLinkOnScroll();
    activateNavLinkOnClick();
    setupTooltips();
    setupModals();
    showPage();
  });

  function maximizeSections() {
    $('section.fullpage').css('height', $(window).height() + 'px');
  }

  function activateNavLinkOnScroll() {
    $('body').scrollspy({ target: '.navbar-collapse', offset: 100 });
  }

  function activateNavLinkOnClick() {
    $('.navbar-nav li a').click(function() {
      var $clicked = $(this);
      $('.navbar-collapse').collapse('hide');
      $('.navbar-nav').find('.active').removeClass('active');
      $clicked.parent().addClass('active');
      $('body, html').animate({ scrollTop: $($clicked.attr('href')).offset().top - 70 }, 400);
    });
  }

  function setupTooltips() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  function setupModals() {
    $('div[rel="modal"]').click(function() {
      var $clicked = $(this);
      var clickedModalId = $clicked.data('reference');
      var contentModalHtml = $('#' + clickedModalId).html();

      BootstrapDialog.show({
        title: $clicked.data('title'),
        message: $('<div/>').append(contentModalHtml)
      });
    });
  }

  function showPage() {
    $('body').removeClass('loading');
  }
})(window.jQuery, window.BootstrapDialog);
