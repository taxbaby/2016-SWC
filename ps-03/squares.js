var canvas = document.getElementById('canvas');
    var drawingPad = canvas.getContext('2d');
    drawingPad.fillStyle = "hsla(0,10%,10%,1)";
    drawingPad.fillRect(0, 0, 200, 200);
    drawingPad.fillRect(300, 300, 200, 200);
    drawingPad.fillRect(200, 200, 100, 100);
    drawingPad.fillRect(300, 150, 50, 50);
    drawingPad.fillRect(150, 300, 50, 50);