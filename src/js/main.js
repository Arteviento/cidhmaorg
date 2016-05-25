landing = document.getElementById('landing');

//esperara 1 segundo para hacer la comprobacion si ha cargado la pagina
setTimeout(function() {
	
	if(document.readyState === 'complete') {
		landing.classList.add("landing--none")
	}
	else{
		window.onload = function() {
			landing.classList.add("landing--none");
		}
	}

}, 1000);