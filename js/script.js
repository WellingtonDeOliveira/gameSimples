const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const button = document.querySelector('.reload');
button.style.display = 'none';
const junp = () => {
    mario.classList.add('junp');

    setTimeout(() => {
        mario.classList.remove('junp');
    }, 500);
}
const loop = setInterval(() => {
   
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pontos = +document.querySelector('.pontos').innerHTML ;
    const valorPontos = document.querySelector('.pontos');
    if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './midia/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        button.style.display = '';
        clearInterval(loop);
    }
    if(pipePosition < 40 && pipePosition > 0 && marioPosition > 0){
        setTimeout(()=>{
            valorPontos.innerHTML = `${pontos+1}`;
        }, 50);
    }
}, 10);
document.addEventListener('keydown', junp);     
