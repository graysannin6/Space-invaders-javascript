class Player{
    constructor(){
        
        this.velocity ={
            x:0,
            y:0
        }

        this.opacity = 1;
        this.rotation = 0;

        const image = new Image();
        image.src = 'DurrrSpaceShip.png';
        image.onload = () =>{
        this.image = image;
        this.width = 50;
        this.height = 50;
        this.position ={
            x:canvas.width / 2 - this.width / 2,
            y:canvas.height - this.height - 40
        }

        }
        this.particles = []
        this.frames = 0
    }

    draw(){
       /*  c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height) */

        c.save();
        c.globalAlpha = this.opacity;
        c.translate(
            player.position.x + player.width / 2, 
            player.position.y + player.height / 2
            );

       c.rotate(this.rotation);

       c.translate(
            -player.position.x - player.width / 2, 
            -player.position.y - player.height / 2
            );

        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
       c.restore();
    }

    update()
    {
        if (!this.image) return;

            this.draw()
            this.position.x += this.velocity.x;

        if (this.opacity !== 1) return;

        this.frames++
    if (this.frames % 2 === 0) {
      this.particles.push(
        new Particle({
          position: {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height
          },
          velocity: {
            x: (Math.random() - 0.5) * 1.5,
            y: 1.4
          },
          radius: Math.random() * 2,
          color: 'white',
          fades: true
        })
      )
    }
    }
}