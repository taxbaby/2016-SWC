//Census data
//Used for exploratory purposes only. More reporting and understanding of Jennings' methodology is required to verify figures.
var json = {
   '1990': {
    'year': 1990,
    'population': {
      'total': 15107,
      'race': {
        'black': 12187,
        'white': 1210,
        'hispanic': 2901,
        'asian': 73,
        'nativeamerican': 85,
        'nativePacific': 0,
        'other': 1552,
      }
    }
  },
  '2000': {
    'population': {
      'total': 21284,
      'race': {
        'black': 11597,
        'white': 5468,
        'hispanic': 4336,
        'asian': 503,
        'nativeamerican': 204,
        'nativePacific': 0,
        'other': 2251,
      }
    }
  },
  '2010': {
    'population': {
      'total': 22287,
      'race': {
        'black': 10095,
        'white': 7411,
        'hispanic': 5386,
        'asian': 1140,
        'nativeamerican': 152,
        'nativePacific': 6,
        'other': 2388
      }
    }
  }
};

var tracker = 0;

function processData() {
  if (tracker == 0 ) {
    var obj = json['1990'].population.race;
  } else if (tracker == 1) {
    var obj = json['2000'].population.race;
  } else {
    var obj = json['2010'].population.race;
  }
  var newDataSet = [];
  for(var prop in obj) {
    newDataSet.push({name: prop, className: prop.toLowerCase(), size: obj[prop]});
  };
  return {children: newDataSet};
}

var year = document.getElementById("theYear");

function newData() {
  if (tracker == 0) {
    tracker = 1;
    year.innerHTML = 2000;
  } else if (tracker == 1) {
    tracker = 2 
    year.innerHTML = 2010;;
  } else {
    tracker = 0;
    year.innerHTML = 1990;;
  }
  newStuff = processData();
  drawBubbles(newStuff);
}

theInterval = setInterval(newData,2500);

function clickPause() {
  clearInterval(theInterval);
};

function clickResume () {
  theInterval = setInterval(newData,2500);
};

var diameter = 600;
var duration = 600;
var delay = 2;

var svg = d3.select('#graph').append('svg')
				.attr('width', diameter)
				.attr('height', diameter);

var bubble = d3.layout.pack()
			.size([diameter, diameter])
			.value(function(d) {return d.size;})
			.padding(3);

var newStuff = processData();

function drawBubbles(someData) {

  var nodes = bubble.nodes(someData)
      .filter(function(d) { return !d.children; }); // filter out the outer bubble
 
  var vis = svg.selectAll('circle')
      .data(nodes, function(d) { return d.name; });

  vis.transition()
      .duration(duration * 1.2)
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      .attr('r', function(d) { return d.r; }) 
      .transition()
      .duration(duration * 1.2)
      .style('opacity', 1);

  vis.enter().append('circle')
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      .attr('r', function(d) { return d.r; })
      .attr('class', function(d) { return "circle " + d.className; })
      .transition()
      .duration(duration * 1.2)
      .style('opacity', 1);

    vis.exit().remove();

}

drawBubbles(newStuff);



//https://www.pubnub.com/blog/2014-10-08-fun-with-d3js-data-visualization-eye-candy-with-streaming-json/
//http://bl.ocks.org/mmattozzi/7018021