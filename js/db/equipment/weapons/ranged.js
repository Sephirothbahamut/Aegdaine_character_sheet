export const ranged = {
"Hunting bow": 
	{
	"type": "Ranged",
	"requirements":	{ "attributes": { "strength": { "value": 30 }, "precision": { "value": 30 } }, "weapons_experience": { "Ranged": 1 } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 4,
	"range": 15,
	"attacks":
		{
		"Shoot":
			{
			"damage":
				{
				"pierce":   { "base": 0, "strength": 0.3, "precision": 0.2 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -50,
			"agility": -50
			}
		}
	},
"Warbow": 
	{
	"type": "Ranged",
	"requirements":	{ "attributes": { "strength": { "value": 50 }, "precision": { "value": 30 } }, "weapons_experience": { "Ranged": 1 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 4,
	"range": 18,
	"attacks":
		{
		"Shoot":
			{
			"bonus": { "strength": 4 },
			"damage":
				{
				"pierce":   { "base": 0, "strength": 0.4, "precision": 0.2 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -50,
			"agility": -50
			}
		}
	},
"Longbow": 
	{
	"type": "Ranged",
	"requirements":	{ "attributes": { "strength": { "value": 50 }, "precision": { "value": 30 } }, "weapons_experience": { "Ranged": 1 } },
	"hands": 2,
	"stamina_per_attack": 5,
	"experience_per_attack": 5,
	"range": 20,
	"attacks":
		{
		"Shoot":
			{
			"bonus": { "strength": 5 },
			"damage":
				{
				"pierce":   { "base": 0, "strength": 0.5, "precision": 0.25 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -50,
			"agility": -50
			}
		}
	},
"Composite bow": 
	{
	"type": "Ranged",
	"requirements":	{ "attributes": { "strength": { "value": 50 }, "precision": { "value": 30 } }, "weapons_experience": { "Ranged": 1 } },
	"hands": 2,
	"stamina_per_attack": 6,
	"experience_per_attack": 4,
	"range": 15,
	"attacks":
		{
		"Shoot":
			{
			"bonus": { "strength": 6 },
			"damage":
				{
				"pierce":   { "base": 0, "strength": 0.45, "precision": 0.2 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -50,
			"agility": -50
			}
		}
	}
}