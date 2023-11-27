function func() {
    var email = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    
    if (email === 'enter@gmail.com' && pass === '12345') {
        alert("Login successful!");
        window.location.assign("Tenants.html");
    } else {
        alert("Invalid password");
    }
}