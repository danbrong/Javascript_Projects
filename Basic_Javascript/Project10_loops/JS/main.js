function myLoop() {
    var Digit = "";
    var X = 10;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
