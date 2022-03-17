export const experiences = {
"School": 
	{ 
	},
"Noble": 
	{ 
	"attributes": 
		{
		"base": { "social_status": 2, "wisdom": 1 },
		"city": { "social_status": 1 }
		},
	"weapons": [ "sword", "axe" ],
	/*"requirements": 
		{
		"races": ["Elf"],
		"experiences": { "School": 4 }
		}*/
	"requirements_check": function(character)
		{
		return character.character_data.race === "Elf";
		}
	},
"Hunter": 
	{ 
	"attributes": 
		{
		"base": { "agility": 1, "precision": 2 },
		"wild": { "wisdom": 1 }
		},
	"weapons": [ "bow" ]
	},
"Soldier":
	{
	"attributes": { "base": { "strength": 2, "precision": 2 } },
	"weapons": [ "axe", "sword", "polearm", "mace", "shield" ]
	}
};