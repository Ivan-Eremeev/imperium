// Jade
// .slider-nav
// 	div
// 	div
// 	div
// .slider-for
// 	div
// 	div
// 	div

// $('.slider-for').slick({
//   slidesToShow: 1, // Сколько слайдов показывать на экране
//   slidesToScroll: 1, // Сколько слайдов пролистывать за раз
//   dots: false, // Пагинация
//   arrows: false, // Стрелки
//   fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
//   asNavFor: '.slider-nav' // Связь со слайдерами
// });

function sliderInit(slider) {
  slider.slick({
    slidesToShow: 2, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    // asNavFor: '.slider-for', // Связь со слайдерами
    dots: true, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    // focusOnSelect: true, // Выбрать слайд кликом
    infinite: false, // Зацикленное пролистывание
    // vertical: false, // Вертикальный слайдер
    // rtl: false, // Слайды листаются справа налево
    // centerMode: false, // Включить center mode, чтоб увидеть часть крайних слайдов
    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    responsive: [ // Адаптация
      // {
      // breakpoint: 992,
      //   settings: {
      //     arrows: false,
      //   }
      // },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    // lazyLoad: 'on'
  });

  // Кастомные кнопки "вперед" "назад"
  $('.select-zone_arrow--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.select-zone_arrow--next').click(function() {
    slider.slick('slickNext');
  });
};
sliderInit($('#slider-zone-1'));

function sliderInitWorkers(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    // asNavFor: '.slider-for', // Связь со слайдерами
    dots: true, // Пагинация
    arrows: false, // Стрелки
    // speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    // centerMode: false, // Задает класс .slick-center слайду в центре
    // focusOnSelect: true, // Выбрать слайд кликом
    infinite: false, // Зацикленное пролистывание
    // vertical: false, // Вертикальный слайдер
    // rtl: false, // Слайды листаются справа налево
    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //     }
    //   },
    //   {
    //   breakpoint: 720,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
    // lazyLoad: 'on
  });
  // slider.slick('slickGoTo',1);

  // Кастомные кнопки "вперед" "назад"
  $('.slider-workers_btn--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-workers_btn--next').click(function() {
    slider.slick('slickNext');
  });
};
sliderInitWorkers($('.slider-workers'));

function sliderInitPortfolio(slider, sliderFor) {
  sliderFor.slick({
  slidesToShow: 1, // Сколько слайдов показывать на экране
  slidesToScroll: 1, // Сколько слайдов пролистывать за раз
  dots: false, // Пагинация
  arrows: false, // Стрелки
  fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
  asNavFor: slider // Связь со слайдерами
});

  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: sliderFor, // Связь со слайдерами
    dots: false, // Пагинация
    arrows: false, // Стрелки
    // speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    centerMode: true, // Задает класс .slick-center слайду в центре
    focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    // vertical: false, // Вертикальный слайдер
    // rtl: false, // Слайды листаются справа налево
    centerPadding: '33em', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: true, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //     }
    //   },
    //   {
    //   breakpoint: 720,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
    // lazyLoad: 'on
  });
  // slider.slick('slickGoTo',1);

  // Кастомные кнопки "вперед" "назад"
  $('.slider-portfolio_btn--prev span').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-portfolio_btn--next span').click(function() {
    slider.slick('slickNext');
  });
};
sliderInitPortfolio($('.slider-portfolio'), $('.slider-portfolio-for'));

function sliderInitComments(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    // asNavFor: '.slider-for', // Связь со слайдерами
    dots: true, // Пагинация
    arrows: false, // Стрелки
    // speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    // centerMode: false, // Задает класс .slick-center слайду в центре
    // focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    // vertical: false, // Вертикальный слайдер
    // rtl: false, // Слайды листаются справа налево
    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //     }
    //   },
    //   {
    //   breakpoint: 720,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
    // lazyLoad: 'on
  });
  // slider.slick('slickGoTo',1);

  // Кастомные кнопки "вперед" "назад"
  $('.slider-comments_btn--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-comments_btn--next').click(function() {
    slider.slick('slickNext');
  });
};
sliderInitComments($('.slider-comments'));

function sliderInitSelectzoneMobile(slider, sliderFor) {
  sliderFor.slick({
  slidesToShow: 1, // Сколько слайдов показывать на экране
  slidesToScroll: 1, // Сколько слайдов пролистывать за раз
  dots: false, // Пагинация
  arrows: false, // Стрелки
  fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
  asNavFor: slider, // Связь со слайдерами
  swipe: false,
  adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
});

  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: sliderFor, // Связь со слайдерами
    dots: false, // Пагинация
    arrows: false, // Стрелки
    // speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    // centerMode: true, // Задает класс .slick-center слайду в центре
    // focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    // vertical: false, // Вертикальный слайдер
    // rtl: false, // Слайды листаются справа налево
    // centerPadding: '33em', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: true, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //     }
    //   },
    //   {
    //   breakpoint: 720,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
    // lazyLoad: 'on
  });
  // slider.slick('slickGoTo',1);

  // Кастомные кнопки "вперед" "назад"
  $('.slider-portfolio_btn--prev span').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-portfolio_btn--next span').click(function() {
    slider.slick('slickNext');
  });
};
function sliderInitSelectzoneMobileResize() {
  if (window.matchMedia("(max-width: 768px)").matches
    // && !($('#select-zone-trigger').hasClass('slick-initialized')) 
    // && !($('.select-zone_content').hasClass('slick-initialized'))
    ) {
  $('.slick-initialized').slick('unslick');
  // $('#select-zone-trigger.slick-initialized').slick('unslick');
  sliderInitSelectzoneMobile($('#select-zone-trigger'), $('.select-zone_content'));
  // $('.slider-zone.slick-initialized').slick('unslick');
  sliderInit($('#slider-zone-1'));
  sliderInit($('#slider-zone-2'));
  sliderInit($('#slider-zone-3'));
}
  else {
    $('#select-zone-trigger.slick-initialized').slick('unslick');
    $('.select-zone_content.slick-initialized').slick('unslick');
  }
};
sliderInitSelectzoneMobileResize();

$('#select-zone-trigger').on('afterChange', function () {
  var index = $('#select-zone-trigger').find('.slick-current').data('slick-index');
  $('.slider-zone.slick-initialized').slick('unslick');
  if (index == 0) {
    sliderInit($('#slider-zone-1'));
  }
  else if (index == 1) {
    sliderInit($('#slider-zone-2'));
  }
  else if (index == 2) {
    sliderInit($('#slider-zone-3'));
  } 
});

function sliderInitAdvantages(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    // asNavFor: '.slider-for', // Связь со слайдерами
    dots: true, // Пагинация
    arrows: false, // Стрелки
    // speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    // centerMode: false, // Задает класс .slick-center слайду в центре
    // focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    // vertical: false, // Вертикальный слайдер
    // rtl: false, // Слайды листаются справа налево
    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //     }
    //   },
    //   {
    //   breakpoint: 720,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
    // lazyLoad: 'on
  });
  // slider.slick('slickGoTo',1);

  // Кастомные кнопки "вперед" "назад"
  $('.slider-adventages_btn--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-adventages_btn--next').click(function() {
    slider.slick('slickNext');
  });
};
sliderInitAdvantages($('.slider-adventages'));

function sliderInitSet(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    // asNavFor: '.slider-for', // Связь со слайдерами
    dots: true, // Пагинация
    arrows: false, // Стрелки
    // speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    // centerMode: false, // Задает класс .slick-center слайду в центре
    // focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    // vertical: false, // Вертикальный слайдер
    // rtl: false, // Слайды листаются справа налево
    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //     }
    //   },
    //   {
    //   breakpoint: 720,
    //     settings: {
    //       arrows: false,
    //     }
    //   }
    // ]
    // lazyLoad: 'on
  });
  // slider.slick('slickGoTo',1);

  // Кастомные кнопки "вперед" "назад"
  // $('.slider-set_btn--prev').click(function() {
  //   slider.slick('slickPrev');
  // });
  // $('.slider-set_btn--next').click(function() {
  //   slider.slick('slickNext');
  // });
};
sliderInitSet($('.set_row'));

// $('.your-slider').slick('unslick'); // Уничтожить слайдер