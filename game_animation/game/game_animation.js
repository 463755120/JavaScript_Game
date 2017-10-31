class Gnameanimation {
  constructor(game) {
    this.game = game;
    this.animation = {
      run: [],
      pre: []
    };
    for (var i = 1; i < 9; i++) {
      var name = `run${i}`;
      var t = game.textureByName(name);
      this.animation["run"].push(t);
    }
    for (var i = 1; i < 11; i++) {
      var name = `pre${i}`;
      var t = game.textureByName(name);
      this.animation["pre"].push(t);
    }
    this.animationName = "run";
    this.texture = this.frames()[0];
    this.w = this.texture.width 
    this.y = this.texture.height
    this.frameIndex = 0;
    this.frameCount = 5;
    this.stop = false;
  }
  frames() {
    return this.animation[this.animationName];
  }
  update() {
    this.frameCount--;
    if (this.frameCount == 0) {
      this.frameCount = 5;
      this.frameIndex = (this.frameIndex + 1) % this.frames().length;
      this.texture = this.frames()[this.frameIndex];
    }
  }
  draw() {
    this.game.drawImage(this);
    if(this.flipx){
        context.save()
        var x = this.x+this.w/2
        context.translate(x,0)
    }
  }
  move(x, keystatus) {
    this.stop = false;
    this.x += x;
    var animationNames = {
      down: "run",
      up: "pre"
    };
    var name = animationNames[keystatus];
    this.changeAnimation(name);
  }
  moveStop() {
    this.stop = true;
  }
  changeAnimation(animation) {
    this.animationName = animation;
  }
}
