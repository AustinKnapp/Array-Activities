var favorite = [];
var food = '';
var animal = '';
var city = '';
var water = '';
var movie = '';


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
  food = $("input#food").val();
  animal = $("input#animal").val();
  city = $("input#city").val();
  water = $("input#water").val();
  movie = $("input#movie").val();

  favorite.push(food, animal, city, water, movie);

  console.log(favorite);

  event.preventDefault();
  });
});
