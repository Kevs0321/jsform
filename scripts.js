const fieldsets = document.querySelectorAll('fieldset');
let currentStep = 0;

// Hide all fieldsets except the first one
for (let i = 1; i < fieldsets.length; i++) {
  fieldsets[i].style.display = 'none';
}

// Function to validate the current fieldset
function validateFieldset(fieldset) {
  let isValid = true;
  const inputs = fieldset.querySelectorAll('input[required]');
  const selects = fieldset.querySelectorAll('select[required]');

  // Check required inputs and selects
  for (const input of inputs) {
    if (input.value.trim() === '') {
      isValid = false;
      input.classList.add('error'); // Add error class for styling
    } else {
      input.classList.remove('error');
    }
  }

  for (const select of selects) {
    if (select.value === '') {
      isValid = false;
      select.classList.add('error');
    } else {
      select.classList.remove('error');
    }
  }

  // Additional validation logic can be added here for specific fields (e.g., email format)

  return isValid;
}

// Function to move to the next fieldset
function nextStep() {
  if (validateFieldset(fieldsets[currentStep])) {
    fieldsets[currentStep].style.display = 'none';
    currentStep++;

    if (currentStep < fieldsets.length) {
      fieldsets[currentStep].style.display = 'block';
    }
  } else {
    // Alert user about errors (optional)
    alert('Please fill out all required fields in the current section.');
  }
}

// Event listeners for next buttons
const nextButtons = document.querySelectorAll('button[id^="next"]');
nextButtons.forEach(button => {
  button.addEventListener('click', nextStep);
});