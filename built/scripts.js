jQuery(function(){function e(e){var t,e=e||"",l=["fashion","nature","backgrounds","science","education","people","feelings","religion","health","places","animals","industry","food","computer","sports","transportation","travel","buildings","business","music"];e?e=e.split(" ").join("+"):(t=Math.random()*l.length,t=Math.round(t)),$.ajax({url:"https://pixabay.com/api/?key=2482774-53251b722f6b9597c9c0a6080&q="+e+"&category="+l[t]+"&image_type=photo",success:r})}function r(e){$(".ideas__box").remove();var r=$('<div class="ideas__box"></div>');$(".ideas__header").after(r),r.html(tmpl("ideas",e)).masonry({gutter:20,fitWidth:!0})}$(".slider__wrapper--1").jcarousel(),$(".slider__button--prev-1").click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$(".slider__wrapper--1").jcarousel("scroll","-=1")}),$(".slider__button--next-1").click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$(".slider__wrapper--1").jcarousel("scroll","+=1")}),$(".slider__wrapper--2").jcarousel(),$(".slider__button--prev-2").click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$(".slider__wrapper--2").jcarousel("scroll","-=1")}),$(".slider__button--next-2").click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$(".slider__wrapper--2").jcarousel("scroll","+=1")}),$(".slider__wrapper--3").jcarousel(),$(".slider__button--prev-3").click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$(".slider__wrapper--3").jcarousel("scroll","-=1")}),$(".slider__button--next-3").click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,$(".slider__wrapper--3").jcarousel("scroll","+=1")}),e(),$(".search__form").submit(function(r){r.preventDefault?r.preventDefault():r.returnValue=!1;var t=$(".search__input").val();e(t),$(".search__input").val("")})});