$(document).ready(function() {
    /*анимация по скроллу */
    new WOW().init();
    /*mobile menu*/
    $('a#menu_btn').click(function (event) {
        event.preventDefault();
        $('#mobile_menu').toggle();
        if($('#mobile_menu').is(':hidden')){
            $('html, body').css('overflow', 'auto');
        }else{
            $('html, body').css('overflow', 'hidden');
        }
    });
    /*Select Box js*/
    $('.drop-menu').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropeddown').slideToggle(300);
    });
    $('.drop-menu').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropeddown').slideUp(300);
    });
    $('.drop-menu .dropeddown li').click(function () {
        $(this).parents('.drop-menu').find('span').text($(this).text());
        $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
    });
    /*End Select Box js*/

    /*Выравнивание по высоте блоков*/
    $('.service_block .items .item .title').matchHeight();
    $('.service_block .items .item p').matchHeight();
    $('.dop_service_block .items .item .img').matchHeight();
    $('.dop_service_block .items .item .title').matchHeight();
    $('.dop_service_block .items .item p').matchHeight();
    $('.news_block .items .item .name').matchHeight();
    $('.news_block .items .item p').matchHeight();
    $('.calc_block .step2 .iget_block .items .item .text').matchHeight();
    $('.calc_block .step2 .iget_block .items .item .dop_inf').matchHeight();
    $('.calc_block .step2 .recomend_block .items .item .text').matchHeight();
    


    /*калькулятор*/

    $('.calc_block .calc_form form .col input[type=submit]').click(function (event) {
        event.preventDefault();
        $('.calc_block .calc_form form#start_form').hide();
        $('.calc_block .calc_form p#status').html('Выполняеться рассчет стоимости....');
        $('#progress').fadeIn();

        var elem = document.getElementById("progressBar"); 
        var width = 10; // шаг анимации в px
        var id = setInterval(frame, 10); // скорость
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                /*Отобразить результат*/
                $('.calc_block .calc_form .step1').hide();
                $('.calc_block .calc_form .step2').show();
                //выровнять по высоте тексты
                $('.calc_block .step2 .iget_block .items .item .text').matchHeight();
                $('.calc_block .step2 .iget_block .items .item .dop_inf').matchHeight();
            } else {
                width++; 
                elem.style.width = width + '%'; 
                $('#progressBar span').html(width+'%');
            }
        }
    });

    // "Наши клиенты"
    if ($("#logoParade").length > 0) {
        $("#logoParade").smoothDivScroll({
            autoScrollingMode: "always",
            autoScrollingDirection: "endlessLoopRight",
            autoScrollingStep: 1,
            autoScrollingInterval: 25
        }).bind("mouseover", function () {
            $(this).smoothDivScroll("stopAutoScrolling");
        }).bind("mouseout", function () {
            $(this).smoothDivScroll("startAutoScrolling");
        });
    }


    // автозапуск видео по скроллу
    $(window).scroll(function(){
        var bo = $("body").scrollTop();
            video_block = $(".video_block .item").offset().top;
            video_href = $(".video_block .item iframe").attr('src');
            video_height = $('.video_block .item').height();

        if(video_block-video_height <= bo){
            
            if($(".video_block .item iframe").hasClass('active')){

            }else{
                $(".video_block .item iframe").attr('src', video_href +'?autoplay=1');
                $(".video_block .item iframe").addClass('active');
            }
            
            
        }
    });
    // отзывы слайдер
    $(".otziv_block .items").owlCarousel({

        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            767: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                nav: false,
            },
            1023: {
                items: 3,
                nav: false,
                center: true,
                loop: true,
                mouseDrag: true,
            },
            1439: {
                items: 3,
                nav: false,
                center: true,
                loop: true,
            },
            1601: {
                items: 3,
                nav: false,
                center: true,
                loop: true,
                // mouseDrag: false,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
            },
            1602: {
                items: 5,
                nav: false,
                center: true,
                loop: true,
                // mouseDrag: false,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
            }

        },

            onInitialized: function (event) {
                // event.item.count;
                // console.log(event.item.index);
                // event.item.index = 3;
                // $(this).trigger('to.owl.carousel', 3);
            }
    });

    $(".otziv_block .items").on('changed.owl.carousel', function(event) {
        $('.otziv_block .items .item .name').matchHeight();
    });




    $(document).on('click', '.owl-item', function(e){
        n = $(this).index();
        $('.otziv_block .items').trigger('to.owl.carousel', n);
        
    });

    /*плавный скролл к форме*/
    $('.calc_block .step2 .iget_block .items .item').click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();      
        var id = $(this).attr('data-href'),  
        // top = $(id).offset().top;
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        $(id).find('input').first().focus();
	});

    /* замена placeholderov */
    function placeholder_text() {
        if ($(window).width() <= '780') {
            $('input[type=text].name').each(function() {
                $(this).attr("placeholder", "Имя");
            });
            $('input[type=text].tel').each(function() {
                $(this).attr("placeholder", "Телефон");
            });
            $('input[type=text].mail').each(function() {
                $(this).attr("placeholder", "Email");
            });
        } else {
            $('input[type=text].name').each(function() {
                $(this).attr("placeholder", "Введите Ваше имя");
            });
            $('input[type=text].tel').each(function() {
                $(this).attr("placeholder", "Введите Ваш телефон");
            });
            $('input[type=text].mail').each(function() {
                $(this).attr("placeholder", "Введите Ваш Email");
            });
        }
    }
    placeholder_text();
    /* // замена placeholderov */

    
    $(window).resize(function() {
        placeholder_text();
    });



    /*Пример подсветки полей. Удалить после интеграции*/
    $('.top .form_start form .btn').click(function(event){
        event.preventDefault();
        $('.top .form_start form .col input[type=text]').parent('.col').addClass('error');
        $('.top .form_start form .col .drop-menu').parent('.col').addClass('error');
    });



});





