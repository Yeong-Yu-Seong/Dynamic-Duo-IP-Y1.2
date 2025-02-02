//checking login details
function logindata(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = localStorage.getItem('password');
    var email2= localStorage.getItem("email");
    console.log(email,email2)
    console.log(password,password2)
    if ((password===password2) && (email===email2)){
        document.getElementById('signup_error').style.display="none"
        window.location.href="home.html"
    } else {
        document.getElementById('signup_error').style.display="block"
    }
}