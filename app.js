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


// Finds max value for businesses in order to scale the graph
var maxBusiness = function(d) {
	var max = 0;
	for ( var i = 0; i < d.length; i++ ) {
		if ( d[i].Businesses > max ) { max = d[i].Businesses; }
	}
	return max;
}

// Functon to find the max number of sectors in any area, in order to scale the graph 
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

// Function that places colour legend for sector graph on tooltip
var colorLegend = function(x, y, fill, text) {
	barGraph2.append("rect")
				.attr("width", "10")
				.attr("height", "10")
				.attr("x", `${x+35}`)
				.attr("y", y)
				.attr("fill", fill);

	barGraph2.append("text")
				.attr("x", `${x+50}`)
				.attr("y", `${y+9}`)
				.text(text);
}

// bar graph variables

var bheight = 50;
var bpadding = 10;
var bx = 80;
var radius = 200;
var bar_height = 170;
var offset = 5;

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

					var xAxis2 = d3.axisBottom(d3.scaleLinear().range([34, 460])).ticks(0)
					var yAxis2 = d3.axisLeft(yScale).ticks(3)

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

					


					// Pie chart
					piechart = div.append("svg")
										.attr("id", "pie1")
										.attr("height", "340")
										.attr("width", "500")
									.append("g")
										.attr("transform", "translate(240, 140)")				
					
					console.log(welshCount[i])
					console.log(Object.values(welshCount[i]))

					var pie = d3.pie()
								.value(function(){ return welshCount[i].Welsh; })

					var data_ready = pie(d3.entries(welshCount[i]))

					piechart.selectAll("path")
							.data(data_ready)
							.enter()
							.append("path")
								.attr("d", d3.arc()
											.innerRadius(0)
											.outerRadius(100)
								)
								.attr("fill", "red")
								.attr("stroke", "black")
								.style("stroke-width", "1px")
								.style("opacity", "0.7")


					barGraph2 = div.append("svg")
										.attr("id", "bar2")
										.attr("height", "500")
										.attr("width", "500")
									.selectAll("rect")
									.data(locationCount)
									.enter();

					barGraph2.append("g")	
								.call(yAxis2)
								.attr("transform", "translate(34, 5)")

					barGraph2.append("g")
								.attr("transform", "translate(0, " + (offset + bar_height) + ")")
								.call(xAxis2)

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "40")
								.attr("y", offset + bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Engineering); })	
								.attr("width", "55")
								.attr("x", "40")
								.attr("y", function(d) { return offset + yScale(locationCount[i].Engineering); })
								.attr("fill", "#58b865")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "100")
								.attr("y", offset + bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Law); })
								.attr("width", "55")
								.attr("x", "100")
								.attr("y", function(d) { return offset + yScale(locationCount[i].Law); })								
								.attr("fill", "#941239")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "160")
								.attr("y", offset + bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Accounting); })
								.attr("width", "55")
								.attr("x", "160")
								.attr("y", function(d) { return offset + yScale(locationCount[i].Accounting); })
								.attr("fill", "#675abf")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "220")
								.attr("y", offset + bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Healthcare); })
								.attr("width", "55")
								.attr("x", "220")
								.attr("y", function(d) { return offset + yScale(locationCount[i].Healthcare); })
								.attr("fill", "#d1b430")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "280")
								.attr("y", offset + bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].IT); })
								.attr("width", "55")
								.attr("x", "280")
								.attr("y", function(d) { return offset + yScale(locationCount[i].IT); })
								.attr("fill", "#7cd6ca")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "340")
								.attr("y", offset + bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].Media); })
								.attr("width", "55")
								.attr("x", "340")
								.attr("y", function(d) { return offset + yScale(locationCount[i].Media); })
								.attr("fill", "#d2d67c")

					barGraph2.append("rect")
								.attr("width", "55")
								.attr("height", "0")
								.attr("x", "400")
								.attr("y", offset + bar_height)	
								.transition()
								.duration(500)
								.attr("height", function() { return bar_height - yScale(locationCount[i].PublicServices); })
								.attr("width", "55")
								.attr("x", "400")
								.attr("y", function(d) { return offset + yScale(locationCount[i].PublicServices); })
								.attr("fill", "#ab7ccc")

					colorLegend(10, 220, "#58b865", "Engineering")
					colorLegend(120, 220, "#941239", "Law")
					colorLegend(230, 220, "#675abf", "Accounting")
					colorLegend(340, 220, "#d1b430", "Healthcare")
					colorLegend(55, 255, "#7cd6ca", "IT")
					colorLegend(165, 255, "#d2d67c", "Media")
					colorLegend(275, 255, "#ab7ccc", "Public Services")

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

var tooltip = svg.append("g")
				.attr("class", tooltip)