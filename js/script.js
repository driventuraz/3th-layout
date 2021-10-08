$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        speed: 800,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        fade: true,
        draggable: true,
        pauseOnFocus: false,
        pauseOnDotsHover: false
    });

    $("#contact_form").click(function() {
        $("#popup1").fadeIn(1000);
        $(".cover").fadeIn(1000);
    });

    $(".knopka").click(function() { 
        $("#popup1").fadeOut(1000);
        $(".cover").fadeOut(1000);
    });


});
