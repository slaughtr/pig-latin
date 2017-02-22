# _Pig Latin Translator_

#### _Intro to Programming Project for Epicodus - 22 February 2017_

#### By _**Grace Stuart (gstuart) && Dallas Slaughter (slaughtr)**_

## Description
A webpage (using HTML, CSS, Bootstrap, JavaScript, and jQuery) that asks users to input a string and translate the input into pig latin.

## Setup/Installation Requirements
1. Clone this repository onto your desktop. This will place the all files and folders in onto your computer.

2. Click on the index.html file in the browser. This will allow you to view the file in your browser. If this does not open in your browser, navigate to project folder via your command line and type "open index.html".

## Specifications
1. If the word is a single letter vowel, the program will add "ay" to the end.
  * Input Example: A
  * Output Example: aay
2. If the word begins with a vowel, the program will add "ay" to the end.
  * Input Example: always
  * Output Example: alwaysay
3. If the words the word begins with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
  * Input Example: chip
  * Input Example: car
  * Output Example: ipchay
  * Output Example: arcay
4.  If the first consonants include "qu", the program will move the "u" along with the "q".
  * Input Example: squall
  * Input Example: quit
  * Output Example: allsquay
  * Output Example: itquay
5. For words that begin with "y", the program will treat the "y" as a consonant and move it to the end, appending "ay".
  * Input Example: yell
  * Output Example: ellyay
6. If the word includes a non-alphabetic character, the program will ignore the character.
  * Input Example: He's
  * Input Example: house.
  * Output Example: e'shay
  * Output Example: ousehay.

## Technology Used To Create Portfolio
HTML, CSS, JavaScript, and jQuery.

## License
*GPL*
Copyright (c) 2017 **_Grace Stuart && Dallas Slaughter_**
