const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pontuacao = document.querySelector('.melhor');
const painel = document.getElementById('evento');
let melhor_pontu = 0;
let testes = melhor_pontu;
const junp = () => {
    mario.classList.add('junp');

    setTimeout(() => {
        mario.classList.remove('junp');
    }, 500);
}
const loop = setInterval(() => {
   
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pontos = +document.querySelector('.pontos').innerHTML;
    const valorPontos = document.querySelector('.pontos');
    if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './midia/game-over.png';
        mario.style.width = '75px';
        if(melhor_pontu > localStorage.getItem('pontos')){
            localStorage.setItem('pontos', JSON.stringify(melhor_pontu));
        }
        pontuacao.innerHTML = localStorage.getItem('pontos');
        painel.classList.remove('painel');
        painel.classList.add('tela-reload');
        mario.style.marginLeft = '50px';
        clearInterval(loop);
    }
    if(pipePosition <= 20){
        if(testes == 3){
            pipe.style.animation = 'pipe_animation 1.8s infinite linear';
            pipe.style.display = 'none';
            testes = testes+1;
        }else if(testes == 6){
            pipe.style.animation = 'pipe_animation 1.6s infinite linear';
            pipe.style.display = 'none';
            testes = testes+1;
        } else if(testes == 9){
            pipe.style.animation = 'pipe_animation 1.4s infinite linear';
            pipe.style.display = 'none';
            testes = testes+1;
        } else if(testes == 12){
            pipe.style.animation = 'pipe_animation 1.2s infinite linear';
            pipe.style.display = 'none';
            testes = testes+1;
        } else if(testes == 14){
            pipe.style.animation = 'pipe_animation 1s infinite linear';
            pipe.style.display = 'none';
            testes = testes+1;
        } else if(testes == 16){
            pipe.style.animation = 'pipe_animation 0.8s infinite linear';
            pipe.style.display = 'none';
            testes = testes+1;
        } else if(testes == 18){
            pipe.style.animation = 'pipe_animation 0.7s infinite linear';
            pipe.style.display = 'none';
            testes = testes+1;
        }else {
            pipe.style.display = '';
        }
    }
    if(pipePosition < 40 && pipePosition > 0 && marioPosition > 0){
        setTimeout(()=>{
            if(pontos < 9){
                valorPontos.innerHTML = `0${pontos+1}`;
            }else{
                valorPontos.innerHTML = `${pontos+1}`;
            }
            melhor_pontu = +document.querySelector('.pontos').innerHTML;
            testes = melhor_pontu;
        }, 50);
    }
}, 10);
document.addEventListener('keydown', junp);     
