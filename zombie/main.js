var enableDebugMode = function (game, enable) {
  if (!enable) {
    return;
  }
  window.paused = false;
  window.addEventListener("keydown", function (event) {
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
    .addEventListener("input", function () {
      var input = event.target;
      fps = Number(input.value);
    });
};
var GameAddAnimation = (images, animation) => {
  let a = animation;
  let pathFormat = a.pathFormat
  let keyName = a.name
  for (let action of a.actions) {
    let name = action.name
    let numberOfFrames = action.numberOfFrames
    let p = pathFormat.replace('[name]', name).replace('[name]', name)
    for (let i = 0; i < action.numberOfFrames; i++) {
      let index = '0'.repeat(String(action.numberOfFrames).length - String(i).length) + String(i)
      let key = keyName + name + index;
      let value = p.replace('[index]', index)
      images[key] = value;

    }

  }
};
var __main = function () {
  //plant
  let animationPeashooter = {
    name: "Peashooter",
    pathFormat: "./img/[name]/Peashooter_[name]_[index].png",
    actions: [{
        name: "idle",
        numberOfFrames: 12
      },
    ]
  };
  //zombie
  let animationZombie = {
    name: "bhzombie",
    pathFormat: "./img/[name]/[name]_[index].png",
    actions: [{
        name: "walking",
        numberOfFrames: 21
      },
      {
        name: "attack",
        numberOfFrames: 10
      }
    ]
  };
  var images = {
    bg1:'img/background1.jpg',
    peabullet1:'img/PB00.gif',
  };
  GameAddAnimation(images, animationZombie);
  GameAddAnimation(images, animationPeashooter);
  var game = new Game(30, images, function (g) {
    //var scene =  new Scene(g)
    var scene = new SceneTitle(g);
    g.runWithScene(scene);
  });
};
__main();