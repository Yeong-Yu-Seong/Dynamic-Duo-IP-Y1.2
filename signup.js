//getting account details
function signupdata(event){
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("surname").value;
    if (password===password2){
        localStorage.setItem('username',username)
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        localStorage.setItem('name',firstname+' '+surname);
        document.getElementById('password_error').style.display="none"
        window.location.href="successfulsignup.html"
    } else {
        document.getElementById('password_error').style.display="block"
    }
}