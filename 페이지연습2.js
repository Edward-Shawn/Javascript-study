$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $("section").stop().animate({left: -scroll});
    })              
    

    $("#navi li").click(function(){
        $("#navi li").removeClass("active");
        $(this).addClass("active");

        var i = $(this).index();


        var navPostion = i*1000;
        $("html,body").scrollTop(navPostion);


    })


})