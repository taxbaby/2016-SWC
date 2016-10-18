var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

//I know this isn't 33 lines exactly
//but I like how it looks better with this many.
//When I took it down to 33 it was no where near as good. :)



for (var y = 40; y<=400; y++) {

drawingPad.rotate(Math.random()*100*Math.PI/180);
drawingPad.beginPath();
drawingPad.moveTo(15, y);
drawingPad.lineTo(15,y+60);
drawingPad.moveTo(15,y);
drawingPad.lineTo(45,y);
drawingPad.moveTo(15,y+30);
drawingPad.lineTo(35,y+30);
drawingPad.moveTo(15,y+60);
drawingPad.lineTo(45,y+60);
drawingPad.lineWidth = 4;
drawingPad.stroke();

}
