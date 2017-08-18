$(document).ready(function(){
	var stickyOffset = $('.sticky').offset().top;

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();
    
  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

jQuery(function($) {

  $('#mobilemenu ul li a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 15
    }, 980, 'swing', function() {
      window.location.hash = target;
    });
  });


});
	

	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
		
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // end window scroll
	});


	

});



