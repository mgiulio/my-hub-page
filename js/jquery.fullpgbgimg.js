/* jQuery. */ var fullPgBgImg = function(userCfg) {
	var
		cfg = { // Set default configuration
			//image: '',
			}
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
						w = $(window),
						aspectRatio = 1024 / 768 // FIXME
					;
					
					//Create the <img>
					img = $('<img src="' + cfg.image + '" alt="" style="position: fixed; top: 0; left: 0;">')
						.prependTo('body')
						.
					;
					
					// Handle window resizing
					w.resize(function() {
						var 
							wndWidth = w.width(),
							wndHeight = w.height(),
							imgNode = img.get(0)
						;
						if (aspectRatio < wndWidth / wndHeight) {
							imgNode.width = wndWidth;
							imgNode.height = wndWidth / aspectRatio;
							imgNode.style.top = (wndHeight - imgNode.height)/2 + 'px';
							imgNode.style.left = '0px';
						}
						else {
							imgNode.height = wndHeight;
							imgNode.width = wndHeight * aspectRatio;
							imgNode.style.left = (wndWidth - imgNode.width)/2 + 'px';
							imgNode.style.top = '0px';
						}
					}).resize();
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