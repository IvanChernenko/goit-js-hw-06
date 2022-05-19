const decrementButton = document.querySelector("button[data-action = 'decrement']");
const incrementButton = document.querySelector("button[data-action = 'increment']");

let counterValue = 0;

function onIncrementButtonClick () {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
};

function onDecrementButtonClick() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
};

incrementButton.addEventListener('click', onIncrementButtonClick);
decrementButton.addEventListener('click', onDecrementButtonClick);