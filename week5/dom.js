const heading = document.querySelector("h1");
const list = document.createElement("ul");

const groceries =["milk", "sugar","eggs","chocolate"];
//groceries.splice(0,1);
/*groceries.forEach(function(item){
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
})*/
heading.after(list);
heading.insertAdjacentElement("afterend",list);

for (const item of groceries) {
    if( item === "milk"){// jumps milk and not add
        continue;
    }
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
}

list.firstElementChild.remove(); // bu da ilk elementi siler
groceries.shift();// ilk elementi siler