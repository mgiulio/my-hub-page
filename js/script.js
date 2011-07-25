var
	services = [
		{ service: 'delicious', user: 'mgiulio' },
		{ service: 'deviantart', user: 'giuliom' },
		{ service: 'flickr', user: '60378309@N02' },
		{ service: 'github', user: 'mgiulio' },
		{ service: 'twitter', user: 'mgiulio' },
		{ service: 'wordpress', user: 'giuliom' },
		{ service: 'youtube', user: 'giuliomainardi0' }//,
		//{ service: 'dribbble', user: 'mgiulio' }
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
				this._overlayContent.children().detach();
				this._overlayContent.append(jQuerySet);
			}
			this._modalMask.show();
			this._overlayBg.show();
			this._overlayFg.show();
		},
		hide: function() {
			this._overlayFg.hide();
			this._overlayBg.hide();
			this._modalMask.hide();
		},
		// Privatesection
		_overlayBg: undefined,
		_overlayFg: undefined,
		_overlayContent: undefined,
		_closeBtn: undefined,
		_modalMask: undefined,
		_buildMarkup: function() {
			$('body').append(
				'<div id="modal-mask"></div>' +
				'<div id="overlay-bg"></div>' +
				'<div id="overlay-fg">' +
					'<a id="close" href="#" title="close">Close</a>' +
					'<div id="content"></div>' +
				'</div>');
			this._overlayBg = $('#overlay-bg');
			this._overlayFg = $('#overlay-fg');
			this._closeBtn = $('#close');
			this._overlayContent = $('#content');
			this._modalMask = $('#modal-mask');
		},
		_styleIt: function() {
			var css = {
				overlayBg: {
					position: 'absolute',
					width: '740px', // 720+2*padx
					height: '3000px',
					top: '80px',
					left: '152px',
					'background-color': '#000000', //#444444
					opacity: 0.5,
					display: 'none'
				},
				overlayFg: {
					position: 'absolute',
					width: '720px',
					top: '80px',
					left: '152px',
					color: '#dddddd',
					padding: '10px',
					display: 'none'
				},
				close: (function() {
					// image preloading here?
					// Fetching img size frompreloading doesn't work
					var w = h = 34;	
					return {
						position: 'absolute',
						width: w,
						height: h,
						top: -h/2 + 'px',
						right: -w/2 + 'px',
						background: 'no-repeat center center url(img/overlay-close-btn.png)',
						'text-indent': '-999999px'
					};})(),
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
			
			this._overlayBg.css(css.overlayBg);
			this._overlayFg.css(css.overlayFg);
			this._closeBtn.css(css.close);
			this._modalMask.css(css.mask);
		},
		_bindEvents: function() {
			var that = this;
			this._closeBtn.click(function() {
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
	/* links.contact.click(function() {
		overlay.show($('<h2>Contact</h2><p>Fellfree to drop me a line</p>'));
		return false;
	}); */
	links.lifestream.click(function() {
		overlay.show(
			$('<div id="lifestream"></div>')
				.lifestream({
					limit: 400,
					list: services,}));
		return false;
	});
}