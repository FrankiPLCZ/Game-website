var menu = document.querySelector('#menu');
menu.classList.add('menu');

var a = document.querySelectorAll('a');
var li = document.querySelectorAll('li');

for(l of li)
	l.onmouseover = function(){
		var akt = document.querySelector('.active');
		akt.classList.remove('active');
		this.classList.add('active');
		
	};
	





	
