var height = 500;
var width = 500;
var margin = {left: 60, bottom: 60, right: 60, top: 60};

//Scales, etc, for the axes.

var yearScale     = d3.scaleLinear().domain([2015,1995]).range([height - margin.bottom, margin.top]);
var percentScale  = d3.scaleLinear().domain([100,0]).range([margin.left, width - margin.right]);

var svg = d3.select('svg');
var axisBottom =d3.axisBottom(yearScale);
var axisLeft =d3.axisLeft(percentScale);

//Plot data for black residents.

var percentBlack = [
  {year: 2000, percent: 55},
  {year: 2010, percent: 45}
];

function percentToY (data) {
 return percentScale(data.percent);
};

function yearToX (data) {
  return yearScale(data.year);
};


svg.selectAll('circle')
  .data(percentBlack)
  .enter()
  .append("circle")
  .attr('class', 'weight')
  .attr("cx", yearToX)
  .attr("cy", percentToY)
  .attr("fill", "hsl(0,40%,60%)")
  .attr("r", '5');

//Plot data for white residents.

var percentWhite = [
  {year: 2000, percent: 26},
  {year: 2010, percent: 33}
];

function percentToY (data) {
 return percentScale(data.percent);
};

function yearToX (data) {
  return yearScale(data.year);
};

svg.selectAll('ellipse')
  .data(percentWhite)
  .enter()
  .append("ellipse")
  .attr('class', 'weight')
  .attr("cx", yearToX)
  .attr("cy", percentToY)
  .attr("fill", "hsl(50,40%,60%)")
  .attr("rx", '5')
  .attr("ry",'5')
  console.log("butt");



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
