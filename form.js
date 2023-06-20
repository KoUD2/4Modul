$(document).ready(function(){
    $('#second').click(function(){
        $('.rec_violet').css("transform","scale(1.7)");
        $('.heart').css("transform","");
        $('.rhomb').css("transform","");
        $('.tr').css("transform","");
        $('.round_blue').css("transform","");
    });

    $('#name').click(function(){
        $('.heart').css("transform","scale(1.3)");
        $('.rec_violet').css("transform","");
        $('.rhomb').css("transform","");
        $('.tr').css("transform","");
        $('.round_blue').css("transform","");
    });

    $('#address').click(function(){
        $('.rhomb').css("transform","scale(1.42)");
        $('.rec_violet').css("transform","");
        $('.tr').css("transform","");
        $('.round_blue').css("transform","");
        $('.heart').css("transform","");
    });

    $('#tel').click(function(){
        $('.tr').css("transform","scale(1.4)");
        $('.rec_violet').css("transform","");
        $('.round_blue').css("transform","");
        $('.heart').css("transform","");
        $('.rhomb').css("transform","");
    });

    $('#email').click(function(){
        $('.round_blue').css("transform","scale(1.6)");
        $('.tr').css("transform","");
        $('.rec_violet').css("transform","");
        $('.heart').css("transform","");
        $('.rhomb').css("transform","");
    });
});