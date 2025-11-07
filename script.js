
    function checkFields() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginButton = document.querySelector('.login-button');

     
        if (username && password) {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

  
    document.querySelector('.login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = './pages/yasmin.html'; 
    });

  
    document.getElementById('username').addEventListener('input', checkFields);
    document.getElementById('password').addEventListener('input', checkFields);

  
    checkFields();
