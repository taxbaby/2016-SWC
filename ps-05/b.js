var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

drawingPad.rect(100,100,300,300);
drawingPad.stroke();

var r = 0;

for (var r = 0; r<200; r+=7.5) {

drawingPad.beginPath();
drawingPad.arc(250,250, r, 0,2*Math.PI);
drawingPad.stroke();
drawingPad.closePath();
}
