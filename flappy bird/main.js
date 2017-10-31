// var loadLevel = function(game, n) {
//     n = n - 1
//     var level = levels[n]
//     var blocks = []
//     for (var i = 0; i < level.length; i++) {
//         var p = level[i]
//         var b = Block(game, p)
//         blocks.push(b)
//     }
//     return blocks
// }
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
        bullet: 'img/bullet_user.png',
        cloud: 'img/cloud.png',
        player: 'img/player_plane.png',
        sky:'img/sky_bg.jpg',
        enemy0:'img/enemy0.png',
        enemy1:'img/enemy1.png',
        fire:'img/fire.png',
       //flyhappy bird
       bg:'./bird/bg.png',
       bird1:'./bird/redbird-downflap.png',
       bird2:'./bird/redbird-midflap.png',
       bird3:'./bird/redbird-upflap.png',
       tube1:'./bird/tube1.png',
       tube2:'./bird/tube2.png',
       base:'./bird/base.png',

    }       
    var game = new Game(30,images,function(g){      
        //var scene =  new Scene(g)
        var scene =  new SceneTitle(g)
        g.runWithScene(scene)
        
    })
   
    //enableDebugMode(game,true)
}
__main()