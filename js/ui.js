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
				element.innerHTML = Math.round(value);
				var color = utils.getColorForPercentage(value / 20, utils.color_percent_red_to_green);
				element.style.backgroundColor = utils.color_to_css(utils.color_multiply(color, .6));
				}
			}
		}
		
	static update_base(attributes)
		{
		for(let [key, value] of Object.entries(attributes)) 
			{
			let element = document.getElementById("attr_base_" + key);
			if(element) { element.innerHTML = Math.round(value); }
			}
		}
	
	static update_tot(attributes)
		{
		for(let [key, value] of Object.entries(attributes)) 
			{
			let element = document.getElementById("attr_tot_" + key);
			if(element) 
				{
				element.innerHTML = Math.round(value); 
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
				
			
			let col_name = utils.html.emplace_child(row, "th");
			col_name.innerHTML = name;
			
			if(!character.check_experience(name))
				{
				col_name.style.color = "#FF0000";
				}
			
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
				span.innerHTML = value.toPrecision(3) + " " + database.symbols[key];
				return span;
				}
			
			let col_attributes_base = utils.html.emplace_child(row, "td");
				{
				col_attributes_base.classList.add("numeric");
				if(experience_data.attributes)
					{
					for(const [key, value] of Object.entries(experience_data.attributes.base))
						{
						let my_contribution_to_reduced = ((value * experience.years) / character.attributes.cache._2_experiences["base"].full[key]) * character.attributes.cache._2_experiences["base"].reduced[key];
						
						add_attribute_span(col_attributes_base, key, my_contribution_to_reduced);
						}
					}
				}	
			let col_attributes_city = utils.html.emplace_child(row, "td");
				{
				col_attributes_city.classList.add("numeric");
				if(experience_data.attributes && experience_data.attributes["city"])
					{
					for(const [key, value] of Object.entries(experience_data.attributes["city"]))
						{
						add_attribute_span(col_attributes_city, key, value * experience.years);
						}
					}
				}	
			let col_attributes_wild = utils.html.emplace_child(row, "td");
				{
				col_attributes_wild.classList.add("numeric");
				if(experience_data.attributes && experience_data.attributes["wild"])
					{
					for(const [key, value] of Object.entries(experience_data.attributes["wild"]))
						{
						add_attribute_span(col_attributes_wild, key, value * experience.years);
						}
					}
				}
				
			let col_weapons = utils.html.emplace_child(row, "td");
			
			if(experience_data.weapons)
				{
				for(let index in Object.keys(experience_data.weapons))
					{
					const key = experience_data.weapons[index];
					let element = utils.html.emplace_child(col_weapons, "span");
					
					let el_name = utils.html.emplace_child(element, "span");
					el_name.classList.add("symbol");
					el_name.dataset.id = key;
					
					const value = experience.weapons[key];
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
		//if(slot === "weapons") { ui.update_weapons(character); return; }
		const container = document.getElementById("container_" + slot);
		while(container.lastChild) { container.removeChild(container.lastChild); }
		
		///////////////// HEADERS
		if(slot === "weapons")
			{
			let headers_row = utils.html.emplace_child(container, "tr");
				{
				let col_0 = utils.html.emplace_child(headers_row, "th");
				let col_1 = utils.html.emplace_child(headers_row, "th"); col_1.innerHTML = "Attacks"; col_1.colSpan = 6;
				//let col_2 = utils.html.emplace_child(headers_row, "th"); col_2.innerHTML = "Defenses";
				let col_3 = utils.html.emplace_child(headers_row, "th"); col_3.innerHTML = "Actions"; col_3.colSpan = 2;
				}
			let headers_2_row = utils.html.emplace_child(container, "tr");
				{
				let col_0 = utils.html.emplace_child(headers_2_row, "th"); col_0.colSpan = 2;
				let col_1 = utils.html.emplace_child(headers_2_row, "th"); col_1.innerHTML = "Bonus";  col_1.colSpan = 2;
				let col_2 = utils.html.emplace_child(headers_2_row, "th"); col_2.innerHTML = "Damage"; col_2.colSpan = 3;
				let col_3 = utils.html.emplace_child(headers_2_row, "th"); col_3.innerHTML = "Cost";
				let col_4 = utils.html.emplace_child(headers_2_row, "th"); col_4.innerHTML = "Max";
				}
			let headers_3_row = utils.html.emplace_child(container, "tr");
				{
				let col_0 = utils.html.emplace_child(headers_3_row, "th"); col_0.colSpan = 2;
				let col_1 = utils.html.emplace_child(headers_3_row, "th"); col_1.innerHTML = database.symbols["strength"];
				let col_2 = utils.html.emplace_child(headers_3_row, "th"); col_2.innerHTML = database.symbols["precision"];
				let col_3 = utils.html.emplace_child(headers_3_row, "th"); col_3.innerHTML = database.symbols["cut"];
				let col_4 = utils.html.emplace_child(headers_3_row, "th"); col_4.innerHTML = database.symbols["pierce"];
				let col_5 = utils.html.emplace_child(headers_3_row, "th"); col_5.innerHTML = database.symbols["crush"];
				}
			}
		else
			{
			let headers_row = utils.html.emplace_child(container, "tr");
				{
				let col_0 = utils.html.emplace_child(headers_row, "th");
				let col_1 = utils.html.emplace_child(headers_row, "th"); col_1.innerHTML = "Reductions"; col_1.colSpan = 3;
				let col_2 = utils.html.emplace_child(headers_row, "th"); col_2.innerHTML = "Protection"; col_2.colSpan = 2;
				let col_3 = utils.html.emplace_child(headers_row, "th"); col_3.innerHTML = "Attributes bonus"; 
				let col_4 = utils.html.emplace_child(headers_row, "th"); col_4.innerHTML = "Stamina cost";
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
			}
		
		function add_element(name, equipped)
			{
			let data = database.equipment[slot][name];
			if(!data) { console.log("Invalid equipment in character. Equipment is '" + slot + "/" + name + "'"); return; }
			let weapon_stats = (slot === "weapons")? character.weapons[name] : null;
			
			let first_row = utils.html.emplace_child(container, "tr");
			
			let col_name = utils.html.emplace_child(first_row, "th");
			
			col_name.innerHTML = name;
			const requirements_satisfied = character.check_equipment(name, slot);
			if(!requirements_satisfied)
				{
				col_name.style.color = "#FF0000";
				}
			
			if(weapon_stats)
				{
				if(Object.keys(data.attacks).length)
					{
					col_name.rowSpan = Object.keys(data.attacks).length;
					function add_attack(parent, name, attack_stats)
						{
						utils.html.emplace_child(parent, "th").innerHTML = name;
						
						function add_value(value)
							{
							let col_dmg = utils.html.emplace_child(parent, "td");
							col_dmg.classList.add("numeric");
							col_dmg.innerHTML = Math.round(value);
							}
						add_value(attack_stats.bonus .strength);
						add_value(attack_stats.bonus .precision);
						add_value(attack_stats.damage.cut);
						add_value(attack_stats.damage.pierce);
						add_value(attack_stats.damage.crush);
						}
					
					let first_row_used = false;
					for(const [key, attack_stats] of Object.entries(weapon_stats.attacks))
						{
						let attack_row = null;
						if(!first_row_used) { first_row_used = true; attack_row = first_row; }
						else { attack_row = utils.html.emplace_child(container, "tr"); }
						add_attack(attack_row, key, attack_stats);
						}
					}
				else 
					{
					let no_attacks_col = utils.html.emplace_child(first_row, "th");
					no_attacks_col.colSpan = 6;
					no_attacks_col.innerHTML = "Not available (yet) sorry";
					} 
				}
			else
				{
				function add_defense_stat(parent, a, b)
					{
					let element = utils.html.emplace_child(parent, "td");
					element.classList.add("numeric");
					element.innerHTML = Math.round(data.defenses[a][b]);
					element.style.backgroundColor = utils.color_to_css(utils.color_multiply(utils.getColorForPercentage(data.defenses[a][b] / 100, utils.color_percent_red_to_green), .6)); 
					return element;
					}
				
				add_defense_stat(first_row, "reductions", "cut");
				add_defense_stat(first_row, "reductions", "pierce");
				add_defense_stat(first_row, "reductions", "crush");
				add_defense_stat(first_row, "protection", "strength");
				add_defense_stat(first_row, "protection", "precision");
				
				let attrs_col = utils.html.emplace_child(first_row, "td");
				if(data.attributes)
					{
					attrs_col.classList.add("numeric");
					for(const [key, value] of Object.entries(data.attributes))
						{
						const color = utils.getColorForPercentage((value + 50) / 100, utils.color_percent_red_to_green);
						let span = utils.html.emplace_child(attrs_col, "span");
						span.style.backgroundColor = utils.color_to_css(utils.color_multiply(color, .6));
						span.innerHTML = Math.round(value) + " " + database.symbols[key];
						}
					}
				}
					
					
			let col_cost = utils.html.emplace_child(first_row, "td");  col_cost.rowSpan = col_name.rowSpan;
			col_cost.classList.add("numeric");
			if(weapon_stats) { col_cost.innerHTML = Math.round(weapon_stats.stamina_per_attack); }
			else             { col_cost.innerHTML = Math.round(data.stamina_cost); }
			
			if(weapon_stats)
				{
				let col_count = utils.html.emplace_child(first_row, "td"); col_count.rowSpan = col_name.rowSpan;
				col_count.classList.add("numeric");
				col_count.innerHTML = Math.round(weapon_stats.attacks_count);
				}
					
			let col_btn  = utils.html.emplace_child(first_row, "td");  col_btn .rowSpan = col_name.rowSpan;
					
					
			if(equipped)
				{
				let btn = utils.html.emplace_child(col_btn, "button");
					{
					btn.type = "button";
					btn.innerHTML = "Unequip";
					
					btn.dataset.name = name;
					btn.dataset.slot = slot;
					btn.onclick = function() { window.character.unequip(this.dataset.name, this.dataset.slot); };
					}
				}
			else
				{
				let btn_equip = utils.html.emplace_child(col_btn, "button");
					{
					btn_equip.innerHTML = "Equip";
					
					btn_equip.dataset.name = name;
					btn_equip.dataset.slot = slot;
					btn_equip.onclick = function() { window.character.equip(this.dataset.name, this.dataset.slot); };
					}
				let btn_delete = utils.html.emplace_child(col_btn, "button");
					{
					btn_delete.innerHTML = "Delete";
					
					btn_delete.dataset.name = name;
					btn_delete.dataset.slot = slot;
					btn_delete.onclick = function() { window.character.delete_equipment(this.dataset.name, this.dataset.slot); };
					}
				}
			if(!requirements_satisfied)
				{
				utils.html.emplace_child(col_btn, "br");
				let btn_req = utils.html.emplace_child(col_btn, "button");
					{
					btn_req.innerHTML = "Requirements";
					
					btn_req.dataset.name = name;
					btn_req.dataset.slot = slot;
					btn_req.dataset.go_to = "sheet";
					btn_req.onclick = function() { ui.show_message(slot + "/" + name + "'s requirements", JSON.stringify(database.equipment[this.dataset.slot][this.dataset.name].requirements, null, "\t")); };
					}
				}
			}
		
		for(const name of character.character_data.equipment[slot])
			{
			add_element(name, true);
			}
		for(const name of character.character_data.inventory.equipment[slot])
			{
			add_element(name, false);
			}
		}
		
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
		
	static update_skills(character) 
		{
		//TODO
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
	
	static show_message(title, text)
		{
		document.getElementById("message_title").innerHTML = title;
		document.getElementById("message_text" ).innerHTML = text;
		
		let previous = null;
		if(document.getElementById("sheet"        ).style.display != "none") { previous = "sheet"; }
		if(document.getElementById("full_selector").style.display != "none") { previous = "full_selector"; }
		document.getElementById(previous).style.display = "none";
		
		document.getElementById("message_close_btn").dataset.go_to = previous;
		document.getElementById("message").style.display = "block";
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
		
	//////////////////// Icons replacements
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

	//////////////////// Attributes
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

	//////////////////// Selectors
	
	function setup_selectors(slot)
		{
		// Base selectors
		const selector_add = document.getElementById("selector_add_" + slot);
		selector_add.dataset.slot = slot;
		
		if(slot == "experiences")
			{
			selector_add.onclick = function()
				{
				const object_id = document.getElementById("selector_" + slot).value;
				window.character.add_experience(object_id);
				};
			}
		else
			{
			selector_add.onclick = function() 
				{
				const object_id = document.getElementById("selector_" + slot).value;
				window.character.add_equipment(object_id, slot);
				}
			}
			
		const selector_choices = document.getElementById("selector_choices_" + slot);
		
		const entries = Object.entries((slot == "experiences") ? database.experiences : database.equipment[slot]);
		
		var full_table = document.getElementById("full_container_" + slot);
		for(const [key, value] of entries)
			{
			// HTML Selector
			let element = document.createElement("option");
			element.innerHTML = key;
			selector_choices.appendChild(element);
			
			// Advanced selectors
			let row      = utils.html.emplace_child(full_table, "tr");
			let col_name = utils.html.emplace_child(row, "td");
			
			col_name.innerHTML = key;
			
			let col_btn  = utils.html.emplace_child(row, "td");
			let btn      = utils.html.emplace_child(col_btn, "button");
			
			btn.innerHTML = "➕&#xFE0E;";
			
			if(slot != "experiences") { btn.dataset.slot = slot; }
			btn.dataset.name = key;
			
			if(slot == "experiences") { btn.onclick = function() { window.character.add_experience(this.dataset.name); } }
			else                      { btn.onclick = function() { window.character.add_equipment (this.dataset.name, this.dataset.slot); } }
			}
		}
	setup_selectors("weapons");
	setup_selectors("head");
	setup_selectors("body");
	setup_selectors("jewelry");
	setup_selectors("experiences");
	
	//////////////////// Message
	const message_close_btn = document.getElementById("message_close_btn");
	message_close_btn.onclick = function()
		{
		document.getElementById(this.dataset.go_to).style.display = "block";
		document.getElementById("message").style.display = "none";
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
		
	ui.update_equipment(window.character, "weapons");
	ui.update_equipment(window.character, "head");
	ui.update_equipment(window.character, "body");
	ui.update_equipment(window.character, "jewelry");
	}
	
