class Gnameanimation {
  constructor(game) {
    this.game = game;
    this.animation = {
      bird: [],
    };
    for (var i = 1; i <3; i++) {
      var name = `bird${i}`;
      var t = game.textureByName(name);
      this.animation["bird"].push(t);
    }
    this.animationName = "bird";
    this.texture = this.frames()[0];
    this.w = this.texture.width 
    this.h = this.texture.height
    this.frameIndex = 0;
    this.frameCount = 5;
    this.stop = false;
    //重力和加速度
    this.gy = 5
    this.vy = 2
    //上升和掉落角度
    this.rotation = 0;
  }
  frames() {
    return this.animation[this.animationName];
  }
  jump(){
    this.vy -=3
    this.rotation = -45
  }
  update() {
    this.y += this.vy
    this.vy+=this.gy*0.2
    var h = 316;
    if(this.y >= h){
      this.y = h
    } else if(this.y<=0){
      this.y =0;
    }
    //更新角度
    if(this.rotation<=45){
      this.rotation +=5
    }
    this.frameCount--;
    if (this.frameCount == 0) {
      this.frameCount = 5;
      this.frameIndex = (this.frameIndex + 1) % this.frames().length;
      this.texture = this.frames()[this.frameIndex];
    }
  }
  draw() {
    var context = this.game.context
    // this.game.drawImage(this);
    // if(this.flipx){
    //     context.save()
    //     var x = this.x+this.w/2
    //     context.translate(x,0)
    //     context.scale(-1,1)
    //     context.translate(-x,0)
    //     context.drawImage(this.texture,this.x,this.y)
    //     context.restore()
    // } else{
    //   context.drawImage(this.texture,this.x,this.y)
    // }
    context.save()
    var w2 = this.w / 2
    var h2 = this.h / 2
    context.translate(this.x + w2,this.y + h2)
    if(this.flipx){
      context.scale(-1,1)
    }
    log(this.rotation)
    context.rotate(this.rotation * Math.PI/180)
    context.translate(-w2,-h2)
    context.drawImage(this.texture,0,0)
    context.restore()
  }
  move(x, keystatus) {
    this.flipx = x<0;
    this.x += x;
    // var animationNames = {
    //   down: "run",
    //   up: "pre"
    // };
    // var name = animationNames[keystatus];
    // this.changeAnimation(name);
  }
  moveStop() {
    this.stop = true;
  }
  changeAnimation(animation) {
    this.animationName = animation;
  }
}
