document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 🔹 ELEMENT SELECTION
  // =========================
  const form = document.getElementById("form");
  const inputs = document.querySelectorAll("input, textarea");
  const successMessage = document.getElementById("success-message");

  // =========================
  // 🔹 HELPER FUNCTIONS
  // =========================

  // Reset styles and errors
  function resetInputState(input, errorSpan) {
    input.style.borderColor = "";
    errorSpan.classList.remove("show");
  }

  // Validate text fields
  function validateText(input, errorSpan) {
    const value = input.value.trim();
    if (value === "") {
      errorSpan.textContent = "This field is required";
      errorSpan.classList.add("show");
      input.style.borderColor = "red";
      return false;
    } else if (value.length < 3) {
      errorSpan.textContent = "Name must be at least 3 characters";
      errorSpan.classList.add("show");
      input.style.borderColor = "red";
      return false;
    }
    return true;
  }

  // Validate email
  function validateEmail(input, errorSpan) {
    const value = input.value.trim();
    const regex = /^\S+@\S+\.\S+$/;

    if (value === "") {
      errorSpan.textContent = "This field is required";
      errorSpan.classList.add("show");
      input.style.borderColor = "red";
      return false;
    } else if (!regex.test(value)) {
      errorSpan.textContent = "Please enter a valid email";
      errorSpan.classList.add("show");
      input.style.borderColor = "red";
      return false;
    }
    return true;
  }

  // Validate radio group
  function validateRadio(input, errorSpan) {
    const selected = document.querySelector(`input[name="${input.name}"]:checked`);
    const group = document.querySelector(".query-group");

    if (!selected) {
      group.querySelectorAll(".input-group").forEach(r => r.style.borderColor = "red");
      errorSpan.classList.add("show");
      return false;
    } else {
      group.querySelectorAll(".input-group").forEach(r => r.style.borderColor = "");
      return true;
    }
  }

  // Validate checkbox
  function validateCheckbox(input, errorSpan) {
    if (!input.checked) {
      errorSpan.classList.add("show");
      input.style.borderColor = "red";
      return false;
    }
    return true;
  }

  // Validate textarea
  function validateTextarea(input, errorSpan) {
    const value = input.value.trim();
    if (value === "") {
      errorSpan.classList.add("show");
      input.style.borderColor = "red";
      return false;
    }
    return true;
  }

  // Show success message
  function showSuccessMessage() {
    successMessage.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }

  // =========================
  // 🔹 FORM SUBMIT HANDLER
  // =========================
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
      const errorId = input.getAttribute("aria-describedby");
      if (!errorId) return;
      const errorSpan = document.getElementById(errorId);

      // Reset first
      resetInputState(input, errorSpan);

      // Validation per input type
      switch (input.type) {
        case "radio":
          if (!validateRadio(input, errorSpan)) isValid = false;
          break;
        case "checkbox":
          if (!validateCheckbox(input, errorSpan)) isValid = false;
          break;
        case "text":
          if (!validateText(input, errorSpan)) isValid = false;
          break;
        case "email":
          if (!validateEmail(input, errorSpan)) isValid = false;
          break;
        default:
          if (input.tagName === "TEXTAREA") {
            if (!validateTextarea(input, errorSpan)) isValid = false;
          }
      }
    });

    // If valid — show success
    if (isValid) {
      form.reset();
      showSuccessMessage();
    }
  });
});
