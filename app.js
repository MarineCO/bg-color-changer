(function() {
	"use strict";

	var app = {

		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('.range').on('click', this.getVal);
		},

		getVal: function() {
			var r = $('#r').val();
			var g = $('#g').val();
			var b = $('#b').val();
			var a = $('#a').val();

			$('body').css('backgroundColor', 'rgba('+r+', '+g+', '+b+', '+a+')');

			$('#result').html(r + ', ' + g + ', ' + b + ', ' + a);

		}


	};

	$(document).ready(function() {
		app.init();
	});
})();