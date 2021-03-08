// https://slideout.js.org/
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'right',
    'touch': false
});

function close(eve) {
    eve.preventDefault();
    slideout.close();
}
slideout
    .on('beforeopen', function() {
        this.panel.classList.add('panel-open');
    })
    .on('open', function() {
        this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function() {
        this.panel.classList.remove('panel-open');
        this.panel.removeEventListener('click', close);
    });

document.querySelector('.mobile-menu-toggler').addEventListener('click', function() {
    slideout.toggle();
});

var fixed = document.querySelector('.top-block-mobile');

slideout.on('translate', function(translated) {
    fixed.style.transform = 'translateX(' + translated + 'px)';
});

slideout.on('beforeopen', function() {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(-256px)';
});

slideout.on('beforeclose', function() {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(0px)';
});

slideout.on('open', function() {
    fixed.style.transition = '';
});

slideout.on('close', function() {
    fixed.style.transition = '';
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