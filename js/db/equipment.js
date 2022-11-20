import { weapons     as weapons     } from "./weapons.js";

export const equipment = {
"head": // ========== ========== ========== ========== ========== HEAD ========== ========== ========== ========== ==========
	{
	"Kettle":
		{
		"type": "Helmet",
		"attributes": { "hiddenness": { "value": -10 } },
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -20 },
					"hearing": { "value": -20 }
					}
				},
			"hiddenness": { "value": -10 } 
			},
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -10 },
					"hearing": { "value": -10 }
					}
				},
			"hiddenness": { "value": -5 } 
			},
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -10 },
					"hearing": { "value": -10 }
					}
				},
			"hiddenness": { "value": -10 } 
			},
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -8 },
					"hearing": { "value": -8 }
					}
				},
			"hiddenness": { "value": -8 } 
			},
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -10 },
					"hearing": { "value": -10 }
					}
				},
			"hiddenness": { "value": -12 } 
			},
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -20 },
					"hearing": { "value": -20 }
					}
				},
			"social_status": { "value": 5 },
			"hiddenness": { "value": -12 } 
			},
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -20 },
					"hearing": { "value": -20 }
					}
				},
			"social_status": { "value": 12 },
			"hiddenness": { "value": -15 } 
			},
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -18 },
					"hearing": { "value": -18 }
					}
				},
			"social_status": { "value": 15 },
			"hiddenness": { "value": -15 } 
			},
		
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
		"attributes": 
			{
			"senses":
				{
				"components":
					{
					"sight"  : { "value": -10 },
					"hearing": { "value": -10 }
					}
				},
			"hiddenness": { "value": -5 } 
			},
		
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
		"attributes": { "agility": { "value": -2 } },
		
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
		"attributes": { "agility": { "value": -4 }, "social_status": { "value": 5 }, "hiddenness": { "value": -5 } },
		
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
		"attributes": { "agility": { "value": -2 }, "social_status": { "value": 5 }, "hiddenness": { "value": -10 } },
		
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
		"attributes": { "agility": { "value": -5 }, "precision": { "value": -2 }, "hiddenness": { "value": -20 } },
		
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
		"attributes": { "agility": { "value": -8 }, "precision": { "value": -3 }, "social_status": { "value": 10 }, "hiddenness": { "value": -15 } },
		
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
		"attributes": { "agility": { "value": -10 }, "precision": { "value": -4 }, "social_status": { "value": 10 }, "hiddenness": { "value": -15 } },
		
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
		"attributes": { "agility": { "value": -8 }, "social_status": { "value": 12 }, "hiddenness": { "value": -20 } },
		
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
		"attributes": { "agility": { "value": -8 }, "precision": { "value": -5 }, "social_status": { "value": 15 }, "hiddenness": { "value": -30 } },
		
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
		"attributes": { "hiddenness": { "value": 5 } },
		
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
		"attributes": { "social_status": { "value": -15 }, "hiddenness": { "value": 5 } },
		
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
		"attributes": { "social_status": { "value": 30 }, "hiddenness": { "value": -30 } },
		
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
		"attributes": { "social_status": { "value": -20 }, "hiddenness": { "value": 10 } },
		
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
		"attributes": { "social_status": { "value": 20 }, "hiddenness": { "value": -20 } },
		
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
		"attributes": { "hiddenness": { "value": 20 } },
		
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
		"attributes": { "social_status": -10 } },
		
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
		"attributes": { "social_status": { "value": -10 } },
		
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
		"attributes": { "social_status": { "value": 10 }, "hiddenness": { "value": 15 } },
		
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
		"attributes": { "hiddenness": { "value": 10 } },
		
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
		"attributes": { "social_status": { "value": 20, "hiddenness": { "value": -20 } },
		
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
		"attributes": { "social_status": { "value": -5 }, "hiddenness": { "value": -10 } },
		
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
		"attributes": { "intelligence": { "value": 5 }, "knowledge": { "value": 5 }, "focus": { "value": 5 }, "hiddenness": { "value": -1 } }
		},
	"White Wyvern Silver Amulet":
		{
		"type": "Necklace",
		"attributes": 
			{
			"stamina"  : { "value": 2 },
			"agility"  : { "value": 2 },
			"knowledge": { "value": 3 },
			"focus"    : { "value": 5 },
			"senses":
				{
				"components":
					{
					"hearing": { "value": 3 }
					}
				},
			"hiddenness": { "value": -3 } 
			}
		},
	"Leaf Amulet":
		{
		"type": "Necklace",
		"attributes": { "stamina": { "value": 1 }, "agility": { "value": 5 } }
		},
	"Feather Amulet":
		{
		"type": "Necklace",
		"attributes": { "agility": { "value": 8 } }
		},
	"Silver Ring":
		{
		"type": "Ring",
		"attributes": { "social_status": { "value": 10 }, "hiddenness": { "value": -1 } }
		},
	"Ruby Ring":
		{
		"type": "Ring",
		"attributes": { "strength":     { "value": 4 }, "social_status": { "value": 15 }, "hiddenness": { "value": -2 } }
		},
	"Amethist Ring":
		{
		"type": "Ring",
		"attributes": { "focus":        { "value": 4 }, "social_status": { "value": 15 }, "hiddenness": { "value": -2 } }
		},
	"Sapphire Ring":
		{
		"type": "Ring",
		"attributes": { "agility":      { "value": 4 }, "social_status": { "value": 15 }, "hiddenness": { "value": -2 } }
		},
	"Emerald Ring":
		{
		"type": "Ring",
		"attributes": { "stamina":      { "value": 4 }, "social_status": { "value": 15 }, "hiddenness": { "value": -2 } }
		},
	"Opal Ring":
		{
		"type": "Ring",
		"attributes": { "intelligence": { "value": 4 }, "social_status": { "value": 15 }, "hiddenness": { "value": -2 } }
		},
	"Quartz Ring":
		{
		"type": "Ring",
		"attributes": { "precision":    { "value": 4 }, "social_status": { "value": 15 }, "hiddenness": { "value": -2 } }
		},
	"Iron Braclet":
		{
		"type": "Braclet",
		"attributes": { "strength": { "value": 10 }, "hiddenness": { "value": -1 } },
		"stamina_cost": 2
		}
	},
"weapons": weapons
};