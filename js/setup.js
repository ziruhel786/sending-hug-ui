(function ($) {
    $(document).ready(function() {
        $('.xzoom, .xzoom-gallery').xzoom({title: false, tint: '#333', Xoffset: 15});

        //Integration with hammer.js
        var isTouchSupported = 'ontouchstart' in window;

        if (isTouchSupported) {
            //If touch device
            $('.xzoom').each(function () {
                var xzoom = $(this).data('xzoom');
                xzoom.eventunbind();
            });
        }
    });
})(jQuery);