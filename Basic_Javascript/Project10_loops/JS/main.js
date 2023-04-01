// WHILE LOOP
function myWhileLoop() {
    var Digit = "";
    var X = 10;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("While Loop").innerHTML = Digit;
}

// LENGTH FUNCTION
function myLength() {
    let text = "Hello, World!";
    let Length = text.length;
    document.getElementById("Length").innerHTML = Length;
}

// FOR LOOP
var Vampires = ["Angel", "Spike", "Harmony", "Drusilla", "Dracula"];
var Content = "";
var Y;
function myForLoop() {
    for (Y = 0; Y < Vampires.length; Y++) {
    Content += Vampires[Y] + "<br>";
    }
    document.getElementById("For Loop").innerHTML = Content;
}

// ARRAY FUNCTION
function myArray() {
    var buffyCast = [];
    buffyCast[0] = "Giles";
    buffyCast[1] = "Xander";
    buffyCast[2] = "Anya";
    buffyCast[3] = "Willow";
    buffyCast[4] = "Buffy";
    buffyCast[5] = "Spike";
    document.getElementById("Array").innerHTML = "Every generation, a slayer is born, and that slayer is " + buffyCast[4] + ".";
}

// CONSTANT FUNCTION
function myConstant() {
    const Slayer = {gender:"Girl", age: "16", name: "Faith"};
    Slayer.name = "Buffy"
    Slayer.boyfriend = "Angel"
    document.getElementById("Constant").innerHTML = Slayer.name + " became the Slayer at the age of " + Slayer.age + ". She quickly started hanging out with " + Slayer.boyfriend + ", and slayed the vampires of Sunnydale";
}

// LET FUNCTION
function myLet() {
    var Z = 56;
    document.getElementById.innerHTML = Z;
    {
        let Z = 73;
        document.getElementById("Let").innerHTML = Z;
    }
}

// OBJECTS
function myObject() {
    let demons = {
        type: "Vengeance",
        age: "1000",
        gender: "Female",
        powers: "Magic",
        description: function() {
            return "Anya is a " + this.type + " demon, who is " + this.age + " years old. She also has " + this.powers + " powers to help fight other demons.";
        }
    };
    document.getElementById("Objects").innerHTML = demons.description();
}
