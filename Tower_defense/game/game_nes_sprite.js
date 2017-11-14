class GameNesSprite {
    constructor(game,map) {
      this.game = game;
      this.map = map;
      this.titleSize = map.titleSize
      this.animation = {
        bird: [],
      };
      this.tileOffset = 32784
      this.data = window.bytes.slice(this.tileOffset)
      this.pixelWidth = 2
      this.rowsOfSpite = 4
      this.columnsOfSprite = 2
      this.w = this.pixelWidth * this.columnsOfSprite *8
      this.h = this.pixelWidth * this.rowsOfSpite *8
      this.frameIndex = 0;
      this.frameCount = 4;
      this.frameIndex  = 0
      this.stop = false;
      //重力和加速度
      this.gy = 10
      this.vy = 2
      this.vx = 0
      this.mx = 0
      //上升和掉落角度
      this.rotation = 0;
      this.maxSpeed = 8
    }
     drawBlock (context, data, x, y, pixelWidth) {
        const colors = [
            'white',
            '#FE1000',
            '#FFB010',
            '#AA3030',
        ]
        let w = pixelWidth
        let h = pixelWidth
        let bitlength = 8

        for (let i = 0; i < bitlength; i++) {
            let p1 = data[i]
            let p2 = data[i + 8]
            for (let j = 0; j < bitlength; j++) {
                //8 bite per line
                //78 69      0100 1110 0100 0101
                //在j循环中，每一次画一个像素
                let c1 = (p1 >> (7 - j)) & 0b00000001
                let c2 = (p2 >> (7 - j)) & 0b00000001
                let pixel = (c2 << 1) + c1
                if(pixel ==0){
                    continue
                }
                let color = colors[pixel]
                context.fillStyle = color
                let px = x + j * w
                let py = y + i * h
                context.fillRect(px, py, w, h)
            }
        }
    }
     drawSprite () {
        let bytesPerBlock = 16
        let dataOffset = bytesPerBlock * this.frameIndex*8
        let data = this.data.slice(dataOffset)
        let context = this.game.context
        let pixelWidth = this.pixelWidth
        let pixelsPerBlock = 8
        let blockSize = pixelWidth * pixelsPerBlock
        let offset = 0
        for (var i = 0; i < this.rowsOfSpite; i++) {
            for (var j = 0; j < this.columnsOfSprite; j++) {
                let x = j * blockSize
                let y = i * blockSize
                let pixels = data.slice(offset)
                this.drawBlock(context, pixels, x, y, pixelWidth)
                offset += 16
            }
        }
    }
    jump(){
      this.vy -=10
      //this.rotation = -45
    }
    updataGravity(){
      //拿到角色在地图中的坐标ij
      let i = Math.floor(this.x/this.titleSize)
      let j = Math.floor(this.y/this.titleSize)+2
      let onThGround = this.map.onThGround(i,j)
      if(onThGround && this.vy>0){
        this.vy = 0
      }else{
        this.y += this.vy
        this.vy+=this.gy*0.3
        //陷入地面拔出来
        let j = Math.floor(this.y/this.titleSize)+2
        let onThGround = this.map.onThGround(i,j)
        if(onThGround){
          this.y = (j-2)*this.titleSize
        }
         if(this.y>=450){
          this.y =450;
        }
      }
      
    }
    update() {
      //更新x轴的加速度，摩擦力
      this.vx +=this.mx
      //限制最大速度
      if(Math.abs(this.vx) >= this.maxSpeed){
        this.vx = parseInt(this.vx)
      }
      //摩擦力已经把速度降至0，停止摩擦
      if(this.vx *this.mx>0){
        this.vx = 0
        this.mx = 0
      } else {
        this.x +=this.vx
      }
      this.updataGravity()
    this.frameCount--;
    if (this.frameCount == 0) {
      this.frameCount = 3;
      this.frameIndex++
      this.frameIndex %=4
     
    }
     
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
      this.drawSprite()
      context.restore()
    }
    move(x, keystatus) {
      this.flipX = (x<0);
      let s = 2*x
      if(keystatus=="down"){
        this.vx +=s
        this.mx = -s/3
      }
    }
    moveStop() {
      this.stop = true;
    }
    changeAnimation(animation) {
      this.animationName = animation;
    }
  }
  