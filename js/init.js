//Include function
$("[data-url]").each(function () {
    var x = $(this).attr('data-url');
    $(this).load(x).removeAttr("data-url");
});
$(document).on('mouseover', '.dropdown', function () {
        $(this).addClass('open')
    }
);
$(document).on('mouseout', '.dropdown', function () {
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