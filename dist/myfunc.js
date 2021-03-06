/*function smoothScroll (target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    

    function animation (currentTime){
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    } 

    requestAnimationFrame(animation);
}





var arrow1 = document.querySelector('#arrow-1');

arrow1.addEventListener('click', function() {
    smoothScroll('#about-us',100);
}); 

var arrow2 = document.querySelector('#arrow-2');

arrow2.addEventListener('click', function() {
    smoothScroll('#our-services',100);
});*/


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
});

/*resp-header*/
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})


/*nav styles*/

var scrolled = false;
function addClass() {
	var nav = document.getElementsByTagName('nav');
	nav[0].classList.add('scrolled');
}
function removeClass() {
	var nav = document.getElementsByTagName('nav');
	nav[0].classList.remove('scrolled');
}
document.addEventListener('scroll', function(e) {
  if (window.scrollY === 0) {
  	scrolled = false;
  	removeClass();
  }
  if (window.scrollY >= 50 && scrolled === false) {
  console.log('scrolled');
  	scrolled = true;
  	addClass();
  }
});