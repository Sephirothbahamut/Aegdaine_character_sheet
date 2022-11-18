// Based on https://gist.github.com/gre/1650294

export class ease
{
	// No easing, no acceleration
	static linear( t ) {
		return t;
	}

	// Slight acceleration from zero to full speed
	static in_sine( t ) {
		return -1 * Math.cos( t * ( Math.PI / 2 ) ) + 1;
	}

	// Slight deceleration at the end
	static out_sine( t ) {
		return Math.sin( t * ( Math.PI / 2 ) );
	}

	// Slight acceleration at beginning and slight deceleration at end
	static in_out_sine( t ) {
		return -0.5 * ( Math.cos( Math.PI * t ) - 1 );
	}

	// Accelerating from zero velocity
	static in_quad( t ) {
		return t * t;
	}

	// Decelerating to zero velocity
	static out_quad( t ) {
		return t * ( 2 - t );
	}

	// Acceleration until halfway, then deceleration
	static in_out_quad( t ) {
		return t < 0.5 ? 2 * t * t : - 1 + ( 4 - 2 * t ) * t;
	}

	// Accelerating from zero velocity
	static in_cubic( t ) {
		return t * t * t;
	}

	// Decelerating to zero velocity
	static out_cubic( t ) {
		const t1 = t - 1;
		return t1 * t1 * t1 + 1;
	}

	// Acceleration until halfway, then deceleration
	static in_out_cubic( t ) {
		return t < 0.5 ? 4 * t * t * t : ( t - 1 ) * ( 2 * t - 2 ) * ( 2 * t - 2 ) + 1;
	}

	// Accelerating from zero velocity
	static in_quart( t ) {
		return t * t * t * t;
	}

	// Decelerating to zero velocity
	static out_quart( t ) {
		const t1 = t - 1;
		return 1 - t1 * t1 * t1 * t1;
	}

	// Acceleration until halfway, then deceleration
	static in_out_quart( t ) {
		const t1 = t - 1;
		return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
	}

	// Accelerating from zero velocity
	static in_quint( t ) {
		return t * t * t * t * t;
	}

	// Decelerating to zero velocity
	static out_quint( t ) {
		const t1 = t - 1;
		return 1 + t1 * t1 * t1 * t1 * t1;
	}

	// Acceleration until halfway, then deceleration
	static in_out_quint( t ) {
		const t1 = t - 1;
		return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * t1 * t1 * t1 * t1 * t1;
	}

	// Accelerate _exponentially until finish
	static in_expo( t ) {

		if( t === 0 ) {
			return 0;
		}

		return Math.pow( 2, 10 * ( t - 1 ) );

	}

	// initial _exponential acceleration slowing to stop
	static out_expo( t ) {

		if( t === 1 ) {
			return 1;
		}

		return ( -Math.pow( 2, -10 * t ) + 1 );

	}

	// _exponential acceleration and deceleration
	static in_out_expo( t ) {
		
		if( t === 0 || t === 1 ) {
			return t;
		}

		const scaledTime = t * 2;
		const scaledTime1 = scaledTime - 1;

		if( scaledTime < 1 ) {
			return 0.5 * Math.pow( 2, 10 * ( scaledTime1 ) );
		}

		return 0.5 * ( -Math.pow( 2, -10 * scaledTime1 ) + 2 );

	}

	// increasing velocity until stop
	static in_circ( t ) {

		const scaledTime = t / 1;
		return -1 * ( Math.sqrt( 1 - scaledTime * t ) - 1 );

	}

	// Start fast, decreasing velocity until stop
	static out_circ( t ) {

		const t1 = t - 1;
		return Math.sqrt( 1 - t1 * t1 );

	}

	// Fast incr in velocity, fast decr in velocity
	static in_out_circ( t ) {

		const scaledTime = t * 2;
		const scaledTime1 = scaledTime - 2;

		if( scaledTime < 1 ) {
			return -0.5 * ( Math.sqrt( 1 - scaledTime * scaledTime ) - 1 );
		}

		return 0.5 * ( Math.sqrt( 1 - scaledTime1 * scaledTime1 ) + 1 );

	}

	// Slow movement _backwards then fast snap to finish
	static in_back( t, magnitude = 1.70158 ) {

		return t * t * ( ( magnitude + 1 ) * t - magnitude );

	}

	// Fast snap to _backwards point then slow resolve to finish
	static out_back( t, magnitude = 1.70158 ) {

		const scaledTime = ( t / 1 ) - 1;
		
		return (
			scaledTime * scaledTime * ( ( magnitude + 1 ) * scaledTime + magnitude )
		) + 1;

	}

	// Slow movement _backwards, fast snap to past finish, slow resolve to finish
	static in_out_back( t, magnitude = 1.70158 ) {

		const scaledTime = t * 2;
		const scaledTime2 = scaledTime - 2;

		const s = magnitude * 1.525;

		if( scaledTime < 1) {

			return 0.5 * scaledTime * scaledTime * (
				( ( s + 1 ) * scaledTime ) - s
			);

		}

		return 0.5 * (
			scaledTime2 * scaledTime2 * ( ( s + 1 ) * scaledTime2 + s ) + 2
		);

	}
	// _bounces slowly then quickly to finish
	static in_elastic( t, magnitude = 0.7 ) {

		if( t === 0 || t === 1 ) {
			return t;
		}

		const scaledTime = t / 1;
		const scaledTime1 = scaledTime - 1;

		const p = 1 - magnitude;
		const s = p / ( 2 * Math.PI ) * Math.asin( 1 );

		return -(
			Math.pow( 2, 10 * scaledTime1 ) *
			Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p )
		);

	}

	// Fast acceleration, _bounces to zero
	static out_elastic( t, magnitude = 0.7 ) {

		const p = 1 - magnitude;
		const scaledTime = t * 2;

		if( t === 0 || t === 1 ) {
			return t;
		}

		const s = p / ( 2 * Math.PI ) * Math.asin( 1 );
		return (
			Math.pow( 2, -10 * scaledTime ) *
			Math.sin( ( scaledTime - s ) * ( 2 * Math.PI ) / p )
		) + 1;

	}

	// Slow start and end, two _bounces sandwich a fast motion
	static in_out_elastic( t, magnitude = 0.65 ) {

		const p = 1 - magnitude;

		if( t === 0 || t === 1 ) {
			return t;
		}

		const scaledTime = t * 2;
		const scaledTime1 = scaledTime - 1;
		
		const s = p / ( 2 * Math.PI ) * Math.asin( 1 );

		if( scaledTime < 1 ) {
			return -0.5 * (
				Math.pow( 2, 10 * scaledTime1 ) *
				Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p )
			);
		}

		return (
			Math.pow( 2, -10 * scaledTime1 ) *
			Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p ) * 0.5
		) + 1;

	}

	// _bounce to completion
	static out_bounce( t ) {

		const scaledTime = t / 1;

		if( scaledTime < ( 1 / 2.75 ) ) {

			return 7.5625 * scaledTime * scaledTime;

		} else if( scaledTime < ( 2 / 2.75 ) ) {

			const scaledTime2 = scaledTime - ( 1.5 / 2.75 );
			return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.75;

		} else if( scaledTime < ( 2.5 / 2.75 ) ) {

			const scaledTime2 = scaledTime - ( 2.25 / 2.75 );
			return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.9375;

		} else {

			const scaledTime2 = scaledTime - ( 2.625 / 2.75 );
			return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.984375;

		}

	}

	// _bounce increasing in velocity until completion
	static in_bounce( t ) {
		return 1 - out_bounce( 1 - t );
	}

	// _bounce in and _bounce out
	static in_out_bounce( t ) {

		if( t < 0.5 ) {

			return in_bounce( t * 2 ) * 0.5;
			
		}

		return ( out_bounce( ( t * 2 ) - 1 ) * 0.5 ) + 0.5;

	}
}