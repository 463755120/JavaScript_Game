class Tower extends GameImage {
  constructor(game, name) {
    name = name || "tower";
    super(game, name);
    this.setup();
  }
  setup() {
    this.attact = 1;
    this.range = 60;
    this.target = null;
    this._cooldown = 1
    this._firstCount = 0
  }
  drawAttackRange(){
    let context = this.game.context
    context.fillStyle = 'rgba(200,200,200,0.5)'
    context.beginPath()
    let v = this.center()
    context.arc(v.x,v.y,this.range,0,Math.PI*2)
    context.fill()
  }
  draw(){  
    this.drawAttackRange()
    super.draw()
  }
  update() {
    let target = this.target
    this.updateRotion(target)
    if (this.canAttack(this.target)) {
      this.target.byAtack(this.attact);
      if(this.target.dead){
        this.target = null
      }
    }
  }
  updateRotion(target){
    if(target !== null){
      let v = target.center().sub(this.center()).normal()
      let r = j_rotation(v.x,-v.y)
      this.rotation = r
    }
  }
  canAttack(enemy){
    
    let e = enemy;
    let enemyExist = e !==null && !e.dead
    if (enemyExist){
      let can = this.center().distance(e.center()) < this.range;
      if(this._firstCount !=0){
        this._firstCount --
        return false
      }else{
        this._firstCount = this._cooldown
        return can
      }
      
    } else{
      return false
    }
  };
  findTarget(enemies) {
    for (let e of enemies) {
      if (this.canAttack(e)) {
        this.target = e
        break
      }
    }
  }
}
