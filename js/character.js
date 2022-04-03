import { database as database } from "./database.js";
import { ui as ui } from "./ui.js";
import { utils as utils } from "./utils.js";

function make_attributes()
	{
	return {
		"strength"     : 0,
		"constitution" : 0,
		"stamina"      : 0,
		"agility"      : 0,
		"precision"    : 0,
		"intelligence" : 0,
		"wisdom"       : 0,
		"focus"        : 0,
		"eloquence"    : 0,
		"senses"       : 0,
		"sight"        : 0,
		"touch"        : 0,
		"smell"        : 0,
		"taste"        : 0,
		"hearing"      : 0,
		"social_status": 0,
		"hiddenness"   : 0
		};
	}
function update_senses(attributes)
	{
	attributes["senses"] = /*utils.average*/Math.max(attributes["sight"], attributes["touch"], attributes["smell"], attributes["taste"], attributes["hearing"]);
	}
function add_attributes(a, b)
	{
	let ret = {
		"strength"     : (a["strength"     ] + b["strength"     ]),
		"constitution" : (a["constitution" ] + b["constitution" ]),
		"stamina"      : (a["stamina"      ] + b["stamina"      ]),
		"agility"      : (a["agility"      ] + b["agility"      ]),
		"precision"    : (a["precision"    ] + b["precision"    ]),
		"intelligence" : (a["intelligence" ] + b["intelligence" ]),
		"wisdom"       : (a["wisdom"       ] + b["wisdom"       ]),
		"focus"        : (a["focus"        ] + b["focus"        ]),
		"eloquence"    : (a["eloquence"    ] + b["eloquence"    ]),
		"senses"       : (a["senses"       ] + b["senses"       ]),
		"sight"        : (a["sight"        ] + b["sight"        ] + (b["senses"] ? b["senses"] : 0)),
		"touch"        : (a["touch"        ] + b["touch"        ] + (b["senses"] ? b["senses"] : 0)),
		"smell"        : (a["smell"        ] + b["smell"        ] + (b["senses"] ? b["senses"] : 0)),
		"taste"        : (a["taste"        ] + b["taste"        ] + (b["senses"] ? b["senses"] : 0)),
		"hearing"      : (a["hearing"      ] + b["hearing"      ] + (b["senses"] ? b["senses"] : 0)),
		"social_status": (a["social_status"] + b["social_status"]),
		"hiddenness"   : (a["hiddenness"   ] + b["hiddenness"   ])
		};
	update_senses(ret);
	return ret;
	}
	
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
	constructor(character_data_json)
		{
		this.character_data = character_data_json;
		
		this.attributes = {
			"_0_race"       : make_attributes(),
			"_1_rolls"      : make_attributes(),
			"_2_experiences": make_attributes(),
			"_3_equipment"  : make_attributes(),
			"_4_location"   : make_attributes(),
			"_5_skills"     : make_attributes(),
			"_6_final"      : make_attributes(),
			
			"cache":
				{
				"_2_experiences": 
					{
					"base": { "full": make_attributes(), "reduced": make_attributes() },
					"wild": { "full": make_attributes(), "reduced": make_attributes() },
					"city": { "full": make_attributes(), "reduced": make_attributes() }
					},
				"_3_equipment": make_attributes(),
				"_5_skills"   : make_attributes()
				}
			};
		
		this.weapons_experience = {};
		
		this.stamina_cost = 0;
		
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
			
		this.attributes._0_race = add_attributes(make_attributes(), this.race_data.attributes);
		
		ui.update_race(this);
		this.update_1_rolls();
		}
	update_1_rolls()
		{
		let tmp_roll_attributes = make_attributes();
		for(let [key, value] of Object.entries(this.character_data.attributes.rolls)) 
			{
			tmp_roll_attributes[key] = value - 10;
			}
		
		this.attributes._1_rolls = add_attributes(this.attributes._0_race, tmp_roll_attributes);
		
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
			"base": { "full": make_attributes(), "reduced": make_attributes() },
			"wild": { "full": make_attributes(), "reduced": make_attributes() },
			"city": { "full": make_attributes(), "reduced": make_attributes() }
			};
		
		//remove experiences with 0 years
		
		for (const [key, character_experience] of Object.entries(experiences)) 
			{
			if(!character_experience || character_experience.years <= 0) { delete experiences[key]; }
			}
		
		//continue update
		for (const [key, character_experience] of Object.entries(experiences)) 
			{
			if(this.check_experience(key))
				{
				const experience_data = database.experiences[key];
				
				if(experience_data.attributes)
					{
					for (const [location, attrs] of Object.entries(experience_data.attributes)) 
						{
						if(!this.attributes.cache._2_experiences[location]) { this.attributes.cache._2_experiences[location] = make_attributes(); }
						let cache = this.attributes.cache._2_experiences[location];
						
						for (const [key, value] of Object.entries(attrs)) 
							{
							cache.full[key] += value * character_experience.years;
							}
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
					
					if(weapon_exp_years_tot > character_experience.years) { alert("CHEATER!"); }
					}
				}
			}
		
		for (let [location, cache] of Object.entries(this.attributes.cache._2_experiences))
			{
			let tot = 0;
			
			for(let [key, value] of Object.entries(cache.full)) 
				{
				tot += value; 
				}
			const softened_tot = utils.soften(tot);
			
			//turn linear gain into diminishing returns gain
			for(let [key, value] of Object.entries(cache.full))
				{
				cache.reduced[key] = utils.soften_on_tot_precalc(value, tot, softened_tot);
				}
			}
		
		this.attributes._2_experiences = add_attributes(this.attributes._1_rolls, this.attributes.cache._2_experiences.base.reduced);
		
		ui.update_experiences(this);
		
		this.update_3_equipment();
		}
	update_3_equipment(update_only_ui_slot = null)
		{
		this.attributes.cache._3_equipment = make_attributes();
		this.defenses = { "head": make_defenses(), "body": make_defenses() };
		
		for (const [socket, equipments] of Object.entries(this.character_data.equipment)) 
			{
			for(const equipment of equipments)
				{
				const equipment_data = database.equipment[socket][equipment];
				if(equipment_data)
					{
					if(this.check_equipment(equipment, socket))
						{
						if(equipment_data.defenses && socket !== "weapons")
							{
							if(!this.defenses[socket]) { this.defenses[socket] = make_defenses(); }
							this.defenses[socket] = merge_defenses(this.defenses[socket], equipment_data.defenses);
							}
						if(equipment_data.stamina_cost) { this.stamina_cost += equipment_data.stamina_cost; }
						if(equipment_data.attributes)
							{
							for (const [attribute, value] of Object.entries(equipment_data.attributes)) 
								{
								this.attributes.cache._3_equipment[attribute] += value;
								}
							}
							
							
						if(socket === "weapons") 
							{
							this.evaluate_weapon_stats(equipment);
							}
						}
					else
						{//if a weapon is unequipped, weapon data is still evaluated on the next step
						this.unequip(equipment, socket);
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
		
		this.attributes._3_equipment = add_attributes(this.attributes._2_experiences, this.attributes.cache._3_equipment);
		
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
			
		this.update_4_location();
		}
	update_4_location()
		{
		if(this.attributes.cache._2_experiences[this.character_data.location])
			{
			const current_location_attributes_cached = this.attributes.cache._2_experiences[this.character_data.location];
			this.attributes._4_location = add_attributes(this.attributes._3_equipment, current_location_attributes_cached.reduced);
			}
		else { this.attributes._4_location = this.attributes_3_equipment; }
		
		this.update_5_skills();
		}
	update_5_skills()
		{
		this.attributes.cache._5_skills = make_attributes();
		
		this.skills = new Set();
		
		// Add auto_assign skills which requirements are satisfied
		for(const [skill_name, skill_data] of Object.entries(database.skills))
			{
			if(skill_data.auto_assign && (!skill_data.requirements || this.check_requirements(skill_data.requirements, this.attributes._4_location)))
				{
				this.skills.add(skill_name);
				}
			}
		
		// Add character_data skills which requirements are satisfied
		for(const skill_name of this.character_data.skills)
			{
			const skill_data = database.skills[skill_name];
			if(!skill_data.requirements || check_requirements(skill_data.requirements, this.attributes._4_location))
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
		
		this.attributes._5_skills = add_attributes(this.attributes._4_location, this.attributes.cache._5_skills);
		
		update_senses(this.attributes._5_skills);
		
		ui.update_base(this.attributes._5_skills);
		
		
		this.update_6_final();
		}
	update_6_final()
		{
		this.attributes._6_final = add_attributes(this.attributes._5_skills, this.character_data.attributes.tmp);
		update_senses(this.attributes._6_final);
		
		for(let key of Object.keys(this.attributes._6_final)) 
			{
			this.attributes._6_final[key] = utils.clamp(this.attributes._6_final[key], 0, 100);
			}
			
		ui.update_tot(this.attributes._6_final);
		}
	
	set_race(race)
		{
		this.character_data.race = race;
		this.update_0_race();
		}
	set_roll(attribute, value)
		{
		this.character_data.attributes.rolls[attribute] = value;
		this.update_1_rolls();
		}
	set_tmp(attribute, value)
		{
		this.character_data.attributes.tmp[attribute] = value;
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
			if(!this.check_requirements(experience_data.requirements, this._1_rolls)) { return false; }
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
			if(!requirements.custom(this, attributes_layer)) { return false;}
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
			if(!this.check_requirements(equipment_data.requirements, this.attributes._2_experiences)) { return false; }
			}
		
		return true;
		}
		
	evaluate_weapon_stats(equipment)
		{
		const equipment_data = database.equipment.weapons[equipment];
		this.weapons[equipment] = {
			"attacks_count": 1,
			"stamina_per_attack": equipment_data.stamina_per_attack,
			"attacks": {}
			};
			
		if(this.weapons_experience[equipment_data.type] && equipment_data.experience_per_attack)
		this.weapons[equipment].attacks_count += Math.floor(this.weapons_experience[equipment_data.type] / equipment_data.experience_per_attack)
			
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
					else { final_value += value * this.attributes._2_experiences[attribute]; }
					}
				attack_stats.damage[damage] = final_value;
				}
			if(attack_data.bonus)
				{
				if(attack_data.bonus.strength ) { attack_stats.bonus.strength  = attack_data.bonus.strength;  }
				if(attack_data.bonus.precision) { attack_stats.bonus.precision = attack_data.bonus.precision; }
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
		this.update_3_equipment(slot);
		}
	unequip(name, slot)
		{
		const index = this.character_data.equipment[slot].findIndex(function(element) { return element === name; } );
		if(index != -1)
			{
			this.character_data          .equipment[slot].splice(index, 1);
			this.character_data.inventory.equipment[slot].push(name);
			}
		this.update_3_equipment(slot);
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
		if(socket == "weapons") { this.update_3_equipment("weapons"); } // Since UI's weapons in the inventory needs calculations done on update, we have to update the character as well.
		else { ui.update_equipment(this, socket); }
		}
	//////////////////////////////// EQUIPMENT END
	
	
	}
	
window.Character = Character;

window.data = {
"race": "Elf",
"name": "Donald Fauntleroy Duck",
"location": "city",
"attributes":
	{
	"rolls": //no individual senses
		{
		"strength"     : 10,
		"constitution" : 10,
		"stamina"      : 10,
		"agility"      : 10,
		"precision"    : 10,
		"intelligence" : 10,
		"wisdom"       : 10,
		"focus"        : 10,
		"eloquence"    : 10,
		"senses"       : 10,
		"social_status": 10,
		"hiddenness"   : 10
		},
	"tmp":
		{
		"strength"     : 0,
		"constitution" : 0,
		"stamina"      : 0,
		"agility"      : 0,
		"precision"    : 0,
		"intelligence" : 0,
		"wisdom"       : 0,
		"focus"        : 0,
		"eloquence"    : 0,
		"senses"       : 0,
		"sight"        : 0,
		"touch"        : 0,
		"smell"        : 0,
		"taste"        : 0,
		"hearing"      : 0,
		"social_status": 0,
		"hiddenness"   : 0
		}
	},
	
"experiences":
	{
	"Noble": 
		{
		"years": 5,
		"weapons":
			{
			}
		},
	"Basic Education": { "years": 4 }
	},
	
"skills": ["Help Developer"],

"equipment":
	{
	"head":    [ "Kettle" ],
	"body":    [],
	"jewelry": [],
	"weapons": []
	},

"inventory":
	{
	"equipment":
		{
		"head":    [],
		"body":    [],
		"jewelry": [],
		"weapons": []
		},
	"other":
		{
		"Name": "description"
		}
	},
	
"health":
	{
	"soul"  : 100,
	"head"  : 100,
	"body"  : 100,
	"arm_ll": 100,
	"arm_rr": 100,
	"leg_ll": 100,
	"leg_rr": 100,
	}
};

