let oldWidth = window.innerWidth;
window.onresize = function () {
	let newWidth = window.innerWidth;
	if (newWidth != oldWidth) {
		// oldWidth = newWidth;
        location.reload();
	}
};

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
                    slidesToShow: 2
                }
            },
            {
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
                        slidesToShow: 1.05,
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
    }, function () {
        setTimeout(function () {
            chatIcon.reset().play()
        }, 2500)
    });


    gsap.registerPlugin(MotionPathPlugin); 
    gsap.set(".rocket-img", {scale: 1, autoAlpha: 1});   
   

    if (window.innerWidth > 768) {
    gsap.fromTo(".rocket-img",{
        opacity: 0,
        scale: 1
    },{        
        duration: 3.5,     
        delay: 1.5,
        immediateRender: true,
        opacity: 1,
        motionPath: {
            path: document.querySelector('#path'),
            align: "#path",
            alignOrigin: [0.5, 0.5],
            autoRotate: 80,
        }
    });
    } else if(window.innerWidth > 576){
        gsap.fromTo(".rocket-img",{
            opacity: 0,
            scale: .8
        },{        
            duration: 3,     
            delay: 1.5,
            immediateRender: true,
            opacity: 1,
            motionPath: {
                path: document.querySelector('#path'),
                align: "#path",
                alignOrigin: [0.5, 0.5],
                autoRotate: 80,
            }
        });
    }else if(window.innerWidth <= 576){
        gsap.fromTo(".rocket-img",{
            opacity: 0,
            scale: .6
        },{        
            duration: 2.5,     
            ease: "power1.inOut",
            delay: 1.5,
            immediateRender: true,
            opacity: 1,
            motionPath: {
                path: document.querySelector('#path'),
                align: "#path",
                alignOrigin: [.6, .3],
                autoRotate: 80,
            }
        });
    }
    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        const slider = $($slidername);
        const settings = {
            mobileFirst: true,
            dots: $dots,
            arrows: $arrows,
            infinite: true,
            initialSlide: 0,
            centerMode: false,
            variableWidth: true,
            responsive: [{
                breakpoint: $breakpoint,
                settings: "unslick"
            }]
        };
    
        slider.slick(settings);
    
        $(window).on("resize", function () {
            if ($(window).width() > $breakpoint) {
                return slider.hasClass("slick-initialized");
            }
            else if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    }
    
    mobileOnlySlider(".principes__items", false, false, 768);
    
    
    
    
});


