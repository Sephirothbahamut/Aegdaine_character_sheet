export const shields = {
"Round Shield (Center Grip)": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": { "value": 40 }, "precision": { "value": 10 } }, "weapons_experience": { "Shield": 3 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 7,
	"range": 0.5,
	"attacks":
		{
		"Push":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.10 }
				}
			},
		"Slap":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.15 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 25,
			"agility": 5
			}
		}
	},
"Heater Shield": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": { "value": 30 } }, "weapons_experience": { "Shield": 1 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 8,
	"range": 0.5,
	"attacks":
		{
		"Push":
			{
			"range": 0.2,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.10 }
				}
			},
		"Slap":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.15 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 30
			}
		}
	},
"Kite Shield": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": { "value": 35 } }, "weapons_experience": { "Shield": 2 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 8,
	"range": 0.5,
	"attacks":
		{
		"Push":
			{
			"range": 0.2,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.10 }
				}
			},
		"Slap":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.15 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 35
			}
		}
	},
"Buckler": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": { "value": 20 }, "precision": { "value": 25 } }, "weapons_experience": { "Shield": 3 } },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 5,
	"range": 0.5,
	"attacks":
		{
		"Push":
			{
			"range": 0.8,
			"damage":
				{
				"crush": { "base": 5, "strength": 0.5 }
				}
			},
		"Slap":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 5, "strength": 0.10 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 10,
			"agility": 15
			}
		}
	},
"Tower Shield": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": { "value": 50 } }, "weapons_experience": { "Shield": 1 } },
	"hands": 1,
	"stamina_per_attack": 3,
	"experience_per_attack": 8,
	"range": 0.5,
	"attacks":
		{
		"Push":
			{
			"range": 0.2,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.10 }
				}
			},
		"Slap":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.15 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 40
			}
		}
	},
"Celtic Shield": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": { "value": 35 }, "precision": { "value": 10 } }, "weapons_experience": { "Shield": 1 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 8,
	"range": 0.5,
	"attacks":
		{
		"Push":
			{
			"range": 0.2,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.10 }
				}
			},
		"Slap":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 0.15 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 35,
			"agility": 5
			}
		}
	},
"Spiked Buckler": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": { "value": 23 }, "precision": { "value": 35 } }, "weapons_experience": { "Shield": 4 } },
	"hands": 1,
	"stamina_per_attack": 1,
	"experience_per_attack": 5,
	"range": 0.5,
	"attacks":
		{
		"Push":
			{
			"range": 0.8,
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.15 },
				"crush": { "base": 5, "strength": 0.5, "precision": 0.10 }
				}
			},
		"Slap":
			{
			"range": 0.8,
			"damage":
				{
				"crush": { "base": 5, "strength": 0.10 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 10,
			"agility": 10
			}
		}
	}
}