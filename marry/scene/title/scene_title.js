
class SceneTitle extends GameScene {
    constructor(game) {
        super(game)
        var bg = new GameImage(game, 'bg')
        this.addElement(bg)
        //地板
        this.grounds = []
        for (var i = 0; i < 40; i++) {
            var g = new GameImage(game, 'base')
            g.x = i * 14;
            g.y = 340;
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipGrund = 4;
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
        let playerSpeed =5
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