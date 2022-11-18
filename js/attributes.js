import { database as database } from "./database.js";
import { utils as utils } from "./utils.js";
		
export class attributes
	{
	static from_race(race_attrs, age)
		{
		let ret = attributes.make();
		
		for(const [attribute, data] of Object.entries(race_attrs))
			{
			if(data.base)
				{
				ret[attribute].value = data.base(age);
				}
		
			if(data.components)
				{
				for(const [component, component_data] of Object.entries(data.components))
					{
					//add b's composite total to a's components
					ret[attribute].components[component].value = component_data.base(age);
					}
				}
			}
		
		return ret;
		}
		
	static make()
		{
		let ret = new attributes();
		for(const [attribute, data] of Object.entries(database.attributes))
			{
			ret[attribute] = {};
			ret[attribute].value = 0;
			
			if(data.components)
				{
				ret[attribute].components = {};
				for(const [component, component_data] of Object.entries(data.components))
					{
					ret[attribute].components[component] = {};
					ret[attribute].components[component].value = 0;
					}
				}
			}
		return ret;
		}
		
	static from_partial(partial)
		{
		let ret = new attributes();
		for(const [attribute, data] of Object.entries(database.attributes))
			{
			ret[attribute] = {};
			ret[attribute].value = (partial[attribute] && partial[attribute].value) ? partial[attribute].value : 0;
			
			if(data.components)
				{
				ret[attribute].components = {};
				for(const [component, component_data] of Object.entries(data.components))
					{
					ret[attribute].components[component] = {};
					
					if(partial[attribute] && partial[attribute].components)
						{
						ret[attribute].components[component].value = (partial[attribute].components[component] && partial[attribute].components[component].value) ? partial[attribute].components[component].value : 0;
						}
					else { ret[attribute].components[component].value = 0; }
					}
				}
			}
		return ret;
		}
		
	static add(a, b, add_bs_composite_total_to_as_components = false)
		{
		let ret = attributes.make();
		for(const [attribute, data] of Object.entries(database.attributes))
			{
			if(data.components)
				{
				for(const [component, component_data] of Object.entries(data.components))
					{
					ret[attribute].components[component].value = a[attribute].components[component].value + b[attribute].components[component].value;
					
					if(add_bs_composite_total_to_as_components && Object.hasOwn(b[attribute], "value"))
						{
						if(Object.hasOwn(a[attribute], "value") )
							{
							ret[attribute].components[component].value += b[attribute].value;
							}
						}	
					}
				}
				
			if(!data.components || (data.components && !add_bs_composite_total_to_as_components))
				{
				if(Object.hasOwn(a[attribute], "value") && Object.hasOwn(b[attribute], "value"))
					{
					ret[attribute].value = a[attribute].value + b[attribute].value; 
					}
				}
			}
			
		ret.update_composites_self();
		return ret;
		}
	static add_abs(a, b, add_bs_composite_total_to_as_components = false)
		{
		let ret = attributes.make();
		
		
		attributes.for_each((arr) =>
			{
			const a_abs = Math.abs(a.get_value_arr(arr));
			const b_abs = Math.abs(b.get_value_arr(arr));
			ret.set_value_arr(a_abs + b_abs, arr);
			});
			
		return ret;
		}
	static add_value(a, value)
		{
		let ret = attributes.make();
		for(const [attribute, data] of Object.entries(database.attributes))
			{
			if(data.components)
				{
				for(const [component, component_data] of Object.entries(data.components))
					{
					//add b's composite total to a's components
					ret[attribute].components[component].value = a[attribute].components[component].value + value;
					}
				}
			else { ret[attribute].value = a[attribute].value + value; }
			}
		
		ret.update_composites_self();
		return ret;
		}
		
	tot() 
		{
		let ret = 0;
		
		attributes.for_each((arr) =>
			{
			ret += this.get_value_arr(arr);
			});
		
		return ret;
		}
	absolute_tot() 
		{
		let ret = 0;
		
		attributes.for_each((arr) =>
			{
			ret += Math.abs(this.get_value_arr(arr));
			});
		
		return ret;
		}
		
	get_value_arr(arr) 
		{
		let object = attributes.get_object_arr(arr, this);
		return object.value;
		}
		
	set_value_arr(value, arr) 
		{
		let obj = attributes.get_object_arr(arr, this);
		obj.value = value;
		}
	
	static get_object_arr(arr, root) 
		{
		if(arr.length == 1) { return root[arr[0]]; }
		else if(arr.length > 1)
			{
			if(!root[arr[0]] || !root[arr[0]].components) { return null; }
			return attributes.get_object_arr(arr.slice(1), root[arr[0]].components);
			}
		}
		
	update_composites_self()
		{
		for(const [attribute, data] of Object.entries(database.attributes))
			{
			if(data.components)
				{
				let arr = [];
				for(const [component, component_data] of Object.entries(data.components))
					{
					arr.push(this[attribute].components[component].value);
					}
				
				this[attribute].value = data.composition_function(...arr);
				}
			}
		}
		
	static for_each(callback)
		{
		function for_each_component(callback, arr, root_data)
			{
			callback(arr);
			
			if(root_data.components)
				{
				for(const [component, component_data] of Object.entries(root_data.components))
					{
					let tmp = arr.slice();
					tmp.push(component);
					for_each_component(callback, tmp, component_data);
					}
				}
			}
		
		
		for(const [attribute, data] of Object.entries(database.attributes))
			{
			let arr = [attribute];
			for_each_component(callback, arr, data);
			}
		}
		
	multiply_self(value)
		{
		attributes.for_each((arr) =>
			{
			const result_value = this.get_value_arr(arr) * value;
			this.set_value_arr(result_value, arr);
			});
		return this;
		}
	};