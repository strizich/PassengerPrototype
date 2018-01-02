var myScroll;
var position;

//function updatePosition () {
//	position.innerHTML = this.y>>0;
//	
//}

function loaded () {
//Calender Scroller
//calScroll = new IScroll('.cal__wrapper', { 
//    mouseWheel: false,
//    scrollbars: false,
//    bounce: true,
//    momentum: true,
//    click: false,
//    scrollX: true, 
//    scrollY: false,
//    snap:'.cal__week',
//    preventDefaultException: { tagName:/.*/ }
//});

//Body Scroller
//	position = document.getElementById('position');
	snap = document.getElementById('snap');
	
	bodyScroll = new IScroll('#wrapper', { 
		probeType:  3,
	    mouseWheel: true,
	    scrollbars: 'custom',
	    bounce: true,
	    keyBindings: true,
	    invertWheelDirection: false,
	    momentum: true,
	    fadeScrollbars: true,
	    interactiveScrollbars: true,
	    resizeScrollbars: true,
	    shrinkScrollbars: false,
	    click: false,
	    deceleration: 0.001,
	    preventDefaultException: { tagName:/.*/ }  
	});
modalScroll = new IScroll('.modal-body', { 
	probeType:  1,
    mouseWheel: true,
    scrollbars: 'custom',
    bounce: true,
    keyBindings: true,
    invertWheelDirection: false,
    momentum: true,
    fadeScrollbars: true,
    interactiveScrollbars: true,
    resizeScrollbars: true,
    shrinkScrollbars: false,
    click: false,
    preventDefaultException: { tagName:/.*/ }  
});
//	bodyScroll.on('scroll', updatePosition);
//	bodyScroll.on('scrollEnd', updatePosition);

	bodyScroll.on('scroll', function () {
	    if ( this.y <= -75 ) {
	        $('body').addClass('scrolled');
	    } else {
	    	$('body').removeClass('scrolled');
	    }
	    if ( this.directionY == 1){
	    	$('body').addClass('scrollDown');
	    	$('body').removeClass('scrollUp');
	    }
	    else if ( this.directionY == -1){
	    	$('body').addClass('scrollUp');
	    	$('body').removeClass('scrollDown');
	    }
	});
	
	$('.modal-trigger').on('click', function(){
		setTimeout(function () {
	       myScroll = new IScroll('#modal-scroll', {
	           mouseWheel: true,
	           scrollbars: 'custom',
	           scrollbars: true,
	           fadeScrollbars: true,
	           preventDefaultException: { tagName:/.*/ }
	       });
	   }, 500);
	});
	   
}

function mastLoaded() {
//Mast scroller
myScroll2 = new IScroll('#mast-wrapper', { 
    mouseWheel: false,
    scrollbars: false,
    bounce: true,
    momentum: true,
    click: false,
    scrollX: true, 
    scrollY: false,
    snap:'.carousel-scroll .item',
    preventDefaultException: { tagName:/.*/ }
});

myScroll2.on('scrollEnd', function () {
    console.log(this.currentPage);
    if(this.pageX == 2){
    console.log('tick');
    }
});
myScroll2.goToPage(1, 0, 1000);
}


document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
