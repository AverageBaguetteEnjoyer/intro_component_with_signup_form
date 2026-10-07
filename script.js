const form = document.querySelector("[data-form]");
const formInputWrappers = document.querySelectorAll("[data-input-wrapper]");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = () => {
    formInputWrappers.forEach(inputWrapper => {
        const input = inputWrapper.querySelector("input");
        
        if (input.value === "") {
            inputWrapper.classList.add("error");
            inputWrapper.querySelector("[data-input-empty]").classList.remove("hidden");
            
        } else {
            inputWrapper.classList.remove("error");
            inputWrapper.querySelector("[data-input-empty]").classList.add("hidden");
        }

        if (input.type === "email" && input.value !== "") {
            if (!emailRegex.test(input.value)) {
                inputWrapper.classList.add("error");
                inputWrapper.querySelector("[data-input-invalid-email]").classList.remove("hidden");
            }
            else {
                inputWrapper.classList.remove("error");
                inputWrapper.querySelector("[data-input-invalid-email]").classList.add("hidden");
            }
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});