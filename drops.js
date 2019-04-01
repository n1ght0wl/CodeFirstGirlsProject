
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

var backgrounds = ['quote-atticus', 'quote-jasmine-warga', 'quote-stephen-fry']
$( document ).ready(function(){
    $('h1').on('click', function () {
      var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      var imageUrl = "url('./images/" + randomBackground + ".png')"
      $("body").css('background', imageUrl);
      $("span.photographer").html(randomBackground);
    })
  })
