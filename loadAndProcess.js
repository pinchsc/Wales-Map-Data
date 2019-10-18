// Count for most data
var locationCount = [
	{
		"County": "Isle of Anglesey",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Gwynedd",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Conwy",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Denbighshire",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Flintshire",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Wrexham",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Ceredigion",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Pembrokeshire",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Carmarthenshire",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Swansea",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Neath Port Talbot",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Bridgend",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Vale of Glamorgan",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Cardiff",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Rhondda Cynon Taf",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Caerphilly",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Blaenau Gwent",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Torfaen",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Monmouthshire",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Newport",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Powys",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	},
	{
		"County": "Merthyr Tydfil",
		"Businesses": 0,
		"Schools": 0,
		"Engineering": 0,
		"Law": 0,
		"Accounting": 0,
		"Healthcare": 0,
		"IT": 0,
		"Media": 0,
		"PublicServices": 0
	}
];

// Count for Welsh speaking companies and non-Welsh speaking companies
welshCount = [
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0},
	{"Welsh": 0, "No Welsh": 0}
]

// Reads data from business csv on the web, and adds to locationCount
d3.csv('https://raw.githubusercontent.com/pinchsc/Wales-Map-Data/master/test.csv')
		.then(data => {		
			
			for (var i = 0; i < data.length; i++) {

				var county = data[i].county;

				if (county == "Isle of Anglesey") {
					locationCount[0].Businesses++;
					if (data[i].engineering == "yes") { locationCount[0].Engineering++;	}
					if (data[i].law == "yes") { locationCount[0].Law++; }
					if (data[i].accounting == "yes") { locationCount[0].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[0].Healthcare++; }
					if (data[i].it == "yes") { locationCount[0].IT++; }
					if (data[i].media == "yes") { locationCount[0].Media++; }
					if (data[i].publicservices == "yes") { locationCount[0].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[0].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[0][ 'No Welsh' ]++; }
				}
				else if (county == "Gwynedd") {
					locationCount[1].Businesses++;
					if (data[i].engineering == "yes") { locationCount[1].Engineering++;	}
					if (data[i].law == "yes") { locationCount[1].Law++; }
					if (data[i].accounting == "yes") { locationCount[1].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[1].Healthcare++; }
					if (data[i].it == "yes") { locationCount[1].IT++; }
					if (data[i].media == "yes") { locationCount[1].Media++; }
					if (data[i].publicservices == "yes") { locationCount[1].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[1].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[1][ 'No Welsh' ]++; }
				}
				else if (county == "Conwy") {
					locationCount[2].Businesses++;
					if (data[i].engineering == "yes") { locationCount[2].Engineering++;	}
					if (data[i].law == "yes") { locationCount[2].Law++; }
					if (data[i].accounting == "yes") { locationCount[2].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[2].Healthcare++; }
					if (data[i].it == "yes") { locationCount[2].IT++; }
					if (data[i].media == "yes") { locationCount[2].Media++; }
					if (data[i].publicservices == "yes") { locationCount[2].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[2].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[2][ 'No Welsh' ]++; }
				}
				else if (county == "Denbighshire") {
					locationCount[3].Businesses++;
					if (data[i].engineering == "yes") { locationCount[3].Engineering++;	}
					if (data[i].law == "yes") { locationCount[3].Law++; }
					if (data[i].accounting == "yes") { locationCount[3].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[3].Healthcare++; }
					if (data[i].it == "yes") { locationCount[3].IT++; }
					if (data[i].media == "yes") { locationCount[3].Media++; }
					if (data[i].publicservices == "yes") { locationCount[3].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[3].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[3][ 'No Welsh' ]++; }
				}
				else if (county == "Flintshire") {
					locationCount[4].Businesses++;
					if (data[i].engineering == "yes") { locationCount[4].Engineering++;	}
					if (data[i].law == "yes") { locationCount[4].Law++; }
					if (data[i].accounting == "yes") { locationCount[4].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[4].Healthcare++; }
					if (data[i].it == "yes") { locationCount[4].IT++; }
					if (data[i].media == "yes") { locationCount[4].Media++; }
					if (data[i].publicservices == "yes") { locationCount[4].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[4].Welsh++;	}
					else if (data[i].welsh == "no") { welshCount[4][ 'No Welsh' ]++; }
				}
				else if (county == "Wrexham") {
					locationCount[5].Businesses++;
					if (data[i].engineering == "yes") { locationCount[5].Engineering++;	}
					if (data[i].law == "yes") { locationCount[5].Law++; }
					if (data[i].accounting == "yes") { locationCount[5].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[5].Healthcare++; }
					if (data[i].it == "yes") { locationCount[5].IT++; }
					if (data[i].media == "yes") { locationCount[5].Media++; }
					if (data[i].publicservices == "yes") { locationCount[5].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[5].Welsh++;	}
					else if (data[i].welsh == "no") { welshCount[5][ 'No Welsh' ]++; }
				}
				else if (county == "Ceredigion") {
					locationCount[6].Businesses++;
					if (data[i].engineering == "yes") { locationCount[6].Engineering++;	}
					if (data[i].law == "yes") { locationCount[6].Law++; }
					if (data[i].accounting == "yes") { locationCount[6].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[6].Healthcare++; }
					if (data[i].it == "yes") { locationCount[6].IT++; }
					if (data[i].media == "yes") { locationCount[6].Media++; }
					if (data[i].publicservices == "yes") { locationCount[6].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[6].Welsh++;	}
					else if (data[i].welsh == "no") { welshCount[6][ 'No Welsh' ]++; }
				}
				else if (county == "Pembrokeshire") {
					locationCount[7].Businesses++;
					if (data[i].engineering == "yes") { locationCount[7].Engineering++;	}
					if (data[i].law == "yes") { locationCount[7].Law++; }
					if (data[i].accounting == "yes") { locationCount[7].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[7].Healthcare++; }
					if (data[i].it == "yes") { locationCount[7].IT++; }
					if (data[i].media == "yes") { locationCount[7].Media++; }
					if (data[i].publicservices == "yes") { locationCount[7].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[7].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[7][ 'No Welsh' ]++; }
				}
				else if (county == "Carmarthenshire") {
					locationCount[8].Businesses++;
					if (data[i].engineering == "yes") { locationCount[8].Engineering++;	}
					if (data[i].law == "yes") { locationCount[8].Law++; }
					if (data[i].accounting == "yes") { locationCount[8].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[8].Healthcare++; }
					if (data[i].it == "yes") { locationCount[8].IT++; }
					if (data[i].media == "yes") { locationCount[8].Media++; }
					if (data[i].publicservices == "yes") { locationCount[8].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[8].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[8][ 'No Welsh' ]++; }
				}
				else if (county == "Swansea") {
					locationCount[9].Businesses++;
					if (data[i].engineering == "yes") { locationCount[9].Engineering++;	}
					if (data[i].law == "yes") { locationCount[9].Law++; }
					if (data[i].accounting == "yes") { locationCount[9].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[9].Healthcare++; }
					if (data[i].it == "yes") { locationCount[9].IT++; }
					if (data[i].media == "yes") { locationCount[9].Media++; }
					if (data[i].publicservices == "yes") { locationCount[9].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[9].Welsh++;	}
					else if (data[i].welsh == "no") { welshCount[9][ 'No Welsh' ]++; }
				}
				else if (county == "Neath Port Talbot") {
					locationCount[10].Businesses++;
					if (data[i].engineering == "yes") { locationCount[10].Engineering++;	}
					if (data[i].law == "yes") { locationCount[10].Law++; }
					if (data[i].accounting == "yes") { locationCount[10].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[10].Healthcare++; }
					if (data[i].it == "yes") { locationCount[10].IT++; }
					if (data[i].media == "yes") { locationCount[10].Media++; }
					if (data[i].publicservices == "yes") { locationCount[10].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[10].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[10][ 'No Welsh' ]++;	}
				}
				else if (county == "Bridgend") {
					locationCount[11].Businesses++;
					if (data[i].engineering == "yes") { locationCount[11].Engineering++;	}
					if (data[i].law == "yes") { locationCount[11].Law++; }
					if (data[i].accounting == "yes") { locationCount[11].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[11].Healthcare++; }
					if (data[i].it == "yes") { locationCount[11].IT++; }
					if (data[i].media == "yes") { locationCount[11].Media++; }
					if (data[i].publicservices == "yes") { locationCount[11].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[11].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[11][ 'No Welsh' ]++; }
				}
				else if (county == "Vale of Glamorgan") {
					locationCount[12].Businesses++;
					if (data[i].engineering == "yes") { locationCount[12].Engineering++;	}
					if (data[i].law == "yes") { locationCount[12].Law++; }
					if (data[i].accounting == "yes") { locationCount[12].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[12].Healthcare++; }
					if (data[i].it == "yes") { locationCount[12].IT++; }
					if (data[i].media == "yes") { locationCount[12].Media++; }
					if (data[i].publicservices == "yes") { locationCount[12].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[12].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[12][ 'No Welsh' ]++; }
				}
				else if (county == "Cardiff") {
					locationCount[13].Businesses++;
					if (data[i].engineering == "yes") { locationCount[13].Engineering++;	}
					if (data[i].law == "yes") { locationCount[13].Law++; }
					if (data[i].accounting == "yes") { locationCount[13].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[13].Healthcare++; }
					if (data[i].it == "yes") { locationCount[13].IT++; }
					if (data[i].media == "yes") { locationCount[13].Media++; }
					if (data[i].publicservices == "yes") { locationCount[13].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[13].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[12][ 'No Welsh' ]++; }
				}
				else if (county == "Rhondda Cynon Taf") {
					locationCount[14].Businesses++;
					if (data[i].engineering == "yes") { locationCount[14].Engineering++;	}
					if (data[i].law == "yes") { locationCount[14].Law++; }
					if (data[i].accounting == "yes") { locationCount[14].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[14].Healthcare++; }
					if (data[i].it == "yes") { locationCount[14].IT++; }
					if (data[i].media == "yes") { locationCount[14].Media++; }
					if (data[i].publicservices == "yes") { locationCount[14].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[14].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[14][ 'No Welsh' ]++;	}
				}
				else if (county == "Caerphilly") {
					locationCount[15].Businesses++;
					if (data[i].engineering == "yes") { locationCount[15].Engineering++;	}
					if (data[i].law == "yes") { locationCount[15].Law++; }
					if (data[i].accounting == "yes") { locationCount[15].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[15].Healthcare++; }
					if (data[i].it == "yes") { locationCount[15].IT++; }
					if (data[i].media == "yes") { locationCount[15].Media++; }
					if (data[i].publicservices == "yes") { locationCount[15].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[15].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[15][ 'No Welsh' ]++; }
				}
				else if (county == "Blaenau Gwent") {
					locationCount[16].Businesses++;
					if (data[i].engineering == "yes") { locationCount[16].Engineering++;	}
					if (data[i].law == "yes") { locationCount[16].Law++; }
					if (data[i].accounting == "yes") { locationCount[16].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[16].Healthcare++; }
					if (data[i].it == "yes") { locationCount[16].IT++; }
					if (data[i].media == "yes") { locationCount[16].Media++; }
					if (data[i].publicservices == "yes") { locationCount[16].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[16].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[16][ 'No Welsh' ]++;	}
				}							
				else if (county == "Torfaen") {
					locationCount[17].Businesses++;
					if (data[i].engineering == "yes") { locationCount[17].Engineering++;	}
					if (data[i].law == "yes") { locationCount[17].Law++; }
					if (data[i].accounting == "yes") { locationCount[17].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[17].Healthcare++; }
					if (data[i].it == "yes") { locationCount[17].IT++; }
					if (data[i].media == "yes") { locationCount[17].Media++; }
					if (data[i].publicservices == "yes") { locationCount[17].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[17].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[17][ 'No Welsh' ]++;	}
				}
				else if (county == "Monmouthshire") {
					locationCount[18].Businesses++;
					if (data[i].engineering == "yes") { locationCount[18].Engineering++;	}
					if (data[i].law == "yes") { locationCount[18].Law++; }
					if (data[i].accounting == "yes") { locationCount[18].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[18].Healthcare++; }
					if (data[i].it == "yes") { locationCount[18].IT++; }
					if (data[i].media == "yes") { locationCount[18].Media++; }
					if (data[i].publicservices == "yes") { locationCount[18].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[18].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[18][ 'No Welsh' ]++;	}
				}
				else if (county == "Newport") {
					locationCount[19].Businesses++;
					if (data[i].engineering == "yes") { locationCount[19].Engineering++;	}
					if (data[i].law == "yes") { locationCount[19].Law++; }
					if (data[i].accounting == "yes") { locationCount[19].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[19].Healthcare++; }
					if (data[i].it == "yes") { locationCount[19].IT++; }
					if (data[i].media == "yes") { locationCount[19].Media++; }
					if (data[i].publicservices == "yes") { locationCount[19].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[19].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[19][ 'No Welsh' ]++; }
				}
				else if (county == "Powys") {
					locationCount[20].Businesses++;
					if (data[i].engineering == "yes") { locationCount[20].Engineering++;	}
					if (data[i].law == "yes") { locationCount[20].Law++; }
					if (data[i].accounting == "yes") { locationCount[20].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[20].Healthcare++; }
					if (data[i].it == "yes") { locationCount[20].IT++; }
					if (data[i].media == "yes") { locationCount[20].Media++; }
					if (data[i].publicservices == "yes") { locationCount[20].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[20].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[20][ 'No Welsh' ]++; }
				}
				else if (county == "Merthyr Tydfil") {
					locationCount[21].Businesses++;
					if (data[i].engineering == "yes") { locationCount[21].Engineering++;	}
					if (data[i].law == "yes") { locationCount[21].Law++; }
					if (data[i].accounting == "yes") { locationCount[21].Accounting++; }
					if (data[i].healthcare == "yes") { locationCount[21].Healthcare++; }
					if (data[i].it == "yes") { locationCount[21].IT++; }
					if (data[i].media == "yes") { locationCount[21].Media++; }
					if (data[i].publicservices == "yes") { locationCount[21].PublicServices++; }
					if (data[i].welsh == "yes") { welshCount[21].Welsh++; }
					else if (data[i].welsh == "no") { welshCount[21][ 'No Welsh' ]++;	}
				}

			}

		});

	// Reads data from schools csv on the web, and adds to locationCount
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