export const axes = {
"Woodchopping Axe": 
	{
	"type": "Axe",
	"requirements":	{ "attributes": { "strength": { "value": 30 } }, "weapons_experience": { "Axe": 1 } },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 6,
	"range": 1,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10},
			"damage":
				{
				"cut":   { "base": 8, "strength": 0.1 },
				"crush": { "base": 16, "strength": 0.50 }
				}
			}
		}
	},
"Battle Axe": 
	{
	"type": "Axe",
	"requirements":	{ "attributes": { "strength": { "value": 20 } }, "weapons_experience": { "Axe": 2 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"range": 1,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 8 },
			"damage":
				{
				"cut":   { "base": 14, "strength": .2, "precision": .2 },
				"crush": { "base": 10, "strength": .10 }
				}
			}
		}
	},
"Daneaxe": 
	{
	"type": "Axe",
	"requirements":	{ "attributes": { "strength": { "value": 20 }, "precision": { "value": 20 } }, "weapons_experience": { "Axe": 3 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
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
			}
		}
	},
"Ruby Axe of Courage":
	{
	"type": "Axe",
	"requirements":	{ "attributes": { "strength": { "value": 35 }, "precision": { "value": 35 } }, "weapons_experience": { "Axe": 3 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 5,
	"range": 1.2,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 20, "precision": 5},
			"damage":
				{
				"cut":   { "base": 20, "strength": .3, "precision": .2 },
				"crush": { "base": 15, "strength": .40 }
				}
			}
		}
	}
};