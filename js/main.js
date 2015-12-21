$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('.introduction');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 50.5) {
        $(".navbar-default").css('background-color', '#f0f0f0');
      } else {
        $(".navbar-default").css('background-color', 'transparent');
      }
    });
  }
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
});
