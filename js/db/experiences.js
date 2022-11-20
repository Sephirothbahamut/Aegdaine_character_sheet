export const experiences = 
{
"Education":  
	{
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":     .50 }, 
			"wisdom":        { "value":     .50 }, 
			"focus":         { "value":     .50 }, 
			"social_status": { "value":     .50 } 
			}
		}
	},
"Military training": 
	{ 
	"requirements": { "experiences": { "Education": 3 } },
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"strength":      { "value":    .75 },
			"constitution":  { "value":    .75 }, 
			"stamina":       { "value":    .75 }, 
			"agility":       { "value":    .75 }, 
			"precision":     { "value":    .75 }
			}
		},
	"weapons": [ "Axe", "Bow", "Mace", "Polearm", "Shield", "Short Weapon", "Sword" ]
	},
"Magic training":  
	{
	"requirements": { "experiences": { "Education": 4 } },
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":     .80 }, 
			"wisdom":        { "value":     .80 }, 
			"focus":         { "value":    1.00 }
			}
		}
	},
"Mage": 
	{ 
	"requirements": { "experiences": { "Magic training": 3 } },
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":    .80 }, 
			"wisdom":        { "value":    .80 }, 
			"focus":         { "value":   1.00 }, 
			"social_status": { "value":    .50 } 
			}
		}
	},
"Priest": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":    .50 }, 
			"wisdom":        { "value":   1.00 }, 
			"focus":         { "value":    .50 }, 
			"social_status": { "value":   1.00 } 
			}
		}
	},
"Scout": 
	{ 
	"requirements": { "experiences": { "Military training": 1.00 } },
	"attributes": 
		{
		"base": 
			{ 
			"stamina":       { "value":    .75 }, 
			"agility":       { "value":    .75 }, 
			"senses":        { "value":    .75 }, 
			"social_status": { "value":   -.75 } 
			},
		"wild": 
			{ 
			"agility":       { "value":    .50 }, 
			"wisdom":        { "value":    .25 }, 
			"senses":        { "value":    .25 }, 
			"hiddenness":    { "value":    .50 }
			}
		},
	"weapons": [ "Axe", "Short Weapon" ]
	},
"Guard": 
	{ 
	"requirements": { "experiences": { "Military training": 3 } },
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"constitution":  { "value":    .75 }, 
			"stamina":       { "value":    .50 }, 
			"senses":        { "value":    .80 } 
			},
		"city": 
			{ 
			"intelligence":  { "value":    .50 }, 
			"focus":         { "value":    .50 }, 
			"senses":        { "value":    .20 } 
			}
		},
	"weapons": [ "Axe", "Mace", "Polearm", "Shield", "Sword" ]
	},
"Soldier": 
	{ 
	"requirements": { "experiences": { "Military training": 3 } },
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"strength":      { "value":   1.00 },
			"constitution":  { "value":   1.00 }, 
			"stamina":       { "value":    .50 }, 
			"social_status": { "value":   -.50 } 
			}
		},
	"weapons": [ "Axe", "Bow", "Mace", "Polearm", "Shield", "Sword" ]
	},
"Duelist": 
	{ 
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"stamina":       { "value":    .20 }, 
			"agility":       { "value":    .80 }, 
			"precision":     { "value":   1.00 }, 
			"social_status": { "value":    .20 } 
			},
		"city": 
			{ 
			"social_status": { "value":    .80 }
			}
		},
	"weapons": [ "Axe", "Mace", "Polearm", "Short Weapon", "Sword" ]
	},
"Captain": 
	{ 
	"requirements": { "experiences": { "Military training": 3 } },
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"strength":      { "value":    .50 },
			"intelligence":  { "value":    .80 }, 
			"wisdom":        { "value":    .50 }, 
			"focus":         { "value":    .20 }, 
			"social_status": { "value":    .80 } 
			}
		},
	"weapons": [ "Mace", "Shield", "Sword" ]
	},
"General": 
	{ 
	"requirements": { "experiences": { "Military training": 3 } },
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":    .80 }, 
			"wisdom":        { "value":    .80 }, 
			"focus":         { "value":    .50 }, 
			"eloquence":     { "value":    .50 }, 
			"social_status": { "value":   1.00 } 
			}
		},
	"weapons": [ "Mace", "Shield", "Sword" ]
	},
"Bartender/Waiter": 
	{ 
	"attributes": 
		{
		"city": 
			{ 
			"eloquence":     { "value":    .50 },
			"intelligence":  { "value":    .50 }, 
			"senses":        { "value":   1.00 } 
			}
		},
	},
"Druid":
	{	
	"requirements": { "experiences": { "Magic training": 3 } },
	"attributes": 
		{
		"base": 
			{ 
			"hiddenness":    { "value":    .25 }
			},
		"city":
			{
			"senses":        { "value":  -1.00 },
			"social_status": { "value":  -1.00 }
			},
		"wild": 
			{ 
			"intelligence":  { "value":    .50 }, 
			"wisdom":        { "value":   1.00 },
			"social_status": { "value":   1.00 }
			}
		}
	},
"Shopkeeper": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"eloquence":     { "value":   1.00 } 
			},
		"city": 
			{ 
			"intelligence":  { "value":   1.00 }, 
			"hiddenness":    { "value":  -2.00 },
			"senses":        { "value":   2.00 } 
			}
		},
	},
"Merchant":
	{
	"attributes":
		{
		"base": 
			{ 
			"stamina":       { "value":    .25 }, 
			"hiddenness":    { "value":  -1.00 },
			"eloquence":     { "value":   1.00 }
			},
		"city": 
			{ 
			"wisdom":        { "value":   1.00 }
			}
		}
	},
"Noble": 
	{ 
	"requirements": { "experiences": { "Education": 3 } },
	"attributes": 
		{
		"base": 
			{ 
			"eloquence":     { "value":   1.00 }, 
			"social_status": { "value":   1.00 } 
			},
		"city": 
			{ 
			"intelligence":  { "value":   1.00 }
			}
		},
	"weapons": [ "Sword" ]
	},
"Researcher": 
	{ 
	"requirements": { "experiences": { "Education": 5 } },
	"attributes": 
		{
		"base": 
			{ 
			"constitution":  { "value":   -.50 }, 
			"wisdom":        { "value":    .80 },
			"intelligence":  { "value":    .80 }, 
			"focus":         { "value":    .80 }
			},
		"city": 
			{ 
			"wisdom":        { "value":    .20 }
			}
		}
	},
"Medic":
	{
	"requirements": { "experiences": { "Education": 5 } },
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":    .80 },
			"precision":     { "value":    .80 },
			"wisdom":        { "value":    .80 },
			"focus":         { "value":    .50 }
			},
		"city": 
			{ 
			"wisdom":        { "value":    .20 },
			"social_status": { "value":    .50 }
			}
		}
	},
"Painter": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"precision":     { "value":   1.00 }, 
			"intelligence":  { "value":    .25 }, 
			"focus":         { "value":    .80 },
			"senses":        
				{
				"components": 
					{
					"sight": { "value":   1.00 },
					"touch": { "value":    .80 }
					}
				}
			},
		},
	},
"Musician": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":    .25 }, 
			"focus":         { "value":    .80 }, 
			"eloquence":     { "value":    .80 }, 
			"senses":        
				{
				"components": 
					{
					"hearing": { "value": 1.00 }
					}
				}
			},
		"city": 
			{ 
			"social_status": { "value":    .80 }
			}
		}
	},
"Blacksmith": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"strength":      { "value":   1.00 }, 
			"constitution":  { "value":   1.00 }, 
			"senses":        
				{
				"value":  -1.00,
				"components": 
					{
					"touch": { "value":   1.00 }
					}
				}
			},
		"city": 
			{ 
			"social_status": { "value":    .25 }
			},
		"wild": 
			{ 
			"social_status": { "value":   -.5 }
			}
		},
	},
"Architect": 
	{ 
	"attributes": 
		{
		"city": 
			{ 
			"intelligence":  { "value":    .80 }, 
			"wisdom":        { "value":    .75 }, 
			"social_status": { "value":    .75 } 
			}
		},
	},
"Alchemist": 
	{ 
	"requirements": { "experiences": { "Magic training": 3 } },
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":   1.00 }, 
			"wisdom":        { "value":    .80 }, 
			"focus":         { "value":    .25 }
			},
		"city": 
			{ 
			"wisdom":        { "value":    .20 }, 
			"focus":         { "value":    .25 } 
			}
		},
	},
"Envoy": 
	{ 
	"requirements": { "experiences": { "Education": 3 } },
	"attributes": 
		{
		"base": 
			{ 
			"eloquence":     { "value":   1.00 }, 
			"social_status": { "value":   1.00 } 
			},
		"city": 
			{ 
			"wisdom":        { "value":   1.00 }
			}
		},
	},
"Explorer": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"stamina":       { "value":    .50 }, 
			"wisdom":        { "value":    .50 }
			},
		"city": 
			{  
			"focus":         { "value":   -.75 },
			"eloquence":     { "value":    .80 }, 
			"social_status": { "value":    .75 } 
			},
		"wild": 
			{ 
			"senses":        { "value":    .80 }
			}
		},
	"weapons": [ "Axe", "Bow", "Short Weapon" ]
	},
"Hunter": 
	{
	"attributes": 
		{
		"base": 
			{ 
			"strength":      { "value":    .50 },
			},
		"city": 
			{ 
			"focus":         { "value":   -.50 }, 
			"senses":        { "value":   -.50 }, 
			"social_status": { "value":   -.50 } 
			},
		"wild": 
			{ 
			"agility":       { "value":    .75 }, 
			"precision":     { "value":    .75 }, 
			"wisdom":        { "value":    .50 }, 
			"focus":         { "value":    .50 }, 
			"senses":        { "value":   1.00 }, 
			"hiddenness":    { "value":   1.00 }
			}
		},
	"weapons": [ "Axe", "Bow", "Polearm", "Short Weapon" ]
	},
"Heremit": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"eloquence":     { "value":  -1.00 }, 
			"social_status": { "value":  -1.00 } 
			},
		"city": 
			{ 
			"focus":         { "value":  -1.00 }, 
			"senses":        { "value":  -1.00 } 
			},
		"wild": 
			{ 
			"intelligence":  { "value":   1.00 }, 
			"wisdom":        { "value":   1.00 }, 
			"focus":         { "value":   1.00 }, 
			"senses":        { "value":   1.00 } 
			}
		},
	},
"Gladiator": 
	{ 
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"strength":      { "value":   1.00 },
			"constitution":  { "value":   0.80 }, 
			"stamina":       { "value":   0.50 } 
			},
		"city": 
			{ 
			"social_status": { "value":   1.00 } 
			},
		"wild": 
			{ 
			"social_status": { "value":   -.50 } 
			}
		},
	"weapons": [ "Axe", "Mace", "Shield", "Sword" ]
	},
"Alchoolic": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"wisdom":        { "value":   -.25 }, 
			"focus":         { "value":   -.25 }, 
			"eloquence":     { "value":   1.00 }, 
			"senses":        { "value":   -.25 } 
			}
		},
	},
"Reading": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":   1.00 }, 
			"wisdom":        { "value":   1.00 }
			}
		},
	},
"Horse Riding": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"agility":       { "value":   1.00 },
			"strength":      { "value":    .25 }
			},
		"wild": 
			{ 
			"senses":        { "value":    .50 } 
			}
		},
	},
"Gambling": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"agility":       { "value":    .50 }, 
			"intelligence":  { "value":    .50 }, 
			"wisdom":        { "value":   -.75 }, 
			"eloquence":     { "value":    .50 }, 
			"senses":        { "value":   1.00 } 
			},
		"city": 
			{ 
			"agility":       { "value":    .25 }, 
			"intelligence":  { "value":    .25 }, 
			"eloquence":     { "value":    .25 }
			}
		},
	},
"Brigandage (Wild)": 
	{ 
	"attributes": 
		{
		"base":
			{
			"strength":      { "value":    .25 },
			"constitution":  { "value":    .25 }, 
			"stamina":       { "value":    .25 }
			},
		"city": 
			{ 
			"hiddenness":    { "value":   -.75 }
			},
		"wild": 
			{ 
			"senses":        { "value":    .80 }, 
			"hiddenness":    { "value":   1.00 }
			}
		},
	"weapons": [ "Short Weapon" ]
	},
"Thiefing (Town)": 
	{ 
	"attributes": 
		{
		"base":
			{
			"strength":      { "value":    .25 },
			"constitution":  { "value":    .25 }, 
			"stamina":       { "value":    .25 }
			},
		"city": 
			{ 
			"senses":        { "value":    .80 }, 
			"hiddenness":    { "value":   1.00 }
			},
		"wild": 
			{ 
			"hiddenness":    { "value":   -.75 }
			}
		},
	"weapons": [ "Short Weapon" ]
	},
"Orator": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"eloquence":     { "value":   1.00 }, 
			"intelligence":  { "value":    .50 }, 
			"wisdom":        { "value":    .50 }
			},
		"city": 
			{ 
			"wisdom":        { "value":    .25 }
			}
		},
	},
"Beggar":  
	{
	"attributes":
		{
		"base":
			{
			"social_status": { "value":  -1 } 
			}
		}
	}
}