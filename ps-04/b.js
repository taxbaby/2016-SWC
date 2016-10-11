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


var startX = 0;
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

}
