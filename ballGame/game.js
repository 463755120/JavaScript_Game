//game
var Game = function (fps) {
    var g = {
        actions: {},
        keydowns: {}
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context
    //draw
    g.drawImage = function (guaImage) {
        g
            .context
            .drawImage(guaImage.image, guaImage.x, guaImage.y)
    }
    //绑定按键事件 按键按下绑定，抬起解绑
    window.addEventListener('keydown', function () {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function () {
        g.keydowns[event.key] = false
    })
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }
    window.fps = 30
    var runloop = function () {
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                //如果按键按下，调用注册的 action
                g.actions[key]()
            }
        }
        //update
        g.update()
        //clear
        context.clearRect(0, 0, canvas.width, canvas.height)
        //draw
        g.draw()
    }
    // timer
    setInterval(function () {
        runloop() 
    }, 1000 / window.fps )
    return g
}