import { database as database } from "./database.js";
import { attributes as attributes } from "./attributes.js";
import { ui as ui } from "./ui.js";
import { utils as utils } from "./utils.js";

function make_defenses()
	{
	return {
		"reductions":
			{
			"cut"   : 0,
			"pierce": 0,
			"crush" : 0
			},
		"protection":
			{
			"strength" : 0,
			"precision": 0
			}
		};
	}
function merge_defenses(a, b)
	{
	return {
		"reductions":
			{
			"cut"   : Math.max(a.reductions.cut   , b.reductions.cut   ),
			"pierce": Math.max(a.reductions.pierce, b.reductions.pierce),
			"crush" : Math.max(a.reductions.crush , b.reductions.crush )
			},
		"protection":
			{
			"strength" : Math.max(a.protection.strength , b.protection.strength ),
			"precision": Math.max(a.protection.precision, b.protection.precision)
			}
		};
	}

export class Character
	{
	validate_character_data()
		{
		let data = this.character_data;
		
		if(!data.hasOwnProperty("race"           )) { data.race            = Object.keys(database.races)[0]; }
		if(!data.hasOwnProperty("age"            )) { data.age             = 10; }
		if(!data.hasOwnProperty("name"           )) { data.name            = "Donald Fauntleroy Duck"; }
		if(!data.hasOwnProperty("location"       )) { data.location        = "city"; }
		if(!data.hasOwnProperty("stamina_current")) { data.stamina_current = 999; }
		if(!data.hasOwnProperty("attributes"     )) { data.attributes = {}; }
			
		if(!data.attributes.hasOwnProperty("rolls")) { data.attributes.rolls = attributes.make(); }
		if(!data.attributes.hasOwnProperty("tmp"  )) { data.attributes.tmp   = attributes.make(); }
		
		if(!data.hasOwnProperty("experiences")) { data.experiences = {}; }
		if(!data.hasOwnProperty("skills"     )) { data.skills = []; }
		
		if(!data.hasOwnProperty("equipment")) { data.equipment = {}; }
		
		if(!data.equipment.hasOwnProperty("head"   )) { data.equipment.head    = []; }
		if(!data.equipment.hasOwnProperty("body"   )) { data.equipment.body    = []; }
		if(!data.equipment.hasOwnProperty("jewelry")) { data.equipment.jewelry = []; }
		if(!data.equipment.hasOwnProperty("weapons")) { data.equipment.weapons = []; }
		
		if(!data.hasOwnProperty("inventory")) { data.inventory = {}; }
		
		if(!data.inventory.hasOwnProperty("equipment")) { data.inventory.equipment = {}; }
		if(!data.inventory.equipment.hasOwnProperty("head"   )) { data.inventory.equipment.head    = []; }
		if(!data.inventory.equipment.hasOwnProperty("body"   )) { data.inventory.equipment.body    = []; }
		if(!data.inventory.equipment.hasOwnProperty("jewelry")) { data.inventory.equipment.jewelry = []; }
		if(!data.inventory.equipment.hasOwnProperty("weapons")) { data.inventory.equipment.weapons = []; }
		
		if(!data.inventory.hasOwnProperty("wealth")) { data.inventory.wealth = {}; }
		if(!data.inventory.wealth.hasOwnProperty("platinum")) { data.inventory.wealth.platinum = 0; }
		if(!data.inventory.wealth.hasOwnProperty("gold"    )) { data.inventory.wealth.gold     = 0; }
		if(!data.inventory.wealth.hasOwnProperty("silver"  )) { data.inventory.wealth.silver   = 0; }
		if(!data.inventory.wealth.hasOwnProperty("copper"  )) { data.inventory.wealth.copper   = 0; }
		
		if(!data.inventory.hasOwnProperty("other")) { data.inventory.other = []; }
		
		
	
		if(!data.hasOwnProperty("health")) { data.health = {}; }

		if(!data.health.hasOwnProperty("soul"  )) { data.health.soul   = 100; }
		if(!data.health.hasOwnProperty("head"  )) { data.health.head   = 100; }
		if(!data.health.hasOwnProperty("body"  )) { data.health.body   = 100; }
		if(!data.health.hasOwnProperty("arm_ll")) { data.health.arm_ll = 100; }
		if(!data.health.hasOwnProperty("arm_rr")) { data.health.arm_rr = 100; }
		if(!data.health.hasOwnProperty("leg_ll")) { data.health.leg_ll = 100; }
		if(!data.health.hasOwnProperty("leg_rr")) { data.health.leg_rr = 100; }
		}
		
	constructor(character_data_json)
		{
		this.character_data = character_data_json;
		this.validate_character_data();
		
		this.attributes = {
			"_0_race"       : attributes.make(),
			"_1_rolls"      : attributes.make(),
			"_2_experiences": attributes.make(),
			"_3_location"   : attributes.make(),
			"_4_equipment"  : attributes.make(),
			"_5_skills"     : attributes.make(),
			"_6_final"      : attributes.make(),
			
			"cache":
				{
				"_2_experiences": 
					{
					"base": { "abs": attributes.make(), "full": attributes.make(), "reduced": attributes.make() },
					"wild": { "abs": attributes.make(), "full": attributes.make(), "reduced": attributes.make() },
					"city": { "abs": attributes.make(), "full": attributes.make(), "reduced": attributes.make() }
					},
				"_4_equipment": attributes.make(),
				"_5_skills"   : attributes.make()
				}
			};
		
		this.weapons_experience = {};
		
		this.stamina_cost = 0;
		this.stamina_max = 0;
		
		this.weapons = {};
		
		this.defenses = { "head": make_defenses(), "body": make_defenses() };
		
		this.experience_categories = {};
		
		this.skills = new Set();
		
		this.update_0_race();
		}
		
	update_0_race()
		{
		this.race_data = database.races[this.character_data.race];
		if(this.race_data === null) { console.log("Character update exception: Invalid race"); }
			
		this.attributes._0_race = attributes.from_race(this.race_data.attributes, this.character_data.age);
		
		ui.update_race(this);
		this.update_1_rolls();
		}
	update_1_rolls()
		{
		let reduced_rolls = attributes.from_partial(this.character_data.attributes.rolls);
		attributes.for_each((arr) =>
			{
			const base_value = reduced_rolls.get_value_arr(arr);
			reduced_rolls.set_value_arr(base_value - 10, arr)
			});
		
		this.attributes._1_rolls = attributes.add(this.attributes._0_race, reduced_rolls, true);
		
		ui.update_rolls(this);
		this.update_2_experiences();
		}
	update_2_experiences()
		{
		const experiences = this.character_data.experiences;
		
		this.weapons_experience = {};
		this.experience_categories = {};
		
		this.attributes.cache._2_experiences = 
			{
			"base": { "full": attributes.make(), "growth": attributes.make(), "reduced": attributes.make() },
			"wild": { "full": attributes.make(), "growth": attributes.make(), "reduced": attributes.make() },
			"city": { "full": attributes.make(), "growth": attributes.make(), "reduced": attributes.make() }
			};
		
		//remove experiences with 0 years
		for (const [key, character_experience] of Object.entries(experiences)) 
			{
			if(!character_experience || character_experience.years <= 0) { delete experiences[key]; }
			}
		
		//continue update
		for (const [key, character_experience] of Object.entries(experiences)) 
			{
			const requirements_satisfied = this.check_experience(key);
			
			const experience_data = database.experiences[key];
			
			if(experience_data.attributes)
				{
				for (const [location, attrs] of Object.entries(experience_data.attributes)) 
					{
					let cache = this.attributes.cache._2_experiences[location];
					
					let exp_attrs = attributes.from_partial(attrs);
					
					//if(!requirements_satisfied) { exp_attrs.multiply_self(.5); }
					
					attributes.for_each((arr) =>
						{
						let value = exp_attrs.get_value_arr(arr);
						if(value) { exp_attrs.set_value_arr(value * character_experience.years, arr); }
						});
					
					cache.full = attributes.add(cache.full, exp_attrs, false);
					}
				}
			
			if(experience_data.categories)
				{
				for(const category of experience_data.categories)
					{
					if(!this.experience_categories[category]) { this.experience_categories[category] = character_experience.years; }
					else { this.experience_categories[category] += character_experience.years; }
					}
				}
			
			if(experience_data.weapons && character_experience.weapons)
				{
				let weapon_exp_years_tot = 0;
				
				for (const [weapon, years] of Object.entries(character_experience.weapons)) 
					{
					if(experience_data.weapons.includes(weapon))
						{
						if(!this.weapons_experience[weapon]) { this.weapons_experience[weapon] = years; }
						else { this.weapons_experience[weapon] += years; }
						weapon_exp_years_tot += years;
						}
					}
				
				if(weapon_exp_years_tot > character_experience.years) { alert("Weapon experience cannot be greater than the years of experience from which that weapon experience comes."); }
				}
			}
		
		
		function apply_growth_factor(value, factor, neg_factor) 
			{
			if(!neg_factor) { neg_factor = factor / 2; }
			if(value >= 0) { return  Math.pow(         value , 1/factor    ); }
			else           { return -Math.pow(Math.abs(value), 1/neg_factor); }
			}
		
		attributes.for_each((arr) =>
			{
			const race_attr_exp_weight = attributes.get_object_arr(arr, this.race_data.attributes).experience(this.character_data.age);
			
			for (let [location, cache] of Object.entries(this.attributes.cache._2_experiences))
				{
				const percent = cache.full.get_value_arr(arr) / (this.character_data.age * 3);
				const growth  = apply_growth_factor(percent, 4/*TODO customizable growth factor*/);
				const value   = growth * race_attr_exp_weight;
				cache.growth .set_value_arr(growth, arr);
				cache.reduced.set_value_arr(value , arr);
				}
			});	
		
		this.attributes._2_experiences = attributes.add(this.attributes._1_rolls, this.attributes.cache._2_experiences.base.reduced, true);
		
		ui.update_experiences(this);
		
		this.update_3_location();
		}
	update_3_location()
		{
		if(this.attributes.cache._2_experiences[this.character_data.location])
			{
			const current_location_attributes_cached = this.attributes.cache._2_experiences[this.character_data.location];
			this.attributes._3_location = attributes.add(this.attributes._2_experiences, current_location_attributes_cached.reduced, true);
			}
		else { this.attributes._3_location = this.attributes._2_experiences; }
		
		this.update_4_equipment();
		}
	update_4_equipment(update_only_ui_slot = null)
		{
		this.attributes.cache._4_equipment = attributes.make();
		this.defenses = { "head": make_defenses(), "body": make_defenses() };
		
		for (const [socket, equipments] of Object.entries(this.character_data.equipment)) 
			{
			for(const equipment of equipments)
				{
				const equipment_data = database.equipment[socket][equipment];
				if(equipment_data)
					{
					const requirements_satisfied = this.check_equipment(equipment, socket);
					
					if(equipment_data.defenses && socket !== "weapons")
						{
						if(!this.defenses[socket]) { this.defenses[socket] = make_defenses(); }
						this.defenses[socket] = merge_defenses(this.defenses[socket], equipment_data.defenses);
						}
					if(equipment_data.stamina_cost) { this.stamina_cost += equipment_data.stamina_cost; }
					if(equipment_data.attributes)
						{
						attributes.for_each((arr) =>
							{
							let obj = attributes.get_object_arr(arr, equipment_data.attributes);
							if(obj && obj.value)
								{
								const add_to = this.attributes.cache._4_equipment.get_value_arr(arr);
								const value  = requirements_satisfied ? obj.value : obj.value > 0 ? obj.value / 2 : obj.value * 2;
								this.attributes.cache._4_equipment.set_value_arr(add_to + value, arr);
								}
							});
						}
						
						
					if(socket === "weapons") 
						{
						this.evaluate_weapon_stats(equipment);
						}
					}
				else { console.log("Equipment not found: '" + socket + "/" + equipment + "'"); }
				}
			}
		
		if(this.character_data.inventory.equipment["weapons"])
			{
			for(const equipment of this.character_data.inventory.equipment["weapons"])
				{
				const equipment_data = database.equipment["weapons"][equipment];
				if(equipment_data)
					{
					this.evaluate_weapon_stats(equipment);
					}
				else { console.log("Equipment not found: 'inventory/" + socket + "/" + equipment + "'"); }
				}
			}
		
		this.attributes._4_equipment = attributes.add(this.attributes._3_location, this.attributes.cache._4_equipment, true);
		
		// If this update was called by a change of equipment, other slots don't need to be changed.
		// If this parameter is null, this update was called by a change of previous levels of attributes, which 
		// may invalidate any equipment's satisfaction of its requirements. So all equipments must be updated.
		if(update_only_ui_slot) { ui.update_equipment(this, update_only_ui_slot); }
		else
			{ 
			ui.update_equipment(this, "head"); 
			ui.update_equipment(this, "body"); 
			ui.update_equipment(this, "jewelry"); 
			ui.update_equipment(this, "weapons");
			}
			
		ui.update_defenses(this);
			
		this.update_5_skills();
		}
	
	update_5_skills()
		{
		this.attributes.cache._5_skills = attributes.make();
		
		this.skills = new Set();
		
		// Add auto_assign skills which requirements are satisfied
		for(const [skill_name, skill_data] of Object.entries(database.skills))
			{
			if(skill_data.auto_assign && (!skill_data.requirements || this.check_requirements(skill_data.requirements, this.attributes._4_equipment)))
				{
				this.skills.add(skill_name);
				}
			}
		
		// Add character_data skills which requirements are satisfied
		for(const skill_name of this.character_data.skills)
			{
			const skill_data = database.skills[skill_name];
			if(!skill_data.requirements || check_requirements(skill_data.requirements, this.attributes._3_location))
				{
				this.skills.add(skill_name)
				}
			}
			
		// Evaluate skill effect (if any) for added skills
		for(const skill_name of this.skills)
			{
			const skill_data = database.skills[skill_name];
			if(skill_data.effect) { skill_data.effect(this); }
			}			
		
		ui.update_skills(this);
		
		this.attributes._5_skills = attributes.add(this.attributes._4_equipment, this.attributes.cache._5_skills, true);
		
		ui.update_base(this.attributes._5_skills);
		
		
		this.update_6_final();
		}
	update_6_final()
		{
		this.attributes._6_final = attributes.add(this.attributes._5_skills, this.character_data.attributes.tmp, true);
		
		this.stamina_max = Math.floor(this.attributes._6_final.stamina.value);
		ui.update_tot(this, this.attributes._6_final);
		}
	
	set_race(race)
		{
		this.character_data.race = race;
		this.update_0_race();
		}
	set_roll(attribute, value)
		{
		this.character_data.attributes.rolls[attribute].value = value;
		this.update_1_rolls();
		}
	set_tmp(arr, value)
		{
		attributes.get_object_arr(arr, this.character_data.attributes.tmp).value = value;
		this.update_6_final();
		}
	/* expects (string_name, {years: number, weapons { name: number, name: number ...}})*/
	
	//////////////////////////////// EXPERIENCE BEG
	set_experience(name, data)
		{
		if(data.years !== 0) 
			{
			if(!this.character_data.experiences[name]) { add_experience(name); }
		
			if(data.years) { this.character_data.experiences[name].years = data.years; }
			
			if(data.weapons)
				{
				for(const [key, value] of Object.entries(data.weapons))
					{
					this.character_data.experiences[name].weapons[key] = value;
					}
				}
			}
		else 
			{
			if(this.character_data.experiences[name]) { this.character_data.experiences[name] = null; }
			}
			
		this.update_2_experiences();
		}
	add_experience(name)
		{
		let new_experience = this.character_data.experiences[name];
		if(new_experience) { return new_experience; }
		
		new_experience = { years: 1 };
		const experience_data = database.experiences[name];
		if(!experience_data) { return; }
		if(experience_data.weapons)
			{
			new_experience.weapons = {};
			for(const weapon of experience_data.weapons)
				{
				new_experience.weapons[weapon] = 0;
				}
			}
		this.character_data.experiences[name] = new_experience;
		this.update_2_experiences();
		}
	
	check_experience(name)
		{
		const experience_data = database.experiences[name];
		if(!experience_data) { return false; }
		if(experience_data.requirements)
			{
			if(!this.check_requirements(experience_data.requirements, this.attributes._1_rolls)) { return false; }
			}
		
		return true;
		}
	
		
	check_requirements(requirements, attributes_layer)
		{
		if(requirements.races)
			{
			if(requirements.races.length !== 0)
				{
				if(!requirements.races.includes(this.character_data.race))  { return false; }
				}
			}
			
		if(requirements.attributes)
			{
			let result = true;
			attributes.for_each((arr) =>
				{
				let obj = attributes.get_object_arr(arr, requirements.attributes);
				if(obj && obj.value)
					{
					const value = attributes_layer.get_value_arr(arr);
					if(value < obj.value) { result = false; }
					}
				});
			if(!result) { return false; }
			}
		
		if(requirements.experiences)
			{
			for (const [key, value] of Object.entries(requirements.experiences)) 
				{
				if(!this.character_data.experiences[key]) { return false; }
				if(this.character_data.experiences[key].years < value) { return false; }
				}
			}
			
		if(requirements.experience_categories)
			{
			for (const [key, value] of Object.entries(requirements.experience_categories)) 
				{
				if(!this.experience_categories[key]) { return false; }
				if(this.experience_categories[key].years < value) { return false; }
				}
			}
			
		if(requirements.weapons_experience)
			{
			for (const [key, value] of Object.entries(requirements.weapons_experience)) 
				{
				if(!this.weapons_experience[key]) { return false; }
				if(this.weapons_experience[key]  < value) { return false; }
				}
			}
			
		if(requirements.custom)
			{
			if(!requirements.custom(this, attributes_layer)) { return false; }
			}
			
		return true;
		}
	
	//////////////////////////////// EQUIPMENT BEG
	check_equipment(name, socket)
		{
		const equipment_data = database.equipment[socket][name];
		if(!equipment_data) { return false; }
		if(equipment_data.requirements)
			{
			if(!this.check_requirements(equipment_data.requirements, this.attributes._3_location)) { return false; }
			}
		
		return true;
		}
		
	evaluate_weapon_stats(equipment)
		{
		const equipment_data = database.equipment.weapons[equipment];
		
		const requirements_satisfied = this.check_equipment(equipment, "weapons");
		
		this.weapons[equipment] = {
			"attacks_count": 1,
			"stamina_per_attack": equipment_data.stamina_per_attack,
			"attacks": {}
			};
		
		if(this.weapons_experience[equipment_data.type] && equipment_data.experience_per_attack)
			{
			this.weapons[equipment].attacks_count += Math.floor(this.weapons_experience[equipment_data.type] / equipment_data.experience_per_attack);
			}
			
		for(const [attack, attack_data] of Object.entries(equipment_data.attacks))
			{
			let attack_stats = this.weapons[equipment].attacks[attack];
			attack_stats = {
				"range" : attack_data.range,
				"damage": { "cut": 0, "pierce": 0, "crush": 0 },
				"bonus" : { "strength": 0, "precision": 0 }
				};
			for(const [damage, damage_data] of Object.entries(attack_data.damage))
				{
				let final_value = 0;
				
				for(const [attribute, value] of Object.entries(damage_data))
					{
					if(attribute === "base") { final_value += value; }
					else { final_value += value * this.attributes._2_experiences[attribute].value; }
					}
				attack_stats.damage[damage] = final_value;
				}
			if(attack_data.bonus)
				{
				if(attack_data.bonus.strength ) { attack_stats.bonus.strength  = requirements_satisfied ? attack_data.bonus.strength  : utils.worsen_value(attack_data.bonus.strength , 10); }
				else                            { attack_stats.bonus.strength  = -10; }
				if(attack_data.bonus.precision) { attack_stats.bonus.precision = requirements_satisfied ? attack_data.bonus.precision : utils.worsen_value(attack_data.bonus.precision, 10); }
				else                            { attack_stats.bonus.precision = -10; }
				}
			else if (!requirements_satisfied)
				{
				attack_stats.bonus.strength  = -10;
				attack_stats.bonus.precision = -10;
				}
			this.weapons[equipment].attacks[attack] = attack_stats;
			}
		}
	
	// REST
	equip(name, slot)
		{
		const index = this.character_data.inventory.equipment[slot].findIndex(function(element) { return element === name; } );
		if(index != -1)
			{
			this.character_data.inventory.equipment[slot].splice(index, 1);
			this.character_data          .equipment[slot].push(name);
			}
		this.update_4_equipment(slot);
		}
	unequip(name, slot)
		{
		const index = this.character_data.equipment[slot].findIndex(function(element) { return element === name; } );
		if(index != -1)
			{
			this.character_data          .equipment[slot].splice(index, 1);
			this.character_data.inventory.equipment[slot].push(name);
			}
		this.update_4_equipment(slot);
		}
	delete_equipment(name, slot)
		{
		const index = this.character_data.inventory.equipment[slot].findIndex(function(element) { return element === name; } );
		if(index != -1)
			{
			this.character_data.inventory.equipment[slot].splice(index, 1);
			}
		ui.update_equipment(this, slot);
		}
	add_equipment(name, socket)
		{
		const data = database.equipment[socket][name];
		if(!data) { return; }
		this.character_data.inventory.equipment[socket].push(name);
		if(socket == "weapons") { this.update_4_equipment("weapons"); } // Since UI's weapons in the inventory needs calculations done on update, we have to update the character as well.
		else { ui.update_equipment(this, socket); }
		}
	//////////////////////////////// EQUIPMENT END
	}
	
window.Character = Character;

window.data = {};

