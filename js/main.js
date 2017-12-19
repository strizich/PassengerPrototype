var myScroll;
var position;

function updatePosition () {
	position.innerHTML = this.y>>0;
	
}

function loaded () {
	position = document.getElementById('position');
	snap = document.getElementById('snap');
	myScroll = new IScroll('#wrapper', { 
	probeType:  3,
	    mouseWheel: true,
	    scrollbars: 'custom',
	    bounce: true,
	    keyBindings: true,
	    invertWheelDirection: false,
	    momentum: true,
	    fadeScrollbars: false,
	    interactiveScrollbars: true,
	    resizeScrollbars: true,
	    shrinkScrollbars: false,
	    click: false,
	    
	    preventDefaultException: { tagName:/.*/ }
	});
	
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
	
	myScroll.on('scroll', updatePosition);
	myScroll.on('scrollEnd', updatePosition);
	myScroll.on('scroll', function () {
	    if ( this.y < -75 ) {
	        $('body').addClass('scrolled');
	    } else {
	    	$('body').removeClass('scrolled');
	    }
	});
	
	myScroll2.on('scrollEnd', function () {
	    console.log(this.currentPage);
	    if(this.pageX == 2){
	    console.log('tick');
	    }
	});
	myScroll2.goToPage(1, 0, 0);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);