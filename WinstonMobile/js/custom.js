/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
    'use strict';

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }

})();

// Sticky Footer

$(document).ready(function () {
    // Resize footer as needed
    var bumpIt = function () {
            $('body').css('margin-bottom', $('.footer').height());
        },
        didResize = false;
    bumpIt();

    $(window).resize(function () {
        didResize = true;
    });
    setInterval(function () {
        if (didResize) {
            didResize = false;
            bumpIt();
        }
    }, 250);

    // Only Needed for dynamic content adding
    // $('button').click(function() {
    //     $('.footer').append('<p>Another paragraph</p>');
    //     bumpIt();
    // });
});


/*Animate Functions*/
	$(document).ready(function(){

function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};
        


function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};
  
    
$('.headline').addClass('animated bounceInLeft');   
 animationHover('.copyright','tada');
        




    $("#btnforgot").on("click", function(){
        $("#AccountAccess").hide(500);
        $("#AccountPassword").show(500);
    });

     $("#btnaccess").on("click", function(){
        $("#AccountPassword").hide(500);
        $("#AccountAccess").show(500);
    });
    
    
 });            

    
    $(document).ready(function($){
                //Mask Email
    var e = "Chris.Gunzenhauser"; // replace with your email username
    var f = "Chris Gunzenhauser"; // replace with your email username
    var g = "Email Sales"; // replace with your email username
	var t = "digiverum"; // replace with your email provider
	var n = ".com"; // replace with your email provider TLD
	var r = 'mailto:' + e + '@' + t + n;
	$('.hide-email').attr('href',r).html(f);
        
   $('.hide-sales').attr('href',r).html(g);

    });    


