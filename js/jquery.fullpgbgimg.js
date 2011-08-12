/* jQuery. */ var fullPgBgImg = function(userCfg) {
	var
		cfg = { // Set default configuration
			//image: '',
		},
		i, n, // Reusable vars
		techniques = [
			{
				name: 'CSS3 background-size',
				isApplicable: function() {
					return false;
				},
				apply: function() {
					/*
						background-image: url(../img/full-page-bg/pieces-of-me.jpg);
						background-attachment: fixed;
						background-position: center center;
						background-repeat: no-repeat;
						background-color: #d2691e;
						background-size: cover;
					*/
				}
			},
			{
				name: 'jQuery fallback',
				isApplicable: function() {
					return true;
				},
				apply: function() {
					var
						img,
						wnd = $(window),
						aspectRatio,
						imgStyle
					;
					
					wnd.resize(function() {
						var 
							wndWidth = wnd.width(),
							wndHeight = wnd.height()
						;
						if (aspectRatio < wndWidth / wndHeight) {
							img.width = wndWidth;
							img.height = wndWidth / aspectRatio;
							imgStyle.top = (wndHeight - img.height)/2 + 'px';
							imgStyle.left = '0px';
						}
						else {
							img.height = wndHeight;
							img.width = wndHeight * aspectRatio;
							imgStyle.left = (wndWidth - img.width)/2 + 'px';
							imgStyle.top = '0px';
						}
					});
					
					/* img = $('<img src="' + cfg.image + '" alt="" style="position: fixed; top: 0; left: 0;">')
						.prependTo('body'); */
					img = new Image();
					img.alt = '';
					imgStyle = img.style;
					imgStyle.position = 'fixed';
					imgStyle.top = '0px';
					imgStyle.left = '0px';
					imgStyle.display = 'none';
					img.onload = function() {
						aspectRatio = this.width / this.height;
						wnd.resize();
						$(this).prependTo('body').fadeIn(2000);
					};
					img.src = cfg.image;
				}
			}
		]
	;
	
	$.extend(cfg, userCfg);
	
	// Use the first feasible technique
	// So, the techniques array must be sorted in ...
	for (i = 0, n = techniques.length; i < n; ++i) {
		if (techniques[i].isApplicable()) {
			techniques[i].apply();
			break;
		}
	}
};