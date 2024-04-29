function fortuneTeller(name){
    let numberOfChildren =0;
    let partnersName ="";
    let job ="";
    let geographicLocation ="";

let numbersOfChildren =[0, 1, 2, 3, 4];
let partnersNames = ["Mary", "Stefan", "Rose", "Salvador","Sue", "Martin"];
let jobs = ["teacher", "tester", "engineer", "taxi-driver", "lawyer", "policeman"];
let geographicLocations = ["NewYork", "Istanbul", "Zürich","Washington","Lausanne","Bern"];

numberOfChildren = numbersOfChildren[(Math.floor(Math.random()*numbersOfChildren.length))];
partnersName = partnersNames[Math.floor(Math.random()*partnersNames.length)];
job = jobs[Math.floor(Math.random()*jobs.length)];
geographicLocation = 
geographicLocations[Math.floor(Math.random()*geographicLocations.length)];
let fortune_text = `Hi ${name}, you will be a ${job} in ${geographicLocation} and married to ${partnersName} with `;
if(numberOfChildren ===0){
    fortune_text += "no kids."
}else if (numberOfChildren ==1) {
    fortune_text += "one kid."
}else{
    fortune_text += `${numberOfChildren} kids`
}
return fortune_text;};

console.log(fortuneTeller("William"));
