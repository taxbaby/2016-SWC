var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};


/* var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;
var randomLightness = 0;

for(var x = 0 ; x < 334 ; x++) {

    startX = endY;
    startY = Math.random()*10;
    endX = startX +1;
    endY = Math.random() * 500;

    drawingPad.beginPath();
    drawingPad.moveTo(startX,startY);
    drawingPad.lineTo(endX, endY);
    drawingPad.strokeStyle = getColor(0, 0, randomLightness, .6);
    drawingPad.stroke();

} */

var drawTriangle = function (gridX,gridY, baseSize) {
    var height = baseSize;
    var leftSide = baseSize * gridX;
    var halfWidth = baseSize / 2;
    var center = leftSide + halfWidth;
    var rightSide = leftSide + baseSize;
    var top = height * gridY;
    var bottom = top + height;

    drawingPad.strokeStyle = getColor(0,0,0,1);

    drawingPad.beginPath();
    drawingPad.moveTo(center, top);
    drawingPad.lineTo(rightSide, bottom);
    drawingPad.lineTo(leftSide,bottom);
    drawingPad.lineTo(center, top);
    drawingPad.stroke();
    /* drawingPad.fillRect(x*size, y*size, size, size);
    drawingPad.strokeRect(x*size, y*size, size, size); */
}

/* var main = function () { */
var size = 50;
var numX = 10;
var numY = 10;
var randomLightness = 0;

for(var x = 0 ; x < numX; x++) {
  for(var y = 0 ; y < numY; y++) {
    drawTriangle(x,y,size);
  }
/*}*/
};
