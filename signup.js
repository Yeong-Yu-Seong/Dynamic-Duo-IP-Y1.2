// underline password input when password don't match
function validate() {
    var x= document.getElementById("password");
    var y= document.getElementById("password2");
    if(x.value==y.value) {
        document.getElementById('password_error').style.display="none";
        x.style.borderBottomColor = "black";
        y.style.borderBottomColor = "black";
    } else {
        document.getElementById('password_error').style.display="block";
        x.style.borderBottomColor = "red";
        y.style.borderBottomColor = "red";
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
function checkEmailExists(email) {
    return fetch(`${apiUrl}?q={"email":"${email}"}`, {
        method: 'GET',
        headers: {
            'x-apikey': apiKey,  // Set the API key for authorization
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())  // Parse the response as JSON
    .then(data => data.length > 0) // Return true if email exists, false if not
    .catch(error => {
        console.error('Error:', error);
        return false; // Return false if an error occurs
    });
}

// Function to check if username exists in RestDB
function checkUsernameExists(username) {
    return fetch(`${apiUrl}?q={"username":"${username}"}`, {
        method: 'GET',
        headers: {
            'x-apikey': apiKey,  // Set the API key for authorization
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())  // Parse the response as JSON
    .then(data => data.length > 0) // Return true if username exists, false if not
    .catch(error => {
        console.error('Error:', error);
        return false; // Return false if an error occurs
    });
}

// Function to handle form submission
function addAccount(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("surname").value;

    // Check if the passwords match
    if (password !== password2) {
        document.getElementById('password_error').style.display = "block";
        return;
    } else {
        document.getElementById('password_error').style.display = "none";
    }

    // Check if email already exists
    checkEmailExists(email).then(emailExists => {
        if (emailExists) {
            document.getElementById('email_error').style.display = "block";
            return; // Stop form submission if email already exists
        } else {
            document.getElementById('email_error').style.display = "none";
        }

        // Check if username already exists
        checkUsernameExists(username).then(usernameExists => {
            if (usernameExists) {
                document.getElementById('username_error').style.display = "block";
                return; // Stop form submission if username already exists
            } else {
                document.getElementById('username_error').style.display = "none";
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
                "x-apikey": "67838016565cc7c6ae13f42a" // Your RestDB API Key
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
            .catch(error => console.error("Error:", error));
        });
    });
}

// Event listener for form submission
document.getElementById('signupdata').addEventListener('submit', addAccount);