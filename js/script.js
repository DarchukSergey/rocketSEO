$(function () {
    $(".plan__accordion-title.active").next().slideDown();
    $(".plan__accordion-title").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active").next().slideUp();
        } else {
            $(".plan__accordion-title.active").removeClass("active").next(".plan__accordion-items").slideUp();
            $(this).addClass('active').next('.plan__accordion-items').slideDown();
        }
    });

    $(".price__accordion-title.active").next().slideDown();
    $(".price__accordion-title").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active").next().slideUp();
        } else {
            $(".price__accordion-title.active").removeClass("active").next(".price__accordion-items").slideUp();
            $(this).addClass('active').next('.price__accordion-items').slideDown();
        }
    });

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        const slider = $($slidername);
        const settings = {
            mobileFirst: true,
            dots: $dots,
            arrows: $arrows,
            // centerMode: true,
            // centerPadding: '15px',
            infinite: true,
            initialSlide: 0,
            centerMode: false,
            // slidesToShow: 1.3,
            variableWidth: true,
            //autoplay: true,
            // prevArrow: '<button type="button" class="slick-prev"><span></span></button>',
            // nextArrow: '<button type="button" class="slick-next"><span></span></button>',
            responsive: [{
                breakpoint: $breakpoint,
                settings: "unslick"
            }]
        };

        slider.slick(settings);

        $(window).on("resize", function () {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    }

    mobileOnlySlider(".principes__items", false, true, 768);





    $('.carousel__inner').each(function () {
        var $status = $('.carousel__buttons-counter');
        var $slickElement = $(this);
        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.carousel__buttons-slider .carousel__buttons-counter', slick.$slider.parent()).text(i + '/' + slick.slideCount);
        });
        $slickElement.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }],



            responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                        initialSlide: 0,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1.08,
                        infinite: true,
                        initialSlide: 0,
                        centerMode: false,
                    }
                }
            ],
        });

        $slickElement.parent().find('.carousel__buttons-slider .carousel__buttons-next').click(function () {
            $slickElement.slick('slickNext');
        });
        $slickElement.parent().find('.carousel__buttons-slider .carousel__buttons-prev').click(function () {
            $slickElement.slick('slickPrev');
        });

    });

    const chatIcon = new Vivus('chat', {
        type: 'oneByOne',
        duration: 250,
        }, function(){
            // chatIcon.reset()
            setTimeout(function(){
                chatIcon.reset().play()},2500)
            });
});