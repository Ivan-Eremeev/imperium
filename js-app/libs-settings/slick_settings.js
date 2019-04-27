function sliderInit(slider) {
  slider.slick({
    slidesToShow: 2, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: true, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    infinite: false, // Зацикленное пролистывание
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ]
  });



  // Кастомные кнопки "вперед" "назад"
  $('.select-zone_arrow--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.select-zone_arrow--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitMobile(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: true, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    infinite: false, // Зацикленное пролистывание
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ]
  });

  

  // Кастомные кнопки "вперед" "назад"
  $('.select-zone_arrow--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.select-zone_arrow--next').click(function() {
    slider.slick('slickNext');
  });
};

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
    infinite: true, // Зацикленное пролистывание
  });

  // Кастомные кнопки "вперед" "назад"
  $('.select-zone_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.select-zone_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitWorkers(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: true, // Пагинация
    arrows: false, // Стрелки
    infinite: false, // Зацикленное пролистывание
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-workers_btn--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-workers_btn--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitPortfolio(slider, sliderFor) {
  sliderFor.slick({
  slidesToShow: 1, // Сколько слайдов показывать на экране
  slidesToScroll: 1, // Сколько слайдов пролистывать за раз
  dots: false, // Пагинация
  arrows: false, // Стрелки
  fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
  asNavFor: slider, // Связь со слайдерами
  swipe: false
});

  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: sliderFor, // Связь со слайдерами
    dots: false, // Пагинация
    arrows: false, // Стрелки
    centerMode: true, // Задает класс .slick-center слайду в центре
    focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    centerPadding: '33em', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-portfolio_btn--prev span').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-portfolio_btn--next span').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitPortfolioMobile(slider, sliderFor) {
  sliderFor.slick({
  slidesToShow: 1, // Сколько слайдов показывать на экране
  slidesToScroll: 1, // Сколько слайдов пролистывать за раз
  dots: false, // Пагинация
  arrows: false, // Стрелки
  fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
  asNavFor: slider, // Связь со слайдерами
  swipe: false,
});

  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: sliderFor, // Связь со слайдерами
    dots: false, // Пагинация
    arrows: false, // Стрелки
    // centerMode: true, // Задает класс .slick-center слайду в центре
    focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    // centerPadding: '33em', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-portfolio_btn--prev span').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-portfolio_btn--next span').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitComments(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: true, // Пагинация
    arrows: false, // Стрелки
    infinite: true, // Зацикленное пролистывание
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-comments_btn--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-comments_btn--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitCommentsMobile(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    infinite: true, // Зацикленное пролистывание
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-comments_btn--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-comments_btn--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitAdvantages(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: true, // Пагинация
    arrows: false, // Стрелки
    infinite: true, // Зацикленное пролистывание
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-adventages_btn--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-adventages_btn--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitSet(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: true, // Пагинация
    arrows: false, // Стрелки
    infinite: true, // Зацикленное пролистывание
  });
};

function sliderInitInsta(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    infinite: true, // Зацикленное пролистывание
    centerMode: true, // Задает класс .slick-center слайду в центре
    centerPadding: '8em', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  });
};

// Инициализация слайдеров
function slidersResize() {
  if (window.matchMedia("(max-width: 769px)").matches) {
    $('.slick-initialized').slick('unslick');
    $('.slider-zone').each(function() {
      sliderInitMobile($(this));
    });
    sliderInitSelectzoneMobile($('#select-zone-trigger'), $('.select-zone_content'));
    sliderInitAdvantages($('.slider-adventages'));
    sliderInitSet($('.set_row'));
    sliderInitWorkers($('.slider-workers'));
    sliderInitPortfolioMobile($('.slider-portfolio'), $('.slider-portfolio-for'));
    sliderInitCommentsMobile($('.slider-comments'));
    sliderInitInsta($('.insta_row'));
  }
  else {
    $('.slick-initialized').slick('unslick');
    $('.slider-zone').each(function() {
      sliderInit($(this));
    });
    sliderInitWorkers($('.slider-workers'));
    sliderInitPortfolio($('.slider-portfolio'), $('.slider-portfolio-for'));
    sliderInitComments($('.slider-comments'));
  }
};
slidersResize();