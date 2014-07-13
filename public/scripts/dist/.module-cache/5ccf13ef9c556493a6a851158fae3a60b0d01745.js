/** @jsx React.DOM */

var Piano = React.createClass({displayName: 'Piano',
	render: function() {
		return (
	React.DOM.div( {class:"piano-container"}, 
		React.DOM.div( {class:"piano-controls"}, 
			

			React.DOM.div( {class:"circle-ctrls"}, 
				React.DOM.div( {class:"circle-ctrl"}, "sine"),
				React.DOM.div( {class:"circle-ctrl"}, "squ"),
				React.DOM.div( {class:"circle-ctrl"}, "saw"),
				React.DOM.div( {class:"circle-ctrl"}, "tri")
			),


			React.DOM.div( {class:"piano-display"}
				
			)


		),
		React.DOM.div( {class:"piano"}, 

			React.DOM.div( {'data-pitchClass':"a", 'data-octave':"2", class:"key"}),
				React.DOM.div( {'data-pitchClass':"bb", 'data-octave':"2", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"b", 'data-octave':"2", class:"key"}),
			React.DOM.div( {'data-pitchClass':"c", 'data-octave':"3", class:"key"}),
				React.DOM.div( {'data-pitchClass':"db", 'data-octave':"3", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"d", 'data-octave':"3", class:"key"}),
				React.DOM.div( {'data-pitchClass':"eb", 'data-octave':"3", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"e", 'data-octave':"3", class:"key"}),
			React.DOM.div( {'data-pitchClass':"f", 'data-octave':"3", class:"key"}),
				React.DOM.div( {'data-pitchClass':"gb", 'data-octave':"3", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"g", 'data-octave':"3", class:"key"}),
				React.DOM.div( {'data-pitchClass':"ab", 'data-octave':"3", class:"key black"}),

			React.DOM.div( {'data-pitchClass':"a", 'data-octave':"3", class:"key"}),
				React.DOM.div( {'data-pitchClass':"bb", 'data-octave':"3", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"b", 'data-octave':"3", class:"key"}),
			React.DOM.div( {'data-pitchClass':"c", 'data-octave':"4", class:"key"}),
				React.DOM.div( {'data-pitchClass':"db", 'data-octave':"4", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"d", 'data-octave':"4", class:"key"}),
				React.DOM.div( {'data-pitchClass':"eb", 'data-octave':"4", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"e", 'data-octave':"4", class:"key"}),
			React.DOM.div( {'data-pitchClass':"f", 'data-octave':"4", class:"key"}),
				React.DOM.div( {'data-pitchClass':"gb", 'data-octave':"4", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"g", 'data-octave':"4", class:"key"}),
				React.DOM.div( {'data-pitchClass':"ab", 'data-octave':"4", class:"key black"}),

			React.DOM.div( {'data-pitchClass':"a", 'data-octave':"4", class:"key"}),
				React.DOM.div( {'data-pitchClass':"bb", 'data-octave':"4", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"b", 'data-octave':"4", class:"key"}),
			React.DOM.div( {'data-pitchClass':"c", 'data-octave':"5", class:"key"}),
				React.DOM.div( {'data-pitchClass':"db", 'data-octave':"5", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"d", 'data-octave':"5", class:"key"}),
				React.DOM.div( {'data-pitchClass':"eb", 'data-octave':"5", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"e", 'data-octave':"5", class:"key"}),
			React.DOM.div( {'data-pitchClass':"f", 'data-octave':"5", class:"key"}),
				React.DOM.div( {'data-pitchClass':"gb", 'data-octave':"5", class:"key black"}),
			React.DOM.div( {'data-pitchClass':"g", 'data-octave':"5", class:"key"}),
				React.DOM.div( {'data-pitchClass':"ab", 'data-octave':"5", class:"key black"})

		)
	)

		);
	}
});

// var PianoControls = React.createClass({

// });

// //btnCtrl mixin?

// var TimbreControls = React.createClass({

// });

// //knob mixin?

// var GainControl = React.createClass({
	// render: function() {
	// 	return (
	// 		<label for="">
	// 			<input type="range">
	// 			Gain
	// 		</label>
	// 	);
	// }
// });

// var DetuneControl = React.createClass({

// });


// var DisplayControl = React.createClass({

// });




// var Keys = React.createClass({

// });

// var WhiteKey = {};

// var BlackKey = {};

// var Key = React.createClass({
// 	mixins: [WhiteKey, BlackKey]
// });

React.renderComponent(Piano(null ), document.getElementById('piano'));













