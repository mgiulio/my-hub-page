var 
	modalMask = $('<div id="modal-mask"></div>').insertBefore('div.page:first'),
	closeBtn = $('<a id="close-btn" href="#" title="Close. You can also press the Escape key">Close</a>')
		.click(function() {
			$(this)
				.parent()
				.hide(500, function() { modalMask.fadeOut(500); })
				.end()
				.detach()
			;
			return false;
		})
;

fullPgBgImg({
	image: 
		//'img/full-page-bg/pieces-of-me.jpg'
		//'img/full-page-bg/toys_by_hcube.jpg'
		//'img/full-page-bg/toys_by_momoclax.jpg'
		//'img/full-page-bg/Empire_City_by_gamefan84.jpg'
		//'img/full-page-bg/food___by_laprovocation.jpg'
		//'img/full-page-bg/food_by_PoetryInDespair1.jpg', 2.95 Mb!!!
		//'img/full-page-bg/Miami_City_by_Furiousxr.jpg',
		//'img/full-page-bg/The_city_turns_Orange_by_gilad.jpg',
		//'img/full-page-bg/amsler_grid.gif',
		//'img/full-page-bg/escher_grid.jpg',
		//'img/full-page-bg/grid.png',
		//'img/full-page-bg/grid-4quad12x12.gif',
		//'img/full-page-bg/grid2000b.gif',
		//'img/full-page-bg/img-amsler-grid.gif',
		'img/full-page-bg/layout_grid.gif'
});

$('#navbar').delegate('a', 'click',function() {
	showPage($(this.href.replace(/.*#/, '#')));
});

keyboardShortcuts();	
//lifestream();

if (window.location.hash)
	showPage($(window.location.hash));

/*
 * Function definitions
 */
 
function showPage(p) {
	p.append(closeBtn);
	
	modalMask.fadeIn(500, function() {
		p.show(500);
	});
}

function lifestream() {
	$(
		'<div id="lifestream" class="page overlay">' + 
			'<h2>' +
				'<a href="http://christianv.github.com/jquery-lifestream/example.html">' + 
					'<img src="img/jls-logo.png" title="Courtesy of jQuery Lifestream plugin">' +
				'</a>' +
				'Lifestream' +
			'</h2>' +
		'</div>')
		.insertAfter('div.page:last')
		.hide();
	
	$('<div class="content"></div>')
		.appendTo('#lifestream')
		.lifestream({
			limit: 1000,
			list: [
				{ service: 'delicious', user: 'mgiulio' },
				{ service: 'deviantart', user: 'giuliom' },
				{ service: 'github', user: 'mgiulio' },
				{ service: 'twitter', user: 'mgiulio' },
				{ service: 'youtube', user: 'giuliomainardi0' }//,
				//{ service: 'dribbble', user: 'mgiulio' }
	]});

	$('<li><a href="#lifestream" title="My activity on the Net">Lifestream</a></li>')
		.insertBefore($($('#navbar').children().get(-1)));
}

function keyboardShortcuts() {
	$(document).keydown(function(e) {
		if (e.which == 27)
			closeBtn.click();
	});	
}