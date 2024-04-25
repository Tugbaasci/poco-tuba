let arrDay= [31, 28, 30, 31, 30, 31, 30 ,30, 31, 30, 31, 30];
let givenDay = parseInt(prompt("Please enter the day"));
let givenMonth = prompt("Please enter the month:");
let result = 0;
function calculateDay(day,month){
    for (let i = 1; i < 12; i++) {
    if(month === i){
        result=arrDay[i-2] + day;
    }

return result;

}}
console.log(calculateDay(givenDay,givenMonth));
