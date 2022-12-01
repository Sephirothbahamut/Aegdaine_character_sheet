export const body = {
	
"Clothing":
	{
	"Travel Clothing":
		{
		"attributes": { "hiddenness": { "value": 5 } }
		},
	"Farmer Clothing":
		{
		"attributes": { "social_status": { "value": -15 }, "hiddenness": { "value": 5 } }
		},
	"Nobleman Clothing":
		{
		"attributes": { "social_status": { "value": 30 }, "hiddenness": { "value": -30 } }
		},
	"Ripped Clothing":
		{
		"attributes": { "social_status": { "value": -20 }, "hiddenness": { "value": 10 } }
		},
	"Rich Clothing":
		{
		"attributes": { "social_status": { "value": 20 }, "hiddenness": { "value": -20 } }
		},
	"Dark Clothing":
		{
		"attributes": { "hiddenness": { "value": 20 } }
		},
	"Heavy Work Clothing":
		{
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
		},
	"Cape":
		{
		"attributes": { "social_status": { "value": 10 }, "hiddenness": { "value": 15 } }
		},
	"Jacket":
		{
		"attributes": { "hiddenness": { "value": 10 } },
		"defenses":
			{
			"reductions":
				{
				"cut"   : 3,
				"pierce": 0,
				"crush" : 5
				},
			"protection":
				{
				"strength" : 60,
				"precision": 50
				}
			}
		},
	"Surcoat":
		{
		"attributes": { "social_status": { "value": 20 }, "hiddenness": { "value": -20 } },
		"defenses":
			{
			"reductions":
				{
				"cut"   : 3,
				"pierce": 0,
				"crush" : 8
				},
			"protection":
				{
				"strength" : 50,
				"precision": 70
				}
			}
		}
	},
"Light armour":
	{
	"Quilted Jacket":
		{
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
		}
	},
"Heavy armour":
	{
	"Brigandine":
		{
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
		}
	},
"Natural":
	{
	"Fur":
		{
		"attributes": { "social_status": { "value": -5 }, "hiddenness": { "value": -10 } },
		"defenses":
			{
			"reductions":
				{
				"cut"   : 5,
				"pierce": 0,
				"crush" : 8
				},
			"protection":
				{
				"strength" : 50,
				"precision": 60
				}
			}
		},
	"Scales":
		{
		"attributes": { "social_status": { "value": 15 }, "hiddenness": { "value": -10 } },
		"defenses":
			{
			"reductions":
				{
				"cut"   : 40,
				"pierce": 50,
				"crush" : 20
				},
			"protection":
				{
				"strength" : 70,
				"precision": 60
				}
			}
		}
	}

};
