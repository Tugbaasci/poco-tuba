let randomNum = Math.floor(Math.random()*100);
console.log(randomNum);
let guessTrue = false;
function guess(){
    let number = prompt("please enter a number between 0 and 100");
    if(number < 0 || number > 100){
        alert("please enter a valid value between 0 and 100");
        guess();
    }else if(number > randomNum){
        alert("please enter a lower value");
        guess();
    }else if(number < randomNum){
        alert("please enter a higher value");
        guess();
    }else if(number == randomNum){
        alert("you got that! Congratulations!!!");
    }else{
        alert("please enter a valid number");
    }

}
console.log(randomNum);
guess();