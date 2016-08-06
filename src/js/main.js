
landing = document.getElementById('landing');

var estilo = getRandom();

$('img.box__logo').svgInject();
//esperara 1 segundo para hacer la comprobacion si ha cargado la pagina
setTimeout(function() {

	if(document.readyState === 'complete')
		landing.classList.add("landing--none")

	window.onload = function() {
		landing.classList.add("landing--none");
	}

	switch(estilo) {
		case 1: setStyle('ffffff', '1e130f', 'ffffff','ffffff','ffffff', '9c9a9f', 'd8dade', '1e130f', 'ffffff', '1e130f', '1e130f', '5c5b5f', '9c9a9f', 'd8dade'); break;
		case 2: setStyle('ffffff', '154b65', 'ffffff','ffffff','ffffff', '55adb7', '55adb7', 'ffffff', 'a2bb42', 'ffffff', 'ffffff', 'ffffff', '9c9a9f', 'd8dade'); break;
		case 3: setStyle('ffffff', '55adb7', 'ffffff','ffffff','ffffff', '154b65', '154b65', '154b65', '87949d', '154b65', '154b65', 'ffffff', '154b65', '154b65'); break;
	}

}, 1500);


function getRandom() {
    return Math.floor(Math.random() * 3) + 1;
}

function setStyle (ing, ingbgc, ingtext1, ingtext2, ingcolor1, ingcolor2, ingcolor3, cap, capbgc, captext1, captext2, capcolor1, capcolor2, capcolor3) {
	$('.box_ingenieria .box__label').css('color', '#'+ing);
	$('.box_ingenieria').css('background-color', '#'+ingbgc);
	$('.box__logo_ingenieria .logo__text1').css('fill', '#'+ingtext1);
	$('.box__logo_ingenieria .logo__text2').css('fill', '#'+ingtext2);
	$('.box__logo_ingenieria .logo__color1').css('fill', '#'+ingcolor1);
	$('.box__logo_ingenieria .logo__color2').css('fill', '#'+ingcolor2);
	$('.box__logo_ingenieria .logo__color3').css('fill', '#'+ingcolor3);

	$('.box_capacitaciones .box__label').css('color', '#'+cap);
	$('.box_capacitaciones').css('background-color', '#'+capbgc);
	$('.box__logo_capacitaciones .logo__text1').css('fill', '#'+captext1);
	$('.box__logo_capacitaciones .logo__text2').css('fill', '#'+captext2);
	$('.box__logo_capacitaciones .logo__color1').css('fill', '#'+capcolor1);
	$('.box__logo_capacitaciones .logo__color2').css('fill', '#'+capcolor2);
	$('.box__logo_capacitaciones .logo__color3').css('fill', '#'+capcolor3);
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)
},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-82082923-2', 'auto');
  ga('send', 'pageview');

