$(document).ready(function() {
  $("#blanks form").submit(function(event) {
  var food = $("input#food").val();
  var animal = $("input#animal").val();
  var city = $("input#city").val();

  console.log(food);
  console.log(animal);
  console.log(city);

  event.preventDefault();
  });
});
