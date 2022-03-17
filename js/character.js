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
	attributes["senses"] = utils.average(attributes["sight"], attributes["touch"], attributes["smell"], attributes["taste"], attributes["hearing"]);
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
		"sight"        : (a["sight"        ] + b["sight"        ]),
		"touch"        : (a["touch"        ] + b["touch"        ]),
		"smell"        : (a["smell"        ] + b["smell"        ]),
		"taste"        : (a["taste"        ] + b["taste"        ]),
		"hearing"      : (a["hearing"      ] + b["hearing"      ]),
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
			"_5_final"      : make_attributes(),
			
			"cache_experiences": 
				{
				"base": { "full": make_attributes(), "reduced": make_attributes() },
				"wild": { "full": make_attributes(), "reduced": make_attributes() },
				"city": { "full": make_attributes(), "reduced": make_attributes() }
				}
			};
		
		this.weapons_experience = {};
		
		this.stamina_cost = 0;
		
		this.defenses = { "head": make_defenses(), "body": make_defenses() };
		
		this.update_0_race();
		}
		
	update_0_race()
		{
		this.race_data = database.races[this.character_data.race];
		if(this.race_data === null) { console.log("Character update exception: Invalid race"); }
			
		this.attributes._0_race = this.race_data.attributes;
		update_senses(this.attributes._0_race);
		
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
		
		tmp_roll_attributes["sight"]   = tmp_roll_attributes["senses"];
		tmp_roll_attributes["touch"]   = tmp_roll_attributes["senses"];
		tmp_roll_attributes["smell"]   = tmp_roll_attributes["senses"];
		tmp_roll_attributes["taste"]   = tmp_roll_attributes["senses"];
		tmp_roll_attributes["hearing"] = tmp_roll_attributes["senses"];
		
		this.attributes._1_rolls = add_attributes(this.attributes._0_race, tmp_roll_attributes);
		
		ui.update_rolls(this);
		this.update_2_experiences();
		}
	update_2_experiences()
		{
		const experiences = this.character_data.experiences;
		
		this.weapons_experience = {};
		
		this.attributes.cache_experiences = 
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
						if(!this.attributes.cache_experiences[location]) { this.location_attributes_cache[key] = make_attributes(); }
						let cache = this.attributes.cache_experiences[location];
						
						for (const [key, value] of Object.entries(attrs)) 
							{
							cache.full[key] += value * character_experience.years;
							}
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
		
		for (let [location, cache] of Object.entries(this.attributes.cache_experiences))
			{
			//turn linear gain into diminishing returns gain
			for(let [key, value] of Object.entries(cache.full))
				{
				cache.reduced[key] = Math.round(Math.pow(value, 0.9));
				}
			}
		
		this.attributes._2_experiences = add_attributes(this.attributes._1_rolls, this.attributes.cache_experiences.base.reduced);
		update_senses(this.attributes._2_experiences);
		
		ui.update_experiences(this);
		
		this.update_3_equipment();
		}
	update_3_equipment(update_only_ui_slot = null)
		{
		this.attributes._3_equipment = { ...this.attributes._2_experiences };
		this.defenses = { "head": make_defenses(), "body": make_defenses() };
		
		for (const [socket, equipments] of Object.entries(this.character_data.equipment)) 
			{
			for(const equipment of equipments)
				{
				if(this.check_equipment(equipment, socket))
					{
					const equipment_data = database.equipment[socket][equipment];
					if(equipment_data)
						{
						if(equipment_data.defenses)
							{
							if(!this.defenses[socket]) { this.defenses[socket] = make_defenses(); }
							this.defenses[socket] = merge_defenses(this.defenses[socket], equipment_data.defenses);
							}
						if(equipment_data.stamina_cost) { this.stamina_cost += equipment_data.stamina_cost; }
						if(equipment_data.attributes)
							{
							for (const [attribute, value] of Object.entries(equipment_data.attributes)) 
								{
								this.attributes._3_equipment[attribute] += value;
								}
							}
						}
					else { console.log("Equipment not found: '" + socket + "/" + equipment + "'"); }
					}
				}
			}
		
		update_senses(this.attributes._3_equipment);
		//TODOOOOO weapons
		
		// If this update was called by a change of equipment, other slots don't need to be changed.
		// If this parameter is null, this update was called by a change of previous levels of attributes, which 
		// may invalidate any equipment's satisfaction of its requirements. So all equipments must be updated.
		if(update_only_ui_slot) { ui.update_equipment(this, update_only_ui_slot); }
		else
			{ 
			ui.update_equipment(this, "head"); 
			ui.update_equipment(this, "body"); 
			ui.update_equipment(this, "jewelry"); 
			}
			
		ui.update_defenses(this);
		this.update_4_location();
		}
	update_4_location()
		{
		let current_location_attributes = this.attributes.cache_experiences[this.character_data.location].reduced;
		if(current_location_attributes === null) { this.attributes._4_location = this.attributes._3_equipment; }
		else { this.attributes._4_location = add_attributes(this.attributes._3_equipment, current_location_attributes); }
		
		update_senses(this.attributes._4_location);
		
		ui.update_base(this);
		this.update_5_final();
		}
	update_5_final()
		{
		this.attributes._5_final = add_attributes(this.attributes._4_location, this.character_data.attributes.tmp);
		this.attributes._5_final["sight"]   += this.character_data.attributes.tmp["senses"];
		this.attributes._5_final["touch"]   += this.character_data.attributes.tmp["senses"];
		this.attributes._5_final["smell"]   += this.character_data.attributes.tmp["senses"];
		this.attributes._5_final["taste"]   += this.character_data.attributes.tmp["senses"];
		this.attributes._5_final["hearing"] += this.character_data.attributes.tmp["senses"];
		update_senses(this.attributes._5_final);
		
		for(let [key, value] of Object.entries(this.attributes._5_final)) 
			{
			value = utils.clamp(value, 0, 100);
			}
			
		ui.update_tot(this);
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
		this.update_5_final();
		}
	/* expects (string_name, {years: number, weapons { name: number, name: number ...}})*/
	
	//////////////////////////////// EXPERIENCE BEG
	set_experience(name, data)
		{
		console.dir(this.character_data.experiences[name]);
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
		console.dir(this.character_data.experiences[name]);
			
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
		if(experience_data.requirements_check)
			{ if(!experience_data.requirements_check(this)) { return false;} }
		
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
			
		if(requirements.weapons_experience)
			{
			for (const [key, value] of Object.entries(requirements.weapons_experience)) 
				{
				if(!this.weapons_experience[key]) { return false; }
				if(this.weapons_experience[key]  < value) { return false; }
				}
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
			if(!this.check_requirements(equipment_data.requirements, this._2_experiences)) { return false; }
			}
		
		return true;
		}
	
	// WEAPONS
	add_weapon(name)
		{
		const data = database.weapons[name];
		if(!data) { return; }
		this.character_data.inventory.weapons.push(name);
		ui.update_weapons(this);
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
		ui.update_equipment(this, slot);
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
		ui.update_equipment(this, slot);
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
		ui.update_equipment(this, socket);
		}
	//////////////////////////////// EQUIPMENT END
	
	
	}
	
window.Character = Character;

window.data = {
"race": "Elf",
"name": "Donald Fauntlery Duck",
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
		"strength"     : 5,
		"constitution" : 5,
		"stamina"      : 5,
		"agility"      : 5,
		"precision"    : 5,
		"intelligence" : 5,
		"wisdom"       : 5,
		"focus"        : 5,
		"eloquence"    : 5,
		"senses"       : 5,
		"sight"        : 5,
		"touch"        : 5,
		"smell"        : 5,
		"taste"        : 5,
		"hearing"      : 5,
		"social_status": 5,
		"hiddenness"   : 5
		}
	},
	
"experiences":
	{
	"Noble": 
		{
		"years": 5,
		"weapons":
			{
			"sword": 3,
			"axe"  : 2
			}
		},
	"School": { "years": 4 }
	},

"equipment":
	{
	"head":    [ "Kettle" ],
	"body":    [],
	"jewelry": []
	},	
"weapon_left" : null,
"weapon_right": null,

"inventory":
	{
	"weapons": [],
	"equipment":
		{
		"head":    [],
		"body":    [],
		"jewelry": []
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

