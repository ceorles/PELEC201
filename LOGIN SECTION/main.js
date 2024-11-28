document.getElementById('show_set').addEventListener('click', function() {
    var passwordField = document.getElementById('setpassword');
    var icon = document.getElementById('show_set');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
});