import { ui as ui } from "../ui.js";
import { database as database } from "../database.js";

/* IMPORTANT NOTE:
Attributes-affecting effects should scale based on character.attributes._4_location, and be +='d to attributes.cache._5_skills.
That way, all attributes affecting effects are cumulated in attributes.cache._5_skills and then added to the _4_location base to be then used in _6_final
*/

export const skills = {
"Help Developer":
	{
	"effectz": function(character)
		{
		for(const [key, value] of Object.entries(character.attributes._4_location))
			{
			if(key != "senses") {character.attributes.cache._5_skills[key] += value * .1; }
			}
		},
	"text": "All your attributes are increased by 10%"
	},
"Weapon Mastery":
	{
	"category": ["combat"],
	"auto_assign": true,
	"requirements": { "experience_categories": { "military": 5 } },
	"effect": function(character)
		{
		for(const [key, value] of Object.entries(character.weapons)) 
			{
			const equipment_data = database.equipment.weapons[key];
			
			value.stamina_per_attack *= Math.pow(.9, character.weapons_experience[equipment_data.type]);
			}
		ui.update_equipment(character, "weapons");
		},
	"text": "For each level of experience with your curent weapon, the stamina cost per attack is multiplied by 0.9"
	},
"Flurry of Blows":
	{
	"category": ["combat"],
	"auto_assign": true,
	"requirements": { "experience_categories": { "military": 5 } },
	"text": "If your weapon experience with the weapon you're using to attack is higher than the weapon experience of your target with the weapon he's using for defending, your target has a precision and constitution malus equal to the difference in experience for each consecutive attack against the same target. This malus is reset when you attack a different target or at the end of the turn"
	},
"Blacksmith's Keen Eye":
	{
	"category": ["combat"],
	"auto_assign": true,
	"requirements": { "experiences": { "blacksmith": 5 } },
	"text": "During the armor check when you successfully attack an opponent, your precision for the check is increased by your years of experience as a blacksmith."
	},
"Fly":
	{
	"category": ["racial"],
	"auto_assign": true,
	"requirements": { "races": "Winged Human" }, //TODO other winged races
	"text": "You can fly. Flying in combat costs double your movement stamina per turn. Flying outside of combat costs your movement stamina per minute."
	}
};