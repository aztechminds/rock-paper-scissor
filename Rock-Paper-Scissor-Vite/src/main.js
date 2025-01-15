const startScreen = document.getElementById('startscreen');
const startButton = document.getElementById('startbutton');
const main = document.getElementById('main');
const header = document.getElementById('header');

startButton.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  main.classList.remove('hidden');
  header.classList.remove('hidden');

});