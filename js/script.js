/* $('html').removeClass('backgroundsize');
delete Modernizr.backgroundsize; */

var fullPageBg = {
	init: function(cfg) {
		var
			c = {
			},
			i = -1
		;
		
		$.extend(c, cfg);
		
		if (!Modernizr.backgroundsize) {
			var 
				w = $(window),
				img = $('<img src="img/full-page-bg/pieces-of-me.jpg" alt="" style="position: fixed; top: 0; left: 0;">')
					.prependTo('body'),
				aspectRatio = img.width() / img.height()
			;
			
			w.resize(function() {
				if (aspectRatio  < w.width() / w.height())
					img.css('width', '100%').css('top', (w.height() - img.height())/2 + 'px');
				else
					img.css('height', '100%').css('left', (w.width() - img.width())/2 + 'px');
			}).resize();
		}
		
		window.setInterval(function() {
			var nextImageUrl = c.images[i = (i+1) % c.images.length];
			if (Modernizr.backgroundsize) {
				$('html').css('background-image', 'url(' + nextImageUrl + ')');
			}
		}, 5000);
	}
};

fullPageBg.init({
	images: [
		'img/avatar.png',
		'img/jls-logo.png',
		'img/overlay-close-btn.png',
	]
});

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


	