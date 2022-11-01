function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');

let timerId = null;

const changeColor = () => {
    let color = getRandomHexColor();
    bodyRef.style.backgroundColor = color  
}

btnStartRef.addEventListener('click', () => {
    btnStartRef.setAttribute('disabled', true)
    changeColor();
    timerId = setInterval(() => {
        changeColor();
    }, 1000); 
});

btnStopRef.addEventListener('click', () => {
    clearInterval(timerId);
    btnStartRef.removeAttribute('disabled')
});

