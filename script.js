(function() {

function setUpFullpage(screenSize) {
  $('#fullpage').fullpage({
    anchors: ['home-page', 'history', 'lokole', 'help-us', 'news', 'contact'],
    menu: '#navbar-menu',
    paddingTop: '80px',
    paddingBottom: '60px',
    responsiveHeight: screenSize.height,
    responsiveWidth: screenSize.width,
    afterRender: function() {
      $('#website-content').removeClass('hidden');
    }
  });
}

function assignModalTitleAndContent($clicked) {
  var clickedModalId = $clicked.data('reference');
  var contentModalHtml = $('#' + clickedModalId).html();

  BootstrapDialog.show({
    title: $clicked.data('title'),
    message: $('<div/>').append(contentModalHtml)
  });
}

$(document).ready(function() {

  var screenSize = {
    height: $(window).height(),
    width: $(window).width()
  };

  setUpFullpage(screenSize);

  $('.navbar-nav li a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('div[rel="modal"]').click(function() {
    assignModalTitleAndContent($(this));
  });

});

})();
