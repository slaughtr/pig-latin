// below this line is business, or back-end, logic
var pigLatinArray = []; // this is the empty array the translated strings will be entered into
var consonantsArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "y", "z"]; //array containing all consonants except q, including y
var vowelsArray = ["a", "e", "i", "o", "u"]; // array containing all vowels except y
function singleVowelCheck(string) {
  var initialArray = string.split(" "); //takes the input string and makes each item seperated by a space into a single word within the array initialArray
  initialArray.forEach(function(index) { //for each loop that checks every entry in the array created from the user input
    for (i = 0; i <= vowelsArray.length; i++) {
      if (index[0] === vowelsArray[i] || index.length === 1) { //if word is single letter, or if word starts with a vowel, do the following function
        index = index + "ay"; // take the word and add "ay" to the end of it.
        pigLatinArray.push(index); // take the new string and put it at the end of the pigLatinArray array
      }
    } // closes for loop
  });
  return pigLatinArray; // takes the updated pigLatinArray array and sends it to the front-end logic
}; // closes singleVowelCheck function

// below this line is user, or front-end, logic
$(document).ready(function() { //business logic does NOT need to be in doc.ready


  $("form#userInput").submit(function() {
    event.preventDefault();
    var value = $("#inputString").val();
    singleVowelCheck(value); // runs the singleVowelCheck function with the input from the user as an argument
    $("#result").show();
    $("#resultP").append(pigLatinArray.join(" ")); //takes translated user input saved as pigLatinArray and joins it back together with spaces, displaying it
  }) //closes form.submit
}); //closes doc.ready
