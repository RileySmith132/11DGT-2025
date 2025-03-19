function confirmSubmit() {
    const messageInputElement = document.querySelector('#message-input');
    const emailInputElement = document.querySelector('#email-input');

    if (emailInputElement.value === '') {
        alert('Please enter a valid email adress!');
    }

    else {
        alert('Form submitted')
        messageInputElement.value = '';
        emailInputElement.value = '';
    }
};

function blur() {
    const background = document.querySelector('.background');
    background.classList.toggle('.blurred');
};
