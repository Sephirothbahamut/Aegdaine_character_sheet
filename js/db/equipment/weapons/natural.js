export const natural = {
"Fist": 
	{
	"type": "Natural",
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 1,
	"attacks":
		{
		"Punch":
			{
			"damage":
				{
				"crush": { "base": 0, "strength": 0.50 }
				}
			}
		}
	},
"Hooves": 
	{
	"type": "Natural",
	"requirements":	{ "races": ["Minotaur", "Centaur"] },
	"hands": 1,
	"stamina_per_attack": 5,
	"experience_per_attack": 8,
	"attacks":
		{
		"Kick":
			{
			"bonus": { "strength": 20, "precision": -15 },
			"damage":
				{
				"crush": { "base": 20, "strength": 0.75 }
				}
			}
		}
	},
"Claw": 
	{
	"type": "Natural",
	"requirements":	{ "races": ["Astral Dragon", "Black Dragon", "Blue Dragon", "Red Dragon", "Green Dragon", "Minidragon", "Abyssal", "Wolf"] },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 1,
	"attacks":
		{
		"Scratch":
			{
			"damage":
				{
				"cut":   { "base": 20, "precision": 0.30 },
				"crush": { "base":  0, "strength": 0.10 }
				}
			}
		}
	},
"Tail": 
	{
	"type": "Natural",
	"requirements":	{ "races": ["Astral Dragon", "Black Dragon", "Blue Dragon", "Red Dragon", "Green Dragon", "Minidragon", "Abyssal", "Wolf"] },
	"hands": 1,
	"stamina_per_attack": 5,
	"experience_per_attack": 10,
	"attacks":
		{
		"Sweep":
			{
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			},
		"Crash":
			{
			"damage":
				{
				"crush": { "base": 15, "strength": 0.40 }
				}
			}
		}
	}
}