let burger = document.querySelector('.nav-burger');
let burgerMenu = document.querySelector('.nav');
let toggleMenu = function(){
		burger.classList.toggle('active');
		burgerMenu.classList.toggle('active'); 
		document.body.classList.toggle('lock');
}


burger.addEventListener('click', function(e){
		e.stopPropagation();
		toggleMenu();
	});

document.addEventListener('click', function(e) {
    let target = e.target;
    let itsMenu = target == burgerMenu || burgerMenu.contains(target);
    let itsBurger = target == burger;
    let isMenuActive = burgerMenu.classList.contains('active');
    
    if (!itsMenu && !itsBurger && isMenuActive) {
        toggleMenu();
    }
});


const burgerLinks = document.querySelectorAll('.nav-link');
burgerLinks.forEach(burgerLink => {burgerLink.addEventListener('click', function(){
		burger.classList.remove('active');
		burgerMenu.classList.remove('active'); 
		document.body.classList.remove('lock');
	});
})	

