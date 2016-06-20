$(document).ready(function() {
  $("#blanks form").submit(function(event) {
  var food = $("input#food").val();
  var animal = $("input#animal").val();
  var city = $("input#city").val();
  var water = $("input#water").val();
  var movie = $("input#movie").val();


  var favorite = [];

  favorite.push(food, animal, city, water, movie);

  alert(favorite);

  event.preventDefault();
  });
});
