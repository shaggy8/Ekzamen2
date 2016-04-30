jQuery(function() {
  $('.slider__wrapper--1').jcarousel();
  $('.slider__button--prev-1').click(function() {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--1').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-1').click(function() {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--1').jcarousel('scroll', '+=1');
  });


  $('.slider__wrapper--2').jcarousel();
  $('.slider__button--prev-2').click(function() {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--2').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-2').click(function() {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--2').jcarousel('scroll', '+=1');
  });


  $('.slider__wrapper--3').jcarousel();
  $('.slider__button--prev-3').click(function() {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--3').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-3').click(function() {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--3').jcarousel('scroll', '+=1');
  });



  takeImages();


  $('.search__form').submit(function() {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    var words = $('.search__input').val();
    takeImages(words);
    $('.search__input').val('');
  });


  function takeImages(words) {
    var words = words || '';
    var id = '';
    
    if (words) {
      words = words.split(' ').join('+');
    } else {

      id = [];
      for (var i = 0; i < 88; i++) {
        var random = Math.random() * 999999;
        id.push(Math.round(random));
      }

      id = id.join(',');
    }

    $.ajax({
      'url': 'https://pixabay.com/api/?key=2482774-53251b722f6b9597c9c0a6080&q=' + words + '&id=' + id + '&image_type=photo',
      'success': function(response) {
        $('.ideas__box')
            .html( tmpl('ideas', response) )
            .masonry({
              gutter: 20,
              fitWidth: true
            });
      }
  });
  }

});