//BASIC JAVASCRIPT

// on line comment 

/* Multi-line comment */

/* JavaScritp has 8 different data types 
1. undefined 
2. null
3. boolean
4. string
5. symbol
6. bigint
7. number
8. object
*/

/*  Variables - can store any of the 8 data types
Variable names can be made up of numbers, letters, and $ or _, 
but may not contain spaces or start with a number. */
var ourName;

//Assigning the Value of One Variable to Another.
var myVar;
myVar = 5;
var myNum;
myNum = myVar;

/* biggest problems with declaring variables with the var keyword 
is that you can easily overwrite variable declarations */
var camper = "James";
var camper = "David";
console.log(camper); //This will output David 

let catName = "Oliver";
let catName = "Meow!";
console.log(catName); //This will output an error because it can only be declare once 

/* Declare a Read-Only Variable with the const Keyword 
once a variable is assigned with const, it cannot be reassigned */
const name = "Victor";

/* Declare a Read-Only Variable with the const Keyword 
You can easily increment or add one to a variable with the ++ operator.
i++ is the same as i = i + 1 and i-- is the same as i = i - 1;;
*/
let myVar = 87;
let myVar = 11;

myVar++; //equal to 88
myVar--; //equal to 10

//Compound Assignment With Augmented Addition
myVar += 5;
myVar -= 5;
myVar *= 5;
myVar /= 5;


let myVar = 1;
myVar += 5;
console.log(myVar); //6 will be display in console log

let a = 3;
let b = 17;
let c = 12;

a += 12; // equal to 15
b += 9; //equal to 26
c += 7; //equal to 19

/* Escaping Literal Quotes in Strings 
You can use backslash \ to escape the quotes. */
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
Alan said, "Peter is learning JavaScript". // output 

\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	word boundary
\f	form feed


const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
FirstLine
    \SecondLine
ThirdLine

// Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
//This is the first sentence. This is the second sentence.

// Constructing Strings with Variables
const myName = "Victor";
const myStr = "My name is " + myName + "and I am well!" ;
//My name is Victor and I am well!

// Appending Variables to Strings
const someAdjective = "Cool";
let myStr = "Learning to code is ";
myStr += someAdjective;
//Learning to code is Cool

//Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
//lastNameLength is now equal to 8 because we have let we can change the data of the varialble

/*Use Bracket Notation to Find the First Character in a String
For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", 
you can get the value of the first letter of the string by using firstName[0]
*/
const firstName = "Charles";
const firstLetter = firstName[0]
//firstLetter would have a value of the string C.

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
//Output will be L



