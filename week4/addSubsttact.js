let number1 = parseInt(prompt("please enter first number"));
let number2 = parseInt(prompt("please enter second number"));
let operation = prompt("please enter your operation: for addition \"A\",for subtraction: \"S\"");
if( operation === "A"){
    alert("result of addition: "+ (number1+number2));
}else if(operation === "S"){
    let result = number1 > number2 ? (number1-number2) : (number2-number1);
    alert("result of subtraction: "+result);
}else{
    alert("invalid operation or data entry");
}