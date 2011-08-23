var 
	modalMask = $('<div id="modal-mask"></div>').insertBefore('div.page:first'),
	closeBtn = $('<a id="close-btn" href="#" title="Close. You can also press the Escape key">Close</a>')
		.click(function() {
			$(this)
				.parent()
				.hide(500, function() { currPage = null; modalMask.fadeOut(500); })
				.end()
				.detach()
			;
			currPage = null, // the jQuery object that wraps the DOM element of the current visible page
			location.hash = '';
			return false;
		}),
	currPage
;

$.fullPgBgImg('img/full-page-bg/pieces-of-me.jpg');

$(window).hashchange(function(e) {
	var
		newHash = location.hash
	;
	
	if (newHash === '') {
		if (currPage)
			closeBtn.click();
		return;
	}
	
	if (!currPage) {
		// Find the page that contains the hash
		newHash = '#' + $(newHash).closest('.page').attr('id');
		showPage(newHash);
		return;
	}
	
	// A page is visible:
	// Is the newhash inside it?
	if (currPage.find(newHash).length > 0 || newHash === '#' + currPage.attr('id'))
		return;

	//Close current page and show new one
	closeBtn.click();
	location.hash = newHash;
});

$(window).hashchange();

// Intercept clicks on internal links
/* $(document).delegate('a', 'click', function() {
	var
		url = this.href,
		hash,
		p
	;
	
	//Check for external links
	if (url.indexOf('#') === -1 || url.substr(0, 15) === 'http://myubpage') {
		return true;
	}
	
	hash = url.replace(/.*#/, '#'),
	
	p = $(hash);
	if (!p.hasClass('page'))
		p = p.closest('div.page');
		
	showPage(p);
	
	return true;
}); */
/* $('#navbar').delegate('a', 'click', function() {
	showPage($(this.href.replace(/.*#/, '#')));
}); */

keyboardShortcuts();	
//lifestream();

/* if (window.location.hash) {
	var el = $(window.location.hash);
	if (el.hasClass('page'))
		showPage(el);
	else {
		var page = el.closest('div.page');
		showPage(page, function() {
			window.location.href = window.location.href;
		});
	}
} */

/*
 * Function definitions
 */
 
 function showPage(hash, done) {
	var p = $(hash);
	
	p.append(closeBtn);
	
	modalMask.fadeIn(500, function() {
		p.show(500, function() { 
			currPage = p; 
			done;
		});
	});
}

/* function showPage(p, done) {
	if (currPage)
		if (p.attr('id') === currPage.attr('id')) {
			return;
		}
		else {
			closeBtn.click();
		}
	
	p.append(closeBtn);
	
	modalMask.fadeIn(500, function() {
		p.show(500, function() { 
			currPage = p; 
			done;
		});
	});
} */

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