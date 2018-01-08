
function setUpFullpage(screenSize) {
  $('#fullpage').fullpage({
    anchors: ['home-page', 'history', 'lokole', 'help-us', 'news', 'contact'],
    menu:"#navbar-menu",
    paddingTop: '80px',
    paddingBottom: '60px',
    responsiveHeight: screenSize.height,
    responsiveWidth: screenSize.width,
    afterRender: function() {
      $("#website-content").show();
    }
  });
}

$(document).ready(function() {

  var screenSize = {
    height: $(window).height(),
    width: $(window).width()
  };

  setUpFullpage(screenSize);

  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $("div[rel='modal']").click(function(event){
    var clickedModalId = $(this).data("reference");
    var contentModalHtml = $("#"+clickedModalId).html();

    BootstrapDialog.show({
      title: $(this).data("title"),
      message: $('<div/>').append(contentModalHtml)
    });
  });

});
