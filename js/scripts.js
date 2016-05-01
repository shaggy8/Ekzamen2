jQuery(function() {
  $('.slider__wrapper--1').jcarousel();
  $('.slider__button--prev-1').click(function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--1').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-1').click(function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--1').jcarousel('scroll', '+=1');
  });


  $('.slider__wrapper--2').jcarousel();
  $('.slider__button--prev-2').click(function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--2').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-2').click(function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--2').jcarousel('scroll', '+=1');
  });


  $('.slider__wrapper--3').jcarousel();
  $('.slider__button--prev-3').click(function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--3').jcarousel('scroll', '-=1');
  });
  $('.slider__button--next-3').click(function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    $('.slider__wrapper--3').jcarousel('scroll', '+=1');
  });



  takeImages();


  $('.search__form').submit(function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    var words = $('.search__input').val();
    takeImages(words);
    $('.search__input').val('');
  });


  function takeImages(words) {
    var words = words || '';
    var category = ['fashion', 'nature', 'backgrounds', 'science', 'education', 'people', 'feelings', 'religion', 'health', 'places', 'animals', 'industry', 'food', 'computer', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music'];
    var random;
    
    if (words) {
      words = words.split(' ').join('+');
    } else {
      random = Math.random() * category.length;
      random = (Math.round(random));
    }

    $.ajax({
      'url': 'https://pixabay.com/api/?key=2482774-53251b722f6b9597c9c0a6080&q=' + words + '&category=' + category[random] + '&image_type=photo',
      'success': showImages
  });
  }


  function showImages(response) {
    $('.ideas__box').remove();

    var $ideasBox = $('<div class="ideas__box"></div>');
    $('.ideas__header').after($ideasBox);

    $ideasBox.html( tmpl('ideas', response) )
             .masonry({
                gutter: 20,
                fitWidth: true
              });
  }

});