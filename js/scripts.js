jQuery(function() {
  $('.slider__wrapper--1').jcarousel();
  $('.slider__button--prev-1').click(function() {
    event.preventDefault();
    $('.slider__wrapper--1').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-1').click(function() {
    event.preventDefault();
    $('.slider__wrapper--1').jcarousel('scroll', '+=1');
  });


  $('.slider__wrapper--2').jcarousel();
  $('.slider__button--prev-2').click(function() {
    event.preventDefault();
    $('.slider__wrapper--2').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-2').click(function() {
    event.preventDefault();
    $('.slider__wrapper--2').jcarousel('scroll', '+=1');
  });


  $('.slider__wrapper--3').jcarousel();
  $('.slider__button--prev-3').click(function() {
    event.preventDefault();
    $('.slider__wrapper--3').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-3').click(function() {
    event.preventDefault();
    $('.slider__wrapper--3').jcarousel('scroll', '+=1');
  });
});