var
	services = [
		{ service: 'delicious', user: 'mgiulio' },
		{ service: 'deviantart', user: 'giuliom' },
		{ service: 'flickr', user: '60378309@N02' },
		{ service: 'github', user: 'mgiulio' },
		{ service: 'twitter', user: 'mgiulio' },
		{ service: 'wordpress', user: 'giuliom' },
		{ service: 'youtube', user: 'giuliomainardi0' },
		{ service: 'dribbble', user: 'mgiulio' }
	],
	links = {
		contact: $('#contact'),
		lifestream: $('#lifestream')
	},
	overlay = {
		init: function() {
			this._buildMarkup();
			this._bindEvents();
		},
		show: function(jQuerySet) {
			if (jQuerySet.length > 0) {
				this._c.children().detach();
				this._c.append(jQuerySet);
			}
			this._o.show();
		},
		hide: function() {
			this._o.hide();
		},
		// Privatesection
		_o: undefined,
		_c: undefined,
		_close: undefined,
		_buildMarkup: function() {
			$('body').append(
				'<div id="overlay">' +
				'<a id="close" href="#">X</a>' +
				'<div id="content"></div>' +
				'</div>');
			this._o = $('#overlay');
			this._close = $('#close');
			this._c = $('#content');
		},
		_bindEvents: function() {
			var that = this;
			this._close.click(function() {
				that.hide();
				return false;
			});
		}
	};

overlay.init();
bindMenuEvents();

function bindMenuEvents() {
	links.contact.click(function() {
		overlay.show($('<h2>Contact Page</h2>'));
		return false;
	});
	links.lifestream.click(function() {
		overlay.show(
			$('<div id="lifestream"></div>')
				.lifestream({
					limit: 400,
					list: services,}));
		return false;
	});
}