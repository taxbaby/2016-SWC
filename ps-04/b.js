var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');


var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

for(var x = 0 ; x < 334 ; x++) {

    startX = endY;
    startY = Math.random()*10;
    endX = startX +1;
    endY = Math.random() * 500;

    drawingPad.beginPath();
    drawingPad.moveTo(startX,startY);
    drawingPad.lineTo(endX, endY);
    drawingPad.stroke();

}
