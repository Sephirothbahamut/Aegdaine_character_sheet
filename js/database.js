import { equipment   as equipment   } from "./db/equipment.js";
import { experiences as experiences } from "./db/experiences.js";
import { races       as races       } from "./db/races.js";
import { skills      as skills      } from "./db/skills.js";
import { symbols     as symbols     } from "./db/symbols.js";

export const database =
	{
	"equipment"  : equipment,
	"experiences": experiences,
	"races"      : races,
	"skills"     : skills,
	"symbols"    : symbols
	};
	
window.database = database;