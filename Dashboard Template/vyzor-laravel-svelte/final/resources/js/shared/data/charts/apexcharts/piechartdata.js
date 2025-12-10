
// Basic Pie Chart
export const Basicpieoptions = {
    series:[44, 55, 13, 43, 22],
	chart: {
		height: 300,
		type: "pie",
		events: {
			mounted: (chart) => {
				chart.windowResizeHandler();
			}
		},
	},
	colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff',],
	labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
	legend: {
		position: "bottom"
	},
	dataLabels: {
		dropShadow: {
			enabled: false
		}
	},
}

// Simple Donut Chart
export const Donutoptions = {
    series:[44, 55, 41, 17, 15],
	chart: {
		type: "donut",
		height: 290,
		events: {
			mounted: (chart) => {
				chart.windowResizeHandler();
			}
		},
	},
	legend: {
		position: "bottom"
	},
	colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff',],
	dataLabels: {
		dropShadow: {
			enabled: false
		}
	},
}
//Updating Donut Chart
export const Updatedoptions = {
    series:[44, 55, 13, 33],
	chart: {
		height: 280,
		type: "donut",
		events: {
			mounted: (chart) => {
				chart.windowResizeHandler();
			}
		},
	},
	dataLabels: {
		enabled: false,
	},
	colors: ["rgb(0,143,251)", "rgb(69,214,91)", "rgb(243,156,18)", "rgb(255,69,96)", "rgb(231,76,60)"],
	legend: {
		position: "bottom",
		height: 50,
	},
}

//Monochrome Pie Chart
export const Piemonooptions = {
    series:[25, 15, 44, 55, 41, 17],
	chart: {
		height: "280",
		type: "pie",
		events: {
			mounted: (chart) => {
				chart.windowResizeHandler();
			}
		},
		labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	},

	theme: {
		monochrome: {
			enabled: true,
			color: "#985ffd",
		}
	},
	plotOptions: {
		pie: {
			dataLabels: {
				offset: -5
			}
		}
	},
	title: {
		text: "Monochrome Pie",
		align: "left",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#8c9097"
		},
	},
	dataLabels: {
		dropShadow: {
			enabled: false
		}
	},
	legend: {
		show: false
	}
}

//Gradient Donut Chart
export const Piegardientoptions = {
    series:[44, 55, 41, 17, 15],
	chart: {
		height: 300,
		type: "donut",
		events: {
			mounted: (chart) => {
				chart.windowResizeHandler();
			}
		},
	},
	plotOptions: {
		pie: {
			startAngle: -90,
			endAngle: 270
		}
	},
	dataLabels: {
		enabled: false
	},
	fill: {
		type: "gradient",
	},
	legend: {
		formatter: function (val, opts) {
			return val + " - " + opts.w.globals.series[opts.seriesIndex];
		},
		position: "bottom"
	},
	colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff',],
	title: {
		text: "Gradient Donut with custom Start-angle",
		align: "left",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#8c9097"
		},
	},
}

//Donut Chart With Patterns
export const Piechartoptions = {
    series:[44, 55, 41, 17, 15],
	chart: {
		height: 290,
		type: "donut",
		dropShadow: {
			enabled: true,
			color: "#111",
			top: -1,
			left: 3,
			blur: 3,
			opacity: 0.2
		},
		events: {
			mounted: (chart) => {
				chart.windowResizeHandler();
			}
		},
	},
	stroke: {
		width: 0,
	},
	plotOptions: {
		pie: {
			donut: {
				labels: {
					show: true,
					total: {
						showAlways: true,
						show: true
					}
				}
			}
		}
	},
	colors: ["#985ffd", "#d77cf7", "#f4a742", "#0ca3e7", "#fe5454"],
	labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
	dataLabels: {
		enabled: true,
		style: {
			colors: ["#111"]
		},
		background: {
			enabled: true,
			foreColor: "#fff",
			borderWidth: 0
		}
	},
	fill: {
		type: "pattern",
		opacity: 1,
		pattern: {
			style: ["verticalLines", "squares", "horizontalLines", "circles", "slantedLines"],
		},
	},
	states: {
		hover: {
		}
	},
	theme: {
		palette: "palette2"
	},
	title: {
		text: "Favourite Movie Type",
		align: "left",
		style: {
			fontSize: "13px",
			fontWeight: "bold",
			color: "#8c9097"
		},
	},
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				width: 200
			},
			legend: {
				position: "bottom"
			}
		}
	}]
}

//Image Filled Pie Chart
export const Pieimgoptions = {
    series:[44, 33, 54, 45],
	chart: {
		height: 300,
		type: "pie",
		events: {
			mounted: (chart) => {
				chart.windowResizeHandler();
			}
		},
	},
	colors: ['#985ffd', '#ff49cd', '#fdaf22', '#32d484', '#00c9ff',],
	fill: {
		type: "image",
		opacity: 0.85,
		image: {
			src: ["../../images/media/media-21.jpg", "../../images/media/media-21.jpg", "../../images/media/media-21.jpg", "../../images/media/media-21.jpg"],
			width: 25
		},
	},
	stroke: {
		width: 4
	},
	dataLabels: {
		enabled: true,
		style: {
			colors: ["#111"]
		},
		background: {
			enabled: true,
			foreColor: "#fff",
			borderWidth: 0
		}
	},
	legend: {
		position: "bottom"
	},
}