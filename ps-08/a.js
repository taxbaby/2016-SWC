var ctx = document.getElementById("walk").getContext('2d');

var beginX = 0;
var beginY = 0;
var hue = 0;
var nyanX = 0;
var nyanY = 0;

var nyan = new Image();   
nyan.src = 'nyan.png'; 

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};

//Clear the screen. 

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,100%,.04)";
  ctx.fillRect(0, 0, 500, 500);
};

//Draw a square on the canvas.

var makePoint = function (x,y) {
    clearScreen();

    ctx.strokeStyle = '';

    var size = 20;
    ctx.fillStyle = makeColor(hue,100,50,.5);
    ctx.fillRect(beginX,beginY,size,size);
    beginX = beginX + 10;
    hue = hue + 25;

    if (beginX > 500) {
        beginX = 0;
        nyanX = 0;
        beginY = beginY + 10;
        nyanY = nyanY + 10;
    };

    if (beginY>500) {
        beginY=0;
        nyanY = 0;
    };
    ctx.stroke();

    ctx.drawImage(nyan,beginX,beginY);
 };


setInterval(makePoint,100);

