$(function(){
    var $duration = 300;
    var $images = $("#images p");

    // 첫번째
    $images.filter(":nth-child(1)").mouseover(function(){
        $(this).find('span, strong').stop().animate({opacity:1},$duration);
    }).mouseout(function(){
        $(this).find('span, strong').stop().animate({opacity:0},$duration);
    });

    // 두번째
    $images.filter(":nth-child(2)").mouseover(function(){
        $(this).find('span').stop().animate({opacity:1},$duration);
        $(this).find('strong').stop().animate({left:"0%",opacity:1},$duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0},$duration);
        $(this).find('strong').stop().animate({left:"-200%",opacity:0},$duration);
    });

    // 세번째
    $images.filter(":nth-child(3)").mouseover(function(){
        $(this).find('span').stop().animate({opacity:1},$duration);
        $(this).find('strong').stop().animate({bottom:"0%",opacity:1},$duration);
        $(this).find('img').stop().animate({top:"-40px"},$duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity:0},$duration);
        $(this).find('strong').stop().animate({bototm:"-80px",opacity:0},$duration);
        $(this).find('img').stop().animate({top:"0px"},$duration);
    });
});