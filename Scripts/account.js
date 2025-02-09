//setting account details
document.getElementById('user_name').textContent = localStorage.getItem('username');
document.getElementById('account_name').textContent = localStorage.getItem('name');
document.getElementById('account_email').textContent = localStorage.getItem('email');
document.getElementById('profile_picture').src = localStorage.getItem('accountpicture');

// Logout function to clear localStorage and redirect to login page
function logout() {
    localStorage.clear(); // Clear stored user data
    window.location.href = "index.html"; // Redirect to login page
}
// set and save profile picture
document.addEventListener("DOMContentLoaded", function () {
    const userEmail = localStorage.getItem("email");

    // Set default profile picture if none exists
    const defaultProfilePic = "Pictures/profile.png";
    const profilePicDisplay = document.getElementById("profile_picture");
    const profilePicButton = document.getElementById("profilePicButton");
    const profilePicInput = document.getElementById("updateProfilePic");

    // Load profile picture from localStorage or default
    profilePicDisplay.src = localStorage.getItem("accountpicture") || defaultProfilePic;

    // When the button is clicked, open file selection
    profilePicButton.addEventListener("click", function () {
        profilePicInput.click();
    });

    // When a file is selected, update the profile picture
    profilePicInput.addEventListener("change", function () {
        const file = profilePicInput.files[0];

        if (!file) {
            alert("Please select an image.");
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            const newProfilePic = reader.result;

            // Update localStorage
            localStorage.setItem("accountpicture", newProfilePic);
            profilePicDisplay.src = newProfilePic;

            // Update RestDB
            if (userEmail) {
                fetch(`https://week13-9e1c.restdb.io/rest/user-data?q={"email": "${userEmail}"}`, {
                    method: "GET",
                    headers: { "x-apikey": "67838016565cc7c6ae13f42a" }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const userId = data[0]._id;

                        fetch(`https://week13-9e1c.restdb.io/rest/user-data/${userId}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                "x-apikey": "67838016565cc7c6ae13f42a"
                            },
                            body: JSON.stringify({ profilePic: newProfilePic })
                        })
                        .then(response => response.json())
                        .then(updatedData => {
                            console.log("Profile picture updated:", updatedData);
                            alert("Profile picture updated successfully!");
                        })
                        .catch(error => console.error("Error updating profile picture:", error));
                    }
                })
                .catch(error => console.error("Error fetching user:", error));
            }
        };
    });
});