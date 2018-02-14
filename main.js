// Your code here!
// Get the modal
function loginModal() {
    var modal_login = document.getElementById('login');
    var btn_login = document.getElementById('btn_login');
    modal_login.style.display = 'block'
    btn_login.style.display = 'none';
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal_login) {
            modal_login.style.display = "none";
            btn_login.style.display = 'block';
        }
    }
}

function loginSubmit() {
    var id = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    if (id == "1" && pw == "1") {
        alert(id + ", you are login now!");
        window.location = "dashboard.html";
        
    } else if (id == "1" && pw != "1") {
        alert("wrong password. Try again!");
    } else {
        alert("No exist username. Please join us!");
    }
    return false;
}
