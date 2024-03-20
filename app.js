// For the title
const title = document.querySelector('#title');
// For reg form
const regForm = document.querySelector('.regForm');

// For reg form fields
const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');

// For login form
const logForm = document.querySelector('.logForm');

// For login form fields
const username = document.getElementById('username');
const password = document.getElementById('password');

// For username and passwords
const usernameAndPasswords = {}

// For getting the date and time today
const time = new Date().toLocaleString();

// For checking if a username already exists
function checkIfUserExists(username, usernameAndPasswords) {
	if (usernameAndPasswords.hasOwnProperty(username)) {
		return true
	}
}

// For validating username and passwords stored 
function validateUserNameAndPassword(username, password, usernameAndPasswords,) {
	if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
		return true;
	}
}

regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate if one of the fields are empty
    if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
        alert("Fill out all the forms first");
        return; // Prevent further execution
    }

    // Check password length
    if(passwordReg.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return; // Prevent further execution
    }

    // Check if password consists only of integers
    if(/^\d+$/.test(passwordReg.value)) {
        alert("Password cannot consist only of integers");
        return; // Prevent further execution
    }

    // Check if password contains both uppercase and lowercase characters
    if(!/[a-z]/.test(passwordReg.value) || !/[A-Z]/.test(passwordReg.value)) {
        alert("Password must contain both uppercase and lowercase characters");
        return; // Prevent further execution
    }

    // Store username and password to JS object
    if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
        alert('Username is already taken');
    }
    else {
        // Store the username and passwords inside the JavaScript Object 
        usernameAndPasswords[usernameReg.value] = passwordReg.value;
        console.log(usernameAndPasswords);

        // Display the login form and get rid of the registration form on the page
        logForm.style.display = "block";
        regForm.style.display = "none";
    }
});

regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate if one of the fields are empty
    if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
        alert("Fill out all the forms first");
        return; // Stop further execution
    }

    let errorMessage = ''; // Initialize an empty error message
    let errorCount = 0; // Initialize the error count
    
    // Check password length
    if(passwordReg.value.length < 8) {
        errorMessage += "Password must be at least 8 characters long.\n";
        errorCount++;
    }

    // Check if password consists only of integers
    if(/^\d+$/.test(passwordReg.value)) {
        errorMessage += "Password cannot consist only of integers.\n";
        errorCount++;
    }

    // Check if password contains both uppercase and lowercase characters
    if(!/[a-z]/.test(passwordReg.value) || !/[A-Z]/.test(passwordReg.value)) {
        errorMessage += "Password must contain both uppercase and lowercase characters.\n";
        errorCount++;
    }

    // Check if more than one requirement is not met
    if (errorCount >= 2) {
        alert("Please correct the following errors before registering:\n\n" + errorMessage);
        return; // Stop further execution
    }

    // Check if the username already exists
    if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
        alert('Username is already taken');
    } else {
        // Store the username and password in the JavaScript Object 
        usernameAndPasswords[usernameReg.value] = passwordReg.value;
        console.log(usernameAndPasswords);

        // Display the login form and hide the registration form
        logForm.style.display = "block";
        regForm.style.display = "none";
    }
});
