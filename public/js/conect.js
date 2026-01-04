var btnSignin = document.querySelector('#signin');
var btnSignup = document.querySelector('#signup');
var linkSignin = document.querySelector('#linkCreate');
var linkLogin = document.querySelector('#linkLog');

var body = document.querySelector('body');

//Estou atribuindo uma ação qnd clicar no botao
btnSignin.addEventListener("click", () => {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", () => {
    body.className = "sign-up-js";
});

linkSignin.addEventListener("click", () => {
    body.className = "sign-up-js";
});





