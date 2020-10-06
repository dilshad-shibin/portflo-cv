$(function () {


    "use strict";



   //pre loder
	$(window).on('load',function () {
		$('.loder').delay(1000).fadeOut(1000);
	});

    //    my service

    $('.my-service-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    //    my service

    //    testimonial

    $('.testimonial-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    //    testimonial

    //    sticky menu

    var $dis = $('.full_nav').offset().top;

    var $menu = $('.full_nav')


    $(window).scroll(function () {

        var $scroll = $(this).scrollTop();

        if ($scroll >= 130) {
            $menu.addClass('sticky');
        } else {
            $menu.removeClass('sticky');
        }
    });

    //    sticky menu

    //    top scroll
    $(".top_scroll").on('click', function () {

        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    $(window).scroll(function () {

        var $scroll = $(this).scrollTop();

        if ($scroll >= 450) {
            $(".top_scroll").fadeIn();
        } else {
            $(".top_scroll").fadeOut();
        }
    });
    //    top scroll

    //animation scroll js
    var htmlBody = $('html, body');

        $('a[href*="#"]:not([href="#').on('click', function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    htmlBody.animate({
                        scrollTop: target.offset().top - 75
                    }, 1000);
                    return false;
                }
            }
        });
 
     

});
