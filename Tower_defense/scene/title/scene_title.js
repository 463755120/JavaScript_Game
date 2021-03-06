class SceneTitle extends GameScene {
  constructor(game) {
    super(game);
    this.setup();
  }
  setup(game) {
    this.debugPath = []
    //初始敌人列表和塔列表
    this.map = new TDMap(this.game,6,4)
    this.enemies = []
    this.towers = []
    this.setupBG();
    this.setupGameElements();
    //setupHUD
    this.setupHUD();
    this.setupTower();
    this.setupInputs();
  }

  addTower(x,y){
    let t1 = new Tower(this.game)
    let towerSize = t1.w
    x = Math.floor(x/towerSize)*towerSize
    y = Math.floor(y/towerSize)*towerSize
    let tower1 = new Tower(this.game);
    tower1.x = x;
    tower1.y = y;
    this.addElement(tower1)
    this.towers.push(tower1);
    this.findPathForEnemies()
    
  }
  findPathForEnemies(){
     //调用pathfinding 为每一个敌人寻路
     let s = this.map.tileSize
     for(let e of this.enemies){
      let x = e.x;
      let y = e.y;
      let i = Math.floor(x/s)
      let j = Math.floor(y/s)
      let path = this.map.pathfinding(i,j)
      e.resetPath(path)
      //用debug 
      this.debugPath = path
     }
  }
  draw(){
    super.draw()
    log(this.debugPath)
    let s = this.map.tileSize
    log(this.debugPath)
    for(let p of this.debugPath){
      let context = this.game.context
      context.fillStyle = 'rgba(200,200,200,0.5)'
      let x = p.x*s
      let y = p.y*s
     context.fillRect(x,y,s,s)
    }
  }
  setupTower(){
    this.addTower(100,170)
    this.addTower(100,30)
  }
  setupGameElements() {
    let offset = [0,30]
    for(let i =0;i<1;i++){
      let e2 = new Enemy1(this.game);
      e2.tileSize = this.map.tileSize
      e2.x -= i*30
      e2.y += offset[i%2]
      this.addElement(e2);
      this.enemies.push(e2)
    }
  }
  setupBG() {
    var bg = new GameImage(this.game, "bg");
    this.addElement(bg);
  }
  setupHUD() {
    let gun = new GameImage(this.game, "tower");
    gun.x = 280;
    gun.y = 180;
    this.gun = gun;
    this.addElement(gun);
  }
  update() {
    super.update();
    for(let t of this.towers){
        if(t.target == null){
            t.findTarget(this.enemies)
        }
    }
  }

  setupInputs() {
    //mouse event
    let self = this;
    let startDrag = false;
    let ox = 0
    let oy = 0
    this.game.registerMouse((event, status) => {
      let x = event.offsetX;
      let y = event.offsetY;
      if (status == "down") {
        let cliicked = self.gun.pointInframe(x, y);
        if (cliicked) {
          startDrag = true;
          self.tower = self.gun.clone();
          self.addElement(self.tower);
          //修正偏移
          ox = self.gun.x-x
          oy = self.gun.y-y
        }
      } else if (status == "move") {             
          self.tower.x = x+ox
          self.tower.y = y+oy
      } else {
        startDrag = false;
        self.removeElement(self.tower);
        self.addTower(x,y)
      }
    });
  }
}