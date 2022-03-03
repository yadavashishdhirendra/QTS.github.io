$(document).ready(function () {
    $('.grid-in-row .grid-in-col').click(function () {
        $(this).addClass('actives');
        $(this).siblings().removeClass('actives');

    });

});

// Job listing Page
$(document).ready(function () {
    $('.CTA-btn button').click(function () {
        $(this).addClass('actives1');
        $(this).siblings().removeClass('actives1');

    });

});