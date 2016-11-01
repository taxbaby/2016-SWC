
function intro () {
	alert("Use the 1, 2, and 3 keys to draw shapes in the window. Hold a number and then click to draw.");
}

var drawDot = function(event) {
	var dot = document.createElement("div");
	dot.className="dot";
	dot.style.left = (event.pageX - 40) + "px";
	dot.style.top = (event.pageY - 40) + "px";
	document.body.appendChild(dot);
}

var drawSquare = function(event) {
	var square = document.createElement("div");
	square.className="square";
	square.style.left = (event.pageX - 40) + "px";
    square.style.top = (event.pageY - 40) + "px";
	document.body.appendChild(square);
}

var drawTriangle = function(event) {
	var triangle = document.createElement("div");
	triangle.className="triangle";
	triangle.style.left = (event.pageX - 40) + "px";
    triangle.style.top = (event.pageY - 40) + "px";
    document.body.appendChild(triangle);
}


// DOT
addEventListener("keydown",function(event) {
	if(event.keyCode == 49)
	document.addEventListener("click",drawDot);
});
addEventListener("keyup",function(event){
	if(event.keyCode == 49)
	document.removeEventListener("click",drawDot);
});
// SQUARE
addEventListener("keydown",function(event) {
	if(event.keyCode == 50)
	document.addEventListener("click",drawSquare);
});
addEventListener("keyup",function(event){
	if(event.keyCode == 50)
	document.removeEventListener("click",drawSquare);
});
// TRIANGLE
addEventListener("keydown",function(event) {
	if(event.keyCode == 51)
	document.addEventListener("click",drawTriangle);
});
addEventListener("keyup",function(event){
	if(event.keyCode == 51)
	document.removeEventListener("click",drawTriangle);
});
