

addEventListener("click",function(event) {
	var dot = document.createElement("div");
	dot.className="dot";
	dot.style.left = (event.pageX - 40) + "px";
    dot.style.top = (event.pageY - 40) + "px";
    document.body.appendChild(dot);
});

