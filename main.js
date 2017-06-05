var canvas = document.getElementById("gameCanvas"), ctx = canvas.getContext("2d");
var tsb0 = new Image(); tsb0.src = "TIGER_SWALLOWTAIL_0.png";
var tsb1 = new Image(); tsb1.src = "TIGER_SWALLOWTAIL_1.png";
var owl0 = new Image(); owl0.src = "BARRED_OWL_0.png";
var owl1 = new Image(); owl1.src = "BARRED_OWL_1.png";
var sun0 = new Image(); sun0.src = "SUNFLOWER_0.png";
var sun1 = new Image(); sun1.src = "SUNFLOWER_1.png";
var fern = new Image(); tsb0.src = "CHRISTMAS_FERN.png";
var tsb = new Entity([tsb0, tsb1], 32, 32 * 7, 5, [32, 32 * 18 - tsb0.width], ctx);

var update = setInterval(function() {
  
  
  
}, 1000 / 20);
