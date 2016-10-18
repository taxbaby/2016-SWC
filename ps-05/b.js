var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');
var degToRad = Math.PI/180;


drawingPad.rotate(45*Math.PI/180);
drawingPad.rect(100,100,300,300);
drawingPad.stroke();
