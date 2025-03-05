document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form submission

        let isValid = true;

        // Get form fields
        let name = document.getElementById("name");
        let lastname = document.getElementById("lastname");
        let email = document.getElementById("email");
        let queryRadios = document.querySelectorAll("input[name='query']");
        let terms = document.getElementById("terms");

        // Reset previous errors
        document.querySelectorAll(".error").forEach(e => e.remove());

        // Function to show error messages
        function showError(input, message) {
            let error = document.createElement("small");
            error.className = "error";
            error.style.color = "red";
            error.style.border = "1px solid red";
            error.style.borderRadius = "5px";
            error.textContent = message;
            input.parentNode.appendChild(error);
        }

        // Validate First Name
        if (name.value.trim() === "") {
            showError(name, "First name is required");
            isValid = false;
        }

        // Validate Last Name
        if (lastname.value.trim() === "") {
            showError(lastname, "Last name is required");
            isValid = false;
        }

        // Validate Email
        if (email.value.trim() === "") {
            showError(email, "Email is required");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, "Invalid email format");
            isValid = false;
        }

        // Validate Query Selection (Radio Buttons)
        let querySelected = false;
        queryRadios.forEach(radio => {
            if (radio.checked) {
                querySelected = true;
            }
        });
        if (!querySelected) {
            showError(queryRadios[0], "Please select a query type");
            isValid = false;
        }

        // Validate Terms Checkbox
        if (!terms.checked) {
            showError(terms, "You must agree to the Terms and Conditions");
            isValid = false;
        }

        // If all fields are valid, submit the form
        if (isValid) {
            alert("Form submitted successfully!");
            form.submit(); // Allow form submission
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
