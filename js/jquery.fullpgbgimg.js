/* jQuery. */ var fullPgBgImg = function(userCfg) {
	var
		cfg = { // Set default configuration
			//images: [],
			duration: 10000, // How much time an image is displayed(not counting transition time)
			transition: { // To control the smooth change between images
				effect: 'cross fade',
				duration: 3000 // ms - The time the transition takes to complete
				//easing:
			}
		},
		i, n, // Reusable vars
		numImages,
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
						img = [],
						visibleImg = 0
						i = -1,
						w = $(window),
						aspectRatio = 1024 / 768 // FIXME
					;
					
					//Create the <img>'s
					img.push(
						$('<img src="' + cfg.images[++i] + '" alt="" style="position: fixed; top: 0; left: 0;">')
							.prependTo('body')
					);
					if (numImages > 1) {
						img.push(
							$('<img src="' + cfg.images[++i] + '" alt="" style="position: fixed; top: 0; left: 0;">')
							.prependTo('body')
						);
						visibleImg++;
					}
					
					// Handle window resizing
					w.resize(function() {
						var 
							wndWidth = w.width(),
							wndHeight = w.height(),
							imgNode = img[visibleImg].get(0)
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
					
					if (numImages > 1)
						window.setTimeout(function f() {
							var nextImageUrl = cfg.images[i = (i+1) % numImages];
								$.when(
									img[visibleImg].fadeOut(cfg.transition.duration),
									img[1-visibleImg].fadeIn(cfg.transition.duration)
								).done(function() {
									img[visibleImg].attr('src', nextImageUrl);
									visibleImg = 1 - visibleImg;
									aspectRatio = img[visibleImg].width() / img[visibleImg].height();
									//w.resize();
									window.setTimeout(f, cfg.duration);
								});
						}, cfg.duration);
				}
			}
		]
	;
	
	$.extend(cfg, userCfg);
	
	numImages = cfg.images.length;
	
	// Use the first feasible technique
	// So, the techniques array must be sorted in ...
	for (i = 0, n = techniques.length; i < n; ++i) {
		if (techniques[i].isApplicable()) {
			techniques[i].apply();
			break;
		}
	}
};