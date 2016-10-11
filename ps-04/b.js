var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

var startingPoint = 0;
var endPoint = 0;

for(var x = 0 ; x < 34 ; x++) {
  for (var y = 0; y < 34; y++) {
    startingPoint = Math.random() * 10;
    endPoint = Math.random() * 50;
    drawingPad.beginPath();
    drawingPad.moveTo(0,0);
    drawingPad.lineTo(endPoint, startingPoint);
    drawingPad.stroke();
}
}
