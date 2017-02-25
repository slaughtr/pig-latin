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
  var stop = 0;
  var index = 0;

  nonVowelArray.forEach(function(letter){


    if ((letter === "a" || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u") && (nonVowelArray[index-1] != "q") && stop === 0) {
      stop++;
    } else if (stop === 0){
      consonantArray.push(nonVowelArray.slice(index, index+1));
    }
    index++;
  });
  consonantArray.unshift(nonVowelArray.slice(consonantArray.length));

  consonantString = [].concat.apply([],consonantArray);
  console.log(consonantString.join("")+"ay");
  pigLatinArray.push(consonantString.join("")+"ay");
};

// below this line is user, or front-end, logic
$(document).ready(function() {
  $("form#userInput").submit(function() {
    event.preventDefault();
    var value = $("#inputString").val();
    singleVowelCheck(value);
    $("#result").show();
    $("#resultP").append(pigLatinArray.join(" "));
  })
});
