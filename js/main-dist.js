(function() {



// ================== Burger ==================

	let burger = document.body.querySelector('.header__burger');
	let menu = document.body.querySelector('.header__menu');
	let content = document.body.querySelector('.header__content');
	burger.addEventListener('click', function() {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		content.classList.toggle('active');
		document.body.classList.toggle('lock');		
	})

	window.addEventListener('resize', function() {
		let w = document.documentElement.clientWidth;
		captureElements(w);
	})

})();





