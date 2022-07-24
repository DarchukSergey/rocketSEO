$(function () {
    $('.plan__accordion-title').on('click', function () {

        $('.plan__accordion').removeClass('plan__accordion--active');
        $(this).parent().addClass('plan__accordion--active');
    });
    $('.price__accordion-title').on('click', function () {

        $('.price__accordion-inner').removeClass('price__accordion--active');
        $(this).parent().addClass('price__accordion--active');
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