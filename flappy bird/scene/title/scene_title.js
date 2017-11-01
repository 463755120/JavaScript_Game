class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 150
        this.doublePipeSpace = 200
        this.columsOfpipe = 3;
        for (var i = 0; i < 3; i++) {
            var p1 = new GameImage(game,'pipe2')
            p1.flipY = true
            p1.x = 200+i*this.doublePipeSpace;
            var p2 = new GameImage(game,'pipe2')
            p2.x = p1.x
            this.restPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    restPipesPosition(p1, p2) {
        p1.y = randomBetween(-350,0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    update() {
        for (var p of this.pipes) {
            p.x -= 5
            if (p.x < -100) {
                p.x += this.doublePipeSpace * this.columsOfpipe
            }
        }
    }
    draw() {
        for (var p of this.pipes) {
            var context = this.game.context
            context.save()
            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ?-1:1
            var scaleY = p.flipY ?-1:1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)
            context.drawImage(p.texture, 0, 0)
            context.restore()
        }

    }
}
class SceneTitle extends GameScene {
    constructor(game) {
        super(game)
        // var label = new GameLabl(game,'hello') this.addElement(label) bg
        var bg = new GameImage(game, 'bg')
        this.addElement(bg)
        //水管
        this.pipe = new Pipes(game)
        this.addElement(this.pipe)
        //地板
        this.grounds = []
        for (var i = 0; i < 40; i++) {
            var g = new GameImage(game, 'base')
            g.x = i * 14;
            g.y = 340;
            this.addElement(g)
            this
                .grounds
                .push(g)
        }
        this.skipGrund = 4;
        //鸟
        var bird = new Gnameanimation(game)
        bird.x = 100
        bird.y = 80
        this.bird = bird
        this.addElement(bird)
        this.setupInputs()
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
        this.skipGrund-- 
        var offset = -3;
        if (this.skipGrund == 0) {
            this.skipGrund = 4;
            offset = 9;

        }
        for (var i = 0; i < 40; i++) {
            var g = this.grounds[i]
            g.x += offset;

        }
    }
    setupInputs() {
        var self = this
        var b = this.bird;
        self
            .game
            .registerAction('j', function (status) {
                b.jump()
            })
        self
            .game
            .registerAction('a', function (status) {
                b.move(-2, status)
            })
        self
            .game
            .registerAction('d', function (status) {
                b.move(+ 2, status)
            })
    }

}