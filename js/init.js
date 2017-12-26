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
$(document).on('click', '.navbar-nav.filter-nav .dropdown > a', function () {
        $(this).parent().toggleClass('open').siblings().removeClass('open');
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

// select form options list
$(".select-list li a").on("click", function () {
    var v = $(this).text();
    $(this).parent().addClass("selected").siblings().removeClass("selected");
    $(this).parents('.selected-option').find(".filter-option").text(v);
});