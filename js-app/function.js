/*!
 *
 * Ivan Eremeev - 2019
 * Skype: ivan.eremeev_1
 * Telegram: https://t.me/IvanMessage
 * Email: ivan.frontcoder@gmail.com
 *
 */

$(document).ready(function () {

	// libs-settings/fancybox_settings.js
	// libs-settings/mmenu_settings.js
	// @prepros-prepend libs-settings/slick_settings.js
	// @prepros-prepend libs-settings/wow_js_settings.js
	// libs-settings/fullpage_settings.js

	// Брэйкпоинты js
	var	mediaXl = 1366,
			mediaLg = 1200,
			mediaMd = 1024,
			mediaSm = 768,
			mediaXs = 576;
			

	// Отмена перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	$('.menu_btn').click(function () {
		var menu = $(this).closest('#menu');
		var over = $(this).siblings('.menu_over');
		var btn = $(this);
		menu.toggleClass('open');
		btn.toggleClass('is-active');
		over.click(function() {
			menu.removeClass('open');
			btn.removeClass('is-active');
		});
		menu.find('a').click(function() {
			menu.removeClass('open');
			btn.removeClass('is-active');
		});
	});
	
	// Блок с высотой окна браузера
	// function screenHeight() {
	//     $('.full__height').css({
	//         minHeight: $(window).height() + 'px'
	//     });
	// };
	// screenHeight();

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	$('#scroll a[href^="#"]').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
		}
		return false;
	});

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
	// var HeaderTop = $('#header').offset().top;
	// $(window).scroll(function(){
	// 	if( $(window).scrollTop() > HeaderTop ) {
	// 		$('#header').addClass('stiky');
	// 	} else {
	// 		$('#header').removeClass('stiky');
	// 	}
	// });

	// Inputmask.js // Маска для поля ввода телефона
	$('[name=tel]').inputmask("+7(999)999-99-99",{ showMaskOnHover: false });

	// Изменяет размер шрифта у тэга body взависимости от размера экрана (для резиновых страниц)(размеры должны быть в rem)
	function fontResize() {
		var windowWidth = $(window).width();
			if (windowWidth >= mediaSm) {
				var fontSize = windowWidth/19.05;
			} else if (windowWidth < mediaSm) {
				// Без резины на мобилке
				// var fontSize = 60;
				// С резиной на мобилке
				var fontSize = windowWidth/4.8;
		}
		$('body').css('fontSize', fontSize + '%');
	}
	fontResize();

	// Табы
	$('.tabs_trigger').find('li').click(function() {
		// sliderInit('.slider-zone');
		var trigger = $(this),
				allTrigger = trigger.siblings(),
				content = trigger.parent().siblings('.tabs_content').find('.tabs_block'),
				index = trigger.index();
		allTrigger.removeClass('active');
		trigger.addClass('active');
		content.addClass('hide');
		content.eq(index).removeClass('hide');
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

	// Выбор зон на лице
	$('.slider-zone_item').click(function() {
		var $this = $(this),
				data = $this.data('zone'),
				zoneImg = $('.zone-face_img');
		if (data == 'all') {
			zoneImg.addClass('active');
		}
		else {
			zoneImg.removeClass('active');
			$('.zone-face_img--' + data).addClass('active');
		}
	});

	// Секция "Галерея"
	var mySwiper5 = new Swiper('#swiper5',{
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    nextButton: '.next5',
    prevButton: '.prev5',
    pagination: '.sp5',
    paginationClickable: true,
    effect: 'coverflow',
    loopAdditionalSlides: 15,
    coverflow: {
      rotate: 0,
      stretch: 950,
      modifier: 1,
      slideShadows : false
    }
	});

	var gres = true;
    $(".galley_tabs a").click(function () {
      if($(this).hasClass('active')){}
      else {
        target = $(this).attr('data-target');

        $(".galley_tabs a").removeClass('active');
        $(this).addClass('active');
        $('.gallery_slider').css('display','none');
        $('#'+target).fadeIn(200);
        if(gres == true){
          gres = false;
          var mySwiper7 = new Swiper('#swiper7',{
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            nextButton: '.next7',
            prevButton: '.prev7',
            pagination: '.sp7',
            paginationClickable: true,
            effect: 'coverflow',
            loopAdditionalSlides: 15,
            coverflow: {
                rotate: 0,
                stretch: 950,
                modifier: 1,
                slideShadows : false
            }
        });
      }
    }
  });

  $('.gallery_slide').each(function() {
  	var data = $(this).data('style');
  		$(this).attr('style',data);
  });

  // Было стало в "Наши работы"
  // $('.slider-portfolio_toggle').click(function() {
  // 	var $this = $(this),
  // 			slideBlock = $this.parent('.slider-portfolio_slide-block'),
  // 			imgPrev = slideBlock.find('img[data-time="prev"]'),
  // 			imgNext = slideBlock.find('img[data-time="next"]'),
  // 			input = slideBlock.find('input[type=checkbox]'),
  // 			inputCheck = input.prop('checked'),
  // 			time = 300;
  // 			if (!inputCheck) {
  // 				imgPrev.fadeOut(time);
  // 				imgNext.fadeIn(time);
  // 			}
  // 			else {
  // 				imgPrev.fadeIn(time);
  // 				imgNext.fadeOut(time);
  // 			}
  // 			console.log(slideBlock, $this, imgPrev, imgNext, input)
  // });

	// Аккордеон
	$('.accordeon_trigger').click(function() {
		var trigger = $(this),
				allTrigger = trigger.parent().parent().find('.accordeon_trigger'),
				content = trigger.siblings('.accordeon_content'),
				allContent = trigger.parent().parent().find('.accordeon_content'),
				time = 300;
		trigger.toggleClass('active');
		content.toggleClass('open');
	});

	// Модальное окно
	$('.modal-trigger').on('click', function() {
		var modalId = $(this).data('modal');
		modalOpen(modalId);
		$('#modal-'+modalId).find('[name=subject]').val($(this).data('title'));
		console.log($(this).data('title'))
	});

	// Стилизация полосы прокрутки
	// $('#scrollbar1').tinyscrollbar({
	// 	axis: "y", // Направление оси
	// 	// trackSize: 100, // Высота дорожки
	// 	thumbSize: 50, // Высота тамба
	// 	// thumbSizeMin: 100, // Минимальная высота тамба
	// 	wheel: true, // Отключить прокрутку
	// 	wheelSpeed: 10, // Прокручивать пикселей
	// });

	// $('#scrollbar2').tinyscrollbar({
	// 	axis: "y", // Направление оси
	// 	// trackSize: 100, // Высота дорожки
	// 	thumbSize: 50, // Высота тамба
	// 	// thumbSizeMin: 100, // Минимальная высота тамба
	// 	wheel: true, // Отключить прокрутку
	// 	wheelSpeed: 10, // Прокручивать пикселей
	// });

	// matchHeight // Задание елементам одинаковой высоты
	// $('.item').matchHeight();

	// Autosize Изменение высоты текстового поля при добавлении контента
	// autosize($('textarea'));

	// Текст печатная машинка
	// function textPrint() {
	// 	var textPrint = $('#text-print'),
	// 		a = textPrint.text(),
	// 		j = 0,
	// 		c = a.length,
	// 		time = 50;
	// 	textPrint.text('');
	// 	setInterval(function () {
	// 		if (j<c) {
	// 			textPrint.text(textPrint.text() + a[j]);
	// 			j++;
	// 		}
	// 	},time);
	// };
	// textPrint();

	// Анимация увеличения числа
	// var blockStatus = true;
	// function countNumber () {
	// 	var target_block = $(".count-number");
	// 	var scrollEvent = ($(window).scrollTop() > (target_block.position().top - 400));
	// 	if(scrollEvent && blockStatus) {		
	// 		blockStatus = false;
	// 		$({numberValue: 0}).animate({numberValue: 2580}, {
	// 			duration: 5000,
	// 			easing: "swing",	
	// 			step: function(val) {
	// 				$(".count-number").html(Math.ceil(val));
	// 			}	
	// 		});
	// 	}
	// };
	// countNumber();

	// Tooltipster Всплывающая подсказка
	// var tooltip = $('.tooltip').tooltipster({
	// 	theme : 'tooltipster-noir', // Тема
	// 	delayTouch: 0, // Задержка при наведении
 //   	trigger: 'click', // Появление при наведении, клике
 //   	maxWidth: 200, // Максимальная ширина
 //   	contentAsHTML: true, // HTML контент
 //   	interactive: true,
 //   	side:  ['right', 'top', 'bottom', 'left'], // Появление по сторонам по порядку
 //   	zIndex: 97, // z-index
	// });

	// // Отключение подсказки на мобильных
	// function tooltipDisable() {
	// 	if (window.matchMedia('(max-width: 720px)').matches) {
	// 		tooltip.tooltipster('disable');
	// 	}
	// 	else if (window.matchMedia('(min-width: 721px)').matches) {
	// 		tooltip.tooltipster('enable');
	// 	}
	// };

	// tooltipDisable();

	// Делает активным пункт меню при скролле до блока
	// function menuItemActive() {
	// 	var lastId,
 //    topMenu = $("#menu_list"),
 //    topMenuHeight = topMenu.outerHeight(),
 //    menuItems = topMenu.find("a"),
 //    scrollItems = menuItems.map(function(){
 //      var item = $($(this).attr("href"));
 //      if (item.length) { return item; }
 //    });
	// 	menuItems.click(function(e){
	// 	  var href = $(this).attr("href"),
	// 	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	// 	  $('html, body').stop().animate({ 
	// 	      scrollTop: offsetTop
	// 	  }, 300);
	// 	  e.preventDefault();
	// 	});
	// 	$(window).scroll(function(){
	// 	  var fromTop = $(this).scrollTop()+topMenuHeight;
	// 	  var cur = scrollItems.map(function(){
	// 	    if ($(this).offset().top < fromTop)
	// 	      return this;
	// 	  });
	// 	  cur = cur[cur.length-1];
	// 	  var id = cur && cur.length ? cur[0].id : "";
	// 	  if (lastId !== id) {
	// 	      lastId = id;
	// 	      menuItems
	// 	        .parent().removeClass("active")
	// 	        .end().filter("[href='#"+id+"']").parent().addClass("active");
	// 	  }                   
	// 	});
	// };
	// menuItemActive();

	// Изменение textarea при получении фокуса
	// $('textarea')
	// .focus(function() { 
	// 	$(this).addClass('class_name');
	// })
	// .blur(function() { 
	// 	if ($(this)[0].value == '') { 
	// 		$(this).removeClass('class_name');
	// 	} 
	// });

	// Изменение поля ввода при клике
	// $('.block_input').click(function() {
	// 	var div = $(this);
	// 	div.addClass('active'),
	// 	input = div.find('input');
	// 	$(document).mouseup(function (e){
	// 		if (!div.is(e.target)
	// 		    && div.has(e.target).length === 0 && input.val() == '') {
	// 			div.removeClass('active');
	// 		}
	// 	});
	// });

	// Управление видео
	// var playing = false;
	// $('.video').click(function() {
	// 	var video = $(this).find('video'),
	// 			img = $(this).find('img');
	// 	img.css({
	// 		display: 'none'});
	// 	if (playing == false) {
	// 		video.trigger('play');
	// 		playing = true;
	// 	}
	// 	else {
	// 		video.trigger('pause');
	// 		playing = false;
	// 	}
	// });

	// TweenMax.min.js
	// data-animate-wrap - обертка с плавающими блоками
	// data-animate-x - блок движется по оси Х
	// data-animate-xy - блок движется по обеим осям
	function parallaxMove() {

    var mousePos;

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }

    function getMousePosition() {
        var pos = mousePos;
        if (!pos) {
            // We haven't seen any movement yet
        } else {
            // Use pos.x and pos.y
        }
    }

    $('[data-animate-wrap]').each(function() {
        var container = $(this),
            elR = container.find('[data-animate-r]'),
            elX = container.find('[data-animate-x]'),
            elXY = container.find('[data-animate-xy]');

        var offset = $(this).offset();

        $(this).on('mousemove', function(e) {


            var sxPos = e.pageX / container.width() * 100 - 100;
            var syPos = (e.pageY - offset.top) / container.height() * 100 - 100;

            elX.each(function() {
                TweenMax.set([elX], {
                    transformStyle: "preserve-3d"
                });
                xSpeed = elX.attr('data-animate-x');
                TweenMax.to($(this), 2, {
                    rotationY: xSpeed * sxPos,
                    rotationX: 0 * syPos,
                    transformPerspective: 500,
                    transformOrigin: "center center -400",
                    ease: Expo.easeOut,
                });
            });

            elR.each(function() {
                TweenMax.set([elX], {
                    transformStyle: "preserve-3d"
                });
                xSpeed = elR.attr('data-animate-r');
                // console.log(mousePos.x);
                if (mousePos) {
                    mPos = mousePos.x - ($(window).width() / 2);
                } else {
                    mPos = 0;
                }
                TweenMax.to($(this), 2, {
                    rotationY: mPos / xSpeed,
                    rotationX: 0 * syPos,
                    transformPerspective: 500,
                    transformOrigin: "center center -400",
                    ease: Expo.easeOut,
                });
            });

            elXY.each(function() {
                xySpeed = $(this).attr('data-animate-xy');
                smooth = 5;
                TweenMax.to($(this), smooth, {
                    transformPerspective: 500,
                    css: {
                        transform: 'translateX(' + (e.pageX / container.width() * xySpeed - xySpeed) + 'em) translateY(' + ((e.pageY - offset.top) / container.height() * xySpeed - xySpeed) + 'em)'
                    },
                    ease: Expo.easeOut,
                });
            });

        });
    });
	};
	parallaxMove();

	// Карта
	// ymaps.ready(init);
	// function init(){ 
	// 	// Создание карты.    
	// 	var myMap = new ymaps.Map("map", {
	// 	// Координаты центра карты.
	// 	// Порядок по умолчанию: «широта, долгота».
	// 	// Чтобы не определять координаты центра карты вручную,
	// 	// воспользуйтесь инструментом Определение координат.
	// 		center: [55.755307068975505,37.65578650000002],
	// 	// Уровень масштабирования. Допустимые значения:
	// 	// от 0 (весь мир) до 19.
	// 	zoom: 17,
	// 	controls: ['typeSelector']
	// 	}),
	// 	MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
 //        '<div style="color: #2e2e2e; font-size: 1em; font-weight: bold; background: #fff; width: 8em; border-radius: 0.2em">$[properties.iconContent]<span style="display: block; color: #767676;">До 21:00</span></div>'
 //    ),

 //    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
 //        iconContent: 'Imperiumclinic'
 //    }, {
 //        // Опции.
 //        // Необходимо указать данный тип макета.
 //        iconLayout: 'default#imageWithContent',
 //        // Своё изображение иконки метки.
 //        iconImageHref: 'img/point-map.png',
 //        // Размеры метки.
 //        iconImageSize: [45, 60],
 //        // Смещение левого верхнего угла иконки относительно
 //        // её "ножки" (точки привязки).
 //        iconImageOffset: [-25, -70],
 //        // Смещение слоя с содержимым относительно слоя с картинкой.
 //        iconContentOffset: [50, 10],
 //        // Макет содержимого.
 //        iconContentLayout: MyIconContentLayout
 //    });
 //    myMap.geoObjects
	//     .add(myPlacemark);
	// };

	// formSubmit();

	// Слежение за изменением размера окна браузера
	$(window).resize(function() {
		fontResize(); // Резиновый сайт
		// screenHeight(); // Блок с высотой окна браузера
		// tooltipDisable(); // Отключение всплывающей подсказки
		// countNumber(); // Анимация увеличения числа
		slidersResize();
	});
	
});

// Простая проверка форм на заполненность и отправка аяксом
	// function formSubmit() {
 //    $("[type=submit]").on('click', function (e){ 
 //      e.preventDefault();
 //      // Заводим переменные
 //      // Ищем родительскую фору для того чтобы манипулировать элементами находящимися только внутри неё
 //      var form = $(this).closest('form');
 //      // Запоминаем путь к php обработчику формы
 //      var url = form.attr('action');
 //      // Собираем все данные с полей формы для отправки
 //      var form_data = form.serialize();
 //      // Выбираем все обязательные поля по атрибуту required
 //      var field = form.find('[required]');

 //      // Задаем количество пустых полей по умолчанию
 //      var empty = 0;

 //      // Перебираем каждое обязательное поле
 //      field.each(function() {
 //          // Если поля пустые
 //          if ($(this).val() == "") {
 //              // Добавляем класс invalid
 //              $(this).addClass('invalid');
 //              // Увеличиваем счеткик пустых полей
 //              empty++;
 //          // Если поля не пустые
 //          } else {
 //              // Убираем класс invalid
 //              $(this).removeClass('invalid');
 //              // Добавляем класс valid если необходимо для стилизации
 //              $(this).addClass('valid');
 //          }  
 //      });

 //      // Можно проверить пересчет пустых полей в консоли
 //      // console.log(empty);
 //      console.log(form_data);

 //      // Если пустых полей больше 0
 //      if (empty > 0) {
 //      	$('.modal_message').text('Не заполнены поля');
 //      	setTimeout(function() {
 //      		$('.modal_message').text('');
 //      	}, 5000);
 //          // Останавливаем работу скрипта запрещая отправку формы
 //          return false;
 //      // Если пустых полей нет
 //      } else {        
 //          // Запускаем отправку формы без перезагрузки страницы
 //          $.ajax({
 //              // Используем переменные в параметрах для отправки формы
 //              url: url,
 //              type: "POST",
 //              dataType: "html",
 //              data: form_data,
 //              // При успешной отправке
 //              // В аргумент response(произвольное название) можно записать и видеть результат ответа сервера
 //              success: function (response) {
 //                  console.log(response);
 //                  form.closest('.modal').find('.modal_close').trigger('click');
 //                  modalOpen('successModal');
 //                  // Дальше несколько вариантов
 //                  // Открываем окно с сообщением
 //                  // $('#success').modal('show');
 //                  // Открываем какую то страницу. как правило так называемую "страницу спасибо"
 //                  // document.location.href = "success.html";
 //              },
 //              // При ошибке отправки
 //              error: function (response) {
 //                  console.log(response);
 //                  // Тоже что нибудь делаем
 //                  // $('#success').modal('show');
 //                  // Выводим в заготовленный блок какое то сообщение
 //                  // $('#rezult').text('Проверте корректность заполнения полей формы.');
 //              }
 //          });
 //      }

 //  });
 //  // Убираем класс invalid при снятии фокуса если поле не пустое
 //  $('[required]').on('blur', function() {
 //      if ($(this).val() != '') {
 //          $(this).removeClass('invalid');
 //      }
 //  });
 //  // Если есть чекбокс политикой можно отключать кнопку при снятом чекбоксе добавляя к кнопке атрибут disabled 
 //  $('.form__privacy input').on('change', function(event) {
 //      event.preventDefault();
 //      var btn = $(this).closest('.form').find('.btn');
 //      if ($(this).prop('checked')) {
 //          btn.removeAttr('disabled');
 //          // console.log('checked');
 //      } else {
 //          btn.attr('disabled', true);
 //      }
 //  });
	// };

function modalOpen(selectorId) {
	var modalOver = $('.modal_over'),
			modal = $('#modal-' + selectorId);
	modal.toggleClass('open')
	.next('.modal_over').toggleClass('open');
	$('.modal_close').on('click', function() {
		modal.removeClass('open'),
		modalOver.removeClass('open');
	});
	modalOver.on('click', function() {
		modal.removeClass('open');
		modalOver.removeClass('open');
	});
}