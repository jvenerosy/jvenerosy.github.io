var sommaire = function(){
	var page = $('.post').length;
	if(page){
		var list = [];
		$('h2').each(function(){
			var id = $(this).attr('id');

			list.push(id);
		});
		var title = "Sommaire";
		var som = 
		['<div class="sommaire">',
		'<h2 class="title">'+title+'</h2>',
		'<ul>',
		'</ul>',
		'</div>'
		].join('\n');

		$('article').prepend(som);
		$('h2.title span').remove();
		for (var i = 0; i < list.length - 1; i++) {
			var t = $('h2#'+list[i]).html();
			var li = '<li><a href="#'+ list[i] +'">'+ t +'</a></li>';
			$('.sommaire ul').append(li);
		};
	}
};

var showYear = function(element){
	var date = new Date();

	$(element).append(date.getFullYear());
};

var navClick = function(){
	$('header.site-header').find('.md-menu').click(function(){
		$('header.site-header nav, body, .overlay, .md-menu').toggleClass('active');
	});
};