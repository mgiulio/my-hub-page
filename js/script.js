$('body').addClass('js-enabled');

var 
	modalMask = $('<div id="modal-mask"></div>').insertBefore('div.page:first'),
	closeBtn = $('<a id="close-btn" href="#" title="close">Close</a>')
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
	showPage($('#' + this.href.replace(/.*#/, '')));
});

function showPage(p) {
	p.append(closeBtn);
	
	modalMask.fadeIn(500, function() {
		p.show(500);
	});
}
			
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
			{ service: 'flickr', user: '60378309@N02' },
			{ service: 'github', user: 'mgiulio' },
			{ service: 'twitter', user: 'mgiulio' },
			{ service: 'wordpress', user: 'giuliom' },
			{ service: 'youtube', user: 'giuliomainardi0' }//,
			//{ service: 'dribbble', user: 'mgiulio' }
]});
$('#navbar').append(
	'<li><a href="#lifestream" title="My activity on the Net">Lifestream</a></li>');

if (window.location.hash)
	showPage($(window.location.hash));
