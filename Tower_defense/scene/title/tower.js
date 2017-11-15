class Tower extends GameImage {
  constructor(game, name) {
    name = name || "tower2";
    super(game, name);
    this.setup();
  }
  setup() {
    this.attact = 1;
    this.range = 70;
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
   // this.drawAttackRange()
    super.draw()
  }
  update() {
    let target = this.target
    this.updateRotion(target)
    if (this.canAttack(target)) {
      this.fire(target)
    }
  }
  fire(target){
    if(this._firstCount !=0){
      this._firstCount --
      return false
    }else{
      this._firstCount = this._cooldown
      this.target.byAtack(this.attact);
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
    //检查是否存在，不要反写逻辑
    if(e == null){
      return 
    }
    //检查敌人死亡，如果是，取消目标。
    let enemyExist = e !==null && !e.dead
    let inRange = this.center().distance(e.center()) < this.range;
    let can = enemyExist && inRange
    if (!can){
      this.target = null
    } 
    return can
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
