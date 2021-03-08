$(function() {
    // https://github.com/vmitsaras/js-offcanvas
    $('#right').offcanvas({
        modifiers: "right,overlay",
        triggerButton: '.js-offcanvas-trigger-right',
        onOpen: function() {
            $('body').css("overflow", "hidden");
        },
        onClose: function() {
            $('body').css("overflow", "scroll");
        },
        onInit: function() {}
    });
});



// https://kenwheeler.github.io/slick/
$('.slider').slick({
    infinite: true,
    dots: true
});

$('.main-product-slider').slick({
    infinite: true,
    dots: true
});