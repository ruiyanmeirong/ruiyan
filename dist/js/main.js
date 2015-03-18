$(function(){
    $('#home-type li').on('click', function(){
        $('#home-type li').removeClass('current-type');
        $(this).addClass('current-type');
    });

    $('#home-tab li').on('click', function(){
        $('#home-tab li').removeClass('current-tab');
        $(this).addClass('current-tab');
    });
});
