var ctx = document.getElementById("walk").getContext('2d');

var beginX = 0;
var beginY = 250;
var hue = 0;
var height = 500;
var width = 500;
var nyan = new Image();   
nyan.src = 'nyan.png'; 
var points = [];
var numPoints = 50;

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};

//Clear the screen. 

var clearScreen = function() {
  ctx.fillStyle = "hsla(207, 98%, 24%,.25)";
  ctx.fillRect(0, 0, width, height);
};

//Build the walker.

var makePoint = function (x,y) {
    var size = 25;
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
    hue = hue + 15;

    if (beginX > width) {
        beginX = 0;
        beginY = beginY + 20;
    };

    if (beginY>height) {
        beginY=0;
    };

    ctx.strokeStyle = '';

    ctx.fillStyle = makeColor(hue,100,50,.5);
    ctx.fillRect(beginX,beginY,size,size);

    ctx.stroke();

    ctx.drawImage(nyan,beginX,beginY);
   
};

//Stars

var wrap = function(point) {
  if (point.x > width) {
    point.x = 0;
    point.y = point.y + 11;
  }
  if (point.y > height) {
    point.y = 0;
  }
  if (point.y < 0) {
    point.y = height;
  }

};

var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.70) { // move up 
    p.y = p.y - speed;
  } else if (direction < 0.80) {
    p.x = p.x - speed;
  } else if (direction < 0.90) {
    p.y = p.y + speed;
  } else {
    p.x = p.x + speed;
  }
}

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};

var drawStars = function() {

  ctx.strokeStyle = '';

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var hue = point.y / 5 + 180;
    move(point);
    wrap(point);
    ctx.fillStyle = makeColor(hue, 0, 80, .5);
    ctx.arc(point.x,point.y,point.size,0,2*Math.PI);
  
  }
  requestAnimationFrame(drawStars);
};

var makeStars = function() {
  for (var i = 0; i < numPoints; i++) {
    var size = Math.random() * 3;
    var x = Math.random() * width;
    var speed = 10 - size;
    points.push({
      x: x,
      y: Math.random() * 500,
      size: size,
      speed: speed/2
    });
  }
};

makeStars();
requestAnimationFrame(drawStars);
setInterval(makePoint,75);

