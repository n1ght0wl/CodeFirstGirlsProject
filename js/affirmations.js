/*
var backgrounds = ['quote-atticus', 'quote-jasmine-warga', 'quote-stephen-fry']
$( document ).ready(function(){
    $('h1').on('click', function () {
      var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      var imageUrl = "url('images/" + randomBackground + ".png')"
      $("body").css('background', imageUrl);
      $("span.photographer").html(randomBackground);
    })
  })

  */

  var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
