
const refs = {
inputText: document.querySelector("#name-input"),
outputText: document.querySelector('#name-output')
}

refs.inputText.addEventListener('input', onInputChange);


function onInputChange(event) {
    if (refs.inputText.value === "") {
        refs.outputText.textContent = "Anonymous"
    } else {
    refs.outputText.textContent = event.currentTarget.value
    }
} 

