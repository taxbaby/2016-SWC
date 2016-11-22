var percentBlack = [
  {year: 2000, percent: 55},
  {year: 2010, percent: 45}
];
var height = 500;
var width = 500;
var margin = {left: 60, bottom: 60, right: 60, top: 60};

var yearScale     = d3.scaleLinear().domain([2015,1995]).range([height - margin.bottom, margin.top]);
var percentScale  = d3.scaleLinear().domain([100,0]).range([margin.left, width - margin.right]);


function percentToY (data) {
 return percentScale(data.percent);
};

function yearToX (data) {
  return yearScale(data.year);
};

var svg = d3.select('svg');
var axisBottom =d3.axisBottom(yearScale);
var axisLeft =d3.axisLeft(percentScale);

svg.selectAll('circle')
  .data(percentBlack)
  .enter()
  .append("circle")
  .attr('class', 'weight')
  .attr("cx", yearToX)
  .attr("cy", percentToY)
  .attr("fill", "hsl(0,40%,60%)")
  .attr("r", '5');

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
