// Add or remove class 'active' to label on input focus and blur
const inputFields = document.querySelectorAll('.group input');

inputFields.forEach((inputField) => {
    inputField.addEventListener('focus', () => {
        inputField.parentElement.querySelector('label').classList.add('active');
    });

    inputField.addEventListener('blur', () => {
        if (inputField.value === '') {
            inputField.parentElement.querySelector('label').classList.remove('active');
        }
    });
});
