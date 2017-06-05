var canvas = document.getElementById("gameCanvas"), ctx = canvas.getContext("2d");
var tsb0 = new Image(); tsb0.src = "TIGER_SWALLOWTAIL_0.png";
var tsb1 = new Image(); tsb1.src = "TIGER_SWALLOWTAIL_1.png";
var owl0 = new Image(); owl0.src = "BARRED_OWL_0.png";
var owl1 = new Image(); owl1.src = "BARRED_OWL_1.png";
var sun0 = new Image(); sun0.src = "SUNFLOWER_0.png";
var sun1 = new Image(); sun1.src = "SUNFLOWER_1.png";
var fern = new Image(); tsb0.src = "CHRISTMAS_FERN.png";
var block = new Block(ctx);
var tsb = new Entity([tsb0, tsb1], 32, 32 * 7, 5, [32, 32 * 18 - tsb0.width], ctx);
var owl = new Entity([tsb0, tsb1], 32, 32 * 7, 5, [32, 32 * 18 - tsb0.width], ctx);
var sunf0 = new Entity([sun0, sun1], 32 * 3, 32 * 9, 1, undefined, ctx);
var sunf1 = new Entity([sun0, sun1], 32 * 8, 32 * 9, 1, undefined, ctx);
var sunf2 = new Entity([sun0, sun1], 32 * 15, 32 * 9, 1, undefined, ctx);
var cf0 = new Entity([fern], 32, 32 * 9, 1, undefined, ctx);
var cf1 = new Entity([fern], 32 * 17, 32 * 9, 1, undefined, ctx);
var map = [[4,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,4],
           [4,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,4],
           [4,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,4],
           [4,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,4],
           [4,4,4,3,3,3,3,3,4,4,4,3,3,3,3,3,3,3,4,4],
           [4,4,4,4,4,2,4,4,4,4,4,4,4,2,4,4,4,4,4,4],
           [4,4,4,4,4,2,4,4,4,4,4,4,4,2,4,4,4,4,4,4],
           [4,4,4,4,4,2,4,4,4,4,4,4,4,2,4,4,4,4,4,4],
           [4,4,4,4,4,2,4,4,4,4,4,4,4,2,4,4,4,4,4,4],
           [4,4,4,4,4,2,4,4,4,4,4,4,4,2,4,4,4,4,4,4],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var start = false, guess = false, cOrg = 0, ans = [];

document.addEventListener("mousedown", function(e) {
  
  if(guess) {
    
    if(cOrg === 5) {
      
      
      
    }
    
    ans[cOrg] = prompt("Type the name of the organism shown.");
    cOrg++;
    
  }
  
});

ctx.font = "60px Cousine";

var update = setInterval(function() {
  
  if(guess) {
    
    
    
  }
  
  if(start) {
    
    
    
  }
  
  else {
    
    ctx.clearRect(-10, -10, 1000, 1000);
    ctx.fillStyle = "#00ccff";
    ctx.fillRect(0, 0, 960, 720);
    
    for(var i = 0; i < map.length; i++) {
      
      for(var j = 0; j < map[0].length; j++) {
        block.drawBlock(map[i][j], j, i);
      }
      
    }
    
    
    
  }
  
}, 1000 / 20);
