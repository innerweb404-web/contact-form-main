const form = document.getElementById("form");
const inputs = document.querySelectorAll("input, textarea");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  inputs.forEach(input => {
    const errorId = input.getAttribute("aria-describedby");
    if (!errorId) return;
    const errorSpan = document.getElementById(errorId);

    // Reset styles
    input.style.borderColor = "";
    errorSpan.classList.remove("show");

    // === RADIO ===
    if (input.type === "radio") {
      const selected = document.querySelector(`input[name="${input.name}"]:checked`);
      const group = document.querySelector(".query-group");
      if (!selected) {
        group.querySelectorAll(".input-group").forEach(r => (r.style.borderColor = "red"));
        errorSpan.classList.add("show");
        isValid = false;
      } else {
        group.querySelectorAll(".input-group").forEach(r => (r.style.borderColor = ""));
      }
    }

    // === CHECKBOX ===
    else if (input.type === "checkbox") {
      if (!input.checked) {
        errorSpan.classList.add("show");
        isValid = false;
      }
    }

    // === TEXT ===
    else if (input.type === "text") {
      if (input.value.trim() === "") {
        errorSpan.textContent = "This field is required";
        errorSpan.classList.add("show");
        input.style.borderColor = "red";
        isValid = false;
      } else if (input.value.trim().length < 3) {
        errorSpan.textContent = "Name must be at least 3 characters";
        errorSpan.classList.add("show");
        input.style.borderColor = "red";
        isValid = false;
      }
    }

    // === EMAIL ===
    else if (input.type === "email") {
      if (input.value.trim() === "") {
        errorSpan.textContent = "This field is required";
        errorSpan.classList.add("show");
        input.style.borderColor = "red";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(input.value.trim())) {
        errorSpan.textContent = "Please enter a valid email";
        errorSpan.classList.add("show");
        input.style.borderColor = "red";
        isValid = false;
      }
    }

    // === TEXTAREA ===
    else if (input.tagName === "TEXTAREA") {
      if (input.value.trim() === "") {
        errorSpan.classList.add("show");
        input.style.borderColor = "red";
        isValid = false;
      }
    }
  });

  //If valid, show success message
  if (isValid) {
    form.reset();
    successMessage.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Hide the succes message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  }
});
