export const equipment = {
"head": // ========== ========== ========== ========== ========== HEAD ========== ========== ========== ========== ==========
	{
	"Kettle":
		{
		"type": "Helmet",
		"attributes": { "hiddenness": -10 },
		
		"stamina_cost": 0,
		
		"requirements": 
			{
			"experiences": { "School": 3 }
			},
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 85,
				"pierce": 70,
				"crush" : 10
				},
			"protection":
				{
				"strength" : 80,
				"precision": 40
				}
			}
		},
	"Sallet":
		{
		"type": "Helmet",
		"attributes": { "sight": -20, "hearing": -20, "hiddenness": -10 },
		
		"stamina_cost": 2,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 90,
				"pierce": 75,
				"crush" : 10
				},
			"protection":
				{
				"strength" : 95,
				"precision": 80
				}
			}
		},
	"Gjermundbu":
		{
		"type": "Helmet",
		"attributes": { "sight": -10, "hiddenness": -5 },
		
		"stamina_cost": 1,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 70,
				"pierce": 60,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 70,
				"precision": 60
				}
			}
		},
		
	"Padded Coif":
		{
		"type": "Helmet",
		"attributes": { "sight": -10, "hiddenness": -5 },
		
		"stamina_cost": 1,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 8,
				"pierce": 5,
				"crush" : 20
				},
			"protection":
				{
				"strength" : 80,
				"precision": 60
				}
			}
		}
	},
"body": // ========== ========== ========== ========== ========== BODY ========== ========== ========== ========== ==========
	{
	"Quilted Jacket":
		{
		"type": "Helmet",
		"attributes": { "agility": -2 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 5,
				"pierce": 1,
				"crush" : 8
				},
			"protection":
				{
				"strength" :  50,
				"precision": 100
				}
			}
		}
	},
"jewelry": // ========== ========== ========== ========== ========== JEWELRY ========== ========== ========== ========== ==========
	{
	
	},
"weapons": // ========== ========== ========== ========== ========== WEAPONS ========== ========== ========== ========== ==========
	{
	"Arming Sword": 
		{
		"type": "sword",
		
		"attributes": { "social_status": 5 },
		"requirements":	{ "attributes": { "strength": 45, "precision": 60 }, "weapons_experience": { "sword": 2 } },
		
		"stamina_cost": 0,
		
		"stamina_per_attack": 2,
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
		"defenses":
			{
			"reductions":
				{
				"cut"   : 100,
				"pierce": 100,
				"crush" : 100
				},
			"protection":
				{
				"strength" :  50,
				"precision":  10
				},
			"bonus":
				{
				"constitution": -5
				}
			}
		}
	}
};