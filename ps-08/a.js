var ctx = document.getElementById("walk").getContext('2d');

var beginX = 0;
var beginY = 0;
var hue = 0;

var nyan = new Image();   
nyan.src = 'nyan.png'; 

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};

//Clear the screen. 

var clearScreen = function() {
  ctx.fillStyle = "hsla(207, 98%, 24%,.25)";
  ctx.fillRect(0, 0, 500, 500);
};

//Build the walker.

var makePoint = function (x,y) {
    var size = 20;
    //Clear the last cat + rainbow
    ctx.fillStyle = makeColor(207, 98, 24,1);
    ctx.fillRect(beginX, beginY,size,size);
    //Draw rainbow
    ctx.fillStyle = makeColor(hue,100,50,.5);
    ctx.fillRect(beginX,beginY,size,size);
    //Fade rainbows
    clearScreen();
    //update position and hue
    beginX = beginX + 10;
    hue = hue + 25;

    if (beginX > 500) {
        beginX = 0;
        beginY = beginY + 20;
    };

    if (beginY>500) {
        beginY=0;
    };

    ctx.strokeStyle = '';

    ctx.fillStyle = makeColor(hue,100,50,.5);
    ctx.fillRect(beginX,beginY,size,size);

    ctx.stroke();

    ctx.drawImage(nyan,beginX,beginY);
 };


setInterval(makePoint,75);

