var favorite = [];
var favorite2 = [];
var food = '';
var animal = '';
var city = '';
var water = '';
var movie = '';
var coffee = '';


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
  food = $("input#food").val();
  animal = $("input#animal").val();
  city = $("input#city").val();
  water = $("input#water").val();
  movie = $("input#movie").val();
  coffee = $("input#coffee").val();

  favorite.push(food, animal, city, water, movie, coffee);
  favorite2.push(favorite[1], favorite[0], favorite[2]);


  console.log(favorite);
  console.log(favorite2);

  event.preventDefault();
  });
});
