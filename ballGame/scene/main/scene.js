var Scene = function(game){
    var s = {
        game:game,
    }
    //初始化
    var score = 0 
    var paddle = Paddle(game)
    var ball = Ball(game)
    var blocks = loadLevel(game,1)

    game.registerAction('a', function() {
        paddle.moveLeft()
    })
    game.registerAction('d', function() {
        paddle.moveRight()
    })
    game.registerAction('f', function() {
        ball.fire()
    })
    s.draw = function(){
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
    s.update = function(){
        if (window.paused) {
            return
        }
        ball.move()
        //判断球跌入挡板下面
        if(ball.y> paddle.y){
            var end = new SceneEnd(game)
            game.replaceScene(end)
        }
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
    return s
}