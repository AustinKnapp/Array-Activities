var favorite = [];
var favorite2 = [];
var food = '';
var animal = '';
var city = '';
var water = '';
var movie = '';
var coffee = '';
var iceCream = []


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

  $("#listHere").html("<li>" + favorite2[0] + "</li>" + "<li>" + favorite2[1] + "</li>" + "<li>" + favorite2[2] + "</li>");

  console.log(favorite);
  console.log(favorite2);

  iceCream.push("Bourbon Pecan", "Half-Baked", "Americone Dream", "Phish Food", "Chubby Hubby").val();
  $("#iceCream").html();

  event.preventDefault();
  });
});
