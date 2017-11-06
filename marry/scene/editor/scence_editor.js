class GameMap {
    constructor(game){
        this.game = game
        this.titles=[
            1,1,1,0,1,
            1,2,1,0,1,
            1,3,1,0,1,
        ]
        this.th = 5
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
    update(){}
    draw(){
        let h = this.th
        for(let i=0;i<this.titles.length;i++){
            let index = this.titles[i]
            if(index!=0){
                let x = Math.floor(i/h) *this.titleSize
                let y = i%h *this.titleSize
                let image = this.titleImages[index]
                this.game.context.drawImage(image.texture,x,y)
            }
        }
    }
    
}
class SceneEditor extends GameScene {
    constructor(game) {
        super(game)
        //title map
        let map = new GameMap(game)
        this.addElement(map)
       
        //马里奥
        let mario = new GameNesSprite(game)
        this.addElement(mario)
        mario.x = 100
        mario.y = 278
        this.mario = mario
        this.setupInputs()
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
      
    }
    setupInputs() {
        var self = this
        var b = this.mario;
        let playerSpeed =2
        self.game.registerAction('j', function (status) {
                 b.jump()
            })
        self.game.registerAction('a', function (status) {
                 b.move(-playerSpeed, status)
            })
        self.game.registerAction('d', function (status) {
                 b.move(+ playerSpeed, status)
            })
    }

}