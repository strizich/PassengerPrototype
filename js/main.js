var myScroll;
var position;

function loaded () {
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

	   
}


$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
	margin: 16,
    responsiveClass:true,
    onDragged: callback,
    onInitialize: callback,
    responsive:{
	    0:{
	      	items:1,
	      	nav:true,
	      	loop:false
	    },
	    768:{
	       	items:2,
	       	nav:true,
	       	loop:false
	    },
	    960:{
	   	    items:3,
	   	    nav:true,
	   	    loop:false
	    },
	    1440:{
            items:4,
            nav:true,
            loop:false
	    }
    }
});
    function callback(event) {
        var pages = event.page.count;     // Number of pages
        var currentPage = event.page.index; 
        var bodyScroll = new IScroll('#wrapper');
        if (currentPage == 0){
          bodyScroll.scrollToElement('.cal__week--1', 8000);
            console.log('okay');
        } else if (currentPage == 1){
        	bodyScroll.scrollToElement('.cal__week--2' , 8000);
        }
        else if (currentPage == 2){
        	bodyScroll.scrollToElement('.cal__week--3' , 8000);
        }
        else if (currentPage == 3){
        	bodyScroll.scrollToElement('.cal__week--4' , 8000);
        }
        
    }
});
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
