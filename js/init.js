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
        $(this).parent().toggleClass('open');
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
$(document).on("click", '.nav-thumbs > li > a', function () {
    $(this).parents('.product').find('.largeImage > img').attr('src', $(this).find('img').attr('src'));
    $(this).parent().addClass("active").siblings().removeClass("active");
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
$(document).on("click", '.description .nav-thumbs > li > a', function () {
    $('#xzoom-default').attr('src', $(this).find('img').attr('src')).attr('xoriginal', $(this).find('img').attr('src'));
    console.log('click works');

});

// product incriment/Decriment
$(function () {
    $('.add').on('click', function () {
        var $qty = $(this).closest('.sp-quantity-box').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.minus').on('click', function () {
        var $qty = $(this).closest('.sp-quantity-box').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
        }
    });
});
// product is number
var isNumberKey = function (evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;

        var excludedKey = (charCode >= 65 && charCode <= 90); // Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð±ÑƒÐºÐ²Ñ‹

        if (!excludedKey) {
            return;
        } else {
            return evt.preventDefault();
        }
    },
    input = $('input[type=number]');

input.on('keydown', function (event) {
    isNumberKey(event);
});