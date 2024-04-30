let number = prompt("please enter a number between 0 and 10");
let result = 0;
for (let i = 0; i <= 10; i++) {
    result = i * number;
    console.log(`${number} * ${i} = ${result}`)
}