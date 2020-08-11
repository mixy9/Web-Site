const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    760: {
        items: 2
    }, 
    1600: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
 
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // Owl Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,  
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
 
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    })
 
    $('.move-archive').click(function () {
        $('html, body').animate({ 
            scrollTop: $("#archive").offset().top
        }, 800);
    })

    $('.move-portfolio').click(function () {
        $('html, body').animate({ 
            scrollTop: $("#portfolio").offset().top
        }, 800);
    })

    $('.move-down').click(function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 700);
    })

    // AOS Instance
    AOS.init();

});