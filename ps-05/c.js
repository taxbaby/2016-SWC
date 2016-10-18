var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

//I know this isn't 33 lines exactly
//but I like how it looks better with this many.
//When I took it down to 33 it was no where near as good. :)



for (var y = 50; y<=100; y+=15) {
  for (var x = 25; x<=100; x+=15) {

drawingPad.rotate(Math.random()*40*Math.PI/180);
drawingPad.beginPath();
drawingPad.moveTo(x, y);
drawingPad.lineTo(x,y+60);
drawingPad.moveTo(x,y);
drawingPad.lineTo(x+30,y);
drawingPad.moveTo(x,y+30);
drawingPad.lineTo(x+20,y+30);
drawingPad.moveTo(x,y+60);
drawingPad.lineTo(x+30,y+60);
drawingPad.lineWidth = 4;
drawingPad.stroke();
}
}
