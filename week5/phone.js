
/*function validate(input){
    const phoneNumber = /^(\(?\d{3}\)?|\d{3})[- .]?\d{3}[- .]?\d{4}$/;
    return phoneNumber.test(input);
}
console.log(validate("2222222222"));
console.log(validate("222.222.2222"));*/
let check = false;
function validate(input){
    for (let i = 0; i < input.length; i++) {
        if ((input[0] === "(" && input[4] === ")") ||
        (input[3] === " " && input[7] === " ") ||
    ((input[0] === "(" && input[4] === ")") && (input[3] === " "))||
    ((input[3] === "-")&&(input[7]==="-")) ||
    ((input[3] === ".")&&(input[7]==="."))) {
            check = true;
        }
        
    }
    return check;
}
console.log(validate("(333)3333333"));
console.log(validate("333-333-3333"));
console.log(validate("(333)333 3333"));
console.log(validate("333.333.3333"));
console.log(validate("3333333333"));
console.log(validate("333 333 3333"));
