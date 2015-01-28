(function($){
	sommaire();
	showYear('footer.site-footer .wrapper p');
	navClick();
	imgTransform();
	$('p.image img, img.mea').lazyload({
	    effect : "fadeIn"
	});
	outdatedBrowser({
	    bgColor: '#f25648',
	    color: '#ffffff',
	    lowerThan: 'IE9',
	    languagePath: 'js/vendors/lang/fr.html'
	});
})(jQuery);