'use strict';

const storageKey = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
};

function inputHandler() {
    const email = refs.input.value.trim(); 
    const message = refs.textarea.value.trim(); 
    return {
        email,
        message
    }
}

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = inputHandler();

    if (data.email && data.message) { 
        console.log(data); 

        localStorage.removeItem(storageKey);
        refs.form.reset();
    }
});

refs.form.addEventListener('input', () => {
    const data = inputHandler();
    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
});

const storedData = localStorage.getItem(storageKey);
if (storedData) {
    const data = JSON.parse(storedData);
    refs.input.value = data.email;
    refs.textarea.value = data.message;
}
