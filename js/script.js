$(function() {
    // https://github.com/vmitsaras/js-offcanvas
    $('#right').offcanvas({
        modifiers: "right, overlay",
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
$('.main-top-slider').slick({
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 992,
        settings: {
            arrows: false,
            dots: false
        }
    }]
});

$('.main-product-slider').slick({
    dots: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false
        }
    }]
});

$('.card-product-slider').slick({
    dots: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false
        }
    }]
});

$('.card-other-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: '60px'
        }
    }]
});