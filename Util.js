 
  function randomBetween(min, max) {
    return Math.random() * (max - min) + min
  }

  function createScoreLabel({ score = 50, object }) {
    //Score label
    const scoreLabel = document.createElement('label');
    scoreLabel.innerHTML = score;
    
    scoreLabel.style.position = 'absolute';
    scoreLabel.style.color = 'white';
    scoreLabel.style.top = object.position.y + 'px';
    scoreLabel.style.left = object.position.x + 'px';
    scoreLabel.style.userSelect = 'none';
    
    document.querySelector('#canvas').appendChild(scoreLabel);
    
    gsap.to(scoreLabel,{
        opacity:0,
        y: -30,
        duration:2.5,
        onComplete:() =>  {
            document.querySelector('#canvas').removeChild(scoreLabel)
        }
    
    })
    }
    function rectangularCollision({ rectangle1, rectangle2 }) {
        return (
          rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
          rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
          rectangle1.position.x <= rectangle2.position.x + rectangle2.width
        )
      }

    function createParticles({object,color,fades})
    {
        for (let index = 0; index <15; index++) {
            particles.push(new Particle({
                position:{
                    x:object.position.x + object.width / 2,
                    y:object.position.y + object.height / 2
                },
                velocity:{
                    x:(Math.random() - 0.5) * 2,
                    y:(Math.random() - 0.5) * 2
                },
                radius:Math.random() * 4,
                color: color || 'Aquamarine',
                fades
                }))
        
        }
    }