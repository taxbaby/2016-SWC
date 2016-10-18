var canvasB = document.getElementById('canvasB');
var drawingPad = canvasB.getContext('2d');

//I know this isn't 33 lines exactly
//but I like how it looks better with this many.
//When I took it down to 33 it was no where near as good. :)



for (var y = 25; y<=500; y+=25) {
  for (var x = 0; x<=500; x+=25) {

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
