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
	// libs-settings/wow_js_settings.js
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
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

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
	// $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });

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

	// Аккордеон
	// $('.accordeon_trigger').click(function() {
	// 	var trigger = $(this),
	// 			allTrigger = trigger.parent().parent().find('.accordeon_trigger'),
	// 			content = trigger.siblings('.accordeon_content'),
	// 			allContent = trigger.parent().parent().find('.accordeon_content'),
	// 			time = 300;
	// 	if (!content.hasClass('open')) {
	// 		allContent.stop().slideUp(time).removeClass('open');
	// 		content.stop().slideDown(time).addClass('open');
	// 		allTrigger.removeClass('active');
	// 		trigger.addClass('active');
	// 	}
	// 	else {
	// 		content.stop().slideUp(time).removeClass('open');
	// 		trigger.removeClass('active');
	// 	}
	// });

	// Модальное окно
	// $('.modal-trigger').on('click', function() {
	// 	var data = $(this).data('modal'),
	// 			modalOver = $('.modal_over'),
	// 			modal = $('#modal-' + data);
	// 	modal.toggleClass('open')
	// 	.next('.modal_over').toggleClass('open');
	// 	$('.modal_close').on('click', function() {
	// 		modal.removeClass('open'),
	// 		modalOver.removeClass('open');
	// 	});
	// 	modalOver.on('click', function() {
	// 		modal.removeClass('open');
	// 		modalOver.removeClass('open');
	// 	});
	// });

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



	// Слежение за изменением размера окна браузера
	$(window).resize(function() {
		fontResize(); // Резиновый сайт
		// screenHeight(); // Блок с высотой окна браузера
		// tooltipDisable(); // Отключение всплывающей подсказки
		// countNumber(); // Анимация увеличения числа
	});

	// TweenMax.min.js
	// data - animate - wrap - обертка с плавающими блоками
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
	
});