$(document).ready(function(){
	let flag1 = false;
    $('.bur').click(function(){
        if (flag1 == false) {
            $('.mobile').css("transform", 'translateY(0)');
            flag1 = true;
        } else {
            $('.mobile').css("transform", 'translateY(-50.429vw)');
            flag1 = false;
        }
    });
});