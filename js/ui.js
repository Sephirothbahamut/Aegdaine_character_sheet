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
	
	static update_tot(character, attributes)
		{
		let total = 0;
		for(let [key, value] of Object.entries(attributes)) 
			{
			let element = document.getElementById("attr_tot_" + key);
			if(element) 
				{
				if(key != "hearing" && key != "touch" && key != "smell" && key != "sight" && key != "taste") { total += value; }
				
				element.innerHTML = Math.round(value); 
				const color = utils.getColorForPercentage(value / 100, utils.color_percent_red_to_green);
				const light_css_color = utils.color_to_css(utils.color_multiply(color, .6));
				const dark__css_color = utils.color_to_css(utils.color_multiply(color, .4));
				element.style.background = "linear-gradient(to right, " + light_css_color + " " + value + "%, " + dark__css_color + " " + value + "%)";
				}
			else { console.log(key + " is invalid"); }
			}
		
		document.getElementById("attr_tot_total").innerHTML = Math.round(total);
		
		document.getElementById("stamina_max").innerHTML = character.stamina_max;
		document.getElementById("stamina").value = Math.floor(Math.min(character.character_data.stamina_current, character.stamina_max));
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
				span.dataset.value = value;
				span.innerHTML = value.toPrecision(3) + " " + database.symbols[key];
				return span;
				}
				
			function add_location_col(parent, location)
				{
				let col_attributes = utils.html.emplace_child(parent, "td");
				if(experience_data.attributes && experience_data.attributes[location])
					{
					for(const [key, value] of Object.entries(experience_data.attributes[location]))
						{
						let my_contribution_to_reduced = 
							character.attributes.cache._2_experiences[location].full[key] == 0 ? 0 :
								utils.soften_on_tot_precalc(value * experience.years, character.attributes.cache._2_experiences[location].full[key], character.attributes.cache._2_experiences[location].reduced[key]);
							
						add_attribute_span(col_attributes, key, my_contribution_to_reduced);
						}
					}
				}
			
			add_location_col(row, "base");
			add_location_col(row, "city");
			add_location_col(row, "wild");
				
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
		const container         = document.getElementById("container_" + slot);
		const container_attacks = document.getElementById("container_attacks");
		
		///////////////// HEADERS
		if(slot === "weapons")
			{
			while(container        .childElementCount >= 4) { container        .removeChild(container        .lastChild); }
			while(container_attacks.childElementCount >= 4) { container_attacks.removeChild(container_attacks.lastChild); }
			}
		else
			{
			while(container.childElementCount >= 3) { container.removeChild(container.lastChild); }
			}
		
		function add_element(container, name, buttons)
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
				
				
				let col_def_constitution = utils.html.emplace_child(first_row, "td"); 
				let col_def_agility      = utils.html.emplace_child(first_row, "td"); 
				
				col_def_constitution.rowSpan = col_name.rowSpan;
				col_def_agility     .rowSpan = col_name.rowSpan;
				
				col_def_constitution.classList.add("numeric");
				col_def_agility     .classList.add("numeric");
				
				if(data.defenses && data.defenses.bonus)
					{
					col_def_constitution.innerHTML = data.defenses.bonus.constitution ? data.defenses.bonus.constitution : 0;
					col_def_agility     .innerHTML = data.defenses.bonus.agility      ? data.defenses.bonus.agility      : 0;
					}
				else
					{
					col_def_constitution.innerHTML = 0;
					col_def_agility     .innerHTML = 0;
					}
				}
					
			let col_btn  = utils.html.emplace_child(first_row, "td");  col_btn .rowSpan = col_name.rowSpan;
					
					
			if(buttons == "equipped")
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
			else if(buttons == "inventory")
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
			add_element(container, name, "equipped");
			if(slot === "weapons") { add_element(container_attacks, name, "none"); }
			}
		for(const name of character.character_data.inventory.equipment[slot])
			{
			add_element(container, name, "inventory");
			}
		}
		
	static update_defenses(character)
		{
		function inner_update(element, value, offset, divide_by)
			{
			const color = utils.getColorForPercentage((value + offset) / divide_by, utils.color_percent_red_to_green);
			if(!element)
				{
				console.log("a");
				}
			element.style.backgroundColor = utils.color_to_css(utils.color_multiply(color, .6));
			element.innerHTML = value;
			}
		
		for(const [key, value] of Object.entries(character.defenses))
			{
			if (key == "jewelry") { continue; }
			inner_update(document.getElementById("defense_" + key + "_reductions_cut"      ), character.defenses[key].reductions.cut      , 0, 100);
			inner_update(document.getElementById("defense_" + key + "_reductions_pierce"   ), character.defenses[key].reductions.pierce   , 0, 100);
			inner_update(document.getElementById("defense_" + key + "_reductions_crush"    ), character.defenses[key].reductions.crush    , 0, 100);
			inner_update(document.getElementById("defense_" + key + "_protection_strength" ), character.defenses[key].protection.strength , 0, 100);
			inner_update(document.getElementById("defense_" + key + "_protection_precision"), character.defenses[key].protection.precision, 0, 100);
			}
		}
		
	static update_skills(character) 
		{
		//TODO https://www.w3schools.com/css/css_tooltip.asp
		//tooltip on the name lists categories
		
		let container_skills = document.getElementById("container_skills");
		while(container_skills.lastChild) { container_skills.removeChild(container_skills.lastChild); }
		
		let skills_names = character.skills;
		
		for(const skill_name of skills_names)
			{
			const skill_data = database.skills[skill_name];
			
			let row      = utils.html.emplace_child(container_skills, "tr");
			let col_name = utils.html.emplace_child(container_skills, "th");
			let col_desc = utils.html.emplace_child(container_skills, "td");
			col_desc.classList.add("long_text");
			
			col_name.innerHTML = skill_name + (skill_data.effect ? "\n (precalculated)" : "");
			
			col_desc.innerHTML = skill_data.text.replaceAll("\n", "<br/>");
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
	
	static show_message(title, text)
		{
		document.getElementById("message_title").innerHTML = title;
		document.getElementById("message_text" ).innerHTML = text;
		
		let previous = null;
		if(document.getElementById("sheet"        ).style.display != "none") { previous = "sheet"; }
		if(document.getElementById("full_selector").style.display != "none") { previous = "full_selector"; }
		utils.html.set_visibility(document.getElementById(previous), false);
		
		document.getElementById("message_close_btn").dataset.go_to = previous;
		utils.html.set_visibility(document.getElementById("message"), true);
		}
	
	};


export function setup()
	{
	let btn_save_character = document.getElementById("btn_save_character");
	btn_save_character.onclick = function()
		{
		/*var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.character.character_data, null, "\t"));
		this.setAttribute("href", "data:" + data);
		this.setAttribute("download", window.character.character_data.name + ".Aegdaine_character_data");*/
		utils.html.download(JSON.stringify(window.character.character_data), "text/plain", window.character.character_data.name + ".Aegdaine_character_data");
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
	name_field.onchange = function()
		{
		window.character.character_data.name = this.value; 
		document.title                       = this.value;
		}

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
		
	const col_senses_toggle = document.getElementById("attr_base_senses").parentNode.getElementsByTagName("th")[1];
	col_senses_toggle.classList.add("button");
	col_senses_toggle.onclick = function()
		{
		let new_visibility = !utils.html.is_visible(document.getElementById("attr_base_sight").parentNode);
		utils.html.set_visibility(document.getElementById("attr_base_sight"  ).parentNode, new_visibility, "", "none");
		utils.html.set_visibility(document.getElementById("attr_base_touch"  ).parentNode, new_visibility, "", "none");
		utils.html.set_visibility(document.getElementById("attr_base_smell"  ).parentNode, new_visibility, "", "none");
		utils.html.set_visibility(document.getElementById("attr_base_taste"  ).parentNode, new_visibility, "", "none");
		utils.html.set_visibility(document.getElementById("attr_base_hearing").parentNode, new_visibility, "", "none");
		
		this.innerHTML = "Senses " + (new_visibility ? "▼" : "►");
		};
	col_senses_toggle.click();
	
	//////////////////// Location and Stamina
	let location_field = document.getElementById("location");
	location_field.onchange = function()
		{
		window.character.character_data.location = this.value;
		window.character.update_4_location();
		};
		
	document.getElementById("stamina_move").onclick = function()
		{
		document.getElementById("stamina").value -= Math.floor(window.character.stamina_cost);
		document.getElementById("stamina").onchange();
		};
	document.getElementById("stamina_rest").onclick = function()
		{
		document.getElementById("stamina").value = parseInt(document.getElementById("stamina").value) + Math.floor(window.character.stamina_max / 10);
		document.getElementById("stamina").onchange();
		};
	document.getElementById("stamina").onchange = function()
		{
		this.value = Math.floor(Math.min(window.character.stamina_max, this.value));
		window.character.character_data.stamina_current = this.value;
		};
		
	//////////////////// Inventory
		{
		const containers_ids = ["container_head", "container_body", "container_jewelry"];
		for(let container_id of containers_ids)
			{
			let container = document.getElementById(container_id);
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
		}
		{
		const containers_ids = ["container_weapons", "container_attacks"];
		for(let container_id of containers_ids)
			{
			let container = document.getElementById(container_id);
			let headers_row = utils.html.emplace_child(container, "tr");
				{
				let col_0 = utils.html.emplace_child(headers_row, "th");
				let col_1 = utils.html.emplace_child(headers_row, "th"); col_1.innerHTML = "Attacks"; col_1.colSpan = 6;
				let col_2 = utils.html.emplace_child(headers_row, "th"); col_2.innerHTML = "Actions"; col_2.colSpan = 2;
				let col_3 = utils.html.emplace_child(headers_row, "th"); col_3.innerHTML = "Defense"; col_3.colSpan = 2;
				}
			let headers_2_row = utils.html.emplace_child(container, "tr");
				{
				let col_0 = utils.html.emplace_child(headers_2_row, "th"); col_0.colSpan = 2;
				let col_1 = utils.html.emplace_child(headers_2_row, "th"); col_1.innerHTML = "Bonus";  col_1.colSpan = 2;
				let col_2 = utils.html.emplace_child(headers_2_row, "th"); col_2.innerHTML = "Damage"; col_2.colSpan = 3;
				let col_3 = utils.html.emplace_child(headers_2_row, "th"); col_3.innerHTML = "Cost";
				let col_4 = utils.html.emplace_child(headers_2_row, "th"); col_4.innerHTML = "Max";
				let col_5 = utils.html.emplace_child(headers_2_row, "th"); col_5.innerHTML = "Bonus";  col_5.colSpan = 2;
				}
			let headers_3_row = utils.html.emplace_child(container, "tr");
				{
				let col_0 = utils.html.emplace_child(headers_3_row, "th"); col_0.colSpan = 2;
				let col_1 = utils.html.emplace_child(headers_3_row, "th"); col_1.innerHTML = database.symbols["strength"];
				let col_2 = utils.html.emplace_child(headers_3_row, "th"); col_2.innerHTML = database.symbols["precision"];
				let col_3 = utils.html.emplace_child(headers_3_row, "th"); col_3.innerHTML = database.symbols["cut"];
				let col_4 = utils.html.emplace_child(headers_3_row, "th"); col_4.innerHTML = database.symbols["pierce"];
				let col_5 = utils.html.emplace_child(headers_3_row, "th"); col_5.innerHTML = database.symbols["crush"];
				let col_6 = utils.html.emplace_child(headers_3_row, "th"); col_6.colSpan = 2;
				let col_7 = utils.html.emplace_child(headers_3_row, "th"); col_7.innerHTML = database.symbols["constitution"];
				let col_8 = utils.html.emplace_child(headers_3_row, "th"); col_8.innerHTML = database.symbols["agility"];
				}
			}
		}
		
	////////////////// Inventory/other
	document.getElementById("container_other_add").onclick = function()
		{
		const table = document.getElementById("container_other");
		
		const row   = utils.html.emplace_child(table, "tr"   ); row  .style.width = "100%"; 
		const col   = utils.html.emplace_child(row  , "td"   ); col  .style.width = "100%"; 
		const field = utils.html.emplace_child(col  , "input"); field.style.width = "100%"; 
		
		field.dataset.index = window.character.character_data.inventory.other.length;
		window.character.character_data.inventory.other.push("");
		field.value = "";
		
		field.onchange = function()
			{
			window.character.character_data.inventory.other[this.dataset.index] = this.value;
			};
		}
		
	//////////////////// Wealth
	tmp_fields = document.getElementsByClassName("wealth");
	for(let i = 0; i < tmp_fields.length; i++)
		{
		if(!tmp_fields[i]) { continue; }
		let field = tmp_fields[i];
		field.style.width = "3em";
		field.type = "number";
		field.min = "0";
		field.max = "9999";
		field.classList.add("numeric");
		field.id = "wealth_" + field.dataset.id;
		
		field.onchange = function()
			{
			window.character.character_data.inventory.wealth[this.dataset.id] = parseInt(this.value);
			};
		}
		
	//////////////////// Health
	tmp_fields = document.getElementsByClassName("health")
	for(let i = 0; i < tmp_fields.length; i++)
		{
		if(!tmp_fields[i]) { continue; }
		let field = tmp_fields[i];
		field.style.width = "3em";
		field.type = "number";
		field.min = "0";
		field.max = "999";
		field.classList.add("numeric");
		field.id = "health_" + field.dataset.id;
		
		field.onchange = function()
			{
			window.character.character_data.health[this.dataset.id] = parseInt(this.value);
			
			
			const color = utils.getColorForPercentage(this.value / 100, utils.color_percent_red_to_green);
			const light_css_color = utils.color_to_css(utils.color_multiply(color, .6));
			const dark__css_color = utils.color_to_css(utils.color_multiply(color, .4));
			field.style.background = "linear-gradient(to right, " + light_css_color + " " + this.value + "%, " + dark__css_color + " " + this.value + "%)";
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
		utils.html.set_visibility(document.getElementById(this.dataset.go_to), true);
		utils.html.set_visibility(document.getElementById("message"), false);
		};
	}
	


export function init()
	{
	document.getElementById("stamina_max").innerHTML = window.character.stamina_max;
	document.getElementById("stamina").value = Math.floor(Math.min(document.getElementById("stamina").value, window.character.stamina_max));
	document.getElementById("stamina").onchange();
	
	//////////////////// Creation
	let name_field = document.getElementById("name"); 
	name_field.value = window.character.character_data.name;
	document.title   = window.character.character_data.name;
	
	let location_field = document.getElementById("location");
	location_field.value = window.character.character_data.location;
	
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

	
	////////////////// Inventory/other
		{
		let table = document.getElementById("container_other");
		while(table.lastChild) { table.removeChild(table.lastChild); }
		
		if(window.character.character_data.inventory.other)
			{
			let table = document.getElementById("container_other");
			for(let i = 0; i < window.character.character_data.inventory.other.length; i++)
				{
				const data  = window.character.character_data.inventory.other[i];
				const row   = utils.html.emplace_child(table, "tr"      ); row  .style.width = "100%"; 
				const col   = utils.html.emplace_child(row  , "td"      ); col  .style.width = "100%"; 
				const field = utils.html.emplace_child(col  , "textarea"); field.style.width = "100%"; 
				
				field.dataset.index = i;
				field.value = data;
				
				field.onchange = function()
					{
					window.character.character_data.inventory.other[this.dataset.index] = this.value;
					};
				}
			}
		}
		
	////////////////// Wealth
	if(window.character.character_data.inventory.wealth)
		{
		for(const [key, value] of Object.entries(window.character.character_data.inventory.wealth))
			{
			document.getElementById("wealth_" + key).value = value;
			}
		}
		
	////////////////// Health
	if(window.character.character_data.health)
		{
		for(const [key, value] of Object.entries(window.character.character_data.health))
			{
			let element = document.getElementById("health_" + key);
			element.value = value;
			element.onchange();
			}
		}
		
	////////////////// Experiences
		
	ui.update_equipment(window.character, "weapons");
	ui.update_equipment(window.character, "head");
	ui.update_equipment(window.character, "body");
	ui.update_equipment(window.character, "jewelry");
	}
	
