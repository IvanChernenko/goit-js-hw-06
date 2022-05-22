const refs = {
    inputBorder: document.querySelector('#validation-input'),
    inputLength: document.querySelector('input[data-length]')
}

refs.inputBorder.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(refs.inputLength.dataset.length)) {
        refs.inputBorder.classList.remove('invalid')
        refs.inputBorder.classList.add('valid')
    } else {
        refs.inputBorder.classList.remove('valid')
        refs.inputBorder.classList.add('invalid')
    }
} 