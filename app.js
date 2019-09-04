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

var locationCount = [
	{
		"County": "Isle of Anglesey",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Gwynedd",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Conwy",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Denbighshire",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Flintshire",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Wrexham",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Ceredigion",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Pembrokeshire",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Carmarthenshire",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Swansea",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Neath Port Talbot",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Bridgend",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Vale of Glamorgan",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Cardiff",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Rhondda Cynon Taf",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Caerphilly",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Blaenau Gwent",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Torfaen",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Monmouthshire",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Newport",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Powys",
		"Businesses": 0,
		"Schools": 0
	},
	{
		"County": "Merthyr Tydfil",
		"Businesses": 0,
		"Schools": 0
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

	    d3.csv('https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/business.csv')
			.then(data => {		
				
				for (var i = 0; i < data.length; i++) {

					var county = data[i].county;

					if (county == "Isle of Anglesey") {
						locationCount[0].Businesses++;
					}
					else if (county == "Gwynedd") {
						locationCount[1].Businesses++;
					}
					else if (county == "Conwy") {
						locationCount[2].Businesses++;
					}
					else if (county == "Denbighshire") {
						locationCount[3].Businesses++;
					}
					else if (county == "Flintshire") {
						locationCount[4].Businesses++;
					}
					else if (county == "Wrexham") {
						locationCount[5].Businesses++;
					}
					else if (county == "Ceredigion") {
						locationCount[6].Businesses++;
					}
					else if (county == "Pembrokeshire") {
						locationCount[7].Businesses++;
					}
					else if (county == "Carmarthenshire") {
						locationCount[8].Businesses++;
					}
					else if (county == "Swansea") {
						locationCount[9].Businesses++;
					}
					else if (county == "Neath Port Talbot") {
						locationCount[10].Businesses++;
					}
					else if (county == "Bridgend") {
						locationCount[11].Businesses++;
					}
					else if (county == "Vale of Glamorgan") {
						locationCount[12].Businesses++;
					}
					else if (county == "Cardiff") {
						locationCount[13].Businesses++;
					}
					else if (county == "Rhondda Cynon Taf") {
						locationCount[14].Businesses++;
					}
					else if (county == "Caerphilly") {
						locationCount[15].Businesses++;
					}
					else if (county == "Blaenau Gwent") {
						locationCount[16].Businesses++;
					}							
					else if (county == "Torfaen") {
						locationCount[17].Businesses++;
					}
					else if (county == "Monmouthshire") {
						locationCount[18].Businesses++;
					}
					else if (county == "Newport") {
						locationCount[19].Businesses++;
					}
					else if (county == "Powys") {
						locationCount[20].Businesses++;
					}
					else if (county == "Merthyr Tydfil") {
						locationCount[21].Businesses++;
					}

				}				

			});

		d3.csv('https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/school.csv')
			.then(data => {

				for (var i = 0; i < data.length; i++) {

					var county = data[i].county;

					if (county == "Isle of Anglesey") {
						locationCount[0].Schools++;
					}
					else if (county == "Gwynedd") {
						locationCount[1].Schools++;
					}
					else if (county == "Conwy") {
						locationCount[2].Schools++;
					}
					else if (county == "Denbighshire") {
						locationCount[3].Schools++;
					}
					else if (county == "Flintshire") {
						locationCount[4].Schools++;
					}
					else if (county == "Wrexham") {
						locationCount[5].Schools++;
					}
					else if (county == "Ceredigion") {
						locationCount[6].Schools++;
					}
					else if (county == "Pembrokeshire") {
						locationCount[7].Schools++;
					}
					else if (county == "Carmarthenshire") {
						locationCount[8].Schools++;
					}
					else if (county == "Swansea") {
						locationCount[9].Schools++;
					}
					else if (county == "Neath Port Talbot") {
						locationCount[10].Schools++;
					}
					else if (county == "Bridgend") {
						locationCount[11].Schools++;
					}
					else if (county == "Vale of Glamorgan") {
						locationCount[12].Schools++;
					}
					else if (county == "Cardiff") {
						locationCount[13].Schools++;
					}
					else if (county == "Rhondda Cynon Taf") {
						locationCount[14].Schools++;
					}
					else if (county == "Caerphilly") {
						locationCount[15].Schools++;
					}
					else if (county == "Blaenau Gwent") {
						locationCount[16].Schools++;
					}							
					else if (county == "Torfaen") {
						locationCount[17].Schools++;
					}
					else if (county == "Monmouthshire") {
						locationCount[18].Schools++;
					}
					else if (county == "Newport") {
						locationCount[19].Schools++;
					}
					else if (county == "Powys") {
						locationCount[20].Schools++;
					}
					else if (county == "Merthyr Tydfil") {
						locationCount[21].Schools++;
					}

				}				

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

			for ( var x = 0; x < locationCount.length; x++ ) {

				if ( locationCount[x].County == data.objects.lad.geometries[i].properties.LAD13NM ) {
					
					div.append("p")
						.text("Number of companies: " + locationCount[i].Businesses);

					div.append("p")
						.text("Number of schools: " + locationCount[i].Schools);

					var selection = div.append("svg")
											.attr("id", "bar1")
											.attr("height", "500")
											.attr("width", "500")

										.selectAll("rect")
										.data(locationCount)
										.enter();


					selection.append("rect")
								.attr("class", "business")
								.attr("width", locationCount[i].Businesses*60)	
								.attr("height", 16)
								.attr("x", 80)
								.attr("y", 30)
							.style("fill", "#5087e6");

					selection.append("rect")
								.attr("class", "schools")
								.attr("width", locationCount[i].Schools*60)	
								.attr("height", 16)
								.attr("x", 80)
								.attr("y", 50)
							.style("fill", "red");
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

