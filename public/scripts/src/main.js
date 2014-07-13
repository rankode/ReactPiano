/** @jsx React.DOM */

var Piano = React.createClass({
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
			<div className="piano-container">
				<PianoControls />
				<PianoKeys keys={this.state.keys} onPlayNote={this.playNote} />
			</div>

		);
	},
	playNote: function(key,i) {
		console.log('key', key,i);

		



		
	}
});

var PianoControls = React.createClass({
	render: function() {
		return (
			<div className="piano-controls">
				
				<div className="circle-ctrls">
					<div className="circle-ctrl">sine</div>
					<div className="circle-ctrl">squ</div>
					<div className="circle-ctrl">saw</div>
					<div className="circle-ctrl">tri</div>
				</div>

				<div className="piano-display">
					
				</div>
			</div>
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

var PianoKeys = React.createClass({
	render: function() {

		var keys = this.props.keys.map(function(key, i) {

			var isBlack = (key.pitchClass.split('').indexOf('#') !== -1 ||
							(key.pitchClass.split('').indexOf('b') !== -1) ? "black" : "") ? "black" : "",
				keyClass = "key " + isBlack;

			return (
				<span data-ocatve={key.octave} 
					data-pitchclass={key.pitchClass}
					className={keyClass}
					onClick={this.playNote.bind(this, key,i)}>
				</span>
			);
		}.bind(this));

		return (
			<div className="piano-keys">
				{keys}
			</div>
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

React.renderComponent(<Piano keys={generateKeys(numKeys)} />, document.getElementById('piano'));














