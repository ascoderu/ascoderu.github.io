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
    if (!isMobileDevice()) {
      $('[data-toggle="tooltip"]').tooltip();
    }
  }

  function setupModals() {
    $('div[rel="modal"]').on('click keydown', function(event) {
      if (event.which !== 1 && event.which !== 13) {
        return;
      }

      var $clicked = $(this);
      var clickedModalId = $clicked.data('reference');
      var contentModalHtml = $('#' + clickedModalId).html();

      var dialog = BootstrapDialog.show({
        onhidden: function() {
          $clicked.focus();
        },
        title: $clicked.data('title'),
        message: $('<div/>').append(contentModalHtml)
      });

      dialog.$modal.focus();
    });
  }

  function showPage() {
    $('body').removeClass('loading');
  }

  function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
})(window.jQuery, window.BootstrapDialog);
