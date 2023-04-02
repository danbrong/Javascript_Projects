function myForm() {
    let X = document.forms["Form"]["FirstName"].value;
    if (X == "") {
        alert("Name must be filled out");
        return false;
    }
    let Y = document.forms["Form"]["LastName"].value;
    if (Y == "") {
        alert("Name must be filled out");
        return false;
    }
    let Z = document.forms["Form"]["Email"].value;
    if (Z == "") {
        alert("Email must be filled out");
        return false;
    }
}
