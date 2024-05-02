
let button = document.getElementById("btn");

button.addEventListener("click", myFunction);
function myFunction(){ 
    let phone = document.getElementById("number").value;

    //while(!isValidPhoneNumber(phone)){
        
    //}
    if (isValidPhoneNumber(phone)) {
        document.getElementById("demo").innerHTML = "Your phone number " + phone + " is valid";
    } else{
        document.getElementById("demo").innerHTML = "Your phone number " + phone + " is invalid. Please enter again!!!";
    }
}



function isValidPhoneNumber(phone) {
    let withoutSpacePhone = phone.replace(/\s/g, "");// for replacing spaces
    let withoutDashPhone = withoutSpacePhone.replace(/-/g, ""); // for replacing dashes
    let withoutParanthesis = withoutDashPhone.replace(/[()]/g,"");
    let withoutDot = withoutParanthesis.replaceAll(".","");
    
    return (withoutDot.length === 10); // return false or true depending if there 10 caracters
}
//var digitLength= phone.re

// Tüm boşlukları kaldır



