const requiredFields = document.querySelectorAll('input[required], select[required]');

requiredFields.forEach(input => {
    input.addEventListener('focusout', event => {
        
        event.target.value ? input.classList.remove('error-input') : input.classList.add('error-input');
        if (input.checkValidity()) {
            input.classList.remove('error-input');
            input.classList.add('valid-input')
        } else {
            input.classList.remove('valid-input');
            input.classList.add('error-input')
        }
    });
});

document.getElementById("submit").addEventListener("click", function(event) {
    alert("Form submitted successfully");
});