/**
 * Created by Mabdesaken on 04-02-2017.
 */

$(function () {
    var shake = 'animated shake';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.imageOfMe').on('click',function () {
        $('.imageOfMe').addClass(shake).one(animationEnd,function () {
            $(this).removeClass(shake);
        });
    });
});
