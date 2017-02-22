// business logic
// debugger;
var pigLatinArray = [];
function singleVowelCheck(string) {
  var initialArray = string.split(" ");
  initialArray.forEach(function(index) {
    if (index.length === 1) {
      index = index + "ay";
      pigLatinArray.push(index);
    } if else {
        
    }
  });
  return pigLatinArray;
}; // closes alphacheck

$(document).ready(function() {

  $("form#userInput").submit(function() {
    event.preventDefault();
    var value = $("#inputString").val();
    var translatedValue = singleVowelCheck(value);
    var translatedString = translatedValue.join(" "); //take translatedValue (which will be pigLatinArray, and joins it back together with a space between words)
    $("#result").show();
    $("#resultP").append(translatedString);
  })

// user logic

}); //closes doc.ready
