(function() {
	"use strict";

	var app = {

		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('.range').on('input', this.getVal);
		},

		getVal: function() {
			var r = $('#r').val();
			var g = $('#g').val();
			var b = $('#b').val();
			var a = $('#a').val();

			$('body').css('backgroundColor', 'rgba('+r+', '+g+', '+b+', '+a+')');

			$('#result').html(r + ', ' + g + ', ' + b + ', ' + a);
			

			function rgbaToHex(r, g, b, a) {
				if (r > 255 || g > 255 || b > 255 || a > 255)
					throw "Invalid color component";
				return ((r << 32) | (g << 16) | (b << 8) | a).toString(16);
			}
			console.log(rgbaToHex(r, g, b, a));
			
		},
	};

	$(document).ready(function() {
		app.init();
	});
})();