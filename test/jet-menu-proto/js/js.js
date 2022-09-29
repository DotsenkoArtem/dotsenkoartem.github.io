


jQuery(document).ready(function(){
	window.addEvent('domready', function(){ var JTooltips = new Tips($$('.hasTip'), { maxTitleChars: 50, fixed: false}); });


	jQuery('#menu').slicknav();
});

var time_cart='1505311101';

jQuery.noConflict();