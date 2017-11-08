
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
            //blocks = loadLevel(game,Number(k))
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
       //flyhappy bird
       bg:'./bird/bg.png',
       bird1:'./bird/redbird-downflap.png',
       bird2:'./bird/redbird-midflap.png',
       bird3:'./bird/redbird-upflap.png',
       pipe1:'./bird/tube1.png',
       pipe2:'./bird/tube2.png',
       base:'./bird/base.png',
       //马里奥
       m1:'./img/block.png',
       m2:'./img/test.png',
       m3:'./img/floor.png',
       m4:'./img/gold.png',

    }    
    var game = new Game(30, images, function (g) {
        //var scene =  new Scene(g)
        var scene = new SceneTitle(g)
        g.runWithScene(scene)

})
    
   
}
__main()