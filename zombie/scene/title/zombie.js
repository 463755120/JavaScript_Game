class Zombie extends Gnameanimation {
  static new(game) {
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
    return new this(game,animationZombie)
  }
  setup() {}
}
