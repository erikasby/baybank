const form = document.querySelector('.form');
const register = document.querySelector('.register');

const usernameError = document.getElementById('username').previousElementSibling;
const passwordError = document.getElementById('password').previousElementSibling;
let emailError,
    repeatPasswordError = null;
if (register) {
    emailError = document.getElementById('email').previousElementSibling;
    repeatPasswordError = document.getElementById('repeat-password').previousElementSibling;
}

const username = document.getElementById('username');
const password = document.getElementById('password');
let email,
    repeatPassword = null;
if (register) {
    email = document.getElementById('email');
    repeatPassword = document.getElementById('repeat-password');
}

// Event listeners
form.addEventListener('submit', (event) => {
    validate(event);
});

username.addEventListener('focus', (event) => {
    elementToDefaultStyling(username, usernameError);
});

password.addEventListener('focus', (event) => {
    elementToDefaultStyling(password, passwordError);
});

if (register) {
    email.addEventListener('focus', (event) => {
        elementToDefaultStyling(email, emailError);
    });

    repeatPassword.addEventListener('focus', (event) => {
        elementToDefaultStyling(repeatPassword, repeatPasswordError);
    });
}

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

// Validation (order of if statements is important for the UI)
const validate = (event) => {
    let validated = true;

    if (register) {
        validated = validateEmail(event);
        if (!validated) return;
    }

    validated = validateUsername(event);
    if (!validated) return;

    validated = validatePassword(event);
    if (!validated) return;

    if (register) {
        validated = validateRepeatPassword(event);
        if (!validated) return;
    }
};

const validateEmail = (event) => {
    if (email.validity.valueMissing) {
        const errorTextContent = `Email is required`;
        showError(email, emailError, errorTextContent, event);
        return;
    }

    if (email.validity.tooShort) {
        const errorTextContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
        showError(email, emailError, errorTextContent, event);
        return;
    }

    if (email.validity.tooLong) {
        const errorTextContent = `Email should have no more than ${email.minLength} characters; you entered ${email.value.length}`;
        showError(email, emailError, errorTextContent, event);
        return;
    }

    if (email.validity.patternMismatch) {
        const errorTextContent = `Email should include @ and a domain`;
        showError(email, emailError, errorTextContent, event);
        return;
    }

    return true;
};

const validateUsername = (event) => {
    if (username.validity.valueMissing) {
        const errorTextContent = `Username is required`;
        showError(username, usernameError, errorTextContent, event);
        return;
    }

    if (username.validity.tooShort) {
        const errorTextContent = `Username should be at least ${username.minLength} characters; you entered ${username.value.length}`;
        showError(username, usernameError, errorTextContent, event);
        return;
    }

    if (username.validity.tooLong) {
        const errorTextContent = `Username should have no more than ${username.minLength} characters; you entered ${username.value.length}`;
        showError(username, usernameError, errorTextContent, event);
        return;
    }

    if (username.validity.patternMismatch) {
        const errorTextContent = `Username can only include numbers and letters`;
        showError(username, usernameError, errorTextContent, event);
        return;
    }

    return true;
};

const validatePassword = (event) => {
    if (password.validity.valueMissing) {
        const errorTextContent = `Password is required`;
        showError(password, passwordError, errorTextContent, event);
        return;
    }

    if (password.validity.tooShort) {
        const errorTextContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}`;
        showError(password, passwordError, errorTextContent, event);
        return;
    }

    if (password.validity.tooLong) {
        const errorTextContent = `Password should have no more than ${password.minLength} characters; you entered ${password.value.length}`;
        showError(password, passwordError, errorTextContent, event);
        return;
    }

    if (password.validity.patternMismatch) {
        const errorTextContent = `Password should atleast have 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol !@#$%^&*_=+-`;
        showError(password, passwordError, errorTextContent, event);
        return;
    }

    return true;
};

const validateRepeatPassword = (event) => {
    if (repeatPassword.validity.valueMissing) {
        const errorTextContent = `Password is required`;
        showError(repeatPassword, repeatPasswordError, errorTextContent, event);
        return;
    }

    if (password.value !== repeatPassword.value) {
        const errorTextContent = `Passwords do not match`;
        showError(password, passwordError, errorTextContent, event);
        showError(repeatPassword, repeatPasswordError, errorTextContent, event);
        return;
    }

    return true;
};
