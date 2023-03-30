// TERNARY OPERATOR
function Ride_Function() {
    var Height, canRide;
    Height = document.getElementById("Height").value;
    canRide = (Height < 52) ? "You are too short ": "You are tall enough ";
    document.getElementById("Ride").innerHTML=canRide + "to ride.";
}
// END TERNARY OPERATOR

// CONSTRUCTOR CODE
function Coaster(minHeight, Intensity, numRiders, yearMade) {
    this.Coaster_minHeight = minHeight;
    this.Coaster_Intensity = Intensity;
    this.Coaster_numRiders = numRiders;
    this.Coaster_yearMade = yearMade;
}
var SpaceMountain = new Coaster("42", "Medium", "8", "1965");
var Ghostrider = new Coaster("60", "High", "12", "1984");
var Teacups = new Coaster("36", "Low", "4", "1974");
//CONSTRUCTOR CODE

// DISPLAY CONSTRUCTOR RESULTS
function myNewThis() {
    document.getElementById("newThis").innerHTML = "The Teacup ride has been around since " + Teacups.Coaster_yearMade + ". It has a height requirment of " + Teacups.Coaster_minHeight + "cm and it is a " + Teacups.Coaster_Intensity + " intensity ride. Up to " + Teacups.Coaster_numRiders + " people can ride at once.";
}
// END CONTSTRUCTOR DISPLAY

// NESTED FUNCTION
function myNestFunction() {
    document.getElementById("nestedFunction").innerHTML = myFunction();
    function myFunction() {
        var start = 0;
        function myAdd2() {start += 2;}
        myAdd2();
        return start;
    }
}
// END NESTED FUNCTION
