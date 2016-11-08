var ctx = document.getElementById("walk").getContext('2d');

var Walker = function (){
	this.x = 250;
	this.y = 250;
};

Walker.prototype.display = function (){
	stroke(0,0,0);
	point(this.x,this.y);
}

