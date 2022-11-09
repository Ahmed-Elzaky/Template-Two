'use strict';

$('nav ul li').click(function () {
  $(this).addClass('active').siblings('li').removeClass('active');
})

$('.landing .bullets li').click(function () {
  $(this).addClass('active').siblings('li').removeClass('active');
})

$('nav .toggle-menu').click(function () {
  $(this).toggleClass('active-bars');
  $('nav .toggle-menu + ul').toggleClass('hide-ul');
})

$('.portfolio ul li').click(function () {
  $(this).addClass('active').siblings('li').removeClass('active');
})

// $('.info-list li').click(function () {
//   $().addClass('selected').siblings('li').removeClass('selected');
//   $('.info-content > div').hide();
//   $('.' + $(this).data('class')).fadeIn();
// })