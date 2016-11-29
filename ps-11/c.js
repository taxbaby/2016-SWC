var timeData = [ 
  { value: 0, name: "hour"},
  { value: 0, name: "minute"},
  { value: 0, name: "seconds"}
  ]  

var makeColor = function(hue, sat, light) {
  return "hsl(" + hue + "," + sat + "%," + light + "%)";
};

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

var hourScale = d3.scaleLinear()
  .range([0,360])
  .domain([0,23]);

var minuteScale = secondScale = d3.scaleLinear()
  .range([0,100])
  .domain([0,59]);

var div = d3.select('div');
var colorClock = div.append('svg').attr('width',300).attr('height',300);



