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
	$('#top').on('click', function(){
		$('#wrapper').animate({scrollTop:0 }, 300);
	});
});

//
//$('.module').css('background' , 'red');
//
//this.addEventListener("load", doSomething, true);
//
//var myElement = document.querySelector(".module"); 
//var position;
//
//function doSomething(e) {
//        
//    position = getPosition(myElement);
//    alert("The image is located at: " + position.x + ", " + position.y);
//}
//
// deal with the page getting resized or scrolled
//window.addEventListener("scroll", updatePosition, false);
//window.addEventListener("resize", updatePosition, false);
//
//function updatePosition() {
//  position = getPosition(myElement);
//}
//
// helper function to get an element's exact position
//function getPosition(el) {
//  var xPosition = 0;
//  var yPosition = 0;
//
//  while (el) {
//    if (el.tagName == "#wrapper") {
//      // deal with browser quirks with body/window/document and page scroll
//      var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
//      var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
//
//      xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
//      yPosition += (el.offsetTop - yScrollPos + el.clientTop);
//    } else {
//      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
//    }
//
//    el = el.offsetParent;
//  }
//  return {
//    x: xPosition,
//    y: yPosition
//  };
//}

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

    responsiveClass:true,
//    onDragged: callback,
//    onInitialize: callback,
	nav:true,
	navText:['',''],
	loop:false,
    responsive:{
	    0:{
	      	items:1,
	     
	    },
	    768:{
	       	items:2,

	    },
	    992:{
	   	    items:3,

	    },
	    1440:{
            items:4
	    }
    }
});
});
