/*let arrDay= [31, 28, 30, 31, 30, 31, 30 ,30, 31, 30, 31, 30];
let givenDay = parseInt(prompt("Please enter the day"));
let givenMonth = prompt("Please enter the month:");
let result = 0;
function calculateDay(day,month){
    for (let i = 0; i < 12; i++) {
    if(month === i){
        result += day;
    }
    }

return result;

}
console.log(calculateDay(givenDay,givenMonth));*/
let arrDay= [31, 28, 30, 31, 30, 31, 30 ,30, 31, 30, 31, 30];
let givenDay = parseInt(prompt("Please enter the day"));
let givenMonth = parseInt(prompt("Please enter the month:"));
function calculateDay(day, month){
    let result = 0;
    for (let i = 0; i < month - 1; i++) {
        result += arrDay[i];
    }
    result += day;
    return result;
}
console.log(calculateDay(givenDay, givenMonth));