// business logic
// debugger;
var pigLatinArray = []; // this is the empty array the translated strings will be entered into
function singleVowelCheck(string) {
  var initialArray = string.split(" "); //takes the input string and makes each item seperated by a space into a single word within the array initialArray
  initialArray.forEach(function(index) {
    if (index.length === 1 || index[0] === "a" || index[0] === "e" || index[0] === "i" || index [0] === "o" || index [0] === "u") { //if word is single letter, or if word starts with a vowel, do the following function
      index = index + "ay"; // take the word and add "ay" to the end of it.
      pigLatinArray.push(index); // take the new word and put it at the end of the pigLatinArray array
    } // closes forEach function
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
