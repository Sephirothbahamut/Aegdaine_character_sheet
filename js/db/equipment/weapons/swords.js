export const swords = {
"Arming Sword": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 25 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 2 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"range": 1,
	"attacks":
		{
		"Swing":
			{
			"range": 1.4,
			"damage":
				{
				"cut":   { "base": 20, "strength": 0.20, "precision": 0.40 },
				"crush": { "base": 2, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"range": 1.6,
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.50 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 5,
			"agility": 0
			}
		}
	},
"Arming Sword (halfswording)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 20 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"range": 0.5,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.50 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 10,
			"agility": -15
			}
		}
	},
"Arming Sword (murder stroke)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 30 }, "precision": { "value": 20 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"range": 1,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10, "precision": -5},
			"range": 1.2,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": -10},
			"range": 1.4,
			"damage":
				{
				"crush": { "base": 5, "strength": 0.30, "precision": 0.10 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -5,
			"agility": -50
			}
		}
	},
"Falchion": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 28 }, "precision": { "value": 20 } }, "weapons_experience": { "Sword": 2 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"range": 1,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 8, "precision": 5},
			"range": 1.4,
			"damage":
				{
				"cut":   { "base": 35, "strength": 0.20, "precision": 0.30 },
				"crush": { "base": 2, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"range": 1.6,
			"damage":
				{
				"pierce":{ "base": 10, "precision": 0.50 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 5,
			"agility": 0
			}
		}
	},
"Broadsowrd": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 28 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 3 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"range": 1,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 8, "precision": 5},
			"range": 1.4,
			"damage":
				{
				"cut":   { "base": 30, "strength": 0.20, "precision": 0.35 },
				"crush": { "base": 5, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"range": 1.6,
			"damage":
				{
				"pierce":{ "base": 12, "precision": 0.50 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 5,
			"agility": 0
			}
		}
	},
"Broadsword (halfswording)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 20 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"range": 0.5,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 12, "precision": 0.50 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 10,
			"agility": -15
			}
		}
	},
"Rapier": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 20 }, "precision": { "value": 30 } }, "weapons_experience": { "Sword": 3 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 4,
	"range": 1.6,
	"attacks":
		{
		"Swing":
			{
			"range": 1.8,
			"damage":
				{
				"cut":   { "base": 10, "strength": 0.10, "precision": 0.50 },
				"crush": { "base": 2, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": 20},
			"range": 2.0,
			"damage":
				{
				"pierce":{ "base": 20, "precision": 0.60 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -15,
			"agility": 10
			}
		}
	},
"Estoc": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 18 }, "precision": { "value": 35 } }, "weapons_experience": { "Sword": 3 } },
	"hands": 1,
	"stamina_per_attack": 2,
	"experience_per_attack": 4,
	"range": 1.6,
	"attacks":
		{
		"Swing":
			{
			"range": 1.8,
			"damage":
				{
				"crush": { "base": 2, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": 20},
			"range": 2.0,
			"damage":
				{
				"pierce":{ "base": 25, "precision": 0.60 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -15,
			"agility": 10
			}
		}
	},
"Bastard Sword (one handed)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 35 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 1,
	"stamina_per_attack": 4,
	"experience_per_attack": 6,
	"range": 1.2,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": -5, "precision": -5},
			"range": 1.6,
			"damage":
				{
				"cut":   { "base": 25, "strength": 0.30, "precision": 0.45 },
				"crush": { "base": 3, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": -5, "precision": -5},
			"range": 1.8,
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.60 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -5,
			"agility": -10
			}
		}
	},
"Bastard Sword (two handed)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 28 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 3 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"range": 1,
	"attacks":
		{
		"Swing":
			{
			"range": 1.5,
			"damage":
				{
				"cut":   { "base": 25, "strength": 0.30, "precision": 0.45 },
				"crush": { "base": 3, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"range": 1.7,
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.60 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 5,
			"agility": 5
			}
		}
	},
"Bastard Sword (halfswording)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 25 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 6,
	"range": 0.6,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 15, "precision": 0.60 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 10,
			"agility": -15
			}
		}
	},
"Bastard Sword (murder stroke)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 35 }, "precision": { "value": 20 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"range": 1,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10, "precision": -5},
			"range": 1.3,
			"damage":
				{
				"crush": { "base": 12, "strength": 0.30 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": -10},
			"range": 1.5,
			"damage":
				{
				"crush": { "base": 5, "strength": 0.30, "precision": 0.10 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -20,
			"agility": -50
			}
		}
	},
"Cutting Longsword": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 30 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 3 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"range": 1.5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10, "precision": 5},
			"range": 1.6,
			"damage":
				{
				"cut":   { "base": 30, "strength": 0.30, "precision": 0.50 },
				"crush": { "base": 5, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"range": 1.8,
			"damage":
				{
				"pierce":{ "base": 12, "precision": 0.50 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 5,
			"agility": 5
			}
		}
	},
"Cutting Longsword (halfswording)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 28 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 6,
	"range": 0.75,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 12, "precision": 0.50 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 10,
			"agility": -15
			}
		}
	},
"Cutting Longsword (murder stroke)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 35 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"range": 1.5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 15, "precision": -5},
			"range": 1.4,
			"damage":
				{
				"crush": { "base": 15, "strength": 0.30 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": -10},
			"range": 1.6,
			"damage":
				{
				"crush": { "base": 5, "strength": 0.30, "precision": 0.10 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -20,
			"agility": -50
			}
		}
	},
"Thrusting Longsword": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 25 }, "precision": { "value": 30 } }, "weapons_experience": { "Sword": 3 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"range": 1.5,
	"attacks":
		{
		"Swing":
			{
			"range": 1.8,
			"damage":
				{
				"cut":   { "base": 15, "strength": 0.20, "precision": 0.50 },
				"crush": { "base": 5, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": 10},
			"range": 2.0,
			"damage":
				{
				"pierce":{ "base": 25, "precision": 0.60 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 5,
			"agility": 5
			}
		}
	},
"Thrusting Longsword (halfswording)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 23 }, "precision": { "value": 30 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 2,
	"experience_per_attack": 6,
	"range": 0.75,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 25, "precision": 0.60 }
				}
			},
		"Pummel":
			{
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 10,
			"agility": -15
			}
		}
	},
"Thrusting Longsword (murder stroke)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 28 }, "precision": { "value": 20 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"range": 1.5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 15, "precision": -5},
			"range": 1.3,
			"damage":
				{
				"crush": { "base": 15, "strength": 0.30 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": -10},
			"range": 1.5,
			"damage":
				{
				"crush": { "base": 5, "strength": 0.30, "precision": 0.10 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": -20,
			"agility": -50
			}
		}
	},
"Claymore": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 40 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 4 } },
	"hands": 2,
	"stamina_per_attack": 4,
	"experience_per_attack": 7,
	"range": 1.8,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 15},
			"range": 1.8,
			"damage":
				{
				"cut":   { "base": 30, "strength": 0.40, "precision": 0.40 },
				"crush": { "base": 5, "strength": 0.10 }
				}
			},
		"Thrust":
			{
			"bonus": { "precision": -5},
			"range": 2.0,
			"damage":
				{
				"pierce":{ "base": 10, "precision": 0.45 },
				"crush": { "base": 5, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 10,
			"agility": 0
			}
		}
	},
"Claymore (halfswording)": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": { "value": 30 }, "precision": { "value": 25 } }, "weapons_experience": { "Sword": 5 } },
	"hands": 2,
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"range": 0.9,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "precision": 10},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 12, "precision": 0.45 },
				"crush": { "base": 5, "strength": 0.20 }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 15,
			"agility": -15
			}
		}
	}
};
