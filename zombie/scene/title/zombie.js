class Zombie extends Gnameanimation {
  static new(game) {
    let animation = {
      numberOfFrames:4,
      name:"bhzombie",
      pathFormat:'./img/bhzombie{}.png'
    }
    return new this(game,animation)
  }
  setup() {}
}
