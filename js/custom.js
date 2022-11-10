'use strict';

// navbar ul
$('nav ul li').click(function () {
  $(this).addClass('active').siblings('li').removeClass('active');
  let offsetSec = $('.' + $(this).data('class')).offset().top - 20;
  $('body, html').animate ({
    scrollTop: offsetSec,
  }, 1000)
})

//toggle button at small screen
$('nav .toggle-menu').click(function () {
  $(this).toggleClass('active-bars');
  $('nav .toggle-menu + ul').toggleClass('hide-ul');
})

// scroll to section
$(window).scroll(function () {
  let scrolly = $(window).scrollTop();

  if (scrolly >= $('.landing').height() - 50 ) {
    $('header').addClass('header-scroll');
  }
  else {
    $('header').removeClass('header-scroll');
  }

  $(' header nav ul').addClass('hide-ul'); // hide .nav-list if open while scroll

})


$('.landing .bullets li').click(function () {
  $(this).addClass('active').siblings('li').removeClass('active');
})

// shuffle portfolio
$('.portfolio ul li').click(function () {
  $(this).addClass('active').siblings('li').removeClass('active');
  $('.cards > div').hide();
  $('.' + $(this).data('class')).fadeIn();
})


// progress animation
let progressSpans = document.querySelectorAll('.prog span');
let section = document.querySelector('.our-skills');

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop + 200) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    })
  }
}