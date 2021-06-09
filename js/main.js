$(document).ready(function(){

    // Slide
    $('.header').click(function(){
        $('.header_text').slideToggle(600)
    });

    // Hide
    $('#hide').click(function(){
        $('.message').hide(600);
    });
    
    // Show
    $('#show').click(function(){
        $('.message').show(600)
    });

    // Show Hide
    $('#hide_show').click(function(){
        $('.message').toggle(600)
    });


    // FadeOut
    $('#fadeout').click(function(){
        $('.message').fadeOut(700)
    });

    // FadeIn
    $('#fadein').click(function(){
        $('.message').fadeIn(700)
    });

    //FadeTo
    $('#fadeto').click(function(){
        $('.message').fadeTo(700, .7)
    });

    //fadeInfadeOut
    $('#fadeinfadeout').click(function(){
        $('.message').fadeToggle(700)
    });

    

});