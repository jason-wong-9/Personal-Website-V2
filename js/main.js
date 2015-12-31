$(document).ready(function(){  
//    navbarColorChange();
//    navitemClicked();
    scrollWhenClicked();
    collapse();
    // navIntroActive();
    // navPortfolioActive();
    // navContactActive();
    $(window).on('scroll resize', check_if_in_view);
    $(window).trigger('scroll');
    $('.carousel').carousel({
        interval: 3000
    })
    $('.modal').on('hidden.bs.modal', function () {
        resetCarousel();
    });
    $('.modal').on('show.bs.modal', function () {
        resetCarousel();
    });
});

// navbar color changes when scrolled to introduction div
//var navbarColorChange = function(){
//    var scroll_start = 0;
//    var startchange = $('#portfolio');
//    var offset = startchange.offset();
//    if (startchange.length){
//        $(document).scroll(function() { 
//            scroll_start = $(this).scrollTop();
//            if(scroll_start > offset.top - 50.5) {
//                $(".navbar-default").css('visibility', 'visible');
//            } else {
//                $(".navbar-default").css('visibility', 'hidden');
//            }
//        });
//    }
//}

// page scrolls to specified div when item is clicked
var scrollWhenClicked = function(){
    $("#backtotop").click(function(){
        $("html,body").animate({
            scrollTop: $("#coverpage").offset().top-50},
            'slow');
    });
    $("#arrowdown").click(function(){
        $("html,body").animate({
            scrollTop: $("#portfolio").offset().top-50},
            'slow');
    });
//    $("#nav-introduction a").click(function(){
//        $("html,body").animate({
//            scrollTop: $("#introduction").offset().top-50},
//            'slow');
//    });
//    $("#nav-portfolio a").click(function(){
//        $("html,body").animate({
//            scrollTop: $("#portfolio").offset().top-50},
//            'slow');
//  });
//    $("#nav-contact a").click(function(){
//        $("html,body").animate({
//            scrollTop: $("#contact").offset().top - 50},
//        'slow');
//  });
}

// nav-collapse hides when nav-item is selected
var collapse = function() {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
}


// check if div is in view
function check_if_in_view() {
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

// Reset Carousel
function resetCarousel() {
    $('.carousel').carousel({
        pause: true,
        interval: false
        }).carousel(0);
}

// when scrolled to introduction, nav-intro becomes active
//var navIntroActive = function(){
//  var scroll_start = 0;
//  var startchange = $('#introduction');
//  var offset = startchange.offset();
//  if (startchange.length){
//    $(document).scroll(function() { 
//      scroll_start = $(this).scrollTop();
//      if(scroll_start > offset.top - 50.5) {
//        $(".nav li").removeClass("active");
//        $("#nav-introduction").addClass("active");
//        console.log("at Intro");
//      } else {
//        $("#nav-introduction").removeClass("active");
//      }
//    });
//  }
//}
// when scrolled to portfolio, nav-portfolio becomes active
//var navPortfolioActive = function(){
//  var scroll_start = 0;
//  var startchange = $('#portfolio');
//  var offset = startchange.offset();
//  if (startchange.length){
//    $(document).scroll(function() { 
//      scroll_start = $(this).scrollTop();
//      if(scroll_start > offset.top - 50.5) {
//        $(".nav li").removeClass("active");
//        $("#nav-portfolio").addClass("active");
//        console.log("at portfolio");
//      } else {
//        $("#nav-portfolio").removeClass("active");
//      }
//    });
//  }
//}
// when scrolled to contact, nav-contact becomes active
//var navContactActive = function(){
//  var scroll_start = 0;
//  var startchange = $('#contact');
//  var offset = startchange.offset();
//  if (startchange.length){
//    $(document).scroll(function() { 
//      scroll_start = $(this).scrollTop();
//      if(scroll_start > offset.top - 500) {
//        $(".nav li").removeClass("active");
//        $("#nav-contact").addClass("active");
//        console.log("hi");
//      } else {
//        $("#nav-contact").removeClass("active");
//      }
//    });
//  }
//}


