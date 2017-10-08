var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}
var blocks = []
var enableDebugMode = function(game,enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game,Number(k))
        }
    })
    //控制速度
    document.querySelector("#id-input-speed").addEventListener('input',function(){
        var input = event.target
        fps = Number(input.value)
    })
}
var __main = function() { 
    var images = {
        ball: 'ball.png',
        block: 'block.png',
        paddle: 'paddle.png',
    }       
    var game = Game(30,images,function(g){
        //分数
        var score = 0 
        var paddle = Paddle(game)
        var ball = Ball(game)
        blocks = loadLevel(game,1)
    
        game.registerAction('a', function() {
            paddle.moveLeft()
        })
        game.registerAction('d', function() {
            paddle.moveRight()
        })
        game.registerAction('f', function() {
            ball.fire()
        })
    
        game.update = function() {
            if (window.paused) {
                return
            }
            ball.move()
                //判断相撞
            if (paddle.collide(ball)) {
                //反弹
                ball.speedY *= -1
            }
            //判断球和墙相撞
            for (var i = 1; i < blocks.length; i++) {
                var block = blocks[i]
                if (block.collide(ball)) {
                    block.kill()
                    ball.changgespeed()
                    //分数增加
                    score += 100
                }
            }
    
        }
        //mouse event
        var enableDrag = false
        game.canvas.addEventListener('mousedown',function(event){
            var x = event.offsetX
            var y = event.offsetY
            log(event)
            if(ball.hasPoint(x,y)){
                enableDrag = true
            }
        })
        game.canvas.addEventListener('mousemove',function(event){
            var x = event.offsetX
            var y = event.offsetY
            if(enableDrag){
                ball.x = x
                ball.y = y
            }
        })
        game.canvas.addEventListener('mouseup',function(event){
            var x = event.offsetX
            var y = event.offsetY
            enableDrag = false
        })
        game.draw = function() {
            //draw
            game.context.fillStyle="#ccc"
            game.context.fillRect(0,0,400,300)
            //draw
            game.drawImage(paddle)
            game.drawImage(ball)
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if (block.alive) {
                    game.drawImage(block)
                }
            }
            //渲染分数
            game.context.fillText('分数：'+ score,10,290)
        }
        
    })
   
    enableDebugMode(game,true)
}
__main()