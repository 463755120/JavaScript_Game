var enableDebugMode = function(game, enable) {
  if (!enable) {
    return;
  }
  window.paused = false;
  window.addEventListener("keydown", function(event) {
    var k = event.key;
    if (k == "p") {
      // 暂停功能
      window.paused = !window.paused;
    } else if ("1234567".includes(k)) {
      // 为了 debug 临时加的载入关卡功能
      //blocks = loadLevel(game,Number(k))
    }
  });
  //控制速度
  document
    .querySelector("#id-input-speed")
    .addEventListener("input", function() {
      var input = event.target;
      fps = Number(input.value);
    });
};
var GameAddAnimation = (images, animation) => {
  let a = animation;
  for (let i = 0; i < a.numberOfFrames; i++) {
    var index = String(i);
    if (i < 10) {
      index = "0" + index;
    }
    let key = a.name + index;
    let value = a.pathFormat.replace("{}", index);
    images[key] = value;
  }
};
var __main = function() {
  let animationZombie = {
    name: "bhzombie",
    pathFormat: "./img/bhzombie{}.png",
    actions: [
      {
        action: "walking",
        numberOfFrames: 4
      },{
        action: "attack",
        numberOfFrames: 4
      }
    ]
  };
  var images = {
    bhzombie00: "/img/bhzombie.png"
  };
  GameAddAnimation(images, animationZombie);
  var game = new Game(30, images, function(g) {
    //var scene =  new Scene(g)
    var scene = new SceneTitle(g);
    g.runWithScene(scene);
  });
};
__main();
