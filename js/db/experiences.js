export const experiences = 
{
"Education":  
	{
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":   .5 }, 
			"wisdom":        { "value":   .5 }, 
			"focus":         { "value":   .5 }, 
			"social_status": { "value":   .5 } 
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
			"strength":      { "value":   1 },
			"constitution":  { "value":   1 }, 
			"stamina":       { "value":   1 }, 
			"agility":       { "value":   1 }, 
			"precision":     { "value":   1 }
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
			"intelligence":  { "value":    1 }, 
			"wisdom":        { "value":    1 }, 
			"focus":         { "value":    2 }
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
			"intelligence":  { "value":   2 }, 
			"wisdom":        { "value":   1 }, 
			"focus":         { "value":   1 }, 
			"social_status": { "value":   1 } 
			}
		}
	},
"Scout": 
	{ 
	"requirements": { "experiences": { "Military training": 1 } },
	"attributes": 
		{
		"base": 
			{ 
			"stamina":       { "value":   1 }, 
			"agility":       { "value":   1 }, 
			"senses":        { "value":   1 }, 
			"social_status": { "value":  -1 } 
			},
		"wild": 
			{ 
			"agility":       { "value":   1 }, 
			"wisdom":        { "value":   1 }, 
			"senses":        { "value":   1 }, 
			"hiddenness":    { "value":   1 }
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
			"constitution":  { "value":   1 }, 
			"stamina":       { "value":   1 }, 
			"senses":        { "value":   2 } 
			},
		"city": 
			{ 
			"intelligence":  { "value":   1 }, 
			"focus":         { "value":   1 }, 
			"senses":        { "value":   1 } 
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
			"strength":      { "value":   2 },
			"constitution":  { "value":   1 }, 
			"stamina":       { "value":   1 }, 
			"social_status": { "value":  -1 } 
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
			"stamina":       { "value":   1 }, 
			"agility":       { "value":   2 }, 
			"precision":     { "value":   2 }, 
			"social_status": { "value":   1 } 
			},
		"city": 
			{ 
			"social_status": { "value":   1 }
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
			"strength":      { "value":   1 },
			"intelligence":  { "value":   1 }, 
			"wisdom":        { "value":   1 }, 
			"focus":         { "value":   1 }, 
			"social_status": { "value":   1 } 
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
			"intelligence":  { "value":   1 }, 
			"wisdom":        { "value":   1 }, 
			"focus":         { "value":   1 }, 
			"eloquence":     { "value":   1 }, 
			"social_status": { "value":   2 } 
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
			"eloquence":     { "value":   1 },
			"intelligence":  { "value":   1 }, 
			"senses":        { "value":   2 } 
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
			"hiddenness":    { "value":   1 }
			},
		"city":
			{
			"senses":        { "value":  -1 },
			"social_status": { "value":  -2 }
			},
		"wild": 
			{ 
			"intelligence":  { "value":   1 }, 
			"wisdom":        { "value":   1 },
			"social_status": { "value":   1 }
			}
		}
	},
"Shopkeeper": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"eloquence":     { "value":   1 } 
			},
		"city": 
			{ 
			"intelligence":  { "value":   1 }, 
			"hiddenness":    { "value":  -2 },
			"senses":        { "value":   2 } 
			}
		},
	},
"Merchant":
	{
	"attributes":
		{
		"base": 
			{ 
			"stamina":       { "value":   1 }, 
			"hiddenness":    { "value":  -2 },
			"eloquence":     { "value":   1 }
			},
		"city": 
			{ 
			"wisdom":        { "value":   1 }
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
			"eloquence":     { "value":   1 }, 
			"social_status": { "value":   2 } 
			},
		"city": 
			{ 
			"intelligence":  { "value":   1 }
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
			"constitution":  { "value": -.5 }, 
			"wisdom":        { "value":   1 },
			"intelligence":  { "value":   1 }, 
			"focus":         { "value":   1 }
			},
		"city": 
			{ 
			"intelligence":  { "value":   1 }
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
			"intelligence":  { "value":   1 },
			"precision":     { "value":   1 },
			"focus":         { "value":   1 }
			},
		"city": 
			{ 
			"wisdom":        { "value":   1 },
			"social_status": { "value":   1 }
			}
		}
	},
"Painter": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"precision":     { "value":   2 }, 
			"intelligence":  { "value":   1 }, 
			"focus":         { "value":   1 },
			"senses":        
				{
				"components": 
					{
					"sight": { "value":   1 },
					"touch": { "value":   1 }
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
			"intelligence":  { "value":   1 }, 
			"focus":         { "value":   1 }, 
			"eloquence":     { "value":   1 }, 
			"senses":        
				{
				"components": 
					{
					"hearing": { "value":   2 }
					}
				}
			},
		"city": 
			{ 
			"social_status": { "value":   1 }
			}
		}
	},
"Blacksmith": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"strength":      { "value":   1 }, 
			"constitution":  { "value":   2 }, 
			"senses":        
				{
				"value":  -1,
				"components": 
					{
					"touch": { "value":   2 }
					}
				}
			},
		"city": 
			{ 
			"social_status": { "value":   1 }
			},
		"wild": 
			{ 
			"social_status": { "value":  -1 }
			}
		},
	},
"Architect": 
	{ 
	"attributes": 
		{
		"city": 
			{ 
			"intelligence":  { "value":   1 }, 
			"wisdom":        { "value":   2 }, 
			"social_status": { "value":   1 } 
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
			"wisdom":        { "value":   1 } 
			},
		"city": 
			{ 
			"intelligence":  { "value":   1 }, 
			"wisdom":        { "value":   1 }, 
			"focus":         { "value":   1 } 
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
			"eloquence":     { "value":   2 }, 
			"social_status": { "value":   1 } 
			},
		"city": 
			{ 
			"wisdom":        { "value":   1 }, 
			"social_status": { "value":   2 } 
			}
		},
	},
"Explorer": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"stamina":       { "value":   1 }, 
			"wisdom":        { "value":   1 }
			},
		"city": 
			{  
			"focus":         { "value":  -1 },
			"eloquence":     { "value":   1 }, 
			"social_status": { "value":   1 } 
			},
		"wild": 
			{ 
			"senses":        { "value":   1 }
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
			"strength":      { "value":   1 },
			},
		"city": 
			{ 
			"focus":         { "value":  -1 }, 
			"senses":        { "value":  -1 }, 
			"social_status": { "value":  -1 } 
			},
		"wild": 
			{ 
			"agility":       { "value":   1 }, 
			"precision":     { "value":   1 }, 
			"wisdom":        { "value":   1 }, 
			"focus":         { "value":   1 }, 
			"senses":        { "value":   2 }, 
			"hiddenness":    { "value":   2 }
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
			"eloquence":     { "value":  -2 }, 
			"social_status": { "value":  -1 } 
			},
		"city": 
			{ 
			"focus":         { "value":  -2 }, 
			"senses":        { "value":  -2 } 
			},
		"wild": 
			{ 
			"intelligence":  { "value":   1 }, 
			"wisdom":        { "value":   1 }, 
			"focus":         { "value":   4 }, 
			"senses":        { "value":   2 } 
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
			"strength":      { "value":   1 },
			"constitution":  { "value":   2 }, 
			"stamina":       { "value":   2 } 
			},
		"city": 
			{ 
			"social_status": { "value":   1 } 
			},
		"wild": 
			{ 
			"social_status": { "value":  -1 } 
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
			"wisdom":        { "value":  -2 }, 
			"focus":         { "value":  -2 }, 
			"eloquence":     { "value":   4 }, 
			"senses":        { "value":  -1 } 
			},
		"city": 
			{ 
			"focus":         { "value":   1 }, 
			"eloquence":     { "value":   1 } 
			}
		},
	},
"Reading": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"intelligence":  { "value":   1 }, 
			"wisdom":        { "value":   4 }, 
			"eloquence":     { "value":  -1 } 
			}
		},
	},
"Horse Riding": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"agility":       { "value":   1 },
			"strength":      { "value":  .5 }
			},
		"wild": 
			{ 
			"senses":        { "value":  .5 } 
			}
		},
	},
"Gambling": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"agility":       { "value":  .5 }, 
			"intelligence":  { "value":  .5 }, 
			"eloquence":     { "value":  .5 }, 
			"senses":        { "value":   1 } 
			},
		"city": 
			{ 
			"agility":       { "value":  .5 }, 
			"intelligence":  { "value":  .5 }, 
			"eloquence":     { "value":  .5 }, 
			"senses":        { "value":   1 } 
			}
		},
	},
"Brigandage (Wild)": 
	{ 
	"attributes": 
		{
		"base":
			{
			"strength":      { "value":   1 },
			"constitution":  { "value":   1 }, 
			"stamina":       { "value":   1 }, 
			},
		"city": 
			{ 
			"hiddenness":    { "value":  -1 }
			},
		"wild": 
			{ 
			"senses":        { "value":   1 }, 
			"hiddenness":    { "value":   1 }
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
			"strength":      { "value":   1 },
			"constitution":  { "value":   1 }, 
			"stamina":       { "value":   1 }, 
			},
		"city": 
			{ 
			"senses":        { "value":   1 }, 
			"hiddenness":    { "value":   1 }
			},
		"wild": 
			{ 
			"hiddenness":    { "value":  -1 }
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
			"eloquence":     { "value":   2 } 
			},
		"city": 
			{ 
			"wisdom":        { "value":   1 }, 
			"eloquence":     { "value":   2 }
			}
		},
	},
"Beggar":  
	{
	"attributes":
		{
		"base":
			{
			"social_status": { "value":  -3 } 
			}
		}
	}
}