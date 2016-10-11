var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

var startingPoint = 0;

for(var x = 0 ; x < 10 ; x++) {
  for (var y = 0; y < 10; y++) {
    startingPoint = Math.random();
    endPoint = Math.random();
    drawingPad.beginPath();
    drawingPad.moveTo(startingPoint);
    drawingPad.lineTo(endPoint);
    drawingPad.stroke();
}
}
