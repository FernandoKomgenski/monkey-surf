function playSound(audioName, loop) {
    let audio = new Audio(audioName)
    audio.loop = loop;
    audio.play();
}
playSound("images/donkey.mp3", true)

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump = () => {
      mario.classList.add('jump');

      setTimeout(() => {
        mario.classList.remove('jump');
      }, 500)
}

document.addEventListener('keydown', jump);

const loop = setInterval(() => {
    console.log('loop')

    const pipeposition = pipe.offsetLeft
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipeposition)

    if (pipeposition <= 110 && pipeposition > 0 && marioposition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom= `${marioposition}px`;

        mario.src = 'images/gota.gif';
        mario.style.width = '100px';
        mario.style.marginLeft = '100px';
    }

}, 10)


