// VARIABLE DECLARATION
var string_1 = "Hello, this is part 1, ";
var string_2 = "and this is part 2, ";
var string_3 = "lastly, this is part 3!";
// END VARIABLE DECLARATION

// CONCATENATE FUNCTION
function myCombine() {
    var whole = string_1.concat(string_2, string_3);
    document.getElementById("Concat").innerHTML = whole;
}
// END CONCATENATE FUNCTION

// SLICE FUNCTION
function mySlice() {
    var Long = "Betty bought a bit of butter, but she found the butter bitter, so she bought a bit of better butter, to make the bitter butter better.";
    var Piece = Long.slice(30,63);
    document.getElementById("Slice").innerHTML = Piece;
}
// END SLICE FUNCTION

// UPPERCASE FUNCTION
function myUpper() {
    let text = "click button to make upper case.";
    let result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}
// END UPPERCASE FUNCTION

// SEARCH FUNCTION
function mySearch() {
    let text = "This is a basic sentence.";
    let position = text.search("basic");
    document.getElementById("Search").innerHTML = position;
}
// END SEARCH FUNCTION

// STRING FUNCTION
function myString() {
    var X = 372;
    document.getElementById("String").innerHTML = X.toString();
}
// END STRING FUNCTION

// PRECISION FUNCTION
function myPrecision() {
    var Y = 70426.8573294;
    document.getElementById("Precision").innerHTML = Y.toPrecision(8);
}
// END PRECISION FUNCTION

// FIXED FUNCTION
function myFixed() {
    let num = 3.1416;
    let n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}
// END FIXED FUNCTION

// VALUE FUNCTION
function myValue() {
    let text = "This is a demonstration of the valueOf() function."
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}
// END VALUE FUNCTION