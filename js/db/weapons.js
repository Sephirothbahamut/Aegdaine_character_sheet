export const weapons = {
"Arming Sword": 
	{
	"type": "sword",
	"stamina_cost": 2,
	"requirements":	{ "attributes": { "strength": 45, "precision": 60 }, "weapons_experience": { "sword": 2 } },
	"experience_per_attack": 5,
	"attacks":
		{
		"Swing":
			{
			"range": 1.4,
			"damage":
				{
				"cut":   { "base": 20, "strength": .2, "precision": .4 },
				"crush": { "base":  2, "strength": .1 }
				}
			},
		"Thrust":
			{
			"range": 1.6,
			"damage":
				{
				"pierce": { "base": 15, "precision": .5 }
				}
			},
		"Pummel":
			{
			"range": .5,
			"damage":
				{
				"crush": { "base": 10, "strength": .2 }
				}
			}
		},
	"defense":
		{
		"constitution": 5
		}
	}

};