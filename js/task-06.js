const textInput = document.querySelector('#validation-input');
console.log(textInput.getAttribute('data-length'));
const valid = document.querySelector('#validation-input.valid');
const invalid = document.querySelector('#validation-input.invalid')

textInput.addEventListener('blur', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})