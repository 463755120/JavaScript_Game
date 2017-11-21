class Peashooter extends Gnameanimation {
    static new(game) {
      let animationPeashooter = {
        name: "Peashooter",
        pathFormat: "./img/[name]/Peashooter_[name]_[index].png",
        actions: [{
            name: "idle",
            numberOfFrames: 12
          },
        ]
      };
      return new this(game,animationPeashooter)
    }
    setup() {}
  }
  