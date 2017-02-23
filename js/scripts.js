// below this line is business, or back-end, logic
var pigLatinArray = [];
var vowelsArray = ["a", "e", "i", "o", "u"];
function singleVowelCheck(string) {
  var initialArray = string.split(" ");
  initialArray.forEach(function(index) {
  if (index[0] === "a" || index[0] === "e" || index[0] === "i" || index[0] === "o" || index[0] === "u" || index.length === 1) {
    index = index + "ay";
  pigLatinArray.push(index);
  } else {
    consonantFunction(index);
  }
});
  return pigLatinArray;
};
function consonantFunction(nonVowelWord) {
  var nonVowelArray = nonVowelWord.split("");
  var consonantArray = [];
  var shiftableArray = nonVowelArray.splice();
console.log(shiftableArray);
  nonVowelArray.forEach(function(apples){
  // debugger;
    if (apples === "a" || apples ==="e" || apples ==="i" || apples ==="o" || apples ==="u") {
      console.log("it's a vowel");
    } else {
      var consonantToMove = shiftableArray.splice(0,1);
      console.log(consonantToMove);
      shiftableArray.push(consonantToMove);
      console.log(shiftableArray);
    }
  });
  var checkedWord = shiftableArray.join("");
  checkedWord += "ay";
  pigLatinArray.push(checkedWord);
};

// below this line is user, or front-end, logic
$(document).ready(function() {
  $("form#userInput").submit(function() {
    event.preventDefault();
    var value = $("#inputString").val();
    singleVowelCheck(value);
    $("#result").show();
    $("#resultP").append(pigLatinArray.join(" "));
  }) //closes form.submit
}); //closes doc.ready
