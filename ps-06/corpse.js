var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');
var circleDegrees = 2 * Math.PI;
var y0  = 0;
var y1 = 240;
var y2 = 480;
var height = y3 = 720;
var x0 = 0;
var x1 = 125; // left connection
var x2 = 275; // right connection
var width = x3 = 400;
var horizontalCenter = 200; // centerLine

var taxbaby = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

taxbaby.drawGrid = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x2,y0);
  ctx.lineTo(x2,y3);

  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x0,y1);
  ctx.lineTo(x3,y1);

  ctx.moveTo(x0,y2);
  ctx.lineTo(x3,y2);
  ctx.stroke();
}

taxbaby.drawArm = function(ctx, left) {

};

taxbaby.drawLeg = function(ctx, left) {

};


taxbaby.drawTop = function(ctx) {
  drawImage('head.png', ctx, 0, 0);
};

taxbaby.drawMiddle = function(ctx) {
  drawImage('body.png', ctx, 0, 240);
};

taxbaby.drawBottom = function(ctx) {
 drawImage('legs.png', ctx, 0, 480);
};

taxbaby.drawCorpse = function(ctx) {
 
 taxbaby.drawTop(ctx);
 
 taxbaby.drawMiddle(ctx);
 
 taxbaby.drawBottom(ctx);
 
 taxbaby.drawGrid(ctx);
};

window
taxbaby =
taxbaby;
