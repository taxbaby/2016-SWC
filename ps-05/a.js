var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

//I know this isn't 33 lines exactly
//but I like how it looks better with this many.
//When I took it down to 33 it was no where near as good. :)

for (var y = 100; y<=400; y+=15) {

drawingPad.beginPath();
drawingPad.moveTo(350, y);
drawingPad.lineTo(200,250);
drawingPad.stroke();

}

for (var y = 200; y<=300; y+=5) {

drawingPad.beginPath();
drawingPad.moveTo(150, y);
drawingPad.lineTo(200,250);
drawingPad.stroke();

}

drawingPad.beginPath();
drawingPad.arc(200,250,35,0,2*Math.PI);
drawingPad.stroke();

drawingPad.beginPath();
drawingPad.moveTo(350,100);
drawingPad.lineTo(350,400);
drawingPad.stroke();
