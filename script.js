const startBtn = document.getElementById('startBtn');
const music = document.getElementById('music');
const startScreen = document.getElementById('startScreen');
const mainContent = document.getElementById('mainContent');
const heartBtn = document.querySelector('.heart-btn');
const letterSection = document.getElementById('letterSection');

// Paso 1: Comenzar
startBtn.addEventListener('click', () => {
  music.play();
  startScreen.style.display = 'none';
  mainContent.classList.remove('hidden');
});

// Paso 2: Leer carta
heartBtn.addEventListener('click', () => {
  // Oculta el "Hola amor" + botón
  mainContent.style.display = 'none';

  // Muestra la carta
  letterSection.classList.remove('hidden');
});
