function assignDataContentToModals() {
  $("#info1").data("content", 'text history of Ascoderu');
  $("#info2").data("content", 'text hisotry of REC & Lokole');
}

function checkDevice(height, width) {
  var small = [800, 1000];
  var heightIsLower = height < small[0];
  var widthIsLower = width < small[1];
  return (heightIsLower && widthIsLower) ? small : [0, 0];
}

function setUpFullpage(screenSize) {
  $('#fullpage').fullpage({
    anchors: ['0-home-page', '1-about', '2-lokole', '3-help-us', '4-media'],
    sectionsColor: ['', '#DFE2DB', '', '', ''],
    menu:"#navbar-menu",
    scrollBar: true,
    responsiveHeight: screenSize[0],
    responsiveWidth: screenSize[1],
  });
}


$(document).ready(function() { 
  assignDataContentToModals();

  var heightScreen = $(window).height(); 
  var widthScreen = $(window).width();

  setUpFullpage(checkDevice(heightScreen, widthScreen));      

  // So the Mobile Nav Hides When a Link is Clicked
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $("div[rel='modal']").click(function(event){
    var clicked = $(this);
    var modalContent =  clicked.data("content");

    BootstrapDialog.show({
      title: 'The history of Ascoderu',
      message: modalContent
    });
  });

});
