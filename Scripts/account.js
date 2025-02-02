//setting account details
document.getElementById('user_name').textContent = localStorage.getItem('username')
document.getElementById('account_name').textContent = localStorage.getItem('name')
document.getElementById('account_email').textContent = localStorage.getItem('email')
//changing profile picture
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile_picture').src = e.target.result;
            document.getElementById('accountpic').src = e.target.result;
            localStorage.setItem('accountpicture',e.target.result)
        };
        reader.readAsDataURL(file);
    }
});
document.getElementById('profile_picture').src = localStorage.getItem('accountpicture')