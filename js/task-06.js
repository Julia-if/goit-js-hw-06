const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputChangeFocus);

function onInputChangeFocus(event) {
    if (event.currentTarget.value.length == inputRef.dataset.length) {
        inputRef.classList.add('valid');
        return inputRef.classList.remove('invalid')
    }
    inputRef.classList.add('invalid');
}