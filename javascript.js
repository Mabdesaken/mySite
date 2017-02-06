/*$(document).ready(function () {
    $(window).scroll(function(event) {
        var y = $(this).scrollTop();

        if(y >= 400) {
            $('#me').addClass('animate');
        }
    });
});
*/
var shake = 'animated shake';
var bounce = 'animated bounce';
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(document).ready(function () {
   $('.imgMe').addClass(bounce).one(animationEnd,function () {
       $(this).removeClass(bounce);
   });
});

$(function () {
    $('.imgMe').on('click',function () {
        $('.clickMe').addClass('animated slideOutRight');
    });
});

$(function () {
    $('.imgMe').on('click',function () {
        $('.imgMe').addClass(shake).one(animationEnd,function () {
            $(this).removeClass(shake);
        });
    });
});

$(function () {
    $('.education').on('click',function () {
       $('.education').addClass('animated fadeOutLeft',function () {
           $(this).removeClass('animated fadeOutLeft');
       });


    });
});
