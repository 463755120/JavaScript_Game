class Game {
    constructor(fps, images, runCallback){
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.mouseActions = []
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        //events
        var self = this
        //两种写法
        window.addEventListener('keydown', event=>{
            this.keydowns[event.key] = 'down'
        })
        //mosue event
        let moving = false
        window.addEventListener('keyup', function(event){
            self.keydowns[event.key] = 'up'
        })
        window.addEventListener('mousedown',event=>{
            moving = true
            for(let a of this.mouseActions){
                a(event,'down')
            }

        })
        window.addEventListener('mouseup',event=>{
            moving = false
            for (let a of this.mouseActions) {
                 a(event, 'up')
             }
        })
        window.addEventListener('mousemove',event=>{
            if (moving) {
                for (let a of this.mouseActions) {
                    a(event, 'move')
                }
            }
        })
        this.init()
    }
    drawImage(Image){
        this.context.drawImage(Image.texture, Image.x, Image.y)
    }
    // update
    update() {
        this.scene.update()
    }
    // draw
    draw() {
        this.scene.draw()
    }
    //设置函数
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    //注册鼠标事件
    registerMouse(callback){
        this.mouseActions.push(callback)
    }
    runloop(){
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            var status = g.keydowns[key]
            if(status =='down') {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]('down')
            } else if(status =='up'){
                g.actions[key]('up')
                g.keydowns[key] = null
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    textureByName(name){
        var g = this
        var img = g.images[name]
        // var image = {
        //     w: img.width,
        //     h: img.height,
        //     image: img,
        // }
        return img
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        this.runCallback(this)
    }
    //初始函数
    init(){
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                if (loads.length == names.length) {
                    g.__start()
                }
            }
        }

    }
    
}
