let burger = document.querySelector('.nav-burger');
let burgerMenu = document.querySelector('.nav');

burger.addEventListener('click', function(){
		burger.classList.toggle('active');
		burgerMenu.classList.toggle('active'); 
		document.body.classList.toggle('lock');
	});

const burgerLinks = document.querySelectorAll('.nav-link');
burgerLinks.forEach(burgerLink => {burgerLink.addEventListener('click', function(){
		burger.classList.remove('active');
		burgerMenu.classList.remove('active'); 
		document.body.classList.remove('lock');
	});
})	

