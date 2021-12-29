const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')
inputRef.addEventListener('input', onInputChangeSize);

function onInputChangeSize(event) {
    textRef.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
}