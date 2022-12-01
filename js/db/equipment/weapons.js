import { swords        as swords        } from "./weapons/swords.js";
import { axes          as axes          } from "./weapons/axes.js";
import { maces         as maces         } from "./weapons/maces.js";
import { polearms      as polearms      } from "./weapons/polearms.js";
import { short_weapons as short_weapons } from "./weapons/short_weapons.js";
import { shields       as shields       } from "./weapons/shields.js";
import { ranged        as ranged        } from "./weapons/ranged.js";
import { natural       as natural       } from "./weapons/natural.js";

export const weapons = {
	"Sword"       : swords,
	"Axe"         : axes,
	"Mace"        : maces,
	"Polearm"     : polearms,
	"Short Weapon": short_weapons,
	"Shield"      : shields,
	"Ranged"      : ranged,
	"Natural"     : natural
};
