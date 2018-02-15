
//register popup
var modal_register = document.getElementById('register');
//register button
var btn_register = document.getElementById('btn_register');
//register popup
var modal_login = document.getElementById('login');
//register button
var btn_login = document.getElementById('btn_login');
//register 
var id = null;
var pw = null;
var cpw = null;
var email = null;
//go main
window.onclick = function (event) {
    if (event.target == modal_register || event.target == modal_login) {
        modal_register.style.display = "none";
        btn_register.style.display = 'block';
        modal_login.style.display = "none";
        btn_login.style.display = 'block';
    }
}
//register popup display
function registerModal() {
    modal_register.style.display = 'block'
    btn_register.style.display = 'none';
}
//login popup display
function loginModal() {
    modal_login.style.display = 'block'
    btn_login.style.display = 'none';
}

function registerSubmit() {
    id = document.getElementById("register_username").value;
    pw = document.getElementById("register_password").value;
    cpw = document.getElementById("register_confirmpassword").value;
    email = document.getElementById("register_email").value;

    if (id == "" || pw == "") {
        alert("Please complete write your information.");
    }
    else if (pw != cpw) {
        alert("your password and confirm password are not matching!");
    }
    else {
        alert("Thanks to join us!");
        modal_register.style.display = 'none';
        modal_login.style.display = 'block';
    }
    return false;
}

function loginSubmit() {
    var loginId = document.getElementById("username").value;
    var loginPw = document.getElementById("password").value;
    if (loginId == id && loginPw == pw) {
        alert(loginId + ", you are login now!");
        window.location = "dashboard.html";
        
    } else if (loginId == id && loginPw != pw) {
        alert("wrong password. Try again!");
    } else {
        alert("No exist username. Please join us!");
    }
    return false;
}
//add transaction
function addSubmit() {
    var addPopup = document.getElementById('add');
    alert("Add Success!");
    addPopup.style.display = "none";
    return false;
}
function addModal() {
    var addPopup = document.getElementById('add');
    add.style.display = 'block'
    window.onclick = function (event) {
        if (event.target == addPopup) {
            addPopup.style.display = "none";
        }
    }
}
