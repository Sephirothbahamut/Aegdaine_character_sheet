export const short_weapons = {
	
"Knife": 
	{
	"type": "Short Weapon",
	"requirements":	{ "attributes": { "precision": { "value": 30 } }, "weapons_experience": { "Short Weapon": 1 } },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 2,
	"range": 0.5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "precision": 20},
			"damage":
				{
				"cut":   { "base": 10, "strength": 0.5, "precision": 0.20 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": 30},
			"damage":
				{
				"pierce":{ "base": 10, "precision": 0.40 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -50,
			"agility": 10
			}
		}
	},
"Dagger": 
	{
	"type": "Short Weapon",
	"requirements":	{ "attributes": { "strength": { "value": 20 }, "precision": { "value": 40 } }, "weapons_experience": { "Short Weapon": 4 } },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 2,
	"range": 0.5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "precision": 5},
			"damage":
				{
				"cut":   { "base": 2,  }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": 40},
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.50 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -50,
			"agility": 20
			}
		}
	},
"Katar": 
	{
	"type": "Short Weapon",
	"requirements":	{ "attributes": { "strength": { "value": 20 }, "precision": { "value": 25 } }, "weapons_experience": { "Short Weapon": 3 } },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 5,
	"range": 0.8,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "precision": 10},
			"damage":
				{
				"cut":   { "base": 20,  }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": 10},
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.40 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -30,
			"agility": 20
			}
		}
	}
}