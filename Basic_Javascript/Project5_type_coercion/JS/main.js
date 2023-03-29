document.write(typeof "Word ");
// DOCUMENT.WRITE() METHOD AND TYPEOF OPERATOR

document.write("15" + 2);
// COMBINING STRING AND NUMBER

// BEGIN OPERATOR SECTION
function myEqualYes(x,y) {
    document.getElementById("Equal_Yes").innerHTML = x == y;
}

function myEqualNo(x,y) {
    document.getElementById("Equal_No").innerHTML = x == y;
}

function myTrue_AND() {
    document.getElementById("AND_True").innerHTML = (10 > 5 && 5 > 3);
}

function myFalse_AND() {
    document.getElementById("AND_False").innerHTML = (10 > 5 && 3 > 5);
}

function myTrue_OR() {
    document.getElementById("OR_True").innerHTML = (10 > 5 || 3 > 5);
}

function myFalse_OR() {
    document.getElementById("OR_False").innerHTML = (5 > 10 || 3 > 5);
}

function myTrue_NOT() {
    document.getElementById("NOT_True").innerHTML = !(5 > 10);
}

function myFalse_NOT() {
    document.getElementById("NOT_False").innerHTML = !(10 > 5);
}
// END OPERATORS SECTION

console.log(3 + 3)
console.log(5 < 3)
// CONSOLE LOG CODE

// BEGIN OTHER FUNCTIONS SECTION
function myNaN() {
    document.getElementById("NaN").innerHTML = 0 / 0;
}

function myTrueNaN() {
    document.getElementById("isNaN_true").innerHTML = isNaN('Dog');
}

function myFalseNaN() {
    document.getElementById("isNaN_false").innerHTML = isNaN('42');
}

function myInfinity() {
    document.getElementById("Infinity").innerHTML = 2.34E310;
}

function myOnfinity() {
    document.getElementById("Onfinity").innerHTML = -3.2E310;
}

function myTrue() {
    document.getElementById("True").innerHTML = 10 > 2;
}

function myFalse() {
    document.getElementById("False").innerHTML = 4 > 25;
}
// END OTHER FUNCTIONS SECTION

A = 10
B = 10
C = "Dog"
D = "10"
E = "Cat"
// VARIABLE DECLARATION

document.write(A === B);
// True - Matched Data Type and Matched Value

document.write(A === C);
// False - Different Data Type and Different Value

document.write(A === D);
// False - Different Data Type but Same Value

document.write(D === E);
// Flase - Same Data Type but Different Value