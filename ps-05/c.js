var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

//I know this isn't 33 lines exactly
//but I like how it looks better with this many.
//When I took it down to 33 it was no where near as good. :)

for (var y = 100; y<=400; y+=15) {

drawingPad.beginPath();
drawingPad.moveTo(15, 40);
drawingPad.lineTo(15,100);
drawingPad.moveTo(15,40);
drawingPad.lineTo(45,40);
drawingPad.moveTo(15,70);
drawingPad.lineTo(35,70);
drawingPad.moveTo(15,100);
drawingPad.lineTo(45,100)
drawingPad.lineWidth = 5;
drawingPad.stroke();

}
