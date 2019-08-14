// The svg
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

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

    // Load external data and boot
d3.json("https://martinjc.github.io/UK-GeoJSON/json/wal/topo_lad.json")
	.then(data => {

	    var features = topojson.feature(data, data.objects.lad).features;

	    // Draw the map
	    g.selectAll("path")
	    .data(features)
	    .enter()
	    .append("path")
	    	.attr("fill", "lightgrey")
	    	.attr("d", d3.geoPath()
	          .projection(projection))
	    	.attr("class", "county")

		.on("mouseover", function(d, i, n) {
			d3.select(n[i])
				.transition()
				.duration(100)
				.style("fill", "grey")

			div.transition()
				.duration(200)
				.style("opacity", 0.9)
				
			div.html("<h1>" + data.objects.lad.geometries[i].properties.LAD13NM + "</h1>")
				.style("left", "10px")
				.style("top", "10px")
				.attr("width", 60)

			// Create bar graph SVG
			const bar = div.append("svg")
							.attr("height", "200")
							.attr("width", "600")
							.attr("id", "bar-graph")

			// Bar graph
			const render = data => {
				bar.selectAll("rect")
					.data(data)
					.enter()
					.append("rect")
						.attr("width", (d, i) => {
							return d.population*0.1;
						})			
						.attr("height", 16)
						.attr("x", 200)
						.attr("y", (d, i) => {
							return 20 + (i * 17)
						})
						.style("fill", "#ff867d")

					}
			// Read data for graph from csv
			d3.csv('https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/test.csv')
				.then(data => {
					render(data);
				});

			
		})

		.on("mouseout", function(d, i, n) {
			d3.select(n[i])
				.transition()
				.duration(100)
				.style("fill", "lightgrey")
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

// ************************************************************************************************************************

// const svg = d3.select('svg');

// const height = +svg.attr("height");
// const width = +svg.attr("width");

// // tooltip
// var div = d3.select("body")
// 			.append("div")
// 				.attr("class", "tooltip")
// 				.style("opacity", 0)


// const render = data => {
// 	svg.selectAll("rect")
// 		.data(data)
// 		.enter()
// 		.append("rect")
// 			.attr("width", 24)			
// 			.attr("height", (d, i) => {
// 				return d.population*0.0001;
// 			})
// 			.attr("x", (d, i) => {
// 				return i * 25;
// 			})
// 			.attr("y", (d, i) => {
// 				return 500 - (d.population*0.0001)
// 			})

// 		.on("mouseover", function(d, i, n) {
// 			d3.select(n[i])
// 				.transition()
// 				.duration(100)
// 			div.transition()
// 				.duration(200)
// 				.style("opacity", 0.9)
// 			div.html("<p>" + d.population + "</p>")
// 				.style("left", (d3.event.pageX) + "px")
// 				.style("top", (d3.event.pageY) + "px")
// 		})

// 		.on("mouseout", function(d, i, n) {
// 			d3.select(n[i])
// 				.transition()
// 				.duration(100)
// 				.style("opacity", 1)
// 			div.transition()
// 				.duration(200)
// 				.style("opacity", 0)
// 		})
// };


// // https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/test.json

// d3.csv('https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/test.csv')
// 	.then(data => {
// 		console.log(data);
// 		render(data);
// 	});

// var tooltip = svg.append("g")
// 				.attr("class", tooltip)

