const inputRef = document.querySelector('#name-input');
const valueInputRef = document.querySelector("#name-output");
inputRef.addEventListener('input', onInputChahge);

function onInputChahge(event) {
    valueInputRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        valueInputRef.textContent = 'Anonymous';
    }
}