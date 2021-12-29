function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
getRandomHexColor()
const btnChangeColorRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');
const backgroundRef = document.querySelector('body');
btnChangeColorRef.addEventListener('click', onBtnClickChangeColor);


function onBtnClickChangeColor() {
    const color = getRandomHexColor();
    colorRef.textContent = color;
    backgroundRef.style.backgroundColor = color;

}