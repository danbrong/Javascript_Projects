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
