var height = 500;
var width = 500;
var margin = {left: 60, bottom: 60, right: 60, top: 60};


//Scale.
var yearScale     = d3.scaleLinear().domain([2015,1995,]).range([height - margin.bottom, margin.top]);
var percentScale  = d3.scaleLinear().domain([100,0]).range([margin.left, width - margin.right]);

var svg = d3.select('svg');
var axisBottom =d3.axisBottom(yearScale).tickFormat(d3.format("d"));
var axisLeft =d3.axisLeft(percentScale);

function yearToX1 (data) {
 return yearScale(data.year1);
};

function yearToX2 (data) {
 return yearScale(data.year2);
};

function percentToY1 (data) {
	return percentScale(data.percent1)
};

function percentToY2 (data) {
	return percentScale(data.percent2)
};


//Here is the data for the lines.
//x axis is years
//y axis is percent
var jsonData = [
	//Percent of Roxbury's population that is black
	{
		"year1": 2000,
		"percent1": 55,
		"year2": 2010,
		"percent2": 45,
		"stroke": "hsl(0,40%,60%)"
	},
	//Percent of Roxbury's population that is white
	{
		"year1": 2000,
		"percent1": 26,
		"year2": 2010,
		"percent2": 33,
		"stroke": "hsl(250,40%,60%)"
	},
	//Percent of households in Greater Boston area who are rent burdened
	{
		"year1": 2000,
		"percent1": 36,
		"year2": 2010,
		"percent2": 50,
		"stroke": "hsl(300,40%,60%)",
		"dasharray": "3,3"
	}
]

//Here is where you draw the lines.
var lines = svg.selectAll("lines")
	.data(jsonData)
	.enter()
	.append("line");

var lineAttributes = lines
	.attr("x1", yearToX1)
    .attr("y1", percentToY1)
	.attr("x2", yearToX2)
	.attr("y2", percentToY2)
	.attr("stroke-width", 2)
	.attr("stroke", function (d) { return d.stroke; })
	.style("stroke-dasharray", (function (d) {return d.dasharray;}) )

//Here is where you draw the key.
var keyRect = svg.append("rect")
	.attr("x",300)
	.attr("y",25)
	.attr("width", 185)
	.attr("height",85)
	.style("fill", "white");

var keyBlack = svg.append("line")
	.attr("x1", 310)
    .attr("y1", 55)
	.attr("x2", 340)
	.attr("y2", 55)
	.attr("stroke","hsl(0,40%,60%)")
	.attr("stroke-width", 4);

var keyWhite = svg.append("line")
	.attr("x1", 310)
    .attr("y1", 75)
	.attr("x2", 340)
	.attr("y2", 75)
	.attr("stroke","hsl(250,40%,60%)")
	.attr("stroke-width", 4);

var keyBurden = svg.append("line")
	.attr("x1", 310)
    .attr("y1", 95)
	.attr("x2", 340)
	.attr("y2", 95)
	.attr("stroke","hsl(300,40%,60%)")
	.attr("stroke-width", 4)
	.style("stroke-dasharray", ("3,3"));

var keyTitle = svg.append("text")
	.attr("x",380)
	.attr("y",40)
	.text("Key")
	.attr("font-family","Lato")
	.attr("font-size","14px")
	.attr("fill","black");

var keyTextBlack = svg.append("text")
	.attr("x",345)
	.attr("y",59)
	.text("% population black")
	.attr("font-family","Lato")
	.attr("font-size","12px")
	.attr("fill","black");

var keyTextWhite = svg.append("text")
	.attr("x",345)
	.attr("y",79)
	.text("% population white")
	.attr("font-family","Lato")
	.attr("font-size","12px")
	.attr("fill","black");

var keyTextBurden = svg.append("text")
	.attr("x",345)
	.attr("y",99)
	.text("% rent burdened in GBA")
	.attr("font-family","Lato")
	.attr("font-size","12px")
	.attr("fill","black");


//The axes!
svg.append('g')
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(axisBottom);

svg.append('g')
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(axisLeft);

// text label for the y axis
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", margin.left/3)
  .attr("x", 0 - (height / 2))
  .style("text-anchor", "middle")
  .text("percent");

// text label for the x axis
svg.append("text")
  .attr("y", height - margin.bottom/3)
  .attr("x", width / 2)
  .style("text-anchor", "middle")
  .text("year");
