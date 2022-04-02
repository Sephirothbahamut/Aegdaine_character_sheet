export const experiences = {
"School": 
	{ 
	},
"Noble": 
	{ 
	"categories": ["occupation"],
	"attributes": 
		{
		"base": { "social_status": 2, "wisdom": 1 },
		"city": { "social_status": 1 }
		},
	"weapons": [ "Sword", "Axe" ],
	"requirements": 
		{
		//"races": ["Elf"],
		"experiences": { "School": 4 },
		"custom": function(character)
			{
			return character.character_data.race != "Human";
			}
		}
	},
"Hunter": 
	{ 
	"attributes": 
		{
		"base": { "agility": 1, "precision": 2 },
		"wild": { "wisdom": 1 }
		},
	"weapons": [ "Bow" ]
	},
"Soldier":
	{
	"categories": ["occupation", "military"],
	"attributes": { "base": { "strength": 2, "precision": 2 } },
	"weapons": [ "Axe", "Sword", "Polearm", "Mace", "Shield" ]
	},
"Blacksmith":
	{
	"categories": ["occupation"],
	"attributes": { "base": { "strength": 2, "precision": 2 } },
	"weapons": [ "Mace" ]
	}
};