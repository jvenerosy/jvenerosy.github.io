(function($){
	sommaire();
	showYear('footer.site-footer .wrapper p');
	navClick();
	imgTransform();
	$('p.image img, img.mea').lazyload({
    effect : "fadeIn"
});
})(jQuery);