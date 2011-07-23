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
			this._styleIt();
			this._bindEvents();
			this._horizCenter();
		},
		show: function(jQuerySet) {
			if (jQuerySet.length > 0) {
				this._c.children().detach();
				this._c.append(jQuerySet);
			}
			this._modalMask.show();
			this._o.show();
		},
		hide: function() {
			this._o.hide();
			this._modalMask.hide();
		},
		// Privatesection
		_o: undefined,
		_c: undefined,
		_close: undefined,
		_modalMask: undefined,
		_buildMarkup: function() {
			$('body').append(
				'<div id="modal-mask"></div>' +
				'<div id="overlay">' +
				'<a id="close" href="#">X</a>' +
				'<div id="content"></div>' +
				'</div>');
			this._o = $('#overlay');
			this._close = $('#close');
			this._c = $('#content');
			this._modalMask = $('#modal-mask');
		},
		_styleIt: function() {
			var css = {
				overlay: {
					position: 'absolute',
					width: '720px',
					top: '80px',
					left: '152px',
					'background-color': '#000000',
					color: '#dddddd',
					padding: '1em',
					display: 'none'
				},
				close: {
					position: 'absolute',
					top: '-10px',
					right: '-10px',
					width: '1em',
					'background-color': '#444444',
					color: 'orange',
					border: '1 pixel solid #ffffff',
					padding: '3px',
					'text-decoration': 'none'
				},
				mask: {
					position: 'fixed',
					top: 0,
					left: 0,
					width: '1024px',
					height: '768px',
					opacity: 0.5,
					'background-color': '#000000',
					display: 'none'
				}
			};
			
			this._o.css(css.overlay);
			this._close.css(css.close);
			this._modalMask.css(css.mask);
		},
		_bindEvents: function() {
			var that = this;
			this._close.click(function() {
				that.hide();
				return false;
			});
		},
		_horizCenter: function() {
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