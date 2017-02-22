// business logic
debugger;
function singleVowelCheck(string) {
  var initialArray = string.split(" ");
  initialArray.forEach(function(index) {
    if (index.length === 1) {
      index = index + "ay";
    }
  });
}; // closes alphacheck

$(document).ready(function() {

  $("form#userInput").submit(function() {
    event.preventDefault();
    var value = $("#inputString").val();

    $("#result").show();
    console.log(singleVowelCheck(value));
    $("p#result").text(singleVowelCheck(value));
  })

// user logic

}); //closes doc.ready
