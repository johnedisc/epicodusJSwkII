window.onload = function() {
	
	let htmlEl = document.querySelector('html');
	let currentEl = '';
	let loc = '';

	htmlEl.onmouseover = function(event) { 
		console.log(event); 
		loc = event.target.localName + '.' + event.target.className;
		console.log(loc);
		currentEl = document.querySelector(loc);
//		currentEl.innerHTML += 'the food has been served';
		currentEl.style.backgroundColor = 'yellow';
		

	}
}


