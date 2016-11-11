(function() {
	"use strict";

	var app = {

		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('.range').on('input', this.getVal.bind(this));
		},

		getVal: function() {
			var r = $('#r').val();
			var g = $('#g').val();
			var b = $('#b').val();
			var a = $('#a').val();
			this.updateView(r, g, b, a);
		},

		updateView: function(r, g, b, a) {
			this.rgba(r, g, b, a);
			this.rgbaToHex(r, g, b, a);
		},

		rgba: function(r, g, b, a) {
			$('body').css('backgroundColor', 'rgba('+r+', '+g+', '+b+', '+a+')');

			$('#result').html('RGBA :' + ' ' + r + ', ' + g + ', ' + b + ', ' + a);
		},

		rgbaToHex: function (r, g, b, a) {
			var redColor = parseInt(r, 10);
			var greenColor = parseInt(g, 10);
			var blueColor = parseInt(b, 10);
			var transparence = parseInt(a, 10);

			var redHex = redColor.toString(16);
			var greenHex = greenColor.toString(16);
			var blueHex = blueColor.toString(16);
			var transpHex = transparence.toString(16);

			$('#result2').html('HEX :' + ' ' + '#' + redHex + greenHex + blueHex + transpHex);
		},
	};

	$(document).ready(function() {
		app.init();
	});
})();