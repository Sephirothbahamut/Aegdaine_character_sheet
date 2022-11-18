import { mymath as mymath } from "./../utils/math/operations.js";

// Notes:
// "race" field enables this attribute to be evaluated through curves defined in the current race. Any attribute without this flag will be ignored. All races are expected to have curves defined for each attribute with this flag.
// "roll" field enables this attribute to be evaluated from a character's data rolls. Characters data is expected to have a value associated to each attribute with this flag
// "symbol" is optional. Will be used when building HTML tables
// "components" makes an attribute composite. Attributes inside the "components" field cannot be composite attributes but can have any of the previous flags.
// "composition_function" specifies how the composite attribute is evaluted based on its individual components. It expects a function that accepts n arguments, where n is the amount of components.

export const attributes = 
	{
	"strength"     : { "roll": true, "symbol": "💪" },
	"constitution" : { "roll": true, "symbol": "🏋" },
	"stamina"      : { "roll": true, "symbol": "🏃" },
	"agility"      : { "roll": true, "symbol": "🍃" },
	"precision"    : { "roll": true, "symbol": "🎯" },
	"intelligence" : { "roll": true, "symbol": "🧠" },
	"wisdom"       : { "roll": true, "symbol": "📖" }, //🌌
	"focus"        : { "roll": true, "symbol": "🧘" },
	"eloquence"    : { "roll": true, "symbol": "💬" },
	"senses"       : 
		{
		"composition_function": Math.max,
		"components":
			{
			"sight"  : { "symbol": "👀" },
			"touch"  : { "symbol": "✋" },
			"smell"  : { "symbol": "👃" },
			"taste"  : { "symbol": "👅" },
			"hearing": { "symbol": "👂" },
			},
		"symbol": "⬠"
		},
	"social_status": { "roll": true, "composite": false, "symbol": "✨" },
	"hiddenness"   : { "roll": true, "symbol": "🐭" },
	};