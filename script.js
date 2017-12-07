function assignDataContentToModals() {
  var ascoderuStory = "Ascoderu founder & CEO, Nzola Swasisa, was born and raised in the Democratic Republic of the Congo (DRC) and at a young age he took electronics communications courses. " +
                      "For 19 years Nzola worked for Mission Aviation Fellowship (MAF) in 5 different countries; DRC, Angola, Namibia, South Africa and Zambia. " +
                      "At that time, Nzola became aware of the lack of telecommunication infrastructions in rural communities and he begun to refurbish old radio communications to help establish new communication systems. " +
                      "In the late 90’s, Nzola started implementing a radio email system, which consists of sending emails via radio waves. "
  var recStory = "When cellphones became popular in Africa, Nzola then decided to build an offline mobile email server. " +
                 "In 2010, Nzola registered Ascoderu as a not for profit NGO in Canada and in the DRC with the mission to build the server. " +
                 "Between 2010-15, Nzola and Jason Cobham together built the first prototype of the offline mobile email server, which they called REC “Remote Email Center”. " +
                 "In 2013 and 2015 Nzola traveled to Kinshasa to test REC and he realized 2 things: REC was a successful proof-of-concept but it wasn't reliable nor user friendly. " +
                 "Since 2015, new people joined Nzola's efforts to modify and improve REC and in January 2017 the second prototype was built: LOKOLE. ";

  $("#info1").data("content", ascoderuStory);
  $("#info2").data("content", recStory);
}

function checkDevice(height, width) {
  var small = [800, 1000];
  var heightIsLower = height < small[0];
  var widthIsLower = width < small[1];
  return (heightIsLower && widthIsLower) ? small : [0, 0];
}

function setUpFullpage(screenSize) {
  $('#fullpage').fullpage({
    anchors: ['0-home-page', '1-history', '2-lokole', '3-help-us', '4-news', '5-contact'],
    sectionsColor: ['', '', '', '', '', ''],
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
