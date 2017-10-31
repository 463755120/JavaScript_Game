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
        // w1:'img/xingzou/1-1.png',
        // w2:'img/xingzou/1-2.png',
        // w3:'img/xingzou/1-3.png',
        // w4:'img/xingzou/1-4.png',
        // w5:'img/xingzou/1-5.png',
        // w6:'img/xingzou/1-6.png',
        // w7:'img/xingzou/1-7.png',
        // w8:'img/xingzou/1-8.png',
        // w9:'img/xingzou/1-9.png',
        //士兵操练
        run1:'img/xingzou/171-1.png',
        run2:'img/xingzou/171-2.png',
        run3:'img/xingzou/171-3.png',
        run4:'img/xingzou/171-4.png',
        run5:'img/xingzou/171-5.png',
        run6:'img/xingzou/171-6.png',
        run7:'img/xingzou/171-7.png',
        run8:'img/xingzou/171-8.png',
        //跑
        pre1:'img/xingzou/172-1.png',
        pre2:'img/xingzou/172-2.png',
        pre3:'img/xingzou/172-3.png',
        pre4:'img/xingzou/172-4.png',
        pre5:'img/xingzou/172-5.png',
        pre6:'img/xingzou/172-6.png',
        pre7:'img/xingzou/172-7.png',
        pre8:'img/xingzou/172-8.png',
        pre9:'img/xingzou/172-9.png',
        pre10:'img/xingzou/172-10.png',

    }       
    var game = new Game(30,images,function(g){      
        //var scene =  new Scene(g)
        var scene =  new SceneTitle(g)
        g.runWithScene(scene)
        
    })
   
    //enableDebugMode(game,true)
}
__main()