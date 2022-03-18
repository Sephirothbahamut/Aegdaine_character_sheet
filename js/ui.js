import { database  as database  } from "./database.js";
import { Character as Character } from "./character.js";
import { utils as utils } from "./utils.js";


///////////////// Utilities begin

export class ui
	{
	static update_race(character)
		{
		let element = document.getElementById("selector_race");
		element.value = character.character_data.race;
		}
		
	static update_rolls(character)
		{
		for(let [key, value] of Object.entries(character.character_data.attributes.rolls)) 
			{
			let element = document.getElementById("roll_field_" + key);
			if(element) 
				{
				element.innerHTML = value; 
				var color = utils.getColorForPercentage(value / 20, utils.color_percent_red_to_green);
				element.style.backgroundColor = utils.color_to_css(utils.color_multiply(color, .6));
				}
			}
		}
		
	static update_base(character)
		{
		for(let [key, value] of Object.entries(character.attributes._4_location)) 
			{
			let element = document.getElementById("attr_base_" + key);
			if(element) { element.innerHTML = value; }
			}
		}
	
	static update_tot(character)
		{
		for(let [key, value] of Object.entries(character.attributes._5_final)) 
			{
			let element = document.getElementById("attr_tot_" + key);
			if(element) 
				{
				element.innerHTML = value; 
				const color = utils.getColorForPercentage(value / 100, utils.color_percent_red_to_green);
				const light_css_color = utils.color_to_css(utils.color_multiply(color, .6));
				const dark__css_color = utils.color_to_css(utils.color_multiply(color, .4));
				element.style.background = "linear-gradient(to right, " + light_css_color + " " + value + "%, " + dark__css_color + " " + value + "%)";
				}
			else { console.log(key + " is invalid"); }
			}
		}
	
	static update_experiences(character)
		{
		const experiences_container = document.getElementById("container_experiences");
		while(experiences_container.lastChild) { experiences_container.removeChild(experiences_container.lastChild); }
		
		let headers_row = utils.html.emplace_child(experiences_container, "tr");
			{
			let col_0 = utils.html.emplace_child(headers_row, "th"); col_0.colSpan = 2;
			let col_1 = utils.html.emplace_child(headers_row, "th"); col_1.innerHTML = "Attributes bonus"; col_1.colSpan = 3;
			let col_2 = utils.html.emplace_child(headers_row, "th"); col_2.innerHTML = "Weapons experience";
			}
		let headers_2_row = utils.html.emplace_child(experiences_container, "tr");
			{
			let col_0 = utils.html.emplace_child(headers_2_row, "th"); col_0.colSpan = 2;
			let col_1 = utils.html.emplace_child(headers_2_row, "th"); col_1.innerHTML = "Base";
			let col_2 = utils.html.emplace_child(headers_2_row, "th"); col_2.innerHTML = "City";
			let col_3 = utils.html.emplace_child(headers_2_row, "th"); col_3.innerHTML = "Wild";
			}
		
		for(const [name, experience] of Object.entries(character.character_data.experiences))
			{
			const experience_data = database.experiences[name];
			if(!experience_data) { console.log("Invalid experience in character. Experience is '" + name + "'"); break; }
			
			let row = utils.html.emplace_child(experiences_container, "tr");
				
			if(!character.check_experience(name))
				{
				element.style.color = "#FF0000";
				}
			
			let col_name = utils.html.emplace_child(row, "th");
			col_name.innerHTML = name;
			
			let col_years = utils.html.emplace_child(row, "td");
				{
				let el_years = utils.html.emplace_child(col_years, "input");
				el_years.type = "number";
				el_years.min = "0";
				el_years.value = experience.years;
				el_years.dataset.name = name;
				el_years.classList.add("numeric");
				el_years.style.width = "3em";
				el_years.onchange = function()
					{
					character.set_experience(this.dataset.name, {years: parseInt(this.value)});
					};
				}
					
					
			function add_attribute_span(parent, key, value)
				{
				const color = utils.getColorForPercentage((value / 100) + .5, utils.color_percent_red_to_green);
				let span = utils.html.emplace_child(parent, "span");
				span.style.backgroundColor = utils.color_to_css(utils.color_multiply(color, .6));
				span.innerHTML = value + " " + database.symbols[key];
				return span;
				}
			
			let col_attributes_base = utils.html.emplace_child(row, "td");
				{
				col_attributes_base.classList.add("numeric");
				if(experience_data.attributes)
					{
					for(const [key, value] of Object.entries(experience_data.attributes.base))
						{
						let my_contribution_to_reduced = (((value * experience.years) / character.attributes.cache_experiences.base.full[key]) * character.attributes.cache_experiences.base.reduced[key]).toPrecision(3);
						
						add_attribute_span(col_attributes_base, key, my_contribution_to_reduced);
						}
					}
				}	
			let col_attributes_city = utils.html.emplace_child(row, "td");
				{
				col_attributes_city.classList.add("numeric");
				if(experience_data.location_attributes && experience_data.location_attributes["city"])
					{
					for(const [key, value] of Object.entries(experience_data.location_attributes["city"]))
						{
						add_attribute_span(col_attributes_city, key, value * experience.years);
						}
					}
				}	
			let col_attributes_wild = utils.html.emplace_child(row, "td");
				{
				col_attributes_wild.classList.add("numeric");
				if(experience_data.location_attributes && experience_data.location_attributes["wild"])
					{
					for(const [key, value] of Object.entries(experience_data.location_attributes["wild"]))
						{
						add_attribute_span(col_attributes_wild, key, value * experience.years);
						}
					}
				}
				
			let col_weapons = utils.html.emplace_child(row, "td");
			
			if(experience.weapons)
				{
				for(const [key, value] of Object.entries(experience.weapons))
					{
					let element = utils.html.emplace_child(col_weapons, "span");
					
					let el_name = utils.html.emplace_child(element, "span");
					el_name.classList.add("symbol");
					el_name.dataset.id = key;
					
					let el_value = utils.html.emplace_child(element, "input");
					el_value.style.width = "3em";
					el_value.type = "number";
					el_value.min = "0";
					el_value.value = value;
					el_value.dataset.name = name;
					el_value.dataset.weapon = key;
					el_value.classList.add("numeric");
					el_value.onchange = function()
						{
						let data = { weapons: {} };
						data.weapons[this.dataset.weapon] = parseInt(this.value);
						window.character.set_experience(this.dataset.name, data);
						};
					}
				}
			}
			
		ui.update_symbols(experiences_container);
		}
	
	static update_equipment(character, slot)
		{
		if(slot === "weapons") { ui.update_weapons(character); return; }
		const container = document.getElementById("container_" + slot);
		while(container.lastChild) { container.removeChild(container.lastChild); }
		
		let headers_row = utils.html.emplace_child(container, "tr");
			{
			let col_0 = utils.html.emplace_child(headers_row, "th");
			let col_1 = utils.html.emplace_child(headers_row, "th"); col_1.innerHTML = "Reductions"; col_1.colSpan = 3;
			let col_2 = utils.html.emplace_child(headers_row, "th"); col_2.innerHTML = "Protection"; col_2.colSpan = 2;
			let col_3 = utils.html.emplace_child(headers_row, "th"); col_3.innerHTML = "Attributes bonus"; 
			let col_4 = utils.html.emplace_child(headers_row, "th"); col_4.innerHTML = "Actions";
			}
		let headers_2_row = utils.html.emplace_child(container, "tr");
			{
			let col_0 = utils.html.emplace_child(headers_2_row, "th");
			let col_1 = utils.html.emplace_child(headers_2_row, "th"); col_1.innerHTML = database.symbols["cut"];
			let col_2 = utils.html.emplace_child(headers_2_row, "th"); col_2.innerHTML = database.symbols["pierce"];
			let col_3 = utils.html.emplace_child(headers_2_row, "th"); col_3.innerHTML = database.symbols["crush"];
			let col_4 = utils.html.emplace_child(headers_2_row, "th"); col_4.innerHTML = database.symbols["strength"];
			let col_5 = utils.html.emplace_child(headers_2_row, "th"); col_5.innerHTML = database.symbols["precision"];
			}
		
		function add_element(name)
			{
			let data = database.equipment[slot][name];
			if(!data) { console.log("Invalid equipment in character. Equipment is '" + slot + "/" + name + "'"); return; }
			
			let row = utils.html.emplace_child(container, "tr");
			
			let name_col = utils.html.emplace_child(row, "th");
			
			name_col.innerHTML = name;
			if(!character.check_equipment(name, slot))
				{
				name_col.style.color = "#FF0000";
				}
			
			function add_defense_stat(parent, a, b)
				{
				let element = utils.html.emplace_child(parent, "td");
				element.classList.add("numeric");
				element.innerHTML = data.defenses[a][b];
				element.style.backgroundColor = utils.color_to_css(utils.color_multiply(utils.getColorForPercentage(data.defenses[a][b] / 100, utils.color_percent_red_to_green), .6)); 
				return element;
				}
			
			add_defense_stat(row, "reductions", "cut");
			add_defense_stat(row, "reductions", "pierce");
			add_defense_stat(row, "reductions", "crush");
			add_defense_stat(row, "protection", "strength");
			add_defense_stat(row, "protection", "precision");
			
			let attrs_col = utils.html.emplace_child(row, "td");
			if(data.attributes)
				{
				attrs_col.classList.add("numeric");
				for(const [key, value] of Object.entries(data.attributes))
					{
					const color = utils.getColorForPercentage((value + 50) / 100, utils.color_percent_red_to_green);
					let span = utils.html.emplace_child(attrs_col, "span");
					span.style.backgroundColor = utils.color_to_css(utils.color_multiply(color, .6));
					span.innerHTML = value + " " + database.symbols[key];
					}
				}
			
			let btn_col = utils.html.emplace_child(row, "td");
			return btn_col;
			}
		
		for(const name of character.character_data.equipment[slot])
			{
			let btn_col = add_element(name);
			
			let btn = utils.html.emplace_child(btn_col, "button");
			
			btn.type = "button";
			btn.innerHTML = "Unequip";
			
			btn.dataset.name = name;
			btn.dataset.slot = slot;
			btn.onclick = function() { window.character.unequip(this.dataset.name, this.dataset.slot); };
			}
		for(const name of character.character_data.inventory.equipment[slot])
			{
			let btn_col = add_element(name);
			
			let btn_equip = utils.html.emplace_child(btn_col, "button");
				{
				btn_equip.type = "button";
				btn_equip.innerHTML = "Equip";
				
				btn_equip.dataset.name = name;
				btn_equip.dataset.slot = slot;
				btn_equip.onclick = function() { window.character.equip(this.dataset.name, this.dataset.slot); };
				}
			let btn_delete = utils.html.emplace_child(btn_col, "button");
				{
				btn_delete.type = "button";
				btn_delete.innerHTML = "Delete";
				
				btn_delete.dataset.name = name;
				btn_delete.dataset.slot = slot;
				btn_delete.onclick = function() { window.character.delete_equipment(this.dataset.name, this.dataset.slot); };
				}
			}
		}
	
	static update_weapons(character)
		{
		/*const container = document.getElementById("container_weapons");
		while(container.lastChild) { container.removeChild(container.lastChild); }
		
		let headers_row = utils.html.emplace_child(container, "tr");
			{
			let col_0 = utils.html.emplace_child(headers_row, "th");
			let col_4 = utils.html.emplace_child(headers_row, "th"); col_4.innerHTML = "Actions";
			}
			
		function add_element(name)
			{
			let data = database.weapons[name];
			if(!data) { console.log("Invalid equipment in character. Equipment is '" + slot + "/" + name + "'"); return; }
			
			let row = utils.html.emplace_child(container, "tr");
			
			let name_col = utils.html.emplace_child(row, "th");
			
			name_col.innerHTML = name;
			if(!character.check_weapon(name))
				{
				name_col.style.color = "#FF0000";
				}
			
			function add_defense_stat(parent, a, b)
				{
				let element = utils.html.emplace_child(parent, "td");
				element.classList.add("numeric");
				element.innerHTML = data.defenses[a][b];
				element.style.backgroundColor = utils.color_to_css(utils.color_multiply(utils.getColorForPercentage(data.defenses[a][b] / 100, utils.color_percent_red_to_green), .6)); 
				return element;
				}
			
			add_defense_stat(row, "reductions", "cut");
			add_defense_stat(row, "reductions", "pierce");
			add_defense_stat(row, "reductions", "crush");
			add_defense_stat(row, "protection", "strength");
			add_defense_stat(row, "protection", "precision");
			
			let attrs_col = utils.html.emplace_child(row, "td");
			if(data.attributes)
				{
				attrs_col.classList.add("numeric");
				for(const [key, value] of Object.entries(data.attributes))
					{
					const color = utils.getColorForPercentage((value + 50) / 100, utils.color_percent_red_to_green);
					let span = utils.html.emplace_child(attrs_col, "span");
					span.style.backgroundColor = utils.color_to_css(utils.color_multiply(color, .6));
					span.innerHTML = value + " " + database.symbols[key];
					}
				}
			
			let btn_col = utils.html.emplace_child(row, "td");
			return btn_col;
			}
		
		for(const name of character.character_data.equipment[slot])
			{
			let btn_col = add_element(name);
			
			let btn = utils.html.emplace_child(btn_col, "button");
			
			btn.type = "button";
			btn.innerHTML = "Unequip";
			
			btn.dataset.name = name;
			btn.dataset.slot = slot;
			btn.onclick = function() { window.character.unequip(this.dataset.name, this.dataset.slot); };
			}
		for(const name of character.character_data.inventory.equipment[slot])
			{
			let btn_col = add_element(name);
			
			let btn_equip = utils.html.emplace_child(btn_col, "button");
				{
				btn_equip.type = "button";
				btn_equip.innerHTML = "Equip";
				
				btn_equip.dataset.name = name;
				btn_equip.dataset.slot = slot;
				btn_equip.onclick = function() { window.character.equip(this.dataset.name, this.dataset.slot); };
				}
			let btn_delete = utils.html.emplace_child(btn_col, "button");
				{
				btn_delete.type = "button";
				btn_delete.innerHTML = "Delete";
				
				btn_delete.dataset.name = name;
				btn_delete.dataset.slot = slot;
				btn_delete.onclick = function() { window.character.delete_equipment(this.dataset.name, this.dataset.slot); };
				}
			}
		*/}
		
	static update_defenses(character)
		{
		function inner_update(element, value, offset, divide_by)
			{
			const color = utils.getColorForPercentage((value + offset) / divide_by, utils.color_percent_red_to_green);
			element.style.backgroundColor = utils.color_to_css(utils.color_multiply(color, .6));
			element.innerHTML = value;
			}
		
		for(const [key, value] of Object.entries(character.defenses))
			{
			inner_update(document.getElementById("defense_" + key + "_reductions_cut"      ), character.defenses[key].reductions.cut      , 0, 100);
			inner_update(document.getElementById("defense_" + key + "_reductions_pierce"   ), character.defenses[key].reductions.pierce   , 0, 100);
			inner_update(document.getElementById("defense_" + key + "_reductions_crush"    ), character.defenses[key].reductions.crush    , 0, 100);
			inner_update(document.getElementById("defense_" + key + "_protection_strength" ), character.defenses[key].protection.strength , 0, 100);
			inner_update(document.getElementById("defense_" + key + "_protection_precision"), character.defenses[key].protection.precision, 0, 100);
			}
		}
		
	static update_symbols(root = document)
		{
		let symbols_replacements = document.getElementsByClassName("symbol");
		
		for(let i = 0; i < symbols_replacements.length; i++)
			{
			if(!symbols_replacements[i]) { continue; }
			let element = symbols_replacements[i];
			
			
			//TODO check why it writes "undefined" instead of entring the else
			if(database.symbols[element.dataset.id]) { element.innerHTML = database.symbols[element.dataset.id]; }
			else { element.innerHTML = "[" + element.dataset.id + "]"; }
			}
		}
	};


export function setup()
	{
	let btn_save_character = document.getElementById("btn_save_character");
	btn_save_character.onclick = function()
		{
		var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.character.character_data, null, "\t"));
		this.setAttribute("href", "data:" + data);
		this.setAttribute("download", window.character.character_data.name + ".Aegdaine_character_data");
		};
	let btn_load_character = document.getElementById("btn_load_character");
	btn_load_character.onchange = function()
		{
        var reader = new FileReader();
        reader.onload = function(event)
			{
			console.log("Loaded:");
			console.dir(event.target.result);
			window.character = new Character(JSON.parse(event.target.result));
			
			init();
			};
        reader.readAsText(event.target.files[0]);
		};
		
	///////////////////// Icons replacements
	ui.update_symbols();
		
	//////////////////// Creation

	const name_field = document.getElementById("name");
	name_field.onchange = function() { window.character.character_data.name = this.value; }

	const race_selector = document.getElementById("selector_race");
	race_selector.onchange = function() { window.character.set_race(this.value); }
	const race_selector_choices = document.getElementById("selector_choices_race");

	for(const [key, value] of Object.entries(database.races))
		{
		let element = document.createElement("option");
		element.innerHTML = key;
		race_selector_choices.appendChild(element);
		}

	let roll_fields = document.getElementsByClassName("roll_field")

	for(let i = 0; i < roll_fields.length; i++)
		{
		if(!roll_fields[i]) { continue; }
		let field = roll_fields[i];
		field.style.width = "3em";
		field.type = "number";
		field.min = "1";
		field.max = "20";
		field.classList.add("numeric");
		field.id = field.className + "_" + field.dataset.attribute;
		
		field.onchange = function()
			{
			window.character.set_roll(this.dataset.attribute, parseInt(this.value));
			};
		}

	////////////////// Attributes
	const attributes_table = document.getElementById("attributes_table");


	let tmp_fields = document.getElementsByClassName("attr_base")
	for(let i = 0; i < tmp_fields.length; i++)
		{
		if(!tmp_fields[i]) { continue; }
		let field = tmp_fields[i];
		field.classList.add("numeric");
		field.id = "attr_base_" + field.dataset.attribute;
		}

	tmp_fields = document.getElementsByClassName("attr_tmp");
	for(let i = 0; i < tmp_fields.length; i++)
		{
		if(!tmp_fields[i]) { continue; }
		let field = tmp_fields[i];
		field.style.width = "3em";
		field.type = "number";
		field.min = "-99";
		field.max = "100";
		field.classList.add("numeric");
		field.id = "attr_tmp_" + field.dataset.attribute;
		
		field.onchange = function()
			{
			window.character.set_tmp(this.dataset.attribute, parseInt(this.value));
			};
		}
		
	tmp_fields = document.getElementsByClassName("attr_tot");
	for(let i = 0; i < tmp_fields.length; i++)
		{
		if(!tmp_fields[i]) { continue; }
		let field = tmp_fields[i];
		field.classList.add("numeric");
		field.id = "attr_tot_" + field.dataset.attribute;
		
		field.onchange = function()
			{
			window.character.set_tmp(this.dataset.attribute, parseInt(this.value));
			};
		}

	////////////////// Experiences

	const experience_selector_choices = document.getElementById("selector_choices_experiences");
	const experience_selector = document.getElementById("selector_experiences");
	const experience_selector_add = document.getElementById("selector_add_experiences");
	
	experience_selector_add.onclick = function()
		{
		window.character.add_experience(experience_selector.value);
		};

	for(const [key, value] of Object.entries(database.experiences))
		{
		let element = document.createElement("option");
		element.innerHTML = key;
		experience_selector_choices.appendChild(element);
		}
	
	
	////////////////// Equipment
	const weapon_selector_choices  = document.getElementById("selector_choices_weapons");
	const weapon_selector          = document.getElementById("selector_weapons");
	const weapon_selector_add      = document.getElementById("selector_add_weapons");
	const head_selector_choices    = document.getElementById("selector_choices_head");
	const head_selector            = document.getElementById("selector_head");
	const head_selector_add        = document.getElementById("selector_add_head");
	const body_selector_choices    = document.getElementById("selector_choices_body");
	const body_selector            = document.getElementById("selector_body");
	const body_selector_add        = document.getElementById("selector_add_body");
	const jewelry_selector_choices = document.getElementById("selector_choices_jewelry");
	const jewelry_selector         = document.getElementById("selector_jewelry");
	const jewelry_selector_add     = document.getElementById("selector_add_jewelry");
	
	
	for(const [key, value] of Object.entries(database.equipment.weapons))
		{
		let element = document.createElement("option");
		element.innerHTML = key;
		weapon_selector_choices.appendChild(element);
		}
	for(const [key, value] of Object.entries(database.equipment.head))
		{
		let element = document.createElement("option");
		element.innerHTML = key;
		head_selector_choices.appendChild(element);
		}
	for(const [key, value] of Object.entries(database.equipment.body))
		{
		let element = document.createElement("option");
		element.innerHTML = key;
		body_selector_choices.appendChild(element);
		}
	for(const [key, value] of Object.entries(database.equipment.jewelry))
		{
		let element = document.createElement("option");
		element.innerHTML = key;
		jewelry_selector_choices.appendChild(element);
		}
		
	weapon_selector_add.onclick = function()
		{
		window.character.add_equipment(weapon_selector.value, "weapons");
		};
	head_selector_add.onclick = function()
		{
		window.character.add_equipment(head_selector.value, "head");
		};
	body_selector_add.onclick = function()
		{
		window.character.add_equipment(body_selector.value, "body");
		};
	jewelry_selector_add.onclick = function()
		{
		window.character.add_equipment(jewelry_selector.value, "jewelry");
		};
	}
	


export function init()
	{
	//////////////////// Creation
	let roll_fields = document.getElementsByClassName("roll_field")

	for(let i = 0; i < roll_fields.length; i++)
		{
		if(!roll_fields[i]) { continue; }
		let field = roll_fields[i];
		field.value = window.character.character_data.attributes.rolls[field.dataset.attribute];
		}

	////////////////// Attributes
	const attributes_table = document.getElementById("attributes_table");

	let tmp_fields = document.getElementsByClassName("attr_tmp");
	for(let i = 0; i < tmp_fields.length; i++)
		{
		if(!tmp_fields[i]) { continue; }
		let field = tmp_fields[i];
		field.value = window.character.character_data.attributes.tmp[field.dataset.attribute];
		}
		
	tmp_fields = document.getElementsByClassName("attr_tot");
	for(let i = 0; i < tmp_fields.length; i++)
		{
		if(!tmp_fields[i]) { continue; }
		let field = tmp_fields[i];
		field.value = window.character.character_data.attributes.tmp[field.dataset.attribute];
		}

	////////////////// Experiences
	////////////////// Equipment
		
	ui.update_weapons(window.character);
	ui.update_equipment(window.character, "head");
	ui.update_equipment(window.character, "body");
	ui.update_equipment(window.character, "jewelry");
	}
	
