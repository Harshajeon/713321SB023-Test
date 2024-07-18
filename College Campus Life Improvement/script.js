document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    const registerForm = document.querySelector('#registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            if (username && password) {
                console.log('Login successful');
            } else {
                alert('Please enter both username and password');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.querySelector('#regUsername').value;
            const password = document.querySelector('#regPassword').value;
            const email = document.querySelector('#regEmail').value;
            if (username && password && email) {
                console.log('Registration successful');
            } else {
                alert('Please fill out all fields');
            }
        });
    }
});
