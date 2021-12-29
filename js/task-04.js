let counterValue = 0;
const counterRef = document.querySelector('#counter');
console.log(counterRef);
const buttonDecrRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrRef = document.querySelector('button[data-action="increment"]');
const counterValueRef = document.querySelector('#value');



function onButtonDecrClick() {
    counterValueRef.textContent = counterValue -= 1;
};

function onButtonIncrClick() {
    counterValueRef.textContent = counterValue += 1;
};
buttonDecrRef.addEventListener('click', onButtonDecrClick);
buttonIncrRef.addEventListener('click', onButtonIncrClick);