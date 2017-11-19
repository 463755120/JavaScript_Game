class Gnameanimation {
  constructor(game,animation) {
    this.game = game;
    let a = animation
    this.animation = {
      bird: [],
    };
    let prefix = a.name
    for (var i = 0; i <a.numberOfFrames; i++) {
      var index = '0'.repeat(String(a.numberOfFrames).length-String(i).length)+String(i)
    index='0'+index
    log(index)
      var name = `${prefix}${index}`
      var t = game.textureByName(name)
      this.animation['bird'].push(t)
    }
    this.animationName = "bird";
    this.texture = this.frames()[0];
    this.w = this.texture.width 
    this.h = this.texture.height
    this.frameIndex = 0;
    this.frameCount = a.numberOfFrames;
    this.stop = false;
    
  }
  frames() {
    return this.animation[this.animationName];
  }
  updateFrame(){
    this.frameCount--;
    if (this.frameCount == 0) {
      this.frameCount = 4;
      this.frameIndex = (this.frameIndex + 1) % this.frames().length;
      this.texture = this.frames()[this.frameIndex];
    }
  }
  update() {
   this.updateFrame() 
  }
  draw() {
    var context = this.game.context
    context.save()
    var w2 = this.w / 2
    var h2 = this.h / 2
    context.translate(this.x + w2,this.y + h2)
    if(this.flipX){
      context.scale(-1,1)
    }
    context.rotate(this.rotation * Math.PI/180)
    context.translate(-w2,-h2)

    context.drawImage(this.texture,0,0)
    context.restore()
  }
  
  changeAnimation(animation) {
    this.animationName = animation;
  }
}
