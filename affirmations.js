
var backgrounds = ['quote-atticus', 'quote-jasmine-warga', 'quote-stephen-fry']
$( document ).ready(function(){
    $('h1').on('click', function () {
      var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      var imageUrl = "url('images/" + randomBackground + ".png')"
      $("body").css('background', imageUrl);
      $("span.photographer").html(randomBackground);
    })
  })
