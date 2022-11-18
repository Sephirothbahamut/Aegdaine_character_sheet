import { attributes  as attributes  } from "./db/attributes.js";
import { equipment   as equipment   } from "./db/equipment.js";
import { experiences as experiences } from "./db/experiences.js";
import { races       as races       } from "./db/races.js";
import { skills      as skills      } from "./db/skills.js";
import { symbols     as symbols     } from "./db/symbols.js";

export const database =
	{
	"attributes" : attributes,
	"equipment"  : equipment,
	"experiences": experiences,
	"races"      : races,
	"skills"     : skills,
	"symbols"    : symbols
	};
	
import { attributes as attributes_lib } from "./attributes.js";
	
attributes_lib.for_each((arr) =>
	{
	let object = attributes_lib.get_object_arr(arr, attributes);
	if(object.symbol) { database.symbols[arr.join("_")] = object.symbol; }
	});

window.database = database;