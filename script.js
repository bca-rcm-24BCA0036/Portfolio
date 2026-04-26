alert("Welcome to my portfolio!");
function login() {
    var user = document.getElementById("username").value; 
    var pass = document.getElementById("password").value;

    if (user === "preeti" && pass === "1234") {
        window.location.href = "index.html";
    } else {
        document.getElementById("message").innerText = "Wrong username or password";
    }
}

