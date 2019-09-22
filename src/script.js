(function($, BootstrapDialog) {

  function assignModalTitleAndContent($clicked) {
    var clickedModalId = $clicked.data('reference');
    var contentModalHtml = $('#' + clickedModalId).html();

    BootstrapDialog.show({
      title: $clicked.data('title'),
      message: $('<div/>').append(contentModalHtml)
    });
  }

  $(document).ready(function() {
    $('section.fullpage').css('height', $(window).height() + 'px');

    $('body').scrollspy({ target: '.navbar-collapse', offset: 100 });

    $('.navbar-nav li a').click(function() {
      $('.navbar-collapse').collapse('hide');
      $('.navbar-nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
      $('body, html').animate({ scrollTop: $($(this).attr('href')).offset().top - 70 }, 400);
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('div[rel="modal"]').click(function() {
      assignModalTitleAndContent($(this));
    });

  });

})(window.jQuery, window.BootstrapDialog);
