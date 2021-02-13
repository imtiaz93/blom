$(function () {
    "use stricit";
    // Smooth Scroll
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500, );
                return false;
            }
        }
    });
    // Banner Slider starts
    $('.banner_slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    });

    // Portfolio part starts
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    // Port Slider starts
    $('.port_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right nxt_slide"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_slide"></i>',

    });

    // Team Slider starts
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right nxt_slide"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_slide"></i>',

    });
    // Menu fix
    var navoff = $(".main_menu").offset().top;
    // alert(navoff);
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $(".main_menu").addClass("menu_fix");
        } else {
            $(".main_menu").removeClass("menu_fix");
        }
    });
});