$(document).ready(function(){  
  navbarColorChange();
  navitemClicked();
  navIntroActive();
  navPortfolioActive();
  navContactActive();
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
  $("#nav-intro a").click(function(){
    $("html,body").animate({
      scrollTop: $(".introduction").offset().top-50},
      'slow');
  });
  $("#nav-portfolio a").click(function(){
    $("html,body").animate({
      scrollTop: $(".portfolio").offset().top-50},
      'slow');
  });
  $("#nav-contact a").click(function(){
    $("html,body").animate({
      scrollTop: $(".contact").offset().top - 50},
      'slow');
  });
}
// when scrolled to introduction, nav-intro becomes active
var navIntroActive = function(){
  var scroll_start = 0;
  var startchange = $('.introduction');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 50.5) {
        $(".nav li").removeClass("active");
        $("#nav-intro").addClass("active");
        console.log("at Intro");
      } else {
        $("#nav-intro").removeClass("active");
      }
    });
  }
}
// when scrolled to portfolio, nav-portfolio becomes active
var navPortfolioActive = function(){
  var scroll_start = 0;
  var startchange = $('.portfolio');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 50.5) {
        $(".nav li").removeClass("active");
        $("#nav-portfolio").addClass("active");
        console.log("at portfolio");
      } else {
        $("#nav-portfolio").removeClass("active");
      }
    });
  }
}
// when scrolled to contact, nav-contact becomes active
var navContactActive = function(){
  var scroll_start = 0;
  var startchange = $('.contact');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 80) {
        $(".nav li").removeClass("active");
        $("#nav-contact").addClass("active");
        console.log("hi");
      } else {
        $("#nav-contact").removeClass("active");
      }
    });
  }
}