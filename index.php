<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
    <title>mgiulio's Landing Page</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" media="screen" type="text/css" href="landing-page/css/style.css">
</head>
<body>
	<h1 class="header"><!-- This is the header --></h1>
	<div class="wrapper">
		<div class="content">
			<div class="primary">
				<div class="about" style="height: 300px">
					<h2>Hi</h2>
					<!--
					<img src="" style="float: left;">
					<h2>Hello,</h2>
					<p style="text-indentation: 4em;">
						I'm Giulio and this is my landing page.
					</p>
					-->
				</div>
				<div class="lifestream">
					<h2>
						<a href="http://christianv.github.com/jquery-lifestream/"><img src="landing-page/img/logo_v1_48.png" title="jQuery Lifestream plugin" alt="jQuery Lifestream plugin"></a>
						Lifestream
					</h2>
					<div></div>
				</div>
			</div>
			<div class="secondary">
				<ul>
					<li id="about">
						<h2>About</h2>
					</li>
					<li id="contact">
						<h2>Contact</h2>
					</li>
					<li id="badges">
						<h2>Badges</h2>
						<ul>
							<li>
								<a href='https://www.ohloh.net/accounts/133518?ref=Detailed'><img alt='Ohloh profile for mgiulio' height='35' src='https://www.ohloh.net/accounts/133518/widgets/account_detailed.gif' width='191' /></a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<!--
		<div class="footer">
			<p>Footer</p>
		</div>
		-->
	</div>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
	<script>!window.jQuery && document.write('<script src="http://code.jquery.com/jquery-1.6.1.min.js"><\/script>');</script>
	<!--- <script src="js/jquery.lifestream.js"></script> -->
	<script src="https://github.com/christianv/jquery-lifestream/raw/master/jquery.lifestream-compiled.js"></script>
	<script>
		if (jQuery && $.fn.lifestream) {
			$('.lifestream div').lifestream({
				limit: 1000,
				list: [
					{
						service: 'github',
						user: 'mgiulio'
					},
					{
						service: 'twitter',
						user: 'mgiulio'
					},
					{
						service: 'delicious',
						user: 'mgiulio'
					},
					{
						service: 'flickr',
						user: '34772705@N08'
					},
					{
						service: 'youtube',
						user: 'giuliomainardi0'
					},
					{
						service: 'deviantart',
						user: 'giuliom'
					}
				]
			});
		}
  </script>
</body>
</html>
