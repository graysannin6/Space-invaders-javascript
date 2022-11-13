class Grid
{
    constructor()
    {
        this.position = {
            x:0,
            y:0
        }
        this.velocity = {
            x:3,
            y:0
        }
        this.invaders = []
        const rows = Math.floor(Math.random() * 5 + 2)
        const colums = Math.floor(Math.random() * 10 + 5)
        this.width = colums * 43
        for (let x = 0; x < colums; x++) 
        {
            for (let y = 0; y < rows; y++) 
            {
                this.invaders.push(new Invader(
                {
                    position : 
                    {
                        x: x * 30,
                        y: y * 30
                    }
                }))
            
            }
        }
    }
    update()
    {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.velocity.y = 0

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x * 1.15
            this.velocity.y = 43
        }
    }
}