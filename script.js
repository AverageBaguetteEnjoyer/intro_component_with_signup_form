const form = document.querySelector("[data-form]");
const formInputWrappers = document.querySelectorAll("[data-input-wrapper]");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = () => {
    formInputWrappers.forEach(inputWrapper => {
        const input = inputWrapper.querySelector("input");
        const inputValue = input.value.trim();
        let hasErrors = false;

        if (inputValue === "") {
            hasErrors = true;
            inputWrapper.querySelector("[data-input-empty]").classList.remove("hidden");
        } else {
            inputWrapper.querySelector("[data-input-empty]").classList.add("hidden");
        }

        if (input.type === "email") {
            if (!emailRegex.test(inputValue) && inputValue !== "") {
                hasErrors = true;
                inputWrapper.querySelector("[data-input-invalid-email]").classList.remove("hidden");
            }
            else {
                inputWrapper.querySelector("[data-input-invalid-email]").classList.add("hidden");
            }
        }

        if (hasErrors) {
            inputWrapper.classList.add("error");
        } else {
            inputWrapper.classList.remove("error");
        }

        input.setAttribute("aria-invalid", hasErrors);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});