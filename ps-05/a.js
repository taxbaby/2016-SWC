var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');


for (var y = 100; y<=400; y+=15) {

drawingPad.beginPath();
drawingPad.moveTo(250, y);
drawingPad.lineTo(100,250);
drawingPad.stroke();

}

drawingPad.beginPath();
drawingPad.arc(100,250,50,0,2*Math.PI);
drawingPad.stroke();


drawingPad.beginPath();
drawingPad.moveTo(350,100);
drawingPad.lineTo(350,400);
drawingPad.stroke();
