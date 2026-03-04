const loginForm = document.getElementById('loginForm');
const errorDiv = document.getElementById('errorMessages');


loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    errorDiv.innerHTML = ""; 

    const emailInput = document.getElementById('email').value.trim();
    const passInput = document.getElementById('password').value.trim();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");


if (emailInput === storedEmail && passInput === storedPassword) {
    location.assign("exam.html"); 
} else {

    errorDiv.style.display = "block"; 
    errorDiv.innerHTML = "⚠️ Invalid email or password. Please try again.";
}
});