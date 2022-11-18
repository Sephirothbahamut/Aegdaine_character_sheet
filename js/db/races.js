import { ease   as ease   } from "./../utils/math/easings.js"
import { mymath as mymath } from "./../utils/math/operations.js"

function make_base_physical_mortal(base_optimal_age, base_optimal_value, base_death_age, base_death_value)
	{
	return mymath.make_composite_function
		([
		{"end": base_optimal_age, "end_val": base_optimal_value, "type": ease.out_sine},
		{"end": base_death_age, "end_val": base_death_value, "type": ease.in_sine},
		]);
	}
function make_exp_physical_mortal(exp_optimal_age , exp_optimal_value , exp_death_age , exp_death_value)
	{
	return mymath.make_composite_function
		([
		{"end":  10, "end_val":   0, "type": ease.linear},
		{"end": exp_optimal_age, "end_val": exp_optimal_value, "type": ease.out_quint},
		{"end": exp_death_age, "end_val": exp_death_value, "type": ease.in_quart},
		]);
	}
	
function make_base_physical_immortal(base_optimal_age, base_optimal_value)
	{
	return mymath.make_composite_function
		([
		{"end": base_optimal_age, "end_val": base_optimal_value, "type": ease.out_sine},
		{"end": 999999, "end_val": base_optimal_value, "type": ease.linear},
		]);
	}
function make_exp_physical_immortal(exp_optimal_age , exp_optimal_value)
	{
	return mymath.make_composite_function
		([
		{"end":  10, "end_val":   0, "type": ease.linear},
		{"end": exp_optimal_age, "end_val": exp_optimal_value, "type": ease.out_quint},
		{"end": 999999, "end_val": exp_optimal_age, "type": ease.linear},
		]);
	}
	
function make_base_mental_mortal(base_optimal_age, base_optimal_value, base_death_age, base_death_value)
	{
	return mymath.make_composite_function
		([
		{"end": base_optimal_age, "end_val": base_optimal_value, "type": ease.out_sine},
		{"end": base_death_age, "end_val": base_death_value, "type": ease.in_quint},
		]);
	}
function make_exp_mental_mortal(exp_optimal_age , exp_optimal_value , exp_death_age , exp_death_value)
	{
	return mymath.make_composite_function
		([
		{"end":  10, "end_val":   0, "type": ease.linear},
		{"end": exp_optimal_age, "end_val": exp_optimal_value, "type": ease.out_quint},
		{"end": exp_death_age, "end_val": exp_death_value, "type": ease.in_quart},
		]);
	}

function make_base_mental_immortal(base_optimal_age, base_optimal_value)
	{
	return mymath.make_composite_function
		([
		{"end": base_optimal_age, "end_val": base_optimal_value, "type": ease.out_sine},
		{"end": 999999, "end_val": base_optimal_value, "type": ease.linear},
		]);
	}
function make_exp_mental_immortal(exp_optimal_age , exp_optimal_value)
	{
	return mymath.make_composite_function
		([
		{"end":  10, "end_val":   0, "type": ease.linear},
		{"end": exp_optimal_age, "end_val": exp_optimal_value, "type": ease.out_quint},
		{"end": 999999, "end_val": exp_optimal_age, "type": ease.linear},
		]);
	}
	
function make_social_status(max_age, age_max_value, exp_max_value)
	{
	return {
		"base": mymath.make_composite_function
			([
			{"end": max_age, "end_val": age_max_value, "type": ease.linear}
			]),
		"experience": mymath.make_composite_function
			([
			{"end":  10, "end_val":   0, "type": ease.linear},
			{"end": max_age, "end_val": exp_max_value, "type": ease.out_quint}
			])
		}
	}

export const races = 
	{
	"Green Dragon":
		{
		"attributes":
			{
			"strength"     : { "base": make_base_physical_immortal(150, 50), "experience": make_exp_physical_immortal( 80, 40) },
			"constitution" : { "base": make_base_physical_immortal(150, 40), "experience": make_exp_physical_immortal( 80, 40) },
			"stamina"      : { "base": make_base_physical_immortal(150, 60), "experience": make_exp_physical_immortal( 80, 40) },
			"agility"      : { "base": make_base_physical_immortal(150, 80), "experience": make_exp_physical_immortal( 80, 40) },
			"precision"    : { "base": make_base_physical_immortal(150, 35), "experience": make_exp_physical_immortal( 80, 40) },
			"intelligence" : { "base": make_base_mental_immortal  ( 30, 20), "experience": make_exp_mental_immortal  (100, 60) },
			"wisdom"       : { "base": make_base_mental_immortal  ( 30, 20), "experience": make_exp_mental_immortal  (100, 60) },
			"focus"        : { "base": make_base_mental_immortal  ( 30, 15), "experience": make_exp_mental_immortal  (100, 60) },
			"eloquence"    : { "base": make_base_mental_immortal  ( 30, 15), "experience": make_exp_mental_immortal  (100, 60) },
			"senses"       : 
				{
				"base": make_base_physical_immortal(100, 40), "experience": make_exp_physical_mortal(100, 20),
				"components":
					{
					"sight"  : { "base": make_base_physical_immortal(100, 50), "experience": make_exp_physical_immortal(100, 20) },
					"touch"  : { "base": make_base_physical_immortal(100, 40), "experience": make_exp_physical_immortal(100, 20) },
					"smell"  : { "base": make_base_physical_immortal(100, 60), "experience": make_exp_physical_immortal(100, 20) },
					"taste"  : { "base": make_base_physical_immortal(100, 40), "experience": make_exp_physical_immortal(100, 20) },
					"hearing": { "base": make_base_physical_immortal(100, 55), "experience": make_exp_physical_immortal(100, 20) }
					}
				},
			"social_status": make_social_status(999999, 30, 20),
			"hiddenness"   : { "base": make_base_physical_immortal(0, 40), "experience": make_exp_physical_immortal(30, 40) }
			}
		},
	"Human":
		{
		"stats_description":
			"One of the three major races, nothing stands out of humans, howeverr they also lack any notable weakness in their attributes.",
		"attributes":
			{
			"strength"     : { "base": make_base_physical_mortal(25, 30, 100, 10), "experience": make_exp_physical_mortal(30, 40, 100, 10) },
			"constitution" : { "base": make_base_physical_mortal(25, 30, 100, 10), "experience": make_exp_physical_mortal(30, 40, 100, 10) },
			"stamina"      : { "base": make_base_physical_mortal(25, 30, 100, 10), "experience": make_exp_physical_mortal(30, 40, 100, 10) },
			"agility"      : { "base": make_base_physical_mortal(25, 30, 100, 10), "experience": make_exp_physical_mortal(30, 40, 100, 10) },
			"precision"    : { "base": make_base_physical_mortal(25, 30, 100, 10), "experience": make_exp_physical_mortal(30, 40, 100, 10) },
			"intelligence" : { "base": make_base_mental_mortal  (20, 20, 100, 10), "experience": make_exp_mental_mortal  (40, 50, 100, 10) },
			"wisdom"       : { "base": make_base_mental_mortal  (20, 20, 100, 10), "experience": make_exp_mental_mortal  (40, 50, 100, 10) },
			"focus"        : { "base": make_base_mental_mortal  (20, 20, 100, 10), "experience": make_exp_mental_mortal  (40, 50, 100, 10) },
			"eloquence"    : { "base": make_base_mental_mortal  (20, 20, 100, 10), "experience": make_exp_mental_mortal  (40, 50, 100, 10) },
			"senses"       : 
				{
				"base": make_base_physical_mortal(10, 50, 100, 10), "experience": make_exp_physical_mortal(50, 10, 100, 20),
				"components":
					{
					"sight"  : { "base": make_base_physical_mortal(10, 55, 100, 10), "experience": make_exp_physical_mortal(50, 10, 100, 20) },
					"touch"  : { "base": make_base_physical_mortal(10, 50, 100, 10), "experience": make_exp_physical_mortal(50, 10, 100, 20) },
					"smell"  : { "base": make_base_physical_mortal(10, 50, 100, 10), "experience": make_exp_physical_mortal(50, 10, 100, 20) },
					"taste"  : { "base": make_base_physical_mortal(10, 50, 100, 10), "experience": make_exp_physical_mortal(50, 10, 100, 20) },
					"hearing": { "base": make_base_physical_mortal(10, 50, 100, 10), "experience": make_exp_physical_mortal(50, 10, 100, 20) }
					}
				},
			"social_status": make_social_status(100, 10, 20),
			"hiddenness"   : { "base": make_base_physical_mortal(0, 40, 100, 30), "experience": make_exp_physical_mortal(30, 40, 100, 10) }
			}
		},
	"Elf":
		{
		"stats_description":
			"One of the three major races, elves lifespan is notably longer than humans. They're slightly below humans in their youth, but later on they can keep higher performance in basically all fields. In general their stats are overall balanced, leaning towards mental attributes, agility and precision, at the cost of other physical traits.",
		"attributes":
			{
			"strength"     : { "base": make_base_physical_mortal(30, 20, 500, 10), "experience": make_exp_physical_mortal( 80, 40, 500, 10) },
			"constitution" : { "base": make_base_physical_mortal(30, 20, 500, 10), "experience": make_exp_physical_mortal( 80, 40, 500, 10) },
			"stamina"      : { "base": make_base_physical_mortal(30, 20, 500, 10), "experience": make_exp_physical_mortal( 80, 40, 500, 10) },
			"agility"      : { "base": make_base_physical_mortal(30, 35, 500, 10), "experience": make_exp_physical_mortal( 80, 40, 500, 10) },
			"precision"    : { "base": make_base_physical_mortal(30, 35, 500, 10), "experience": make_exp_physical_mortal( 80, 40, 500, 10) },
			"intelligence" : { "base": make_base_mental_mortal  (30, 20, 500, 10), "experience": make_exp_mental_mortal  (100, 60, 500, 10) },
			"wisdom"       : { "base": make_base_mental_mortal  (30, 20, 500, 10), "experience": make_exp_mental_mortal  (100, 60, 500, 10) },
			"focus"        : { "base": make_base_mental_mortal  (30, 20, 500, 10), "experience": make_exp_mental_mortal  (100, 60, 500, 10) },
			"eloquence"    : { "base": make_base_mental_mortal  (30, 15, 500, 10), "experience": make_exp_mental_mortal  (100, 60, 500, 10) },
			"senses"       : 
				{
				"base": make_base_physical_mortal(10, 50, 500, 10), "experience": make_exp_physical_mortal(50, 10, 500, 20),
				"components":
					{
					"sight"  : { "base": make_base_physical_mortal(10, 50, 500, 10), "experience": make_exp_physical_mortal(50, 10, 500, 20) },
					"touch"  : { "base": make_base_physical_mortal(10, 50, 500, 10), "experience": make_exp_physical_mortal(50, 10, 500, 20) },
					"smell"  : { "base": make_base_physical_mortal(10, 50, 500, 10), "experience": make_exp_physical_mortal(50, 10, 500, 20) },
					"taste"  : { "base": make_base_physical_mortal(10, 50, 500, 10), "experience": make_exp_physical_mortal(50, 10, 500, 20) },
					"hearing": { "base": make_base_physical_mortal(10, 55, 500, 10), "experience": make_exp_physical_mortal(50, 10, 500, 20) }
					}
				},
			"social_status": make_social_status(500, 15, 20),
			"hiddenness"   : { "base": make_base_physical_mortal(0, 40, 500, 30), "experience": make_exp_physical_mortal(30, 40, 500, 10) }
			}
		},
	"Winged Human":
		{
		"stats_description":
			"Their extremely high stamina allows them to stay in flight for prolonged periods of time despite their body weight Their good agility, sight and hearing makes them excellent scouts.",
		"attributes":
			{
			"strength"     : { "base": make_base_physical_mortal(25, 25, 80, 10), "experience": make_exp_physical_mortal(30, 35, 80, 10) },
			"constitution" : { "base": make_base_physical_mortal(25, 25, 80, 10), "experience": make_exp_physical_mortal(30, 30, 80, 10) },
			"stamina"      : { "base": make_base_physical_mortal(25, 40, 80, 20), "experience": make_exp_physical_mortal(30, 50, 80, 10) },
			"agility"      : { "base": make_base_physical_mortal(25, 35, 80, 10), "experience": make_exp_physical_mortal(30, 50, 80, 10) },
			"precision"    : { "base": make_base_physical_mortal(25, 30, 80, 10), "experience": make_exp_physical_mortal(30, 40, 80, 10) },
			"intelligence" : { "base": make_base_mental_mortal  (20, 20, 80, 10), "experience": make_exp_mental_mortal  (35, 45, 80, 10) },
			"wisdom"       : { "base": make_base_mental_mortal  (20, 20, 80, 10), "experience": make_exp_mental_mortal  (35, 45, 80, 10) },
			"focus"        : { "base": make_base_mental_mortal  (20, 20, 80, 10), "experience": make_exp_mental_mortal  (35, 45, 80, 10) },
			"eloquence"    : { "base": make_base_mental_mortal  (20, 20, 80, 10), "experience": make_exp_mental_mortal  (35, 45, 80, 10) },
			"senses"       : 
				{
				"base": make_base_physical_mortal(10, 50, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20),
				"components":
					{
					"sight"  : { "base": make_base_physical_mortal(10, 60, 80, 10), "experience": make_exp_physical_mortal(50, 20, 80, 20) },
					"touch"  : { "base": make_base_physical_mortal(10, 50, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20) },
					"smell"  : { "base": make_base_physical_mortal(10, 50, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20) },
					"taste"  : { "base": make_base_physical_mortal(10, 50, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20) },
					"hearing": { "base": make_base_physical_mortal(10, 55, 80, 10), "experience": make_exp_physical_mortal(50, 15, 80, 20) }
					}
				},
			"social_status": make_social_status(80, 0, 20),
			"hiddenness"   : { "base": make_base_physical_mortal(0, 20, 80, 10), "experience": make_exp_physical_mortal(30, 20, 80, 10) }
			}
		},
	"Minotaur":
		{
		"stats_description":
			"Notable for their strength and strong sense of smell, on top slightly above average constitution and agility, nothing else of these creatures is worth mentioning. Have fun minmaxing.",
		"attributes":
			{
			"strength"     : { "base": make_base_physical_mortal(25, 35, 80, 10), "experience": make_exp_physical_mortal(30, 50, 80, 10) },
			"constitution" : { "base": make_base_physical_mortal(25, 35, 80, 10), "experience": make_exp_physical_mortal(30, 45, 80, 10) },
			"stamina"      : { "base": make_base_physical_mortal(25, 30, 80, 10), "experience": make_exp_physical_mortal(30, 40, 80, 10) },
			"agility"      : { "base": make_base_physical_mortal(25, 35, 80, 10), "experience": make_exp_physical_mortal(30, 40, 80, 10) },
			"precision"    : { "base": make_base_physical_mortal(25, 25, 80, 10), "experience": make_exp_physical_mortal(30, 40, 80, 10) },
			"intelligence" : { "base": make_base_mental_mortal  (20, 20, 80, 10), "experience": make_exp_mental_mortal  (35, 40, 80, 10) },
			"wisdom"       : { "base": make_base_mental_mortal  (20, 20, 80, 10), "experience": make_exp_mental_mortal  (35, 40, 80, 10) },
			"focus"        : { "base": make_base_mental_mortal  (20, 20, 80, 10), "experience": make_exp_mental_mortal  (35, 35, 80, 10) },
			"eloquence"    : { "base": make_base_mental_mortal  (20, 20, 80, 10), "experience": make_exp_mental_mortal  (35, 35, 80, 10) },
			"senses"       : 
				{
				"base": make_base_physical_mortal(10, 50, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20),
				"components":
					{
					"sight"  : { "base": make_base_physical_mortal(10, 45, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20) },
					"touch"  : { "base": make_base_physical_mortal(10, 40, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20) },
					"smell"  : { "base": make_base_physical_mortal(10, 60, 80, 10), "experience": make_exp_physical_mortal(50, 15, 80, 20) },
					"taste"  : { "base": make_base_physical_mortal(10, 50, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20) },
					"hearing": { "base": make_base_physical_mortal(10, 50, 80, 10), "experience": make_exp_physical_mortal(50, 10, 80, 20) }
					}
				},
			"social_status": make_social_status(80, 0, 20),
			"hiddenness"   : { "base": make_base_physical_mortal(0, 35, 80, 30), "experience": make_exp_physical_mortal(30, 35, 80, 10) }
			}
		},
	"Centaur":
		{
		"stats_description":
			"Their physical traits are above the average human, however they get easily distracted. Their good hearing also playys a role in that. Their lifespan is slightly longer than a human. Due to their phyysical size they can't hide easly.",
		"attributes":
			{
			"strength"     : { "base": make_base_physical_mortal(25, 35, 120, 10), "experience": make_exp_physical_mortal(30, 40, 120, 10) },
			"constitution" : { "base": make_base_physical_mortal(25, 30, 120, 10), "experience": make_exp_physical_mortal(30, 40, 120, 10) },
			"stamina"      : { "base": make_base_physical_mortal(25, 30, 120, 10), "experience": make_exp_physical_mortal(30, 40, 120, 10) },
			"agility"      : { "base": make_base_physical_mortal(25, 35, 120, 10), "experience": make_exp_physical_mortal(30, 40, 120, 10) },
			"precision"    : { "base": make_base_physical_mortal(25, 25, 120, 10), "experience": make_exp_physical_mortal(30, 40, 120, 10) },
			"intelligence" : { "base": make_base_mental_mortal  (20, 20, 120, 10), "experience": make_exp_mental_mortal  (60, 50, 120, 10) },
			"wisdom"       : { "base": make_base_mental_mortal  (20, 20, 120, 10), "experience": make_exp_mental_mortal  (60, 60, 120, 10) },
			"focus"        : { "base": make_base_mental_mortal  (20, 20, 120, 10), "experience": make_exp_mental_mortal  (60, 40, 120, 10) },
			"eloquence"    : { "base": make_base_mental_mortal  (20, 20, 120, 10), "experience": make_exp_mental_mortal  (60, 35, 120, 10) },
			"senses"       : 
				{
				"base": make_base_physical_mortal(10, 50, 120, 10), "experience": make_exp_physical_mortal(50, 10, 120, 20),
				"components":
					{
					"sight"  : { "base": make_base_physical_mortal(10, 45, 120, 10), "experience": make_exp_physical_mortal(50, 10, 120, 20) },
					"touch"  : { "base": make_base_physical_mortal(10, 40, 120, 10), "experience": make_exp_physical_mortal(50, 10, 120, 20) },
					"smell"  : { "base": make_base_physical_mortal(10, 40, 120, 10), "experience": make_exp_physical_mortal(50, 10, 120, 20) },
					"taste"  : { "base": make_base_physical_mortal(10, 50, 120, 10), "experience": make_exp_physical_mortal(50, 10, 120, 20) },
					"hearing": { "base": make_base_physical_mortal(10, 60, 120, 10), "experience": make_exp_physical_mortal(50, 10, 120, 20) }
					}
				},
			"social_status": make_social_status(120, 0, 20),
			"hiddenness"   : { "base": make_base_physical_mortal(0, 25, 120, 30), "experience": make_exp_physical_mortal(30, 30, 120, 10) }
			}
		},
	"Giant":
		{
		"stats_description":
			"Slightly stronger than a human, with extremely greater constitution. Gets quickly tired and can't really dodge or hide. Their senses are below average, and base mental traits are extremely low. However being blessed by a long life allows giant to compensate for that over time.",
		"attributes":
			{
			"strength"     : { "base": make_base_physical_mortal(150, 35, 150, 10), "experience": make_exp_physical_mortal(40, 45, 150, 10) },
			"constitution" : { "base": make_base_physical_mortal(150, 45, 150, 10), "experience": make_exp_physical_mortal(40, 40, 150, 10) },
			"stamina"      : { "base": make_base_physical_mortal(150, 20, 150, 10), "experience": make_exp_physical_mortal(40, 40, 150, 10) },
			"agility"      : { "base": make_base_physical_mortal(150, 20, 150, 10), "experience": make_exp_physical_mortal(40, 40, 150, 10) },
			"precision"    : { "base": make_base_physical_mortal(150, 25, 150, 10), "experience": make_exp_physical_mortal(40, 40, 150, 10) },
			"intelligence" : { "base": make_base_mental_mortal  (150, 10, 150, 10), "experience": make_exp_mental_mortal  (80, 50, 150, 10) },
			"wisdom"       : { "base": make_base_mental_mortal  (150, 10, 150, 10), "experience": make_exp_mental_mortal  (80, 60, 150, 10) },
			"focus"        : { "base": make_base_mental_mortal  (150, 10, 150, 10), "experience": make_exp_mental_mortal  (80, 40, 150, 10) },
			"eloquence"    : { "base": make_base_mental_mortal  (150, 10, 150, 10), "experience": make_exp_mental_mortal  (80, 35, 150, 10) },
			"senses"       : 
				{
				"base": make_base_physical_mortal(150, 40, 150, 10), "experience": make_exp_physical_mortal(50, 10, 150, 20),
				"components":
					{
					"sight"  : { "base": make_base_physical_mortal(10, 40, 150, 10), "experience": make_exp_physical_mortal(50, 10, 150, 20) },
					"touch"  : { "base": make_base_physical_mortal(10, 20, 150, 10), "experience": make_exp_physical_mortal(50, 10, 150, 20) },
					"smell"  : { "base": make_base_physical_mortal(10, 20, 150, 10), "experience": make_exp_physical_mortal(50, 10, 150, 20) },
					"taste"  : { "base": make_base_physical_mortal(10, 30, 150, 10), "experience": make_exp_physical_mortal(50, 10, 150, 20) },
					"hearing": { "base": make_base_physical_mortal(10, 20, 150, 10), "experience": make_exp_physical_mortal(50, 10, 150, 20) }
					}
				},
			"social_status": make_social_status(150, 0, 20),
			"hiddenness"   : { "base": make_base_physical_mortal(0, 10, 150, 10), "experience": make_exp_physical_mortal(30, 20, 150, 10) }
			}
		},
	}


/*export const races =*/ let a = {
"Astral Dragon":
	{
	"attributes":
		{
		"strength"     : { "function": function(x) { return 100; } },
		"constitution" : { "function": function(x) { return 110; } },
		"stamina"      : { "function": function(x) { return 120; } },
		"agility"      : { "function": function(x) { return  60; } },
		"precision"    : { "function": function(x) { return  70; } },
		"intelligence" : { "function": function(x) { return 100; } },
		"wisdom"       : { "function": function(x) { return 200; } },
		"focus"        : { "function": function(x) { return 150; } },
		"eloquence"    : { "function": function(x) { return 100; } },
		"sight"        : { "function": function(x) { return 100; } },
		"touch"        : { "function": function(x) { return 100; } },
		"smell"        : { "function": function(x) { return 100; } },
		"taste"        : { "function": function(x) { return 100; } },
		"hearing"      : { "function": function(x) { return 100; } },
		"social_status": { "function": function(x) { return 200; } },
		"hiddenness"   : { "function": function(x) { return   0; } },
		},
	"step"             : 6
	},
"Black Dragon":
	{
	"attributes":
		{
		"strength"     : 60,
		"constitution" : 90,
		"stamina"      : 70,
		"agility"      : 70,
		"precision"    : 50,
		"intelligence" : 70,
		"wisdom"       : 120,
		"focus"        : 120,
		"eloquence"    : 30,
		"sight"        : 100,
		"touch"        : 100,
		"smell"        : 100,
		"taste"        : 100,
		"hearing"      : 100,
		"social_status": 90,
		"hiddenness"   : 30
		},
	"step"             : 5
	},
"Blue Dragon":
	{
	"attributes":
		{
		"strength"     : 60,
		"constitution" : 70,
		"stamina"      : 80,
		"agility"      : 90,
		"precision"    : 50,
		"intelligence" : 80,
		"wisdom"       : 80,
		"focus"        : 100,
		"eloquence"    : 80,
		"sight"        : 60,
		"touch"        : 60,
		"smell"        : 60,
		"taste"        : 60,
		"hearing"      : 60,
		"social_status": 70,
		"hiddenness"   : 20
		},
	"step"             : 4
	},
"Red Dragon":
	{
	"attributes":
		{
		"strength"     : 80,
		"constitution" : 80,
		"stamina"      : 60,
		"agility"      : 70,
		"precision"    : 70,
		"intelligence" : 60,
		"wisdom"       : 70,
		"focus"        : 70,
		"eloquence"    : 50,
		"sight"        : 60,
		"touch"        : 60,
		"smell"        : 60,
		"taste"        : 60,
		"hearing"      : 60,
		"social_status": 70,
		"hiddenness"   : 20
		},
	"step"             : 4
	},
"Green Dragon":
	{
	"attributes":
		{
		"strength"     : 50,
		"constitution" : 40,
		"stamina"      : 90,
		"agility"      : 120,
		"precision"    : 50,
		"intelligence" : 60,
		"wisdom"       : 50,
		"focus"        : 70,
		"eloquence"    : 40,
		"sight"        : 70,
		"touch"        : 70,
		"smell"        : 70,
		"taste"        : 70,
		"hearing"      : 70,
		"social_status": 60,
		"hiddenness"   : 20
		},
	"step"             : 4
	},
"Grey Dragon":
	{
	"attributes":
		{
		"strength"     : 90,
		"constitution" : 120,
		"stamina"      : 80,
		"agility"      : 20,
		"precision"    : 20,
		"intelligence" : 30,
		"wisdom"       : 100,
		"focus"        : 40,
		"eloquence"    : 70,
		"sight"        : 30,
		"touch"        : 30,
		"smell"        : 30,
		"taste"        : 30,
		"hearing"      : 30,
		"social_status": 30,
		"hiddenness"   : 20
		},
	"step"             : 6
	},
"Elf":
	{
	"attributes":
		{
		"strength"     : 45,
		"constitution" : 40,
		"stamina"      : 45,
		"agility"      : 55,
		"precision"    : 55,
		"intelligence" : 55,
		"wisdom"       : 60,
		"focus"        : 70,
		"eloquence"    : 50,
		"sight"        : 60,
		"touch"        : 40,
		"smell"        : 40,
		"taste"        : 40,
		"hearing"      : 60,
		"social_status": 50,
		"hiddenness"   : 50
		},
	"step"             : 0.6
	},
"Human":
	{
	"attributes":
		{
		"strength"     : 50,
		"constitution" : 50,
		"stamina"      : 50,
		"agility"      : 50,
		"precision"    : 50,
		"intelligence" : 50,
		"wisdom"       : 50,
		"focus"        : 50,
		"eloquence"    : 50,
		"sight"        : 50,
		"touch"        : 50,
		"smell"        : 50,
		"taste"        : 50,
		"hearing"      : 50,
		"social_status": 50,
		"hiddenness"   : 50
		},
	"step"		       : 0.5
	},
"Half elf":
	{
	"attributes":
		{
		"strength"     : 45,
		"constitution" : 40,
		"stamina"      : 45,
		"agility"      : 55,
		"precision"    : 55,
		"intelligence" : 55,
		"wisdom"       : 55,
		"focus"        : 60,
		"eloquence"    : 50,
		"sight"        : 55,
		"touch"        : 45,
		"smell"        : 45,
		"taste"        : 45,
		"hearing"      : 55,
		"social_status": 50,
		"hiddenness"   : 50
		},
	"step"             : 0.6
	},
"Dwarf":
	{
	"attributes":
		{
		"strength"     : 60,
		"constitution" : 70,
		"stamina"      : 60,
		"agility"      : 40,
		"precision"    : 50,
		"intelligence" : 50,
		"wisdom"       : 60,
		"focus"        : 40,
		"eloquence"    : 40,
		"sight"        : 40,
		"touch"        : 60,
		"smell"        : 40,
		"taste"        : 60,
		"hearing"      : 40,
		"social_status": 40,
		"hiddenness"   : 55
		},
	"step"             : 0.4
	},
"Herko":
	{
	"attributes":
		{
		"strength"     : 40,
		"constitution" : 40,
		"stamina"      : 60,
		"agility"      : 60,
		"precision"    : 50,
		"intelligence" : 50,
		"wisdom"       : 40,
		"focus"        : 50,
		"eloquence"    : 70,
		"sight"        : 30,
		"touch"        : 80,
		"smell"        : 60,
		"taste"        : 60,
		"hearing"      : 60,
		"social_status": 10,
		"hiddenness"   : 55
		},
	"step"             : 0.4
	},
"Minidragon":
	{
	"attributes":
		{
		"strength"     : 20,
		"constitution" : 40,
		"stamina"      : 70,
		"agility"      : 80,
		"precision"    : 70,
		"intelligence" : 40,
		"wisdom"       : 10,
		"focus"        : 30,
		"eloquence"    : 10,
		"sight"        : 70,
		"touch"        : 30,
		"smell"        : 70,
		"taste"        : 60,
		"hearing"      : 70,
		"social_status": 10,
		"hiddenness"   : 60
		},
	"step"             : 0.3
	},
"Winged Human":
	{
	"attributes":
		{
		"strength"     : 40,
		"constitution" : 30,
		"stamina"      : 70,
		"agility"      : 60,
		"precision"    : 60,
		"intelligence" : 50,
		"wisdom"       : 40,
		"focus"        : 50,
		"eloquence"    : 40,
		"sight"        : 65,
		"touch"        : 55,
		"smell"        : 40,
		"taste"        : 40,
		"hearing"      : 60,
		"social_status": 50,
		"hiddenness"   : 40
		},
	"step"             : 0.5
	},
"Abyssal":
	{
	"attributes":
		{
		"strength"     : 60,
		"constitution" : 40,
		"stamina"      : 80,
		"agility"      : 50,
		"precision"    : 40,
		"intelligence" : 40,
		"wisdom"       : 30,
		"focus"        : 30,
		"eloquence"    : 40,
		"sight"        : 40,
		"touch"        : 30,
		"smell"        : 10,
		"taste"        : 40,
		"hearing"      : 50,
		"social_status": 10,
		"hiddenness"   : 40
		},
	"step"             : 0.6
	},
"Centaur":
	{
	"attributes":
		{
		"strength"     : 40,
		"constitution" : 60,
		"stamina"      : 60,
		"agility"      : 60,
		"precision"    : 40,
		"intelligence" : 30,
		"wisdom"       : 90,
		"focus"        : 20,
		"eloquence"    : 70,
		"sight"        : 40,
		"touch"        : 50,
		"smell"        : 55,
		"taste"        : 40,
		"hearing"      : 70,
		"social_status": 30,
		"hiddenness"   : 40
		},
	"step"             : 0.8
	},
"Minotaur":
	{
	"attributes":
		{
		"strength"     : 70,
		"constitution" : 70,
		"stamina"      : 70,
		"agility"      : 50,
		"precision"    : 30,
		"intelligence" : 10,
		"wisdom"       : 10,
		"focus"        : 20,
		"eloquence"    : 10,
		"sight"        : 40,
		"touch"        : 30,
		"smell"        : 70,
		"taste"        : 50,
		"hearing"      : 40,
		"social_status": 10,
		"hiddenness"   : 40
		},
	"step"             : 0.5
	},
"Giant":
	{
	"attributes":
		{
		"strength"     : 90,
		"constitution" : 90,
		"stamina"      : 30,
		"agility"      : 10,
		"precision"    : 0,
		"intelligence" : 10,
		"wisdom"       : 50,
		"focus"        : 70,
		"eloquence"    : 30,
		"sight"        : 80,
		"touch"        : 20,
		"smell"        : 40,
		"taste"        : 50,
		"hearing"      : 30,
		"social_status": 20,
		"hiddenness"   : 30
		},
	"step"             : 2
	}
}