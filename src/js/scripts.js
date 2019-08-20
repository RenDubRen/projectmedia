// Portfolio -- slick script
$(document).ready(function() {
    // Валидация формы offer
    $('#offer-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            phone: {
                required: true
            }
        },
        messages: {
            username: {
                required: 'Укажите имя',
                minlength: jQuery.validator.format('Осталось символов: {0}'),
                maxlength: jQuery.validator.format('Имя слишком длинное')
            },
            phone: {
                required: 'Укажите свой телефон'
            }
        }
    });
    // Валидация формы brif
    $('#brif-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },
        messages: {
            username: {
                required: 'Укажите имя',
                minlength: jQuery.validator.format('Осталось символов: {0}'),
                maxlength: jQuery.validator.format('Имя слишком длинное')
            },
            email: {
                required: 'Введите Ваш email',
                email: 'Введите корректный email'
            },
            phone: {
                required: 'Укажите свой телефон'
            }
        }
    });
    // Маска телефона
    $('.phone').mask('+7 (999) 999-99-99');
    // Slider
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});



// Отправка и обработка формы через AJAX
$('#offer-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            $('.success').html(data + ', Ваша форма отправлена!');
        },
        error: function(jqXHR, textStatus) {
            console.log(jqXHR + ': ' + textStatus);
        }
    });
});


