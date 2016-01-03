$(document).ready(function(){  
    scrollWhenClicked();
    $(window).load(function(){
        $(window).on('scroll resize', check_if_in_view);
        $(window).trigger('scroll');
    });
    $('.carousel').carousel({
        interval: 3000
    })
    $('.modal').on('hidden.bs.modal', function () {
        resetCarousel();
        resetMessage();
    });
    $('.modal').on('show.bs.modal', function () {
        resetCarousel();
    });
});


// Page scrolls to specified div when item is clicked
var scrollWhenClicked = function(){
    $("#backtotop").click(function(){
        $("html,body").animate({
            scrollTop: $("#coverpage").offset().top},
            'slow');
    });
    $("#arrowdown").click(function(){
        $("html,body").animate({
            scrollTop: $("#portfolio").offset().top},
            'slow');
    });
}


// Check if div is in view
// Taken from http://www.sitepoint.com/scroll-based-animations-jquery-css3/#scroll-animation-examples

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
            console.log(element_bottom_position);
            console.log(window_top_position);
            console.log("in-view added");
        } else {
            $element.removeClass('in-view');
            console.log(element_bottom_position);
            console.log(window_top_position);
            console.log("in-view removed");
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

// Reset message modal 
function resetMessage() {
    var htmlString = '<p>Want to get in touch with me? Just fill out this form and I will get back to you as soon as possible.</p><br/><form><div class="form-group"><label for="inputName">Name</label><input type="text" class="form-control" id="name" placeholder="Name"></div><div class="form-group"><label for="inputEmail">Email address</label><input type="email" class="form-control" id="email" placeholder="Email"></div><div class="form-group"><label for="inputMessage">Message</label><textarea class="form-control" rows="5" id="message" placeholder="Message"></textarea></div><br/><div type="submit" id="submit" class="btn btn-modal">Submit</div></form>';

    $("#message-modal .modal-body").html(htmlString);
}