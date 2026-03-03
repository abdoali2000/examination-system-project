// Global Inputs, buttons & divs
const form = document.getElementById("registrationForm");
const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const reEnterPasswordField = document.getElementById("re-enter-password");
const phoneField = document.getElementById("phone");
const registerBtn = document.getElementById("register-btn");
const errorBox = document.getElementById("errorMessages");
errorBox.className = "errorMessages";
const genderDiv = document.querySelector(".gender-options");
const languageDiv = document.querySelector(".language-options");

function errorHandle(event) {
  event.preventDefault();

  let hasError = false;

  // --- First Name Validation ---
  const firstNameValue = firstNameField.value.trim();
  const oldFirstErrorEmpty = document.getElementById("firstName-error-empty");
  const oldFirstErrorAlpha = document.getElementById("firstName-error-alpha");

  if (oldFirstErrorEmpty) oldFirstErrorEmpty.remove();
  if (oldFirstErrorAlpha) oldFirstErrorAlpha.remove();

  // Check if Empty
  if (firstNameValue === "") {
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "firstName-error-empty";
    errorClone.textContent = "First Name is required!";
    firstNameField.insertAdjacentElement("afterend", errorClone);
  }
  // Check if Alphabetical
  else if (!/^[a-zA-Z]+$/.test(firstNameValue)) {
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "firstName-error-alpha";
    errorClone.textContent = "First Name must be alphabetical characters only!";
    firstNameField.insertAdjacentElement("afterend", errorClone);
  }

  // --- Last Name Validation ---
  const lastNameValue = lastNameField.value.trim();
  const oldLastErrorEmpty = document.getElementById("lastName-error-empty");
  const oldLastErrorAlpha = document.getElementById("lastName-error-alpha");

  if (oldLastErrorEmpty) oldLastErrorEmpty.remove();
  if (oldLastErrorAlpha) oldLastErrorAlpha.remove();

  // Check if Empty
  if (lastNameValue === "") {
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "lastName-error-empty";
    errorClone.textContent = "Last Name is required!";
    lastNameField.insertAdjacentElement("afterend", errorClone);
  }
  // Check if Alphabetical
  else if (!/^[a-zA-Z]+$/.test(lastNameValue)) {
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "lastName-error-alpha";
    errorClone.textContent = "Last Name must be alphabetical characters only!";
    lastNameField.insertAdjacentElement("afterend", errorClone);
  }

  // Email
  const emailValue = emailField.value.trim();
  const oldEmailErrorEmpty = document.getElementById("email-error-empty");
  const oldEmailErrorValid = document.getElementById("email-error-validation");
  if (oldEmailErrorEmpty || oldEmailErrorValid) {
    oldEmailErrorEmpty.remove();
    oldEmailErrorValid.remove();
  }

  // Empty
  if (emailValue === "") {
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "email-error-empty";
    errorClone.textContent = "Email cannot be empty!";
    emailField.insertAdjacentElement("afterend", errorClone);
  }

  //Regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailValue) && emailValue.length > 0) {
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "email-error-validation";
    errorClone.textContent = "Email is not valid!";
    emailField.insertAdjacentElement("afterend", errorClone);
  }

 // Password
const passwordValue = passwordField.value.trim();
const oldPasswordErrorEmpty = document.getElementById("password-error-empty");
const oldPasswordErrorLength = document.getElementById("password-error-length");

if (oldPasswordErrorEmpty) oldPasswordErrorEmpty.remove();
if (oldPasswordErrorLength) oldPasswordErrorLength.remove();

if (passwordValue === "") {
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "password-error-empty";
    errorClone.textContent = "Password cannot be empty!";
    passwordField.insertAdjacentElement("afterend", errorClone);
} else if (passwordValue.length < 8) { 
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "password-error-length";
    errorClone.textContent = "Password must be at least 8 characters!";
    passwordField.insertAdjacentElement("afterend", errorClone);
}

// Re-enter Password
const reEnterPasswordValue = reEnterPasswordField.value.trim();
const oldReEnterErrorMatch = document.getElementById("re-password-error-match");

if (oldReEnterErrorMatch) oldReEnterErrorMatch.remove();

// Matching
if (reEnterPasswordValue !== passwordValue && reEnterPasswordValue.length > 0) {
    hasError = true;
    const errorClone = errorBox.cloneNode(false);
    errorClone.className = "errorMessages";
    errorClone.id = "re-password-error-match"; 
    errorClone.textContent = "Passwords do not match!";
    reEnterPasswordField.insertAdjacentElement("afterend", errorClone); 
}


  // Success Msg
  if (!hasError) {
    location.assign("success.html");
  }
}

form.addEventListener("submit", errorHandle);
