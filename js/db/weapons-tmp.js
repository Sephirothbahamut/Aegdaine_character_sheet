"Arming Sword": 
	{
	"type": "Sword",
	"requirements":	{ "attributes": { "strength": 45, "precision": 60 }, "weapons_experience": { "Sword": 2 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.4,
			"damage":
				{
				"cut":   { "base": 20, "strength": 20%, "precision": 40% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 2, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.6,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 40, "precision": 60 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 55, "precision": 40 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10, "precision": -5},
			"range": 1.2,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": -10},
			"range": 1.4,
			"damage":
				{
				"crush": { "base": 5, "strength": 30%, "precision": 10% }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 45, "precision": 45 }, "weapons_experience": { "Sword": 2 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 8, "precision": 5},
			"range": 1.4,
			"damage":
				{
				"cut":   { "base": 35, "strength": 20%, "precision": 30% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 2, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.6,
			"damage":
				{
				"pierce":{ "base": 10, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 50, "precision": 50 }, "weapons_experience": { "Sword": 3 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 8, "precision": 5},
			"range": 1.4,
			"damage":
				{
				"cut":   { "base": 30, "strength": 20%, "precision": 35% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 5, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.6,
			"damage":
				{
				"pierce":{ "base": 12, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 45, "precision": 50 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 12, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 25, "precision": 60 }, "weapons_experience": { "Sword": 3 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 4,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.8,
			"damage":
				{
				"cut":   { "base": 10, "strength": 10%, "precision": 50% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 2, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 20},
			"range": 2.0,
			"damage":
				{
				"pierce":{ "base": 20, "strength": NONE, "precision": 60% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": NONE, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 25, "precision": 60 }, "weapons_experience": { "Sword": 3 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 4,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.8,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 2, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 20},
			"range": 2.0,
			"damage":
				{
				"pierce":{ "base": 25, "strength": NONE, "precision": 60% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": NONE, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 55, "precision": 60 }, "weapons_experience": { "Sword": 4 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 4,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": -5, "precision": -5},
			"range": 1.6,
			"damage":
				{
				"cut":   { "base": 25, "strength": 30%, "precision": 45% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 3, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": -5, "precision": -5},
			"range": 1.8,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 60% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 45, "precision": 50 }, "weapons_experience": { "Sword": 3 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.5,
			"damage":
				{
				"cut":   { "base": 25, "strength": 30%, "precision": 45% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 3, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.7,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 60% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 40, "precision": 50 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 6,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 60% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 55, "precision": 40 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10, "precision": -5},
			"range": 1.3,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 12, "strength": 30%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": -10},
			"range": 1.5,
			"damage":
				{
				"crush": { "base": 5, "strength": 30%, "precision": 10% }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 50, "precision": 50 }, "weapons_experience": { "Sword": 3 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10, "precision": 5},
			"range": 1.6,
			"damage":
				{
				"cut":   { "base": 30, "strength": 30%, "precision": 50% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 5, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.8,
			"damage":
				{
				"pierce":{ "base": 12, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 45, "precision": 50 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 6,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 12, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 55, "precision": 40 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 15, "precision": -5},
			"range": 1.4,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 15, "strength": 30%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": -10},
			"range": 1.6,
			"damage":
				{
				"crush": { "base": 5, "strength": 30%, "precision": 10% }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 50, "precision": 50 }, "weapons_experience": { "Sword": 3 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 1.8,
			"damage":
				{
				"cut":   { "base": 15, "strength": 20%, "precision": 50% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 5, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 10},
			"range": 2.0,
			"damage":
				{
				"pierce":{ "base": 25, "strength": NONE, "precision": 60% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 45, "precision": 50 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 6,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.8,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 15},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 25, "strength": NONE, "precision": 60% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Pummel":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 10, "strength": 20%, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 55, "precision": 40 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 15, "precision": -5},
			"range": 1.3,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 15, "strength": 30%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": -10},
			"range": 1.5,
			"damage":
				{
				"crush": { "base": 5, "strength": 30%, "precision": 10% }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 60, "precision": 50 }, "weapons_experience": { "Sword": 4 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 4,
	"experience_per_attack": 7,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 15, "precision": NONE},
			"range": 1.8,
			"damage":
				{
				"cut":   { "base": 30, "strength": 40%, "precision": 40% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 5, "strength": 10%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": -5},
			"range": 2.0,
			"damage":
				{
				"pierce":{ "base": 10, "strength": NONE, "precision": 45% },
				"crush": { "base": 5, "strength": 20%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 50, "precision": 50 }, "weapons_experience": { "Sword": 5 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 10},
			"range": 1.0,
			"damage":
				{
				"pierce":{ "base": 12, "strength": NONE, "precision": 45% },
				"crush": { "base": 5, "strength": 20%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	},
"Blunt Mace": 
	{
	"type": "Mace",
	"requirements":	{ "attributes": { "strength": 50, "precision": 20 }, "weapons_experience": { "Mace": 1 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 1,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 5, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 10, "strength": 50%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": 5, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": 5, "strength": 30%, "precision": 10% }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Spiked Mace": 
	{
	"type": "Mace",
	"requirements":	{ "attributes": { "strength": 50, "precision": 20 }, "weapons_experience": { "Mace": 1 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 10, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 3, "strength": NONE, "precision": NONE },
				"crush": { "base": 15, "strength": 50%, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": 10, "precision": -10},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 3, "strength": NONE, "precision": NONE },
				"crush": { "base": 5, "strength": 30%, "precision": 10% }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Warhammer": 
	{
	"type": "Mace",
	"requirements":	{ "attributes": { "strength": 60, "precision": 30 }, "weapons_experience": { "Mace": 2 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing (Hammer)":
			{
			"bonus": { "strength": 15, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 20, "strength": 45%, "precision": 5% }
				}
			},
		"Swing (Pick)":
			{
			"bonus": { "strength": 15, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 20, "strength": 50%, "precision": 20% },
				"crush": { "base": 10, "strength": 30%, "precision": 10% }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Chained Morningstar": 
	{
	"type": "Mace",
	"requirements":	{ "attributes": { "strength": 60, "precision": 20 }, "weapons_experience": { "Mace": 2 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 4,
	"experience_per_attack": 8,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": 20, "precision": -5},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 5, "strength": NONE, "precision": NONE },
				"crush": { "base": 30, "strength": 60%, "precision": 20% }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Woodchopping": 
	{
	"type": "Axe",
	"requirements":	{ "attributes": { "strength": NONE, "precision": NONE }, "weapons_experience": { "Axe": NONE } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 1,
	"experience_per_attack": 6,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Battle Axe": 
	{
	"type": "Axe",
	"requirements":	{ "attributes": { "strength": NONE, "precision": NONE }, "weapons_experience": { "Axe": NONE } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Daneaxe": 
	{
	"type": "Axe",
	"requirements":	{ "attributes": { "strength": NONE, "precision": NONE }, "weapons_experience": { "Axe": NONE } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Spear": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": 15, "precision": 40 }, "weapons_experience": { "Polearm": 0 } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 4,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 5},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 55% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Short Spear": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": 10, "precision": 30 }, "weapons_experience": { "Polearm": 1 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 1,
	"experience_per_attack": 4,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 10},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Leaf Blade": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": NONE, "precision": NONE }, "weapons_experience": { "Polearm": NONE } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 5,
	"attacks":
		{
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 10, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Poleaxe": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": NONE, "precision": NONE }, "weapons_experience": { "Polearm": NONE } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Halberd": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": NONE, "precision": NONE }, "weapons_experience": { "Polearm": NONE } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 8,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Pike": 
	{
	"type": "Polearm",
	"requirements":	{ "attributes": { "strength": NONE, "precision": NONE }, "weapons_experience": { "Polearm": NONE } },
	"hands": 2
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 7,
	"attacks":
		{
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": NONE,
			"agility": NONE
			}
		}
	},
"Knife": 
	{
	"type": "Short Weapon",
	"requirements":	{ "attributes": { "strength": 0, "precision": 50 }, "weapons_experience": { "Short Weapon": 1 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 1,
	"experience_per_attack": 2,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": 20},
			"range": NONE,
			"damage":
				{
				"cut":   { "base": 10, "strength": 5%, "precision": 20% },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 30},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 10, "strength": NONE, "precision": 40% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 20, "precision": 70 }, "weapons_experience": { "Short Weapon": 4 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 1,
	"experience_per_attack": 2,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": 5},
			"range": NONE,
			"damage":
				{
				"cut":   { "base": 2, "strength": NONE, "precision": NONE },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 40},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 50% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 40, "precision": 65 }, "weapons_experience": { "Short Weapon": 3 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 1,
	"experience_per_attack": 5,
	"attacks":
		{
		"Swing":
			{
			"bonus": { "strength": NONE, "precision": 10},
			"range": NONE,
			"damage":
				{
				"cut":   { "base": 20, "strength": NONE, "precision": NONE },
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"Thrust":
			{
			"bonus": { "strength": NONE, "precision": 10},
			"range": NONE,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 40% },
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	},
"Round Shield (Center Grip)": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": 60, "precision": 40 }, "weapons_experience": { "Shield": 3 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 7,
	"attacks":
		{
		"Push":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 8, "strength": 10%, "precision": NONE }
				}
			},
		"Slap":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 15%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 45, "precision": 10 }, "weapons_experience": { "Shield": 1 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 8,
	"attacks":
		{
		"Push":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.2,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 8, "strength": 10%, "precision": NONE }
				}
			},
		"Slap":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 15%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 30,
			"agility": NONE
			}
		}
	},
"Kite Shield": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": 50, "precision": 10 }, "weapons_experience": { "Shield": 2 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 8,
	"attacks":
		{
		"Push":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.2,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 8, "strength": 10%, "precision": NONE }
				}
			},
		"Slap":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 15%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 35,
			"agility": NONE
			}
		}
	},
"Buckler": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": 30, "precision": 60 }, "weapons_experience": { "Shield": 3 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 1,
	"experience_per_attack": 5,
	"attacks":
		{
		"Push":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.8,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 5, "strength": 5%, "precision": NONE }
				}
			},
		"Slap":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 5, "strength": 10%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 70, "precision": 0 }, "weapons_experience": { "Shield": 1 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 3,
	"experience_per_attack": 8,
	"attacks":
		{
		"Push":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.2,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 8, "strength": 10%, "precision": NONE }
				}
			},
		"Slap":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 15%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": 40,
			"agility": NONE
			}
		}
	},
"Celtic Shield": 
	{
	"type": "Shield",
	"requirements":	{ "attributes": { "strength": 60, "precision": 10 }, "weapons_experience": { "Shield": 1 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 2,
	"experience_per_attack": 8,
	"attacks":
		{
		"Push":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.2,
			"damage":
				{
				"pierce":{ "base": NONE, "strength": NONE, "precision": NONE },
				"crush": { "base": 8, "strength": 10%, "precision": NONE }
				}
			},
		"Slap":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.5,
			"damage":
				{
				"crush": { "base": 8, "strength": 15%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	"requirements":	{ "attributes": { "strength": 35, "precision": 65 }, "weapons_experience": { "Shield": 4 } },
	"hands": 1
	"stamina_cost": 0,
	
	"stamina_per_attack": 1,
	"experience_per_attack": 5,
	"attacks":
		{
		"Push":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.8,
			"damage":
				{
				"pierce":{ "base": 15, "strength": NONE, "precision": 15% },
				"crush": { "base": 5, "strength": 5%, "precision": 10% }
				}
			},
		"Slap":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": 0.8,
			"damage":
				{
				"crush": { "base": 5, "strength": 10%, "precision": NONE }
				}
			},
		"NONE":
			{
			"bonus": { "strength": NONE, "precision": NONE},
			"range": NONE,
			"damage":
				{
				"crush": { "base": NONE, "strength": NONE, "precision": NONE }
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
	},
"$0B": 
	{
	"type": "$0C",
	"requirements":	{ "attributes": { "strength": $0G, "precision": $0H }, "weapons_experience": { "$0C": $0I } },
	"hands": $0D
	"stamina_cost": 0,
	
	"stamina_per_attack": $0E,
	"experience_per_attack": $0F,
	"attacks":
		{
		"$0J":
			{
			"bonus": { "strength": $0K, "precision": $0L},
			"range": $0M,
			"damage":
				{
				"cut":   { "base": $0N, "strength": $0O, "precision": $0P },
				"pierce":{ "base": $0Q, "strength": $0R, "precision": $0S },
				"crush": { "base": $0T, "strength": $0U, "precision": $0V }
				}
			},
		"$0W":
			{
			"bonus": { "strength": $0X, "precision": $0Y},
			"range": $0Z,
			"damage":
				{
				"cut":   { "base": $AA, "strength": $AB, "precision": $AC },
				"pierce":{ "base": $AD, "strength": $AE, "precision": $AF },
				"crush": { "base": $AG, "strength": $AH, "precision": $AI }
				}
			},
		"$AJ":
			{
			"bonus": { "strength": $AK, "precision": $AL},
			"range": $AM,
			"damage":
				{
				"cut":   { "base": $AN, "strength": $AO, "precision": $AP },
				"pierce":{ "base": $AQ, "strength": $AR, "precision": $AS },
				"crush": { "base": $AT, "strength": $AU, "precision": $AV }
				}
			}
		},
	"defenses":
		{
		"bonus":
			{
			"constitution": $AW,
			"agility": $AX
			}
		}
	},

