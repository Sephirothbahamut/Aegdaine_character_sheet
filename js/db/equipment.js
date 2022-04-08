import { weapons     as weapons     } from "./weapons.js";

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
"weapons": weapons
};