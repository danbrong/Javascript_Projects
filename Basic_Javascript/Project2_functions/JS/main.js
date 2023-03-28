function myFirstFunction() {
    var A = "This is Button Text part 1. ";
    var B = "This is text part 2. ";
    document.getElementById("Button_Text").innerHTML = A + B; 
}
// This is a function to change the text on a button to the assigned text.

function con_function() {
    var C = "I am concatenating this sentence, ";
    C += "and this sentence.";
    document.getElementById("Concatenate").innerHTML = C;
}
// This is a function to concatenate text after clicking on an element.