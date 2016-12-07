(function() {

  //Census data
var json = {
  '2000': {
    'population': {
      'total': 21284,
      'race': {
        'black': 11597,
        'white': 5468,
        'latinx': 4336,
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
        'latinx': 5386,
        'asian': 1140,
        'nativeamerican': 152,
        'nativepacific': 6,
        'other': 2388
      }
    }
  }
};
	// D3 Bubble Chart 

	var diameter = 600;
  var tracker = 0;

	var svg = d3.select('#graph').append('svg')
					.attr('width', diameter)
					.attr('height', diameter);

	var bubble = d3.layout.pack()
				.size([diameter, diameter])
				.value(function(d) {return d.size;})
         // .sort(function(a, b) {
				// 	return -(a.value - b.value)
				// }) 
				.padding(3);

 // function drawBubbles(m) {
   // var nodes = bubble
//  }
  
  var newStuff = processData(json);
  // generate data with calculated layout values
  var nodes = bubble.nodes(newStuff)
						.filter(function(d) { return !d.children; }); // filter out the outer bubble
 
  var vis = svg.selectAll('circle')
					.data(nodes);
  
  var label = svg.selectAll('text')
          .data(nodes);
  
  vis.enter().append('circle')
			.on('click',function (d) { 
        tracker = 1;
        processData();
        //bubble.nodes(newStuff);
      })
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
			.attr('r', function(d) { return d.r; })
			.attr('class', function(d) { return "circle " + d.className; });
    

  vis.enter().append('text')
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      .text( function (d) { return d.className })
      .attr("font-family", "sans-serif")
      .attr("font-size", "14px");



 function processData() {
      if (tracker == 0 ) {
       var obj = json['2000'].population.race;
  }
      else {
        var obj = json['2010'].population.race;
        newStuff = obj;
  }
    var newDataSet = [];

   for(var prop in obj) {
      newDataSet.push({name: prop, className: prop.toLowerCase(), size: obj[prop]});
      console.log("obj." + prop + " = " + obj[prop]);
    };

    return {children: newDataSet};
  } 

 
})();

//https://www.pubnub.com/blog/2014-10-08-fun-with-d3js-data-visualization-eye-candy-with-streaming-json/
//http://bl.ocks.org/mmattozzi/7018021