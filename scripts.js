const fieldsToValidate = document.querySelectorAll('input[required], select[required]');

fieldsToValidate.forEach(field => {
    field.addEventListener('blur', (e) => {
        const isValid = field.checkValidity();
        
       
        if (e.target.value) {
            field.classList.remove('error-input');
        } else {
            field.classList.add('error-input');
        }
        if (isValid) {
            field.classList.remove('error-input');
            field.classList.add('valid-input');
        } else {
            field.classList.remove('valid-input');
            field.classList.add('error-input');
        }
    });
});

document.getElementById("submit").addEventListener("click", function(event) {
    alert("Form submitted successfully");
});