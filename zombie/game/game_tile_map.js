class GameMap {
    constructor(game){
        this.game = game
        this.offsetX = 10
        this.titles=[
            1,0,1,0,2,2,1,0,0,1,1,0,1,0,2,2,1,0,0,1,
            1,0,1,0,2,2,1,0,0,1,1,0,1,0,2,2,1,0,0,1,
            1,0,1,0,2,2,1,0,0,1,1,0,1,0,2,2,1,0,0,1,
                       
                
            
           
        ]
        this.th = 15
        //TODO,tw为整数
        this.tw = this.titles.length/this.th
        this.titleImages = [
            new GameImage(game,'m1'),
            new GameImage(game,'m2'),
            new GameImage(game,'m3'),
            new GameImage(game,'m4'),
        ]
        this.titleSize = 32
    }
    update(){
        this.offsetX -= 1
    }
    draw(){
        let h = this.th
        for(let i=0;i<this.titles.length;i++){         
            let index = this.titles[i]     
            if(index!=0){
                let x = Math.floor(i/h) *this.titleSize
                x += this.offsetX
                let y = i%h *this.titleSize
                let image = this.titleImages[index]
                this.game.context.drawImage(image.texture,x,y)
            }
        }
    }
    onThGround(i,j){
        let index = i*this.th+j
        let tile = this.titles[index]
        if(tile == 'undefined'){
            tile = false
        }
        return tile 
    }
    
}