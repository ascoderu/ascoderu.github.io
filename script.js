function checkDevice(height, width) {
  var small = [800, 1000];
  var heightIsLower = height < small[0];
  var widthIsLower = width < small[1];
  return (heightIsLower && widthIsLower) ? small : [0, 0];
}

function setUpFullpage(screenSize) {
  $('#fullpage').fullpage({
    anchors: ['home-page', 'history', 'lokole', 'help-us', 'news', 'contact'],
    menu:"#navbar-menu",
    paddingTop: '80px',
    paddingBottom: '60px',
    responsiveHeight: screenSize[0],
    responsiveWidth: screenSize[1],
    afterRender: function() {
      $("#website-content").css("display", "block");
    }
  });
}

$(document).ready(function() {

  var heightScreen = $(window).height(); 
  var widthScreen = $(window).width();

  setUpFullpage(checkDevice(heightScreen, widthScreen));      

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
