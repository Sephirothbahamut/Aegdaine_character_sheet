import { equipment   as equipment   } from "./db/equipment.js";
import { experiences as experiences } from "./db/experiences.js";
import { races       as races       } from "./db/races.js";
import { weapons     as weapons     } from "./db/weapons.js";
import { passives    as passives    } from "./db/passives.js";
import { symbols     as symbols     } from "./db/symbols.js";

export const database =
	{
	"equipment"  : equipment,
	"experiences": experiences,
	"races"      : races,
	"weapons"    : weapons,
	"passives"   : passives,
	"symbols"    : symbols
	};
	
window.database = database;