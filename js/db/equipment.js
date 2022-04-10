import { weapons     as weapons     } from "./weapons.js";

export const equipment = {
"head": // ========== ========== ========== ========== ========== HEAD ========== ========== ========== ========== ==========
	{
	"Kettle":
		{
		"type": "Helmet",
		"attributes": { "hiddenness": -10 },
		
		"stamina_cost": 0,
		
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 10
				},
			"protection":
				{
				"strength" : 100,
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
				"cut"   : 60,
				"pierce": 60,
				"crush" : 12
				},
			"protection":
				{
				"strength" : 100,
				"precision": 70
				}
			}
		},
	"Gjermundbu":
		{
		"type": "Helmet",
		"attributes": { "sight": -10, "hearing": -10, "hiddenness": -5 },
		
		"stamina_cost": 1,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 12
				},
			"protection":
				{
				"strength" : 100,
				"precision": 60
				}
			}
		},
	"Anglosaxon Helmet":
		{
		"type": "Helmet",
		"attributes": { "sight": -10, "hearing": -10, "hiddenness": -10 },
		
		"stamina_cost": 1,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 12
				},
			"protection":
				{
				"strength" : 100,
				"precision": 70
				}
			}
		},
	"Spangenhelm":
		{
		"type": "Helmet",
		"attributes": { "sight": -8, "hearing": -8, "hiddenness": -8 },
		
		"stamina_cost": 1,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 12
				},
			"protection":
				{
				"strength" : 100,
				"precision": 80
				}
			}
		},
	"Barbute":
		{
		"type": "Helmet",
		"attributes": { "sight": -10, "hearing": -10, "hiddenness": -12 },
		
		"stamina_cost": 1,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 12
				},
			"protection":
				{
				"strength" : 100,
				"precision": 80
				}
			}
		},
	"Great Helm":
		{
		"type": "Helmet",
		"attributes": { "sight": -20, "hearing": -20, "social_status": 5, "hiddenness": -12 },
		
		"stamina_cost": 2,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 8
				},
			"protection":
				{
				"strength" : 100,
				"precision": 100
				}
			}
		},
	"Bashinet":
		{
		"type": "Helmet",
		"attributes": { "sight": -20, "hearing": -20, "social_status": 12, "hiddenness": -15 },
		
		"stamina_cost": 3,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 15
				},
			"protection":
				{
				"strength" : 100,
				"precision": 100
				}
			}
		},

	"Burgonet":
		{
		"type": "Helmet",
		"attributes": { "sight": -18, "hearing": -18, "social_status": 15, "hiddenness": -15 },
		
		"stamina_cost": 3,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 15
				},
			"protection":
				{
				"strength" : 100,
				"precision": 100
				}
			}
		},

		
	"Padded Coif":
		{
		"type": "Helmet",
		"attributes": { "sight": -10, "hearing": -10, "hiddenness": -5 },
		
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
		"type": "Armour",
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
				"strength" : 50,
				"precision": 100
				}
			}
		},
	"Gambeson":
		{
		"type": "Armour",
		"attributes": { "agility": -4, "social_status": 5, "hiddenness": -5 },
		
		"stamina_cost": 1,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 8,
				"pierce": 2,
				"crush" : 12
				},
			"protection":
				{
				"strength" : 50,
				"precision": 100
				}
			}
		},
	"Chainmail":
		{
		"type": "Armour",
		"attributes": { "agility": -2, "social_status": 5, "hiddenness": -10 },
		
		"stamina_cost": 1,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 20,
				"pierce": 8,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 80,
				"precision": 95
				}
			}
		},
	"Plated Mail":
		{
		"type": "Armour",
		"attributes": { "agility": -5, "precision": -2, "hiddenness": -20 },
		
		"stamina_cost": 2,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 25,
				"pierce": 25,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 90,
				"precision": 95
				}
			}
		},
	"Scale Armour":
		{
		"type": "Armour",
		"attributes": { "agility": -8, "precision": -3, "social_status": 10, "hiddenness": -15 },
		
		"stamina_cost": 2,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 30,
				"pierce": 30,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 100,
				"precision": 90
				}
			}
		},
	"Brigandine":
		{
		"type": "Armour",
		"attributes": { "agility": -10, "precision": -4, "social_status": 10, "hiddenness": -15 },
		
		"stamina_cost": 3,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 30,
				"pierce": 30,
				"crush" : 10
				},
			"protection":
				{
				"strength" : 100,
				"precision": 95
				}
			}
		},
	"Breastplate":
		{
		"type": "Armour",
		"attributes": { "agility": -8, "social_status": 12, "hiddenness": -20 },
		
		"stamina_cost": 3,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 50,
				"pierce": 50,
				"crush" : 5
				},
			"protection":
				{
				"strength" : 100,
				"precision": 80
				}
			}
		},
	"Plate Armour":
		{
		"type": "Armour",
		"attributes": { "agility": -8, "precision": -5, "social_status": 15, "hiddenness": -30 },
		
		"stamina_cost": 3,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 60,
				"pierce": 60,
				"crush" : 8
				},
			"protection":
				{
				"strength" : 100,
				"precision": 95
				}
			}
		},
	"Travel Clothing":
		{
		"type": "Clothing",
		"attributes": { "hiddenness": 5 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Farmer Clothing":
		{
		"type": "Clothing",
		"attributes": { "social_status": -15, "hiddenness": 5 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Nobleman Clothing":
		{
		"type": "Clothing",
		"attributes": { "social_status": 30, "hiddenness": -30 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Ripped Clothing":
		{
		"type": "Clothing",
		"attributes": { "social_status": -20, "hiddenness": 10 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Rich Clothing":
		{
		"type": "Clothing",
		"attributes": { "social_status": 20, "hiddenness": -20 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Dark Clothing":
		{
		"type": "Clothing",
		"attributes": { "hiddenness": 20 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Heavy Work Clothing":
		{
		"type": "Clothing",
		"attributes": { },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 2,
				"pierce": 2,
				"crush" : 5
				},
			"protection":
				{
				"strength" : 80,
				"precision": 80
				}
			}
		},
	"Blacksmith Clothing":
		{
		"type": "Clothing",
		"attributes": {"social_status": -10 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 4,
				"pierce": 2,
				"crush" : 8
				},
			"protection":
				{
				"strength" : 80,
				"precision": 80
				}
			}
		},
	"Night Tunic":
		{
		"type": "Clothing",
		"attributes": {"social_status": -10 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Cape":
		{
		"type": "Addition",
		"attributes": {"social_status": 10, "hiddenness": 15 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Jacket":
		{
		"type": "Addition",
		"attributes": {"hiddenness": 10 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Surcoat":
		{
		"type": "Addition",
		"attributes": {"social_status": 20, "hiddenness": -20 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Fur":
		{
		"type": "Addition",
		"attributes": {"social_status": -5, "hiddenness": -10 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		}
	},
"jewelry": // ========== ========== ========== ========== ========== JEWELRY ========== ========== ========== ========== ==========
	{
	"Crystal Sphere Fragment Amulet":
		{
		"type": "Necklace",
		"attributes": {"intelligence": 5, "wisdom": 5, "focus": 5, "hiddenness": -1 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"White Wyvern Silver Amulet":
		{
		"type": "Necklace",
		"attributes": {"stamina": 2, "agility": 2, "wisdom": 3, "focus": 5, "hearing": 3, "hiddenness": -5 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Leaf Amulet":
		{
		"type": "Necklace",
		"attributes": {"stamina": 1, "agility": 5 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Feather Amulet":
		{
		"type": "Necklace",
		"attributes": {"agility": 8 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Silver Ring":
		{
		"type": "Ring",
		"attributes": {"agility": 3, "social_status": 10, "hiddenness": -3 },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		},
	"Crystal Sphere Fragment":
		{
		"type": "Shard",
		"attributes": { },
		
		"stamina_cost": 0,
			
		"defenses":
			{
			"reductions":
				{
				"cut"   : 0,
				"pierce": 0,
				"crush" : 0
				},
			"protection":
				{
				"strength" : 0,
				"precision": 0
				}
			}
		}
	},
"weapons": weapons
};