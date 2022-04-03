import { ui as ui } from "../ui.js";
import { database as database } from "../database.js";

/* IMPORTANT NOTE:
Attributes-affecting effects should scale based on character.attributes._4_location, and be +='d to attributes.cache._5_skills.
That way, all attributes affecting effects are cumulated in attributes.cache._5_skills and then added to the _4_location base to be then used in _6_final
*/

export const skills = {
"Help Developer":
	{
	"effect": function(character)
		{
		for(const [key, value] of Object.entries(character.attributes._4_location))
			{
			if(key != "senses") {character.attributes.cache._5_skills[key] += value * .05; }
			}
		},
	"text": "All your attributes are increased by 5%."
	},
"Attack":
	{
	"categories": ["combat"],
	"auto_assign": true,
	"text": "During your turn you can Attack an opponent up to a number of times equal to your 'Actions-Max' with your current weapon. The set of attacks you perform in one turn is called an Attack Sequence.\
			\nEach attack costs you the 'Actions-Cost' value of your weapon in stamina.\
			\nWhen you attack, roll for Strength and Precision. Add to the result the Bonus Strength/Precision of the Attack you're performing.\
			\nThen describe your action, and specify the body part of your opponent you're aiming your attack at. \
			\nIf your opponent's Defend action succeeds, your Attack has no further effect.\
			\nIf either your Strength or Precision roll is greater than your opponent's Strength or Precision protections respectively, inflict the full damage of the Attack you're performing to your opponent.\
			\nOtherwise the 3 portions of damage of the Attack you're performing (cut, pierce and crush) are reduced by your opponent's respective Reductions before applying the damage. Any damage below 0 is just 0."
	},
"Defend":
	{
	"categories": ["combat"],
	"auto_assign": true,
	"text": "When you're being attacked by an opponent, you can choose to Parry, Block or Dodge the attack. \
			\nParry: roll for Agility and add the Agility defense Bonus of the weapon you're parrying the Attack with. If the result is higher than the attacker's Precision roll, your defense succeeded.\
			\nBlock: roll for Constitution and add the Constitution defense Bonus of the weapon you're blocking the Attack with. If the result is higher than the attacker's Strength roll, your defense succeeded.\
			\nDodge: roll for Agility. If the result is higher than the attacker's Precision roll, your defense succeeded. If your defense succeeded, make one step in the direction you was dodging towards."
	},
"Weapon Swap": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"text": "At the beginning of your turn, you can change your weapon, or swap stance with the current weapon. You cannot Attack the turn you perform this action."
	},
	
	
"Weapon Mastery":
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": 
		{
		"custom": function(character)
			{
			for(const [key, value] of Object.entries(character.weapons_experience)) { if(value > 5) { return true; } }
			return false;
			}
		},
	"effect": function(character)
		{
		for(const [key, value] of Object.entries(character.weapons)) 
			{
			const equipment_data = database.equipment.weapons[key];
			
			if(character.weapons_experience[equipment_data.type] > 5)
				{
				const exp_above_5 = character.weapons_experience[equipment_data.type] - 5;
				value.stamina_per_Attack *= Math.pow(.9, exp_above_5);
				}
			}
		ui.update_equipment(character, "weapons");
		},
	"text": "For each level of experience with your curent weapon over 5, the stamina cost per Attack is multiplied by 0.9"
	},
"Flurry of Blows":
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "experience_categories": { "military": 8 } },
	"text": "During your turn (doesn't apply with counters during enemy turns) if your weapon experience with the weapon you're using to Attack is higher than the weapon experience of your target with the weapon he's using for defending, your target has a precision and constitution malus equal to the difference in experience for each consecutive Attack against the same target. \
			\nThis malus is reset when you Attack a different target or at the end of your turn."
	},
"Counter": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "experience_categories": { "military": 3 } },
	"text": "If you successfully Parry an enemy Attack with a weapon (or shield), you can Counter-Attack with the same weapon (or shield). \
			\nThe enemy can defend from a Counter-Attack, but cannot Counter-Attack in response. Counter-Attacking still applies the Attacking stamina cost to your character."
	},
"block Counter": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "experience_categories": { "military": 3 }, "weapons_experience": { "Shield": 2 } },
	"text": "If you successfully block an enemy Attack with a shield, you can Counter-Attack with your other weapon. \
			\nThe enemy can defend from a Counter-Attack, but cannot Counter-Attack in response. Counter-Attacking still applies the Attacking stamina cost to your character."
	},
"Nimble Counter": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "experience_categories": { "military": 3 }, "weapons_experience": { "Short Weapon": 2 } },
	"text": "If you successfully block an enemy Attack with a short weapon, you can Counter-Attack with your other weapon. \
			\nThe enemy can defend from a Counter-Attack, but cannot Counter-Attack in response. Counter-Attacking still applies the Attacking stamina cost to your character."
	},
"Bash": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "attributes": { "strength": 50 } },
	"text": "If your opponent fails a Parry or block, and your Strength is higher than your opponent's Constitution + 30, he can no longer Parry or block. \
			\nThis malus is reset when you Attack a different target or at the end of your turn."
	},
"Footwork": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "experience_categories": { "military": 3 }, "attributes": { "agility": 20 } },
	"text": "Before each Attack (or Counter-Attack), you can perform a step towards your opponent or away from him."
	},
"Sidestep": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "experience_categories": { "military": 3 }, "attributes": { "agility": 40 } },
	"text": "Before each Attack (or Counter-Attack), you can perform a step to one side. You get -10 Strength for that Attack and your Opponent gets -10 Agility if he tries to Parry that Attack."
	},
"Quick Stance Change": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": 
		{
		"custom": function(character)
			{
			for(const [key, value] of Object.entries(character.weapons_experience)) { if(value > 10) { return true; } }
			return false;
			}
		},
	"text": "During an Attack Sequence, you can replace an Attack action with a Stance Change with your current weapon."
	},
"Lunge": 
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "attributes": { "agility": 60 } },
	"text": "Add your Step's length to the range of one Attack of your Attack Chain. If the chosen attack is not the first one, that Attack will conclude the Chain."
	},

"Blacksmith's Keen Eye":
	{
	"categories": ["combat"],
	"auto_assign": true,
	"requirements": { "experiences": { "Blacksmith": 5 } },
	"text": "During the armor check when you successfully Attack an opponent, your precision for the check is increased by your years of experience as a blacksmith."
	},
	
"Magic Catalyst":
	{
	"auto_assign": true,
	"requirements": { "experiences": { "Mage": 3 } },
	"text": "Chose any item to be your Magic Catalyst. Increase your Focus when performing magic while using that item by your years of experience as a Mage above 3, up to 20. \
			\nYou can only have one Magic Catalyst."
	},
"Artistic Catalyst":
	{
	"auto_assign": true,
	"requirements": { "experiences": { "Artist": 5 } },
	"text": "Chose any item to be your Magic Catalyst. Increase your Focus when performing magic while using that item by your years of experience as an Artist above 5, up to 20. \
			\nYou can only have one Magic Catalyst."
	},
"Instrumental Catalyst":
	{
	"auto_assign": true,
	"requirements": { "experiences": { "Musician": 5 } },
	"text": "Chose any item to be your Magic Catalyst. Increase your Focus when performing magic while using that item by your years of experience as a Musician above 5, up to 20. \
			\nYou can only have one Magic Catalyst."
	},
"Specialized Research":
	{
	"auto_assign": true,
	"requirements": { "experiences": { "Researcher": 5 } },
	"text": "Chose a field of science. Increase your Focus when performing magic centered about that field of science by your years of experience as a Researcher above 5, up to 20. \
			\nDoes not stack with Magic Catalysts"
	},
"Signature Spell":
	{
	"auto_assign": true,
	"requirements": { "experiences": { "Mage": 3 } },
	"text": "Choose a spell as your signature spell. The time-per-range requirement to cast that spell is reduced by 1, plus 1 for each 5 years of experience as a Mage."
	},
"Swift Thinking":
	{
	"auto_assign": true,
	"requirements": { "experiences": { "Mage": 3 } },
	"text": "During someone else's turn, at most once between your turns, you can react to a Character's Action by casting a Spell with a time requirement of at most 1, plus 1 for each 10 years of experience as a Mage, up to 3."
	},
"Sommelier":
	{
	"auto_assign": true,
	"requirements": { "experiences": { "Alchool": 3 } },
	"text": "When checking value, quality and properties of drink, add your years of experience as an alchoolic to your Wisdom roll."
	},
"Cheater":
	{
	"auto_assign": true,
	"requirements": { "experiences": { "Alchool": 3 } },
	"text": "Add your years of experience as a gambler to Wisdom throws to check if someone is cheating at a game, and to Dexterity throws when cheating at a game, up to 30."
	},

"Fly":
	{
	"categories": ["racial"],
	"auto_assign": true,
	"requirements": { "races": ["Astral Dragon", "Black Dragon", "Blue Dragon", "Red Dragon", "Green Dragon", "Grey Dragon", "Minidragon", "Winged Human"] },
	"text": "You can fly. Flying in combat costs double your movement stamina per turn. Flying outside of combat costs your movement stamina per minute."
	},
"Gallop":
	{
	"categories": ["racial"],
	"auto_assign": true,
	"requirements": { "races": ["Centaur"] }, //TODO other winged races
	"text": "In combat if you've not been Attacked in the last turn, you can move for double your movement at the cost of double your movement stamina per turn."
	}
};