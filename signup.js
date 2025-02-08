//getting account details pre-api
/*function signupdata(event){
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
        localStorage.setItem("accountpicture", "Pictures/profile.png")
        window.location.href="successfulsignup.html"
    } else {
        document.getElementById('password_error').style.display="block"
    }
}*/
// underline password input when password don't match
function validate() {
    var x= document.getElementById("password");
    var y= document.getElementById("password2");
    if(x.value==y.value) {
        document.getElementById('password_error').style.display="none"
        x.style.borderBottomColor = "black"
        y.style.borderBottomColor = "black"
    } else {
        document.getElementById('password_error').style.display="block"
        x.style.borderBottomColor = "red"
        y.style.borderBottomColor = "red"
    };
}
// Disable sign up button when password don't match
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");
const submitButton = document.getElementById("signup");
function validateInputs() {
    if (password.value === confirmPassword.value && password.value !== "") {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }
password.addEventListener("input", validateInputs);
confirmPassword.addEventListener("input", validateInputs);

// save customer data in data base
function addAccount(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("surname").value;

    if (password !== password2) {
        document.getElementById('password_error').style.display = "block";
        return;
    } else {
        document.getElementById('password_error').style.display = "none";
    }

    // Assign a default profile picture
    let defaultProfilePic = "Pictures/profile.png"; // Replace with actual default image URL

    // Save user info to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("name", firstname + " " + surname);
    localStorage.setItem("accountpicture", defaultProfilePic); // Save default profile picture

    // Send to RestDB
    const url = "https://week13-9e1c.restdb.io/rest/user-data";
    const headers = {
        "Content-Type": "application/json",
        "x-apikey": "67838016565cc7c6ae13f42a"
    };

    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            surname: surname,
            firstname: firstname,
            user_name: firstname + ' ' + surname,
            profilePic: defaultProfilePic // Save default profile picture to database
        })
    })
    .then(response => {
        if (response.ok) {
            setTimeout(function () {
                console.log('Signup successful, redirecting...');
                window.location.href = "successfulsignup.html";
            }, 3000);
        } else {
            document.getElementById('username_error').style.display = "block";
            document.getElementById("username").style.borderBottomColor = 'red';
            console.log("Signup error");
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}