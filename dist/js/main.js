$(function(){
    $('#home-type li,.home-type li').on('click', function(){
        $('#home-type li, .home-type li').removeClass('current-type');
        $(this).addClass('current-type');
    });

    $('.home-type2 li').on('click', function(){
        $('.home-type2 li').removeClass('current-type2');
        $(this).addClass('current-type2');
    });

    $('.home-type3 li').on('click', function(){
        $('.home-type3 li').removeClass('current-type3');
        $(this).addClass('current-type3');
    });

    $('.home-type4 li').on('click', function(){
        $('.home-type4 li').removeClass('current-type4');
        $(this).addClass('current-type4');
    });

    $('.home-type5 li').on('click', function(){
        $('.home-type5 li').removeClass('current-type5');
        $(this).addClass('current-type5');
    });

    $('#home-tab li').on('click', function(){
        $('#home-tab li').removeClass('current-tab');
        $(this).addClass('current-tab');
    });

    $('.main-menu-li').hover(
        function() {
            $(this).find('.main-menu-item').addClass('current-menu2');
            $(this).find('.submenu-list').show();
        }, function() {
            $(this).find('.main-menu-item').removeClass('current-menu2');
            $(this).find('.submenu-list').hide();
        }
    );
});
