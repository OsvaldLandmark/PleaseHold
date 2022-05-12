// hide all
$('.dashdiv0').hide();

// fade in each div one by one
divs = document.getElementsByClassName('dashdiv0');
(function fade(i){
    if(i < divs.length){
        $(divs[i]).delay(400).fadeIn(900, function(){
            fade(++i);
        });
    }
})(0);

$('.dashdiv1').hide();

// fade in each div one by one
divs = document.getElementsByClassName('dashdiv1');
(function fade(i){
    if(i < divs.length){
        $(divs[i]).delay(1200).fadeIn(900, function(){
            fade(++i);
        });
    }
})(0);




$('.dashdiv2').hide();

// fade in each div one by one
divs = document.getElementsByClassName('dashdiv2');
(function fade(i){
    if(i < divs.length){
        $(divs[i]).delay(1900).fadeIn(400, function(){
            fade(++i);
        });
    }
})(0);

$('.dashdiv3').hide();

// fade in each div one by one
divs = document.getElementsByClassName('dashdiv3');
(function fade(i){
    if(i < divs.length){
        $(divs[i]).delay(2350).fadeIn(400, function(){
            fade(++i);
        });
    }
})(0);

$('.dashdiv4').hide();

// fade in each div one by one
divs = document.getElementsByClassName('dashdiv4');
(function fade(i){
    if(i < divs.length){
        $(divs[i]).delay(2800).fadeIn(400, function(){
            fade(++i);
        });
    }
})(0);



$(window).on("load", function(){
   // The overlay is initially visible, we need to hide it!
   $("#loaderOverlay").addClass("hide"); // CSS3 will animate it nicely
   $("#loaderOverlayWhite").addClass("hide");
});

$(document).on("click", "a", function(evt) {

  evt.preventDefault(); // Don't navigate!

  var href = $(this).attr("href"); // grab the href

  // Animate-In our overlay
  $("#loaderOverlay").removeClass("hide");
  $("#loaderOverlayWhite").removeClass("hide");

  // wait for CSS3 to animate-in the overlay and than navigate to our next page

  setTimeout(function() {
     window.location = href; // Navigate finally
  }, 1600);

});


