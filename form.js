document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const nameField = document.getElementById("name-field");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitBtn = document.getElementById("submit-btn");
    const toggleForm = document.getElementById("toggle-form");

    let isLogin = true;

    // Toggle between Login & Register
    toggleForm.addEventListener("click", function (e) {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.innerText = "Login";
            submitBtn.innerText = "Login";
            toggleForm.innerText = "Register";
            nameField.classList.add("hidden");
        } else {
            formTitle.innerText = "Register";
            submitBtn.innerText = "Register";
            toggleForm.innerText = "Login";
            nameField.classList.remove("hidden");
        }

        // Reset fields
        authForm.reset();
    });

    // Handle Form Submission
    authForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const name = nameInput.value.trim();

        if (!email || !password || (!isLogin && !name)) {
            alert("Please fill in all fields.");
            return;
        }

        if (isLogin) {
            console.log("Logging in with:", { email, password });
            alert("Login Successful!");
        } else {
            console.log("Registering with:", { name, email, password });
            alert("Registration Successful!");
        }
        
        authForm.reset();
    });
});
