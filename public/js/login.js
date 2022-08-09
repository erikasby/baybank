const form = document.querySelector('.form');
const usernameError = document.querySelector('#username').previousElementSibling;
const passwordError = document.querySelector('#password').previousElementSibling;

const username = document.getElementById('username');
const password = document.getElementById('password');

// Event listeners
form.addEventListener('submit', (event) => {
    validateLogin(event);
});

username.addEventListener('focus', (event) => {
    elementToDefaultStyling(username, usernameError);
});

password.addEventListener('focus', (event) => {
    elementToDefaultStyling(password, passwordError);
});

// Helpers
const showError = (element, elementError, errorTextContent, event) => {
    elementError.textContent = errorTextContent;
    elementError.classList.add('form__error--active');
    element.classList.add('form__input--invalid');
    event.preventDefault();
};

const elementToDefaultStyling = (element, elementError) => {
    elementError.textContent = '';
    elementError.classList.remove('form__error--active');
    element.classList.remove('form__input--invalid');
};

// Validation
const validateLogin = (event) => {
    let validated = true;

    validated = validateUsername(event);
    if (!validated) return;

    validated = validatePassword(event);
    if (!validated) return;
};

const validateUsername = (event) => {
    if (username.validity.valueMissing) {
        const errorTextContent = `Username is required`;
        showError(username, usernameError, errorTextContent, event);
        return false;
    }

    if (username.validity.tooShort) {
        const errorTextContent = `Username should be at least ${username.minLength} characters; you entered ${username.value.length}`;
        showError(username, usernameError, errorTextContent, event);
        return false;
    }

    if (username.validity.tooLong) {
        const errorTextContent = `Username should have no more than ${username.minLength} characters; you entered ${username.value.length}`;
        showError(username, usernameError, errorTextContent, event);
        return false;
    }

    if (username.validity.patternMismatch) {
        const errorTextContent = `Username can only include numbers and letters`;
        showError(username, usernameError, errorTextContent, event);
        return false;
    }

    return true;
};

const validatePassword = (event) => {
    if (password.validity.valueMissing) {
        const errorTextContent = `Password is required`;
        showError(password, passwordError, errorTextContent, event);
        return false;
    }

    if (password.validity.tooShort) {
        const errorTextContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}`;
        showError(password, passwordError, errorTextContent, event);
        return false;
    }

    if (password.validity.tooLong) {
        const errorTextContent = `Password should have no more than ${password.minLength} characters; you entered ${password.value.length}`;
        showError(password, passwordError, errorTextContent, event);
        return false;
    }

    if (password.validity.patternMismatch) {
        const errorTextContent = `Password should atleast have 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol (!@#$%^&*_=+-)`;
        showError(password, passwordError, errorTextContent, event);
        return false;
    }

    return true;
};
