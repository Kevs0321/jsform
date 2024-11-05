document.addEventListener("DOMContentLoaded", function () {
  const pages = {
      "index": "financial-info.html",
      "financial-info": "investment-profile.html",
      "investment-profile": "terms.html",
      "terms": "index.html"
  };

  // Add event listener to each "Next" button
  document.querySelectorAll("button[id^='next']").forEach(button => {
      button.addEventListener("click", function (event) {
          // Prevent navigation
          event.preventDefault();

          // Validate form
          const form = button.closest("form") || button.closest("fieldset");
          const isValid = validateForm(form);

          if (isValid) {
              // Navigate to next page if all fields are valid
              const currentPage = getCurrentPage();
              window.location.href = pages[currentPage];
          }
      });
  });

  // Validation function
  function validateForm(form) {
      let allValid = true;

      form.querySelectorAll("input, select").forEach(input => {
          // Create or select existing error message element
          let errorMsg = input.parentNode.querySelector(".error-message");
          if (!errorMsg) {
              errorMsg = document.createElement("div");
              errorMsg.classList.add("error-message");
              errorMsg.innerText = "This field is required.";
              input.parentNode.appendChild(errorMsg);
          }

          if (!input.checkValidity()) {
              allValid = false;
              input.classList.add("invalid");
              input.classList.remove("valid");
              errorMsg.classList.add("active");
          } else {
              input.classList.add("valid");
              input.classList.remove("invalid");
              errorMsg.classList.remove("active");
          }
      });

      return allValid;
  }

  // Determines the current page based on filename
  function getCurrentPage() {
      const path = window.location.pathname;
      const page = path.split("/").pop().split(".")[0];
      return page;
  }
});