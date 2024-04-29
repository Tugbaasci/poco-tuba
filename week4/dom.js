document.querySelector("strong:not(#red)").textContent= "Hello Oerlikon";
let h2Tag = document.createElement("h2");
let pTag = document.querySelector("p");
h2Tag.textContent = "I love javascript";
/*pTag.after(h2Tag);*/
pTag.insertAdjacentElement("afterend",h2Tag);