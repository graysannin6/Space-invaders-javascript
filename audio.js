Howler.volume(0.3);
const audio = {
    backgroundMusic: new Howl({
        src: './Audio/backgroundMusic.wav',
        loop: true
    }),
    bomb: new Howl({
        src: './Audio/bomb.mp3'
    }),
    bonus: new Howl({
        src: './Audio/bonus.mp3'
    }),
    enemyShoot: new Howl({
        src: './Audio/enemyShoot.wav'
    }),
    explode: new Howl({
        src: './Audio/explode.wav'
    }),
    gameOver: new Howl({
        src: './Audio/gameOver.mp3'
    }),
    select: new Howl({
        src: './Audio/select.mp3'
    }),
    shoot: new Howl({
        src: './Audio/shoot.wav'
    }),
    start: new Howl({
        src: './Audio/start.mp3'
    })
    
}