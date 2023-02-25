export const polearms = {
"Spear": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": { "value": 20 }, "precision": { "value": 25 } } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 1,
	"range": 2,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "precision": 5},
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.55 }
				}
			}
		}
	},
"Short Spear": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": { "value": 15 }, "precision": { "value": 30 } }, "weapons_experience": { "Polearm": 1 } },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 1,
	"range": 1.5,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "precision": 10},
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.50 }
				}
			}
		}
	},
"Leaf-bladed spear": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": { "value": 18 }, "precision": { "value": 20 } }, "weapons_experience": { "Polearm": 1 } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"Thrust":
			{
			"damage":
				{
				"pierce":{ "base": 10, "precision": 0.50 }
				}
			}
		}
	},
"Poleaxe": 
	{
	"type": "Polearm",
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"attacks":
		{
		}
	},
"Halberd": 
	{
	"type": "Polearm",
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 8,
	"range": 2,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 6, "precision": 4},
			"damage":
				{
				"cut":   { "base": 16, "precision": .5 },
				"crush": { "base": 8, "strength": .1 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": -5},
			"damage":
				{
				"pierce":{ "base": 3,  },
				"crush": { "base": 5, "strength": 0.30, "precision": 0.10 }
				}
			}
		}
	},
"Pike": 
	{
	"type": "Polearm",
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"attacks":
		{
		}
	}	
}