$(function() {
    //caches a jQuery object containing the header element
    var body = $(".page-wrapper");
    $('#wrapper').scroll(function() {
        var scroll = $('#wrapper').scrollTop();
        if (scroll >= 68) {
            body.removeClass('not-scrolled').addClass("scrolled");
        } else {
            body.removeClass("scrolled").addClass('not-scrolled');
        }
    });
});



//var myScroll;
//var position;

//function loaded () {
//	snap = document.getElementById('snap');
//	
//	bodyScroll = new IScroll('#wrapper', { 
//		probeType:  3,
//	    mouseWheel: true,
//	    scrollbars: 'custom',
//	    bounce: true,
//	    keyBindings: true,
//	    invertWheelDirection: false,
//	    momentum: true,
//	    fadeScrollbars: true,
//	    interactiveScrollbars: true,
//	    resizeScrollbars: true,
//	    shrinkScrollbars: false,
//	    click: false,
//	    deceleration: 0.001,
//	    preventDefaultException: { tagName:/.*/ }  
//	});
//
//	bodyScroll.on('scroll', function () {
//	    if ( this.y <= -75 ) {
//	        $('body').addClass('scrolled');
//	    } else {
//	    	$('body').removeClass('scrolled');
//	    }
//	    if ( this.directionY == 1){
//	    	$('body').addClass('scrollDown');
//	    	$('body').removeClass('scrollUp');
//	    }
//	    else if ( this.directionY == -1){
//	    	$('body').addClass('scrollUp');
//	    	$('body').removeClass('scrollDown');
//	    }
//	});
//
//	   
//}


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
});
