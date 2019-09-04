// The svg
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// colour
var business_domain = [0, 1, 2, 3, 4, 5];
var business_colour = d3.scaleThreshold()
						.domain(business_domain)
						.range(d3.schemeGreens[6]);

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

var countyObject = [
	{
		"County": "Isle of Anglesey",
		"Count": 0
	},
	{
		"County": "Gwynedd",
		"Count": 0
	},
	{
		"County": "Conwy",
		"Count": 0
	},
	{
		"County": "Denbighshire",
		"Count": 0
	},
	{
		"County": "Flintshire",
		"Count": 0
	},
	{
		"County": "Wrexham",
		"Count": 0
	},
	{
		"County": "Ceredigion",
		"Count": 0
	},
	{
		"County": "Pembrokeshire",
		"Count": 0
	},
	{
		"County": "Carmarthenshire",
		"Count": 0
	},
	{
		"County": "Swansea",
		"Count": 0
	},
	{
		"County": "Neath Port Talbot",
		"Count": 0
	},
	{
		"County": "Bridgend",
		"Count": 0
	},
	{
		"County": "Vale of Glamorgan",
		"Count": 0
	},
	{
		"County": "Cardiff",
		"Count": 0
	},
	{
		"County": "Rhondda Cynon Taf",
		"Count": 0
	},
	{
		"County": "Caerphilly",
		"Count": 0
	},
	{
		"County": "Blaenau Gwent",
		"Count": 0
	},
	{
		"County": "Torfaen",
		"Count": 0
	},
	{
		"County": "Monmouthshire",
		"Count": 0
	},
	{
		"County": "Newport",
		"Count": 0
	},
	{
		"County": "Powys",
		"Count": 0
	},
	{
		"County": "Merthyr Tydfil",
		"Count": 0
	}
];

// Create bar graph SVG
const bar = div.append("svg")
				.attr("height", "200")
				.attr("width", "600")
				.attr("id", "bar-graph");

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

    // Load external data and boot
d3.json("https://martinjc.github.io/UK-GeoJSON/json/wal/topo_lad.json")
	.then(data => {

	    var features = topojson.feature(data, data.objects.lad).features;

	    d3.csv('https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/test.csv')
			.then(data => {		
				
				for (var i = 0; i < data.length; i++) {

					var county = data[i].county;

					if (county == "Isle of Anglesey") {
						countyObject[0].Count++;
					}
					else if (county == "Gwynedd") {
						countyObject[1].Count++;
					}
					else if (county == "Conwy") {
						countyObject[2].Count++;
					}
					else if (county == "Denbighshire") {
						countyObject[3].Count++;
					}
					else if (county == "Flintshire") {
						countyObject[4].Count++;
					}
					else if (county == "Wrexham") {
						countyObject[5].Count++;
					}
					else if (county == "Ceredigion") {
						countyObject[6].Count++;
					}
					else if (county == "Pembrokeshire") {
						countyObject[7].Count++;
					}
					else if (county == "Carmarthenshire") {
						countyObject[8].Count++;
					}
					else if (county == "Swansea") {
						countyObject[9].Count++;
					}
					else if (county == "Neath Port Talbot") {
						countyObject[10].Count++;
					}
					else if (county == "Bridgend") {
						countyObject[11].Count++;
					}
					else if (county == "Vale of Glamorgan") {
						countyObject[12].Count++;
					}
					else if (county == "Cardiff") {
						countyObject[13].Count++;
					}
					else if (county == "Rhondda Cynon Taf") {
						countyObject[14].Count++;
					}
					else if (county == "Caerphilly") {
						countyObject[15].Count++;
					}
					else if (county == "Blaenau Gwent") {
						countyObject[16].Count++;
					}							
					else if (county == "Torfaen") {
						countyObject[17].Count++;
					}
					else if (county == "Monmouthshire") {
						countyObject[18].Count++;
					}
					else if (county == "Newport") {
						countyObject[19].Count++;
					}
					else if (county == "Powys") {
						countyObject[20].Count++;
					}
					else if (county == "Merthyr Tydfil") {
						countyObject[21].Count++;
					}

				}
				console.log(countyObject)
				

			});

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
				.duration(400)
				.style("opacity", 0.9)
				
			div.html("<h1>" + data.objects.lad.geometries[i].properties.LAD13NM + "</h1>")
				.style("left", "10px")
				.style("top", "10px")
				.attr("width", 60);

			for ( var x = 0; x < countyObject.length; x++ ) {

				if ( countyObject[x].County == data.objects.lad.geometries[i].properties.LAD13NM ) {
					
					div.append("p")
						.text("Number of companies: " + countyObject[i].Count)

					div.append("svg")
						.attr("class", "bar1")
						.attr("height", "500")
						.attr("width", "500")
						.selectAll("rect")
						.data(countyObject)
						.enter()
						.append("rect")
							.attr("width", countyObject[i].Count*60) 
										
							.attr("height", 16)
							.attr("x", 80)
							.attr("y", 30)
							.style("fill", "#ff867d")

				}

			}

			// div.append("svg")
			// 	.attr("class", "bar1")
			// 	.attr("height", "500")
			// 	.attr("width", "500")
			// 	.selectAll("rect")
			// 	.data(countyObject)
			// 	.enter()
			// 	.append("rect")
			// 		.attr("width", (d, i) => {
			// 			for ( var x = 0; x < countyObject.length; x++ ) {

			// 				if ( countyObject[x].County == data.objects.lad.geometries[i].properties.LAD13NM ) {
								
			// 					console.log(countyObject[i].Count)

			// 				}

			// 			}
			// 		})
								
			// 		.attr("height", 16)
			// 		.attr("x", 10)
			// 		.attr("y", (d, i) => {
			// 			return 20
			// 		})
			// 		.style("fill", "#ff867d")
			
			// render(data);

			
			// Read data for graph from csv


			
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

