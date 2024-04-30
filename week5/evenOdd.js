let input = prompt("please enter a number between 0 and 20");
if (input % 2 === 0) {
    document.write(`${input} is even`);
}else if (input % 2 === 1) {
    document.write(`${input} is odd`)
}else{
    document.write(`${input} is wrong, please enter a number between 0 and 20`);
}