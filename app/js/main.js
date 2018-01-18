$(document).ready(function () {
    var stickyOffset = $('.sticky').offset().top;

    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    jQuery(function ($) {

        $('#navmenu ul li a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 15
            }, 980, 'swing', function () {
                window.location.hash = target;
            });
        });


    });


    // Cache the Window object
    var $window = $(window);

    // Parallax Backgrounds
    // Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

    $('section[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function () {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!								
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% ' + yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });

        }); // end window scroll
    });

});

/*
1. Toggle Hamburger button from Hamburger to Arrow
2. Hide Navigation Menu
3. Push Out Navigation

Create Function to Push Out Navigation Menu

*/

document.querySelector('.nav-icon').addEventListener('click', function () {
    //Toggle Hamburger Navigation
    document.querySelector('.nav-icon').classList.toggle('open-x');
    //Push Out Navigation when hamburger is clicked
    document.querySelector('#navmenu').classList.toggle('menu-open');
});

document.querySelector('#navmenu').addEventListener('click', clickNav);

function clickNav(){
    document.querySelector('#navmenu').classList.remove('menu-open');
    document.querySelector('.nav-icon').classList.remove('open-x');

}







