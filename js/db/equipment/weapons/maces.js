export const maces = {
"Blunt Mace": 
	{
	"type": "Mace",
	"requirements":	{ "attributes": { "strength": { "value": 30 } }, "weapons_experience": { "Mace": 1 } },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 5},
			"damage":
				{
				"crush": { "base": 10, "strength": 0.50 }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": 5},
			"damage":
				{
				"crush": { "base": 5, "strength": 0.30, "precision": 0.10 }
				}
			}
		}
	},
"Spiked Mace": 
	{
	"type": "Mace",
	"requirements":	{ "attributes": { "strength": { "value": 35 } }, "weapons_experience": { "Mace": 1 } },
	"hands": 1,
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10},
			"damage":
				{
				"pierce":{ "base": 3,  },
				"crush": { "base": 15, "strength": 0.50 }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": 10, "precision": -10},
			"damage":
				{
				"pierce":{ "base": 3,  },
				"crush": { "base": 5, "strength": 0.30, "precision": 0.10 }
				}
			}
		}
	},
"Warhammer": 
	{
	"type": "Mace",
	"requirements":	{ "attributes": { "strength": { "value": 25 }, "precision": { "value": 20 } }, "weapons_experience": { "Mace": 2 } },
	"hands": 1,
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing (Hammer)":
			{
			"bonus": { "strength": 15},
			"damage":
				{
				"crush": { "base": 20, "strength": 0.45, "precision": 0.5 }
				}
			},
		"Swing (Pick)":
			{
			"bonus": { "strength": 15},
			"damage":
				{
				"pierce":{ "base": 20, "strength": 0.50, "precision": 0.20 },
				"crush": { "base": 10, "strength": 0.30, "precision": 0.10 }
				}
			}
		}
	},
"Chained Morningstar": 
	{
	"type": "Mace",
	"requirements":	{ "attributes": { "strength": { "value": 30 }, "precision": { "value": 40 } }, "weapons_experience": { "Mace": 2 } },
	"hands": 1,
	"stamina_per_attack": 4,
	"experience_per_attack": 8,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 20, "precision": -5},
			"damage":
				{
				"pierce":{ "base": 5,  },
				"crush": { "base": 30, "strength": 0.60, "precision": 0.20 }
				}
			}
		}
	}
	
}