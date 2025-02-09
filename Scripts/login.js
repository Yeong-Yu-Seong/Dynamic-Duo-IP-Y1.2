//checking login details
const page = 1;
const pageSize = 50;
const API_URL = `https://week13-9e1c.restdb.io/rest/user-data?max=${pageSize}&skip=${(page - 1) * pageSize}`;
const API_KEY = "67838016565cc7c6ae13f42a";
function checkCredentials(event) {
  event.preventDefault()
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  if (emailInput === "" || passwordInput === "") {
    messageDiv.textContent = "Please fill in both email and password.";
    messageDiv.className = "message error";
    return;
  }

  fetch(API_URL, {
    method: "GET",
    headers: { "x-apikey": API_KEY }
  })
  .then(response => response.json())
  .then(data => {
    // Check if email and password match any record
    const user = data.find(user => user.email === emailInput && user.password === passwordInput);

    if (user) {
      // correct login information
      document.getElementById("email").style.borderBottomColor = 'black';
      document.getElementById("password").style.borderBottomColor = 'black';
      window.location.href="home.html";
      messageDiv.textContent = "Login Successful!";
      messageDiv.className = "message success";
      //set local storage items to be used later
      localStorage.setItem("username", user.username);
      localStorage.setItem("name", user.user_name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("accountpicture", user.profilePic);

    } else {
      // incorrect login information
      document.getElementById("email").style.borderBottomColor = 'red';
      document.getElementById("password").style.borderBottomColor = 'red';
      messageDiv.textContent = "Invalid email or password.";
      messageDiv.className = "message error";
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    messageDiv.textContent = "Error during login. Please try again.";
    messageDiv.className = "message error";
  });
}