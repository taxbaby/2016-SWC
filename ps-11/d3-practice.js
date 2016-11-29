var height = 500;
var width = 500;
var margin = {left: 60, bottom: 60, right: 60, top: 60};


//Scale.
var yearScale     = d3.scaleLinear().domain([2012,1998]).range([height - margin.bottom, margin.top]);
var percentScale  = d3.scaleLinear().domain([75,0]).range([margin.left, width - margin.right]);

var svg = d3.select('svg');
var axisBottom =d3.axisBottom(yearScale);
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
