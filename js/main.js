$(function() {
    $('.btn_menu').on({
            mouseenter:	function(){
                $('.sub-wrap').stop().slideUp(200); 
                $(this).next().stop().slideDown(300);
            }
    });
    $('nav').on({
        mouseleave:	function(){
            $('.sub-wrap').stop().slideUp(300);
        }
    });
    $('.btn_menu').click(function() {
        $('.btn_menu').removeClass('active');
        $(this).toggleClass('active');
    });
});