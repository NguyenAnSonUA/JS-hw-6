function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('span.color')

buttonChange.addEventListener('click', (e) => {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = body.style.backgroundColor;
}
)
