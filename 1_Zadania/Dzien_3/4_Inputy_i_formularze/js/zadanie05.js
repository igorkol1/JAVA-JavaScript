document.addEventListener("DOMContentLoaded", function () {

    submit = document.querySelector('button');

    var email = document.getElementById('email');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var password1 = document.getElementById('pass1');
    var password2 = document.getElementById('pass2');
    var agree = document.getElementById('agree');

    filedsToValidate = [email, name, surname, password1, password2, agree];

    for (let i = 0; i < filedsToValidate.length; i++) {
        filedsToValidate[i].addEventListener('input', function () {
            submit.disabled = !validateForm();
        })
    }

    function validateForm() {

        return validateEmail() && validateName() && validateSurname() && validatePasswords() && agree.checked;

    }

    function validateEmail() {
        return email.value.includes('@');

    }

    function validateName() {
        return name.value.length >= 5;
    }

    function validateSurname() {
        return surname.value.length >= 5;
    }

    function validatePasswords() {
        return password1.value === password2.value;
    }

});



