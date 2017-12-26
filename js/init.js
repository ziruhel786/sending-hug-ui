//Include function
$("[data-url]").each(function () {
    var x = $(this).attr('data-url');
    $(this).load(x).removeAttr("data-url");
});
$(document).on('mouseover', '.hover-nav .dropdown', function () {
        $(this).addClass('open')
    }
);
$(document).on('mouseout', '.hover-nav .dropdown', function () {
        $(this).removeClass('open')
    }
);
$('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});
// side nav open
$(document).on("click", '.thumbs > img', function () {
    $(this).parents('.product').find('.largeImage > img').attr('src', $(this).attr('src').replace('thumb', 'large'));
    $(this).addClass("active").siblings().removeClass("active");
});
var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('hover');
    $this.data('hover', $this.attr('src'));
    $this.attr('src', newSource);
};
$(function () {
    $('.largeImage > img').hover(sourceSwap, sourceSwap);
});