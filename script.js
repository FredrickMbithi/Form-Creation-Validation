// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    const form = document.getElementById('registration-form');
    
    // Select the feedback division where messages will be displayed
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting to the server
        event.preventDefault();
        
        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Initialize validation variables
        let isValid = true;
        const messages = [];
        
        // Username validation: must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        
        // Email validation: must contain '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain @ and . characters.');
        }
        
        // Password validation: must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        
        // Display feedback
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            // Error messages
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});