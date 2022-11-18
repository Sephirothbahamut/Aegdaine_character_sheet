export class mymath
	{
	static average()
		{
		let sum = 0;
		for(const element of arguments) { sum += element; }
		const avg = (sum / arguments.length) || 0;
		return avg;
		}
		
	static make_composite_function(arr)
		{
		// Example parameter
		/*
			[
			{"end":  30, "end_val": 30, "type": ease.out_sine},
			{"end": 100, "end_val": 10, "type": ease.in_sine},
			]
		*/
			
		function composite_function(arr, x)
			{
				
			function normalize(val, min, max) { return (val - min) / (max - min); }
				
				
			var i = 0;
			while(arr[i].end < x) 
				{
				i += 1;
				if(i == arr.length) { return 0; } 
				}
			
			
			let beg_val = i > 0 ? arr[i - 1].end_val : 0;
			let beg     = i > 0 ? arr[i - 1].end     : 0;
			
			let end     = arr[i].end;
			let end_val = arr[i].end_val;
			
			let normalized_input  = normalize(x, beg, end);
			let normalized_output = arr[i].type(normalized_input);
			
			let output = 0;
			
			output = beg_val + ((end_val - beg_val) * normalized_output);
			
			return output;
			}
		
		return composite_function.bind(null, arr);
		}
	}
	