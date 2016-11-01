

addEventListener("click",function(event) {
	var dot = document.createElement("div");
	dot.className="dot";
	dot.style.left = (event.pageX - 40) + "px";
    dot.style.top = (event.pageY - 40) + "px";
    document.body.appendChild(dot);
});

addEventListener("click",function(event) {
	var square = document.createElement("div");
	square.className="square";
	square.style.left = (event.pageX - 40) + "px";
    square.style.top = (event.pageY - 40) + "px";
    document.body.appendChild(square);
});

addEventListener("click",function(event) {
	var triangle = document.createElement("div");
	triangle.className="triangle";
	triangle.style.left = (event.pageX - 40) + "px";
    triangle.style.top = (event.pageY - 40) + "px";
    document.body.appendChild(triangle);
});