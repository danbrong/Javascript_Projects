// GLOBAL FUNCTION
function GlobalFun() {
    var R = 450
    function myGlobal1() {
        document.write(50 + R + "<br>");
    }
    function myGlobal2() {
        document.write(R - 200);
    }
    myGlobal1();
    myGlobal2();
}
// END GLOBAL FUNCTION

// LOCAL FUNCTION
function LocalFun() {
    var S = 50
    function myLocal1() {
        document.write (50 + S + "<br>");
    }
    function myLocal2() {
        document.write (S - 200);
    }
    myLocal1();
    myLocal2();
}
// END LOCAL FUNCTION

// ERROR FUNCTION
function ErrorFun() {
    function myError1() {
        var T = 1000
        document.write(50 + T + "<br>");
    }
    function myError2() {
        document.write(T - 200);
    }
    myError1();
    myError2();
    console.log();
}
// END ERROR FUNCTION

// Date().getHours() METHOD
function myTime() {
    if (new Date().getHours() > 10) {
        document.getElementById("Hours").innerHTML = "Yes!";
    }
}
// END Date().getHours() Method

// myIf() FUNCTION
function myIf() {
    X = 10
    if (X > 9) {
        document.getElementById("MyIF").innerHTML = "TRUE";
    }
}
// END myIf() FUNCTION

// ELSE FUNCTIONS
function myElse() {
    Age = document.getElementById("Else1").value;
    if (Age >= 25) {
        Rent = "You are old enough to rent a car!";
    }
    else {
        Rent = "Sorry, you're not old enough to rent a car!";
    }
    document.getElementById("Else2").innerHTML = Rent;
}
// END ELSE FUNCTION