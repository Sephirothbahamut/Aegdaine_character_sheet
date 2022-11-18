import { ease as ease} from "./utils/math/easings.js";
import { utils as utils } from "./utils.js"
import { database as database } from "./database.js";
import { attributes as attributes } from "./attributes.js";

document.body.style.backgroundColor = "rgb(80, 80, 80)";

function draw_grid(canvas)
	{
	let context = canvas.getContext("2d");
	for(let x = 0; x < canvas.width; x+= 10)
		{
		context.beginPath();
		
		     if (x % 500 == 0) { context.strokeStyle = "rgb(100, 255, 255)"; }
		else if (x % 100 == 0) { context.strokeStyle = "rgb( 80,  80, 255)"; }
		else if (x %  50 == 0) { context.strokeStyle = "rgb( 50,  50,  50)"; }
		else if (x %  10 == 0) { context.strokeStyle = "rgb( 20,  20,  20)"; }
		
		context.moveTo(x, 0);
		context.lineTo(x, canvas.height);
		context.stroke();
		}
	for(let y = 0; y < canvas.width; y+= 10)
		{
		context.beginPath();
		
		     if ((canvas.height - y) % 500 == 0) { context.strokeStyle = "rgb(100, 255, 255)"; }
		else if ((canvas.height - y) % 100 == 0) { context.strokeStyle = "rgb( 80,  80, 255)"; }
		else if ((canvas.height - y) %  50 == 0) { context.strokeStyle = "rgb( 50,  50,  50)"; }
		else if ((canvas.height - y) %  10 == 0) { context.strokeStyle = "rgb( 20,  20,  20)"; }
		
		context.moveTo(0,            y);
		context.lineTo(canvas.width, y);
		context.stroke();
		}
	}

function draw_function(canvas, f, color, vertical_offset)
	{
	let context = canvas.getContext("2d");
	if(!color) { color = "rgb(255, 255, 255)"; }
	if(!vertical_offset) { vertical_offset = 0; }
	context.beginPath();
	context.strokeStyle = color;
	context.lineWidth = 3;
	
	context.moveTo(0, canvas.height);
	
	for(let i = 0; i < canvas.width; i++)
		{
		const x = i * 10;
		const out = f(i);
		const y = canvas.height - (out * 10);
		
		context.lineTo(x, y);
		}
	
	context.stroke();
	
	context.lineWidth = 1;
	context.font = "18px sans-serif";
		
	for(let i = 0; i < canvas.width; i += 10)
		{
		const x = i * 10;
		const out = f(i);
		const y = canvas.height + vertical_offset - (out * 10);
		
		context.strokeText(i + ": " + out.toFixed(2), x, y - 10);
		context.strokeText(i + ": " + out.toFixed(2), x, y - 10);
		}
	}
	
function make_composite_function(arr)
		{
		// Example parameter
		/*
			[
			{"end":  30, "end_val": 30, "type": ease.out_sine},
			{"end": 100, "end_val": 10, "type": ease.in_sine},
			]
		*/
			
		function composite_function(arr, x)
			{
				
			function normalize(val, min, max) { return (val - min) / (max - min); }
				
				
			var i = 0;
			while(arr[i].end < x) 
				{
				i += 1;
				if(i == arr.length) { return 0; } 
				}
			
			
			let beg_val = i > 0 ? arr[i - 1].end_val : 0;
			let beg     = i > 0 ? arr[i - 1].end     : 0;
			
			let end     = arr[i].end;
			let end_val = arr[i].end_val;
			
			let normalized_input  = normalize(x, beg, end);
			
			let normalized_output = arr[i].type(normalized_input);
			
			let output = 0;
			
			output = beg_val + ((end_val - beg_val) * normalized_output);
			
			return output;
			}
		
		return composite_function.bind(null, arr);
		}
		
function clear(canvas)
	{
	let context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	}

	
function draw_attribute(canvas, hue, data, name)
	{
	clear(canvas);
	draw_grid(canvas);
	
	if(show_bases.checked)
		{
		draw_function(canvas, data.base, "hsl(" + hue + ", 100%, 30%)");
		}
	if(show_experiences.checked)
		{
		draw_function(canvas, data.experience, "hsl(" + hue + ", 30%, 70%)", -10);
		}
	if(show_totals.checked)
		{
		draw_function(canvas, function(x) { return data.base(x) + data.experience(x); }, "hsl(" + hue + ", 100%, 50%)" );
		}
	
	let context = canvas.getContext("2d");
	const x = canvas.width / 2;
	const y = 80;
	console.log(x + ", " + y);
	context.lineWidth = 2;
	context.strokeStyle = "hsv(" + hue + ", 100%, 100%)";
	context.font = "32px sans-serif";
	
	context.strokeText(name, x, y);
	}
function draw_race(race_data)
	{
	spawn_tables(race_data); 
	let i = 0;
	
	attributes.for_each((arr) =>
		{
		let db_obj = attributes.get_object_arr(arr, database.attributes);
		if(db_obj.checkbox.checked)
			{
			let race_obj = attributes.get_object_arr(arr, race_data.attributes);
			let canvas = race_obj.canvas;
			let hue = (parseInt(race_data.hueslider.value) + (parseInt(hue_delta.value) * i)) % 359;
			
			draw_attribute(canvas, hue, race_obj, arr.join("_"));
			i++;
			}
		});
	
	//for(const [attribute, attribute_data] of Object.entries(database.attributes))
	//	{
	//	if(attribute_data.race && attribute_data.checkbox.checked)
	//		{
	//		let canvas = race_data.attributes[attribute].canvas;
	//		let hue = (parseInt(race_data.hueslider.value) + (parseInt(hue_delta.value) * i)) % 359;
	//		
	//		draw_attribute(canvas, hue, race_data.attributes[attribute], attribute);
	//		i++;
	//		}
	//	
	//	if(attribute_data.components)
	//		{
	//		for(const [component, component_data] of Object.entries(attribute_data.components))
	//			{
	//			if(component_data.checkbox.checked)
	//				{
	//				let canvas = race_data.attributes[attribute].components[component].canvas;
	//				let hue = (parseInt(race_data.hueslider.value) + (parseInt(hue_delta.value) * i)) % 359;
	//				
	//				draw_attribute(canvas, hue, race_data.attributes[attribute].components[component], component);
	//				i++;
	//				}
	//			}
	//		}
	//	}
	}
function draw_races()
	{
	for(const [race, data] of Object.entries(database.races)) { if(data.checkbox.checked) { draw_race(data); } }
	}
function redraw() { draw_races(); }

let cwidth   = 2500;
let cheight  = 1000;
let cswidth  = "100%";//(cwidth  / 2) + "px";
let csheight = "100%";//(cheight / 2) + "px";
	
function spawn_tables(race_data)
	{
	if(race_data.table) { race_data.table.remove(); }
	let table = utils.html.emplace_child(race_data.div, "table");
	race_data.table = table;
	
	let i = 0;
	let row = utils.html.emplace_child(table, "tr");
	
	attributes.for_each((arr) =>
		{
		let db_obj = attributes.get_object_arr(arr, database.attributes);
		if(db_obj.checkbox.checked)
			{
			let race_obj = attributes.get_object_arr(arr, race_data.attributes);
			
			if(i == 2) { i = 0; row = utils.html.emplace_child(table, "tr"); }
			let col = utils.html.emplace_child(row, "td");
			let canvas = utils.html.emplace_child(col, "canvas");
			
			canvas.width  = cwidth ;
			canvas.height = cheight;
			canvas.style.width  = cswidth ;
			canvas.style.height = csheight;
			
			race_obj.canvas = canvas;
			
			i++
			}
		});
	}
	//for(const [attribute, attribute_data] of Object.entries(database.attributes))
	//	{
	//	if(attribute_data.race && attribute_data.checkbox.checked)
	//		{
	//		if(i == 2) { i = 0; row = utils.html.emplace_child(table, "tr"); }
	//		let col = utils.html.emplace_child(row, "td");
	//		let canvas = utils.html.emplace_child(col, "canvas");
	//		
	//		canvas.width  = cwidth ;
	//		canvas.height = cheight;
	//		canvas.style.width  = cswidth ;
	//		canvas.style.height = csheight;
	//		
	//		race_data.attributes[attribute].canvas = canvas;
	//		
	//		i++
	//		}
	//	
	//	if(attribute_data.components)
	//		{
	//		for(const [component, component_data] of Object.entries(attribute_data.components))
	//			{
	//			if(component_data.checkbox.checked)
	//				{
	//				if(i == 2) { i = 0; row = utils.html.emplace_child(table, "tr"); }
	//				let col = utils.html.emplace_child(row, "td");
	//				let canvas = utils.html.emplace_child(col, "canvas");
	//		
	//				canvas.width  = cwidth ;
	//				canvas.height = cheight;
	//				canvas.style.width  = cswidth ;
	//				canvas.style.height = csheight;
	//				
	//				race_data.attributes[attribute].components[component].canvas = canvas;
	//				
	//				i++
	//				}
	//			}
	//		}
	//	}
	//}

attributes.for_each((arr) =>
	{
	let obj = attributes.get_object_arr(arr, database.attributes);
	
	let label = utils.html.emplace_child(document.body, "label");
	label.innerHTML = arr.join("_");
	
	let checkbox = utils.html.emplace_child(document.body, "input");
	checkbox.onclick = redraw;
	checkbox.type = "checkbox";
	utils.html.emplace_child(document.body, "br");
	obj.checkbox = checkbox;
	});
	
//for(const [attribute, attribute_data] of Object.entries(database.attributes))
//	{
//	if(attribute_data.race)
//		{
//		let label = utils.html.emplace_child(document.body, "label");
//		label.innerHTML = attribute;
//		
//		let checkbox = utils.html.emplace_child(document.body, "input");
//		checkbox.onclick = redraw;
//		checkbox.type = "checkbox";
//		utils.html.emplace_child(document.body, "br");
//		attribute_data.checkbox = checkbox;
//		}
//	
//	if(attribute_data.components)
//		{
//		for(const [component, component_data] of Object.entries(attribute_data.components))
//			{
//			let label = utils.html.emplace_child(document.body, "label");
//			label.innerHTML = component;
//			
//			let checkbox = utils.html.emplace_child(document.body, "input");
//			checkbox.onclick = redraw;
//			checkbox.type = "checkbox";
//			utils.html.emplace_child(document.body, "br");
//			component_data.checkbox = checkbox;
//			}
//		}
//	}

for(const [race, data] of Object.entries(database.races))
	{
	let div = utils.html.emplace_child(document.body, "label");
		
	let label = utils.html.emplace_child(div, "label");
	label.innerHTML = race;
	
	let checkbox = utils.html.emplace_child(div, "input");
	checkbox.onclick = redraw;
	checkbox.type = "checkbox";
	utils.html.emplace_child(document.body, "br");
	data.checkbox = checkbox;
	
	let hueslider = utils.html.emplace_child(div, "input");
	hueslider.onchange = redraw;
	hueslider.type = "range";
	hueslider.min = "0";
	hueslider.max = "359";
	utils.html.emplace_child(div, "br");
	data.hueslider = hueslider;
	
	data.div = div;
	spawn_tables(data);
	}
	
utils.html.emplace_child(document.body, "label").innerHTML = "bases";
let show_bases = utils.html.emplace_child(document.body, "input");
show_bases.onclick = redraw;
show_bases.type = "checkbox";
utils.html.emplace_child(document.body, "br");
	
utils.html.emplace_child(document.body, "label").innerHTML = "experiences";
let show_experiences = utils.html.emplace_child(document.body, "input");
show_experiences.onclick = redraw;
show_experiences.type = "checkbox";
utils.html.emplace_child(document.body, "br");

utils.html.emplace_child(document.body, "label").innerHTML = "totals";
let show_totals = utils.html.emplace_child(document.body, "input");
show_totals.onclick = redraw;
show_totals.type = "checkbox";
utils.html.emplace_child(document.body, "br");

utils.html.emplace_child(document.body, "label").innerHTML = "hue delta per attribute";
let hue_delta = utils.html.emplace_child(document.body, "input");
hue_delta.type = "number";
hue_delta.min = "0";
hue_delta.max = "359";
hue_delta.value = "5";
hue_delta.onchange = redraw;


redraw();