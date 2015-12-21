$(document).ready(function(){  
  navbarColorChange();
  navitemClicked();
});

// navbar color changes when scrolled to introduction div
var navbarColorChange = function(){
  var scroll_start = 0;
  var startchange = $('.introduction');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 50.5) {
        $(".navbar-default").css('background-color', 'rgb(255,0,0)');
      } else {
        $(".navbar-default").css('background-color', 'rgba(255,0,0,0.3)');
      }
    });
  }
}

// page scrolls to specified div when nav items are clicked
var navitemClicked = function(){
  $("#nav-home").click(function(){
    $("html,body").animate({
      scrollTop: $(".coverpage").offset().top-50},
      'slow');
  });
  $("#nav-intro").click(function(){
    $("html,body").animate({
      scrollTop: $(".introduction").offset().top-50},
      'slow');
  });
  $("#nav-portfolio").click(function(){
    $("html,body").animate({
      scrollTop: $(".portfolio").offset().top-50},
      'slow');
  });
  $("#nav-contact").click(function(){
    $("html,body").animate({
      scrollTop: $(".contact").offset().top-50},
      'slow');
  });
}