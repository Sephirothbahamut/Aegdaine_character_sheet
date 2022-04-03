export const experiences = 
{
"Basic Education":  {},
"Basic Military training":  {},
"Basic Magic training":  {},
"Scientific Education":  {},
"Humanistic Education":  {},
"Mage": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"constitution": -1, 
			"intelligence": 2, 
			"wisdom": 1, 
			"focus": 1, 
			"social_status": 1 
			}
		},
	"weapons": []
	},
"Training": 
	{ 
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"strength": 1,
			"constitution": 1, 
			"stamina": 1, 
			"agility": 1, 
			"precision": 1, 
			"social_status": -1 
			}
		},
	"weapons": [ "Axe", "Bow", "Mace", "Polearm", "Shield", "Short Weapon", "Sword" ]
	},
"Scout": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"stamina": 1, 
			"agility": 1, 
			"eloquence": -1, 
			"senses": 1, 
			"social_status": -1 
			},
		"city": 
			{ 
			"agility": -1, 
			"focus": -1 
			},
		"wild": 
			{ 
			"agility": 1, 
			"wisdom": 1, 
			"senses": 1, 
			"hiddenness": 1
			},
		},
	"weapons": [ "Axe", "Short Weapon" ]
	},
"Guard": 
	{ 
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"constitution": 1, 
			"stamina": 1, 
			"eloquence": -1, 
			"senses": 2 
			},
		"city": 
			{ 
			"intelligence": 1, 
			"focus": 1, 
			"senses": 1 
			},
		"wild": 
			{ 
			"wisdom": -2 
			}
		},
	"weapons": [ "Axe", "Mace", "Polearm", "Shield", "Sword" ]
	},
"Soldier": 
	{ 
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"strength": 2,
			"constitution": 1, 
			"stamina": 1, 
			"eloquence": -1, 
			"social_status": -1 
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
			"constitution": -2, 
			"stamina": 1, 
			"agility": 2, 
			"precision": 2, 
			"wisdom": -1, 
			"social_status": 1 
			},
		"city": 
			{ 
			"social_status": 1 
			}
		},
	"weapons": [ "Axe", "Mace", "Polearm", "Short Weapon", "Sword" ]
	},
"Captain": 
	{ 
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"strength": 1,
			"agility": -1, 
			"intelligence": 1, 
			"wisdom": 1, 
			"focus": 1, 
			"social_status": 1 
			}
		},
	"weapons": [ "Mace", "Shield", "Sword" ]
	},
"General": 
	{ 
	"categories": ["military"],
	"attributes": 
		{
		"base": 
			{ 
			"agility": -1, 
			"precision": -1, 
			"intelligence": 1, 
			"wisdom": 1, 
			"focus": 1, 
			"eloquence": 1, 
			"social_status": 2 
			}
		},
	"weapons": [ "Mace", "Shield", "Sword" ]
	},
"Bartender/Waiter": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"strength": -1,
			"eloquence": 1 
			},
		"city": 
			{ 
			"intelligence": 1, 
			"senses": 2 
			}
		},
	},
"Mercant": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"agility": -1, 
			"eloquence": 1 
			},
		"city": 
			{ 
			"intelligence": 1, 
			"senses": 1 
			}
		},
	},
"Noble": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"constitution": -1, 
			"eloquence": 1, 
			"social_status": 2 
			},
		"city": 
			{ 
			"intelligence": 1 
			}
		},
	"weapons": [ "Sword" ]
	},
"Researcher": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"stamina": -1 
			},
		"city": 
			{ 
			"intelligence": 2, 
			"wisdom": 1, 
			"focus": 1 
			}
		},
	},
"Artist": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"constitution": -1, 
			"stamina": -1, 
			"precision": 2, 
			"intelligence": 1, 
			"focus": 1 
			},
		"wild": 
			{ 
			"senses": 1 
			}
		},
	},
"Musician": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"constitution": -1, 
			"stamina": -1, 
			"intelligence": 1, 
			"focus": 1, 
			"eloquence": 1, 
			"senses": 1 
			},
		"city": 
			{ 
			"social_status": 1 
			}
		},
	},
"Architect": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"agility": -1 
			},
		"city": 
			{ 
			"intelligence": 1, 
			"wisdom": 2, 
			"social_status": 1 
			}
		},
	},
"Alchemist": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"strength": -1,
			"wisdom": 1 
			},
		"city": 
			{ 
			"intelligence": 1, 
			"wisdom": 1, 
			"focus": 1 
			}
		},
	},
"Envoy": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"constitution": -1, 
			"social_status": 1 
			},
		"city": 
			{ 
			"wisdom": 1, 
			"social_status": 2 
			}
		},
	},
"Explorer": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"stamina": 1, 
			"precision": -1, 
			"wisdom": 1, 
			"focus": -1 
			},
		"city": 
			{ 
			"eloquence": 1, 
			"social_status": 1 
			},
		"wild": 
			{ 
			"senses": 1 
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
			"strength": 1,
			},
		"city": 
			{ 
			"agility": -1, 
			"focus": -1, 
			"senses": -1, 
			"social_status": -1 
			},
		"wild": 
			{ 
			"agility": 1, 
			"precision": 1, 
			"wisdom": 1, 
			"focus": 1, 
			"senses": 2, 
			"hiddenness": 2
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
			"eloquence": -1, 
			"social_status": -1 
			},
		"city": 
			{ 
			"focus": -2, 
			"senses": -2 
			},
		"wild": 
			{ 
			"intelligence": 1, 
			"wisdom": 1, 
			"focus": 4, 
			"senses": 2 
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
			"strength": 1,
			"constitution": 2, 
			"stamina": 2 
			},
		"city": 
			{ 
			"social_status": 1 
			},
		"wild": 
			{ 
			"wisdom": -2, 
			"senses": -1, 
			"social_status": -1 
			}
		},
	"weapons": [ "Axe", "Mace", "Shield", "Sword" ]
	},
"Alchool": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"wisdom": -2, 
			"focus": -2, 
			"eloquence": 4, 
			"senses": -1 
			},
		"city": 
			{ 
			"focus": 1, 
			"eloquence": 1 
			}
		},
	},
"Reading": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"intelligence": 1, 
			"wisdom": 4, 
			"eloquence": -1 
			}
		},
	},
"Horse Riding": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"agility": 1 
			},
		"wild": 
			{ 
			"strength": 1,
			"constitution": 1, 
			"senses": 1 
			}
		},
	},
"Gambling": 
	{ 
	"attributes": 
		{
		"city": 
			{ 
			"agility": 1, 
			"intelligence": 1, 
			"eloquence": 1, 
			"senses": 2 
			},
		"wild": 
			{ 
			"senses": -1 
			}
		},
	},
"Brigandage (Wild)": 
	{ 
	"attributes": 
		{
		"city": 
			{ 
			"agility": -1, 
			"senses": -1, 
			"hiddenness": -1
			},
		"wild": 
			{ 
			"strength": 1,
			"constitution": 1, 
			"stamina": 1, 
			"senses": 2, 
			"hiddenness": 1
			}
		},
	"weapons": [ "Short Weapon" ]
	},
"Thiefing (Town)": 
	{ 
	"attributes": 
		{
		"city": 
			{ 
			"strength": 1,
			"constitution": 1, 
			"stamina": 1, 
			"senses": 2, 
			"hiddenness": 1
			},
		"wild": 
			{ 
			"agility": -1, 
			"senses": -1, 
			"hiddenness": -1
			}
		},
	"weapons": [ "Short Weapon" ]
	},
"Oration": 
	{ 
	"attributes": 
		{
		"base": 
			{ 
			"constitution": -1, 
			"eloquence": 2 
			},
		"city": 
			{ 
			"wisdom": 1, 
			"eloquence": 2 
			}
		},
	},
"Beggar":  {}
}