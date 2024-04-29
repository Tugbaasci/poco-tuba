/**
 * 1.login data will be submitted
 * 2.validate the password - check if the user exists
 * 3.view for user is changing: logout for "wrong password" message
 * 4.
 */
let users =[{
    username:"Khalid",
    password:"1234",
    email:"khalid@powercoders.org"
},
{
    username:"Shakir",
    password:"t1234",
    email:"shakir@powercoders.org"
},{
    username:"Dominic",
    password:"1234d",
    email:"dominic@powercoders.org"
}]
const loginForm = document.querySelector("form");
loginForm.addEventListener("submit",gatherUserInput);

function gatherUserInput(event){
    event.preventDefault();
    /*let formData = new formData(loginForm);
    const data = Object.fromEntries(formData);
    console.table(data);*/
    let user = document.querySelector("#user").value;
    let pwd = document.querySelector("#pwd").value;
    checkIfLoginExists(user,pwd);
}
function checkIfLoginExists(loginUser,loginPwd){
    let userExists = false;
/**
 * check if loginUser exists in array users
 * if loginUser exists, check if its password is same than loginPwd
 * if password is correct, call changeViewIfLoggedIn
 * else call showErrorMessage
 * else loginUser does not exist, call showErrorMessage
 */
users.forEach(function(user) {
    if(user.email === loginUser){
        userExists = true;
        if (user.password === loginPwd) {
            changeViewIfLoggedIn();
        }else{
            showErrorMessage();
        }
    }
});
if (!userExists) {
    showErrorMessage();
}
}
function changeViewIfLoggedIn(){
    document.write("You're successfully logged in");
}
function showErrorMessage(){
    document.write("ERROR")
}