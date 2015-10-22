'use strict';
var $ = require('jquery');


$(document).ready(function() {
	var $width = $('#width');
	var $length = $('#length');
	var imperialArea = 0;
	var metricArea = 0;
	const MetricConversion = 0.09290304;


	$('button').click(function() {
		$('#output').html('');
		imperialArea = parseInt($length.val() * $width.val());
		metricArea = imperialArea * MetricConversion;
		metricArea = Math.round(metricArea *100)/100;
		console.log(imperialArea);
		console.log(metricArea);
		$('#output').append('<div>You entered dimensions of ' + $width.val() +'ft wide and ' + $length.val() + 'ft long.</div>');
		$('#output').append('<div>The Area is ' + imperialArea+' square feet, ' + metricArea + ' square meters</div>');
		$('#output').show();
	})
})