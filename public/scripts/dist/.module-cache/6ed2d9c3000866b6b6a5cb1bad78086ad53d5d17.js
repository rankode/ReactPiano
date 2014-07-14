/** @jsx React.DOM */

var ctx = new webkitAudioContext(),
	osc,
	gainNode,
	compressor,
	freq;

function calcET(key) {
	return 440 * (Math.pow(Math.pow(2,1/12), (key + 1 - 49)));
}
function calcPy(tuningRatio) {
	tuningRatio[0] = 1;
	tuningRatio[1] = 256/243;
	tuningRatio[2] = 9/8;
	tuningRatio[3] = 32/27;
	tuningRatio[4] = 81/64;
	tuningRatio[5] = 4/3;
	tuningRatio[6] = 729/512;
	tuningRatio[7] = 3/2;
	tuningRatio[8] = 128/81;
	tuningRatio[9] = 27/16;
	tuningRatio[10] = 16/9;
	tuningRatio[11] = 243/128;
	return tuningRatio;
}
function calcJust(tuningRatio) {
	tuningRatio[0] = 1;
	tuningRatio[1] = 16/15;
	tuningRatio[2] = 9/8;
	tuningRatio[3] = 6/5;
	tuningRatio[4] = 5/4;
	tuningRatio[5] = 4/3;
	tuningRatio[6] = 45/32;
	tuningRatio[7] = 3/2;
	tuningRatio[8] = 8/5;
	tuningRatio[9] = 5/3;
	tuningRatio[10] = 9/5;
	tuningRatio[11] = 15/8;
	return tuningRatio;
}
function calcMT(tuningRatio) {
	tuningRatio[0] = 1;
	tuningRatio[1] = 1.0700;
	tuningRatio[2] = 1.1180;
	tuningRatio[3] = 1.1963;
	tuningRatio[4] = 1.2500;
	tuningRatio[5] = 1.3375;
	tuningRatio[6] = 1.3975;
	tuningRatio[7] = 1.4953;
	tuningRatio[8] = 1.6000;
	tuningRatio[9] = 1.6719;
	tuningRatio[10] = 1.7889;
	tuningRatio[11] = 1.8692;
	return tuningRatio;
}
function calcIntonation(key) {
	
}

var Piano = React.createClass({displayName: 'Piano',
	// getDefaultProps: function() {
	// 	return {
	// 		temperament: "equal",
	// 		numKeys: 32,
	// 		keys: keys
	// 	}
	// },
	// propTypes: {
		// temperament: React.propTypes.string,
		// numKeys: React.propTypes.number,
		// keys: React.propTypes.object
	// },
	getInitialState: function() {
		return {
			keys: this.props.keys,
			wave: "Sine"
		};
	},
	render: function() {
		return (
			React.DOM.div( {className:"piano-container"}, 
				PianoControls(null ),
				PianoKeys( {keys:this.state.keys, 
					onPlayNote:this.playNote} )
			)

		);
	},
	playNote: function(key,i) {
		console.log('key', key,i);






	}
});

var PianoControls = React.createClass({displayName: 'PianoControls',
	render: function() {
		return (
			React.DOM.div( {className:"piano-controls"}, 
				
				React.DOM.div( {className:"circle-ctrls"}, 
					React.DOM.div( {className:"circle-ctrl"}, "sine"),
					React.DOM.div( {className:"circle-ctrl"}, "squ"),
					React.DOM.div( {className:"circle-ctrl"}, "saw"),
					React.DOM.div( {className:"circle-ctrl"}, "tri")
				),

				React.DOM.div( {className:"piano-display"}
					
				)
			)
		);
	}
});

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

var PianoKeys = React.createClass({displayName: 'PianoKeys',
	render: function() {

		var keys = this.props.keys.map(function(key, i) {

			var isBlack = (key.pitchClass.split('').indexOf('#') !== -1 ||
							(key.pitchClass.split('').indexOf('b') !== -1) 
							? "black" : "") ? "black" : "",
				keyClass = "key " + isBlack;

			return (
				React.DOM.span( {'data-ocatve':key.octave, 
					'data-pitchclass':key.pitchClass,
					className:keyClass,
					onClick:this.playNote.bind(this, key,i)}
				)
			);
		}.bind(this));

		return (
			React.DOM.div( {className:"piano-keys"}, 
				keys
			)
		);
	},
	playNote: function(key,i) {
		this.props.onPlayNote(key,i);
	}
});

// var WhiteKey = {};

// var BlackKey = {};

// var Key = React.createClass({
// 	mixins: [WhiteKey, BlackKey]
// });

React.renderComponent(
	Piano( {keys:generateKeys(numKeys)} ), 
	document.getElementById('piano')
);














