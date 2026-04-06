// Authentication functionality

document.addEventListener('DOMContentLoaded', function() {
    // Registration form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        // Show/hide fields based on user type
        const userTypeSelect = document.getElementById('user-type');
        const studentFields = document.getElementById('student-fields');
        const learnerFields = document.getElementById('learner-fields');
        
        userTypeSelect.addEventListener('change', function() {
            studentFields.classList.add('hidden');
            learnerFields.classList.add('hidden');
            
            if (this.value === 'student') {
                studentFields.classList.remove('hidden');
            } else if (this.value === 'learner') {
                learnerFields.classList.remove('hidden');
            }
        });
        
        // Form submission
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // In a real app, we would send this data to the server
            alert('Registration successful! Please login.');
            window.location.href = 'login.html';
        });
    }
    
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, we would validate credentials with the server
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        });
    }
});