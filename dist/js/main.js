$(function(){
    $('#home-type li,.home-type li').on('click', function(){
        $('#home-type li, .home-type li').removeClass('current-type');
        $(this).addClass('current-type');
    });

    $('.home-type2 li').on('click', function(){
        $('.home-type2 li').removeClass('current-type2');
        $(this).addClass('current-type2');
    });

    $('#home-tab li').on('click', function(){
        $('#home-tab li').removeClass('current-tab');
        $(this).addClass('current-tab');
    });
});
