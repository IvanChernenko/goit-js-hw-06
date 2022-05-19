const refs = {
    fontSize: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

function changeTextSize() {
    refs.text.style.fontSize = `${refs.fontSize.value}.px`;
}

refs.fontSize.addEventListener('input', changeTextSize)