$(document).ready(function(){

    let flag1 = false;
    let flag2 = false;
    let flag3 = false;


    $(function(){
        $('.more').on('click', function(){
            if (flag1 == false) {
                $('.slider').slideDown(500);
                $('body').css("overflow","hidden");
                $('.games').css("animation","opacity 1s forwards");
                $('.home').css("animation","opacity 1s forwards");
                setTimeout(function(){
                    $('.games').css("display","none");
                    $('.home').css("display","none");
                }, 1000);
                flag1 = true;
                $('html, body').animate({
                scrollTop: $(".slider").offset().top}, 2000);
            } else {
                $('.slider').slideUp(500);
                $('body').css("overflow","");
                $('.games').css("animation","opacity1 1s forwards");
                $('.home').css("animation","opacity1 1s forwards");
                setTimeout(function(){
                    $('.games').css("display","");
                    $('.home').css("display","");
                }, 1000);
                flag1 = false;
                $('html, body').animate({
                scrollTop: $(".slider").offset().top}, 2000);
            }
        });
    });

    $(function(){
        $('.games').click(function(){
            if (flag2 == false) {
                $(this).css("animation","right 1s forwards");
                $('.more').css("animation","opacity 1s forwards");
                $('.home').css("animation","opacity 1s forwards");
                $('.about').css("animation","opacity 1s forwards");
                $('.free').css("display","inline-block");
                $('.free').css("animation","orange_back 1s forwards");
                setTimeout(function(){
                    $('.more').css("display","none");
                    $('.home').css("display","none");
                }, 1000);
                setTimeout(function(){
                    $('.text1').css("display","inline-block");
                    $('.text1').css("animation","opacity1 1s forwards");
                }, 500);
                flag2 = true;
            } else {
                $(this).css("animation","right_inv 1s forwards");
                $('.more').css("animation","opacity1 1s forwards");
                $('.home').css("animation","opacity1 1s forwards");
                $('.about').css("animation","opacity1 1s forwards");
                $('.free').css("animation","orange_back_inv 1s forwards");
                $('.text1').css("display","none");
                $('.more').css("display","");
                $('.home').css("display","");
                flag2 = false;
            }
        });
    });

    $(function(){
        $('.home').click(function(){
            if (flag3 == false) {
                $(this).css("animation","left 1s forwards");
                $(this).css("z-index","2");
                $('.more').css("animation","opacity 1s forwards");
                $('.games').css("animation","opacity 1s forwards");
                $('.about').css("animation","opacity 1s forwards");
                $('.purple').css("display","inline-block");
                $('.purple').css("animation","purple_back 1s forwards");
                $('#home').css("margin-top","24.010vw");
                $('.spade_about').css("display","flex");
                $('.round_about').css("display","flex");
                $('.dimond_about').css("display","flex");
                $('.heart_about').css("display","flex");
                setTimeout(function(){
                    $('.spade_about').css("animation","opacity1 1s forwards");
                    $('.round_about').css("animation","opacity1 1s forwards");
                    $('.dimond_about').css("animation","opacity1 1s forwards");
                    $('.heart_about').css("animation","opacity1 1s forwards");
                    $('.more').css("display","none");
                    $('.games').css("display","none");
                }, 1000);
                flag3 = true;
            } else {
                $(this).css("animation","left_inv 1s forwards");
                setTimeout(function(){
                    $('.home').css("z-index","");
                }, 880);
                $('.spade_about').css("display","none");
                $('.round_about').css("display","none");
                $('.dimond_about').css("display","none");
                $('.heart_about').css("display","none");
                $('.more').css("animation","opacity1 1s forwards");
                $('.games').css("animation","opacity1 1s forwards");
                $('.about').css("animation","opacity1 1s forwards");
                $('.purple').css("animation","purple_back_inv 1s forwards");
                setTimeout(function(){
                    $('.purple').css("display","none");
                }, 1000);
                $('.more').css("display","");
                $('.games').css("display","");
                $('#home').css("margin-top","19.896vw");
                flag3 = false;
            }
        });
    });

    $(function() {
        $(".images").draggable({ axis: "x" });
    });

}(jQuery));