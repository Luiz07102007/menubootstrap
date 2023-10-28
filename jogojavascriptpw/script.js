const rayman = document.querySelector('.rayman')
const obstacle = document.querySelector('.obstacle')

const start = document.querySelector('.start')
const gameOver = document.querySelector('.game-over')



const startGame = () => {
  obstacle.classList.add('obstacle-animation')
  start.style.display = 'none'

}

const restartGame = () => {
  gameOver.style.display = 'none';
  obstacle.style.left = '';
  obstacle.style.right = '0';
  rayman.src = '.src/img/explode.gif';
  rayman.style.width = '150px';
  rayman.style.bottom = '0';

  start.style.display = 'none';

  
  
  // Recarrega a página
  window.location.reload();
}




const jump = () => {
  rayman.classList.add('jump')

  setTimeout(() => {
    rayman.classList.remove('jump')
  }, 800)
}

const loop = () => {
  setInterval(() => {
    const obstaclePosition = obstacle.offsetLeft
    const raymanPosition = window
      .getComputedStyle(rayman).bottom.replace
      ('px', ' ')

    if (obstaclePosition <= 120 && obstaclePosition > 0 && raymanPosition < 80) {
      obstacle.style.animation = 'none';
      obstacle.style.left ='${pipePosition}px';

rayman.style.animation ='none';
rayman.style.bottom = '${raymanPosition}px';

rayman.src='./img/explode.gif';








      gameOver.style.display = 'flex'
      
      clearInterval(loop)
    }
  }, 10)
}

loop()

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === ' ') {
    jump()
  }
})

document.addEventListener('touchstart', e => {
  if (e.touches.length) {
    jump() 
  }
})

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === 'Enter') {
    startGame();
  }
});