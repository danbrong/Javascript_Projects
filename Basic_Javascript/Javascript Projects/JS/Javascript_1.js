// COLOR FUNCTION
function myColor() {
    var Pick;
    var Colors = document.getElementById("favColor").value;
    var ColorConfirm = " is a great color!";
    switch(Colors) {
        case "Red":
            Pick = "Red" + ColorConfirm;
        break;
        case "Yellow":
            Pick = "Yellow" + ColorConfirm;
        break;
        case "Blue":
            Pick = "Blue" + ColorConfirm;
        break;
        case "Green":
            Pick = "Green" + ColorConfirm;
        break;
        case "Orange":
            Pick = "Orange" + ColorConfirm;
        break;
        case "Purple":
            Pick = "Purple" + ColorConfirm;
        break;
        default:
        Pick = "Please enter a color exactly as written above.";
    }
    document.getElementById("output").innerHTML = Pick;
}

// GET ELEMENTS BY CLASS NAME
function myClass() {
    var A = document.getElementsByClassName("Class");
    A[0].innerHTML = "The text has changed!";
}

// GRAPHICS ON CANVAS: CIRCLE
function myCanvas() {
    var B = document.getElementById("Canvas");
    var btx = B.getContext("2d");
    btx.arc(95, 50, 40, 0, 2 * Math.PI);
    btx.stroke();
}

// GRAPHICS ON CANVAS: GRADIENT
function myGradient() {
    var C = document.getElementById("Canvas");
    var ctx = C.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}