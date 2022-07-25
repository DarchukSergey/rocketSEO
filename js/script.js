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
        });

        $slickElement.parent().find('.carousel__buttons-slider .carousel__buttons-next').click(function () {
            $slickElement.slick('slickNext');
        });
        $slickElement.parent().find('.carousel__buttons-slider .carousel__buttons-prev').click(function () {
            $slickElement.slick('slickPrev');
        });

    });

});