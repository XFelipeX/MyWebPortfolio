// DEBOUNCE
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// ANIMAÇÃO
function scrollY() {
    let eixoY = window.pageYOffset;
    // TEXT
    let text = document.querySelector('.text');
    if (eixoY >= 2300) {
        text.style = 'opacity: 1;';
    } else {
        text.style = 'opacity: 0;';
    }
}

const target = document.querySelectorAll('[data-anime]');
console.log(target);

const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function(element){
        if(windowTop > element.offsetTop ){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 200));
}

window.addEventListener('scroll', function () {
    scrollY(); 
})
