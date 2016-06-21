

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4"];


    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
      blanks.push(userInput);
    });

    blanks.splice(0,4);
    .toUpperCase(blanks);
    alert(blanks);
    event.preventDefault();
  });
});
