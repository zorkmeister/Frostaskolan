/* ***************************
  Enable Smooth Scrolling
  Author: Chris Coyier
  URL:  CSS-Tricks.com
***************************** */

$(document).ready(function() {	$('a[href*=#]:not([href=#]):not([href=#show]):not([href=#hide])').click(function() {
		if ($(window).width() < 768) {
			$('#mainPage').removeClass('open');
			setTimeout(function(){$('#mainPage').removeClass('visible');}, 250);
			open = 0;
		}
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('header').addClass('shrink');
  } else {
    $('header').removeClass('shrink');
  }
});

$(window).scroll(function() {

});

$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('li').addClass('shrink');
  } else {
    $('li').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('ul').addClass('shrink');
  } else {
    $('ul').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('a').addClass('shrink');
  } else {
    $('a').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('.imgLogga').addClass('shrink');
  } else {
    $('.imgLogga').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 300) {
    $('.imgScratsite').addClass('shrink');
  } else {
    $('.imgScratsite').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 550) {
    $('video').get(0).pause();
  } else {
    $('video').get(0).play();
  }
});



