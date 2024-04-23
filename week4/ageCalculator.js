let birthYear=prompt("Please enter your birth year :","1990-09-30");
let futureYear=prompt("Please enter your future year :","2024-04-30");
/*function ageCalculator(birthYear,futureYear){
    return futureYear-birthYear;
}
let result = ageCalculator(birthYear,futureYear);*/
/*if(birthYear>futureYear){
    console.log(`Sorry but you entered wrongly first enter your ${birthYear}.`)
}else{
    console.log(result);
}*/
/*console.log("I will be "+(result-1)+" or "+result+" in "+futureYear);*/
let birthDate = new Date(birthYear);
document.write("Your birthday is "+birthDate.getDate()+"/"+(birthDate.getMonth()+1)+"/"+birthDate.getFullYear());
let currentDate = new Date(futureYear);
document.write("Current date is "+currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear());
let differenceInTime = currentDate.getTime()-birthDate.getTime();
let differenceInMonths=differenceInTime/(1000*3600*24*30.4375);
let differenceInYears = Math.floor(differenceInMonths/12);
const birthmonthy=birthDate.getMonth();
const currentMonth = currentDate.getMonth() + 1;

if(birthmonthy > currentMonth){
    document.write(`You're at the age of ${differenceInYears} and 
    ${(currentMonth-birthmonthy)+12} months`) 
}
else{
    document.write(`You're at the age of ${differenceInYears} and 
    ${currentMonth-birthmonthy} months`)
}








