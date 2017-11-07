
class SceneEditor extends GameScene {
    constructor(game) {
        super(game)
        //title map
        let map = new GameMap(game)
        this.addElement(map)
       
        //马里奥
        let mario = new GameNesSprite(game,map)
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