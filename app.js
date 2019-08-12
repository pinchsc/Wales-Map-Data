// The svg
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Group element
const g = svg.append("g")

// Map and projection
var projection = d3.geoMercator()
    .center([-1.8, 52.34])                // GPS of location to zoom on
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
	    .style("stroke", "black")
	    .append("title")
	    	.text((d, i) => data.objects.lad.geometries[i].properties.LAD13NM);

	});


// Add the option to zoom in on the map 
svg.call(d3.zoom().on("zoom", () => {
		g.attr("transform", d3.event.transform);
}));