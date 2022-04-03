export class utils
	{
	static clamp(num, min, max) { return Math.min(Math.max(num, min), max); }
	static average(...args) 
		{
		let tot = 0;
		for(let i = 0; i < args.length; i++) { tot += args[i]; }
		return tot / args.length; 
		}

	//https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage TODO put in iige
	static color_percent_red_to_green = [
		{ pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
		{ pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
		{ pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];

	static getColorForPercentage(pct, percentColors) 
		{
		for (var i = 1; i < percentColors.length - 1; i++) { if (pct < percentColors[i].pct) { break; } }
		var lower = percentColors[i - 1];
		var upper = percentColors[i];
		var range = upper.pct - lower.pct;
		var rangePct = (pct - lower.pct) / range;
		var pctLower = 1 - rangePct;
		var pctUpper = rangePct;
		var color = 
			{
			"r": Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
			"g": Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
			"b": Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
			};
		return color;
		};
	
	static color_multiply(color, value) { return { "r": color.r * value, "g": color.g * value, "b": color.b * value }; }
	static color_to_css(color) { return "rgb(" + color.r + ", " + color.g + ", " + color.b + ")"; }
	
	static soften(x)
		{
		const sign = Math.sign(x);
		let abs_retval = 0;
		const abs_x = Math.abs(x);
		     if(abs_x <=  10) { abs_retval =         abs_x    ; }
		else if(abs_x <=  30) { abs_retval =    5  + abs_x / 2; }
		else if(abs_x <=  70) { abs_retval = 12.5  + abs_x / 4; }
		else if(abs_x <= 150) { abs_retval = 21.25 + abs_x / 8; }
		else                  { abs_retval = 21.25 + abs_x / 8; }
		return sign * abs_retval;
		};
	static soften_on_tot_precalc(x, tot, precalc)
		{
		if(tot == 0) { return 0; }
		const proportion = x / tot;
		return precalc * proportion;
		};
	static soften_on_tot(x, tot)
		{
		if(tot == 0) { return 0; }
		return soften_on_tot_precalc(x, tot, utils.soften(tot));
		};
	
	static html = class html
		{
		static set_visibility(element, b_visible, true_val = "block", false_val = "none")
			{
			element.style.display = b_visible ? true_val : false_val;
			}
		static toggle_visibility(element, true_val = "block", false_val = "none") { utils.html.set_visibility(element, element.style.display != true_val, true_val, false_val); }
			
		static emplace_child(parent, child_type)
			{
			const element = document.createElement(child_type);
			parent.appendChild(element);
			return element;
			}
			
		static download(content, content_type, fileName) 
			{
			const a = document.createElement("a");
			const file = new Blob([content], { type: content_type });
			a.href = URL.createObjectURL(file);
			a.download = fileName;
			a.click();
			}
		};
		
	}