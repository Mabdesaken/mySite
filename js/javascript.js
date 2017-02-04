$(document).ready(function () {
    $(window).scroll(function(event) {
        var y = $(this).scrollTop();

        if(y >= 400) {
            $('#me').addClass('animate');
        }
    });
});

$(function () {
    var shake = 'animated shake';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('#me').on('click',function () {
        $('#me').addClass(shake).one(animationEnd,function () {
            $(this).removeClass(shake);
        });
    });
});