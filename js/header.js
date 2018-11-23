$(function(){
    $('.download').mouseenter(function(){
        $('.erweima').show();
    }).mouseleave(function(){
        $('.erweima').hide();
    });
    $('.top-cart').hover(function () {
            $('.cart-list-info').slideDown('fast');
            $('.top-cart a').css({
                backgroundColor: '#fff',
                color:'#ff6700'
            });
        }, function () {
            $('.cart-list-info').slideUp('fast');
            $('.top-cart a').css({
                backgroundColor: '',
                color:''
            });
        }
    );
    $('.form').hover(function () {
        if ($('.search-text').is(':focus'))
            $('.search-keyword').siblings().css('borderColor', '#ff6700');
        else
            $('.search-keyword').siblings().css('borderColor', '#b0b0b0');
    }, function () {
        if ($('.search-text').is(':focus'))
            $('.search-keyword').siblings().css('borderColor', '#ff6700');
        else
            $('.search-keyword').siblings().css('borderColor', '#e0e0e0');
    });
    $('.search-text').on('focus',function(){
        $('.search-keyword').siblings().css('borderColor','#ff6700');
    }).blur(function(){
        $('.search-keyword').siblings().css('borderColor', '#e0e0e0');
    });
    $('.nav-item').hover(function(){
        $(this).children(':last').show();
    },function(){
        $(this).children(':last').hide();
    })
})