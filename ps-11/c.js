var height = 300;
var width = 300;
var timeData = [ 
  { value: 0, name: "hour"},
  { value: 0, name: "minute"},
  { value: 0, name: "seconds"}
  ]

var yHourScale = d3.scaleLinear()
  .domain([1,24])
  .range([height,0]);

var yScale = d3.scaleLinear()
  .domain([1,60])
  .range([height,0]);

function updateTimeData() {
  var d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  timeData[0].value = hour;
  timeData[1].value = minute;
  timeData[2].value = second;
  updateSVG(timeData)
};

setInterval(updateTimeData,1000);

var div = d3.select('div');
var firstClock = div.append('svg').attr('width',300).attr('height',300);
var secondClock = div.append('svg').attr('width',300).attr('height',300);
var thirdClock = div.append('svg').attr('width',300).attr('height',300);

var circles = firstClock.selectAll('circle')
  .data(timeData)
  .enter()
  .append('circle')
  .attr('r', 5)
  .style('fill', 'black');

/* var rectangles = secondClock.selectAll('rect')
  .data(timeData)
  .enter()
  .append('rect')
  .attr('width', 5)
  .style('fill', 'black'); */


var hue = function(datum, i) {return hour / 360}
    var sat = function(datum, i) {return  datum / 60}
    var light = function(datum, i) {return datum / 60}
    var makeColor = function(hue, sat, light) {
      return "hsl(" + hue + "," + sat + "%," + light + "%)";

var colorWheel = thirdClock.selectAll('rect')
  .data(timeData)
  .enter()
  .append('rect')
  .attr('width', 300).attr('height', 300)


function updateSVG(newData) {
  circles
    .attr('cx', function(datum, i) { return i * 100 + 50; })
    .attr('cy', function(datum, i) { 
      var scale = yScale;
      if(datum.name == "hour"){
        scale = yHourScale;
      }
      return scale(datum.value);  
  });
 colorWheel
    .attr('fill',makeColor(hue,sat,light));
};

