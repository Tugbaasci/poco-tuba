function generatePassword(){
const specialChars = ['@','#','$','%','&','-','_'];
const numbers = "0123456789";
const letters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password = "";
let length = 8;
const randomSpecialIndex = Math.floor(Math.random()*specialChars.length);
const randomSpecial = specialChars[randomSpecialIndex];
password +=randomSpecial;

const randomNumbersIndex = Math.floor(Math.random()*numbers.length);
const randomNumber = numbers[randomNumbersIndex];
password += randomNumber;

let remainingLength =  length - password.length;
for (let i = 0; i < remainingLength; i++) {
    password += letters.charAt(Math.floor(Math.random()*letters.length))
};
password = password.split("").sort(function(){
    return 0.5 - Math.random();
}).join('');
return password;

}
console.log(generatePassword());