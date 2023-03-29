function myDictionary() {
    var Leia = {
        Color: "Black",
        Breed: "American Shorthair",
        Gender: "Female",
        Age: "8",
    };
    // Above code creates my KVP in myDictionary.

    delete Leia.Color;
    document.getElementById("Dictionary").innerHTML = Leia.Color;
}
// Above code deletes an KVP before it can be retrieved, leading to undefined error
