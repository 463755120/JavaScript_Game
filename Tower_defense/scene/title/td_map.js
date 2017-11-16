class TDMap {
    constructor(game, w,h) {
      name = name || "tower2";
      this.w =w 
      this.h =h
      this.tileSize = 100
      this.setup();
    }
    setup() {
      //0不能走
      //1可以走
      let grid = [
        [0,0,1,0,],
        [1,1,1,1,],
        [1,1,1,1,],
        [1,1,1,1,],
        [1,1,1,1,],
        [0,0,1,0,],
      ]
      this.grid = grid
    }
    addTower(i,j){
      //10表示tower
      this.grid[i][j] = 10
    }
    normalGrid(){
      let grid = []
      for(let column of this.grid){
        let newColunm = []
        for(let flag of column ){
          if(flag !=1){
            newColunm.push(0)
          } else{
            newColunm.push(1)
          }
        }
        grid.push(newColunm)
      }
     
      return grid
    }
    pathfinding(i,j){
      let map = this.normalGrid()
      let graph = new Graph(map);
      let start = graph.grid[i][j];
      //end是目的地
      let end = graph.grid[5][2];
      let result = astar.search(graph, start, end);
      return result
    }
    
  }
  