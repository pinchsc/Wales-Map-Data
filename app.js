// The svg
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// colour
var business_domain = [0, 2, 5];
var business_colour = d3.scaleLinear()
						.domain(business_domain)
						.range(d3.schemeGreens[3]);

// Group element
const g = svg.append("g")


// tooltip
var div = d3.select("body")
			.append("div")
				.attr("class", "tooltip")
				.style("opacity", 0)

// Map and projection
var projection = d3.geoMercator()
    .center([-1.9, 52.34])                // GPS of location to zoom on
    .scale(15000)                       // This is like the zoom
    .translate([ width, height/2 ])


// Finds max value for businesses for the scale
var maxBusiness = function(d) {
	var max = 0;
	for ( var i = 0; i < d.length; i++ ) {
		if ( d[i].Businesses > max ) { max = d[i].Businesses; }
	}
	return max;
}

var maxSector = function(d) {

	var max = 0;
	for ( var i = 0; i < d.length; i++ ) {
		if ( d[i].Engineering > max ) { max = d[i].Engineering; }
		if ( d[i].Law > max ) { max = d[i].Law; }
		if ( d[i].Accounting > max ) { max = d[i].Accounting; }
		if ( d[i].Healthcare > max ) { max = d[i].Healthcare; }
		if ( d[i].IT > max ) { max = d[i].IT; }
		if ( d[i].Media > max ) { max = d[i].Media; }
		if ( d[i].PublicServices > max ) { max = d[i].PublicServices; }
	}
	return max;
}

// bar graph variables

var bheight = 50;
var bpadding = 10;
var bx = 80;
var radius = 200;

var bar_height = 100;

// Load external data and boot
d3.json("https://martinjc.github.io/UK-GeoJSON/json/wal/topo_lad.json")
	.then(data => {

	    var features = topojson.feature(data, data.objects.lad).features;

	    d3.csv('https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/test.csv')
			.then(data => {					

			});

		d3.csv('https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/school.csv')
			.then(data => {			

			});

	    // Draw the map
	    g.selectAll("path")
	    .data(features)
	    .enter()
	    .append("path")
	    	.attr("fill", function(d, i, n) {

	    		return business_colour(locationCount[i].Businesses)

	    	})
	    	.attr("d", d3.geoPath()
	          .projection(projection))
	    	.attr("class", "county")

		.on("mouseover", function(d, i, n) {

			div.transition()
				.duration(400)
				.style("opacity", 0.9)
				
			div.html("<h1>" + data.objects.lad.geometries[i].properties.LAD13NM + "</h1>")
				.style("left", "10px")
				.style("top", "10px")
				.attr("width", 60);

			for ( var x = 0; x < locationCount.length; x++ ) {

				if ( locationCount[x].County == data.objects.lad.geometries[i].properties.LAD13NM ) {

					var xScale = d3.scaleLinear()
										.domain([0, maxBusiness(locationCount)])
										.range([0, 340]);

					var yScale = d3.scaleLinear()
										.domain([0, maxSector(locationCount)])
										.range([bar_height, 0]);

					var xAxis1 = d3.axisBottom(xScale).ticks(5)
					var yAxis1 = d3.axisLeft(d3.scaleLinear().range([8, 115])).ticks(0)

					var yAxis = d3.axisLeft(yScale)

					var barGraph1 = div.append("svg")
											.attr("id", "bar1")
											.attr("height", "200")
											.attr("width", "500")
										.selectAll("rect")
										.data(locationCount)
										.enter();

					// Creating bar graph of amount of businesses and schools per area

					// Businesses bar
					barGraph1.append("rect")
								.attr("class", "business")
								.attr("width", 0)
								.attr("height", bheight)
								.attr("x", bx)
								.attr("y", 25)	
								.transition()
								.duration(500)
								.attr("width", function() { return xScale(locationCount[i].Businesses) })	
								.attr("height", bheight)
								.attr("x", bx)
								.attr("y", 25)
								.style("fill", "#5087e6");
							
					barGraph1.append("text")
								.attr("x", 0)
								.attr("y", 55)
								.style("fill", "black")
								.style("font-size", "1.2em")
								.text("Businesses");

					// Schools bar
					barGraph1.append("rect")
								.attr("class", "schools")
								.attr("width", 0)
								.attr("height", bheight)
								.attr("x", bx)
								.attr("y", 78)
								.transition()
								.duration(500)
								.attr("width", function() { return xScale(locationCount[i].Schools) })	
								.attr("height", bheight)
								.attr("x", bx)
								.attr("y", 78)
								.style("fill", "#d43139");

					barGraph1.append("text")
								.attr("x", 22)
								.attr("y", 110)
								.style("fill", "black")
								.style("font-size", "1.2em")
								.text("Schools");

					barGraph1.append("g")
								.attr("transform", "translate(" + bx + ", 130)")
								.call(xAxis1)

					barGraph1.append("g")
								.attr("transform", "translate(" + bx + ", 15)")
								.call(yAxis1)

					// div.append("p")
					// 	.text(locationCount[x].Welsh)

					console.log(`${locationCount[i].Engineering}, ${locationCount[i].Law}, ${locationCount[i].Accounting}, ${locationCount[i].Healthcare}, ${locationCount[i].IT}, ${locationCount[i].Media}, ${locationCount[i].PublicServices}`)

					piechart = div.append("svg")
										.attr("id", "pie1")
										.attr("height", "200")
										.attr("width", "500")

					barGraph2 = div.append("svg")
										.attr("id", "bar2")
										.attr("height", "500")
										.attr("width", "500")
									.selectAll("rect")
									.data(locationCount)
									.enter();

					barGraph2.append("g")
								.attr("class", "y-axis")
								.call(yAxis)
								.attr("x", "100")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "40")
								.attr("y", bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Engineering); })	
								.attr("width", "55")
								.attr("x", "40")
								.attr("y", function(d) { return yScale(locationCount[i].Engineering); })
								.attr("fill", "#58b865")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "100")
								.attr("y", bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Law); })
								.attr("width", "55")
								.attr("x", "100")
								.attr("y", function(d) { return yScale(locationCount[i].Law); })
								
								.attr("fill", "#941239")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "160")
								.attr("y", bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Accounting); })
								.attr("width", "55")
								.attr("x", "160")
								.attr("y", function(d) { return yScale(locationCount[i].Accounting); })
								.attr("fill", "#675abf")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "220")
								.attr("y", bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Healthcare); })
								.attr("width", "55")
								.attr("x", "220")
								.attr("y", function(d) { return yScale(locationCount[i].Healthcare); })
								.attr("fill", "#d1b430")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "280")
								.attr("y", bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].IT); })
								.attr("width", "55")
								.attr("x", "280")
								.attr("y", function(d) { return yScale(locationCount[i].IT); })
								.attr("fill", "#7cd6ca")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "340")
								.attr("y", bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Media); })
								.attr("width", "55")
								.attr("x", "340")
								.attr("y", function(d) { return yScale(locationCount[i].Media); })
								.attr("fill", "#d2d67c")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "400")
								.attr("y", bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].PublicServices); })
								.attr("width", "55")
								.attr("x", "400")
								.attr("y", function(d) { return yScale(locationCount[i].PublicServices); })
								.attr("fill", "#ab7ccc")


					// Pie chart
					
					// var pie = d3.pie()
					// 		.value(function(d) {

					// 			return d.Welsh;

					// 		});

					// var data_ready = pie(d3.entries(locationCount[x]))

					// var piechart = div.append("svg")
					// 						.attr("id", "bar1")
					// 						.attr("height", "350")
					// 						.attr("width", "500")
					// 					.data(data_ready)
					// 					.enter()
										
					// piechart.append("path")
					// 			.attr("d", d3.arc()
					// 				.innerRadius(0)
					// 				.outerRadius(radius)
					// 			)
					// 			.attr("fill", "red")
					// 			.attr("stroke", "black")
					// 			.style("stroke-width", "2px")

					// var piechart = div.append("svg")
					// 					.data([data1])
					// 						.attr("height", h)
					// 						.attr("width", w)
					// 					.append("svg:g")
					// 						.attr("transform", "translate(" + r + "," + r + ")")

					// var arc = d3.arc()
					// 			.outerRadius(r);

					// var pie = d3.pie()
					// 			.value(function(d) { return d.value; });

					// var arcs = piechart.selectAll("g.slice")
					// 				.data(pie)
					// 				.enter()
					// 					.append("svg:g")
					// 						.attr("class", "slice")

					// arcs.append("svg:path")
					// 	.attr("fill", "red")
					// 	.attr("d", "arc");

					// piechart.append("circle")
					// 			.attr("cx", "100")
					// 			.attr("cy", "100")
					// 			.attr("r", "20")

				}

			}
			
		})

		.on("mouseout", function(d, i, n) {
			d3.select(n[i])
				.transition()
				.duration(100)

			div.transition()
				.duration(200)
				.style("opacity", 0)
		})

	    	.style("stroke", "black")

	    
	});

// Add the option to zoom in on the map 
// svg.call(d3.zoom().on("zoom", () => {
// 		g.attr("transform", d3.event.transform);
// }));

var tooltip = svg.append("g")
				.attr("class", tooltip)


// var width = 600, height = 500;

// var svg = d3.select("body")
// 			.append("svg")
// 				.attr("width", width)
// 				.attr("height", height)
// 			.style("background", "pink");

// // var details = [ { "grade": "A+", "Number": 8}, {"grade": "A", "Number": 21}, {"grade": "B", "Number": 15}, {"grade": "C", "Number": 29}, {"grade": "D", "Number": 11}, {"grade": "F", "Number": 6} ];
// var details = [ { "grade": "A+", "Number": 8, "NotNumber": 9} ];


// var data = d3.pie()
// 			.sort(null)
// 			.value( function(d) {

// 				for ( var i = 0; i < d.length; i++ ) {

// 				newArray = [d[i].Number, d[i].NotNumber];
// 				console.log(newArray);
// 				return newArray;


// 				}

// 				// return d.Number;

// 			})
// 			(details);
// 			console.log(data);

// var segments = d3.arc()
// 				.innerRadius(0)
// 				.outerRadius(200)
// 				.padAngle(.05)
// 				.padRadius(50);

// var sections = svg.append("g")
// 					.attr("transform", "translate(250, 250)")
// 				.selectAll("path")
// 				.data(data);

// sections.enter()
// 		.append("path")
// 			.attr("d", segments)