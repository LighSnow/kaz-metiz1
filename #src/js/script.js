$(document).ready(function () {


  $('.reviews__slider > .slick-next.slick-arrow').addClass('active');

  $('.reviews__slider > .slick-arrow').click(function () {
    $(this).addClass('active');
    $('.reviews__slider > .slick-arrow').not($(this)).removeClass('active');
  });


  // Burger
  //hide nav open btn when the nav is open, adding/removing open classes to nav and content
  var navOpenBtn = document.querySelector('.menu__icon');
  var nav = document.querySelector('.menu__body');
  // var pageContent = document.querySelector('.page__content');
  var page = document.querySelector('.content');
  var bodyLock = document.querySelector('body');

  //open nav
  navOpenBtn.addEventListener('click', function () {
    navOpenBtn.classList.toggle('js-hidden');
    nav.classList.toggle('js-opened');
    page.classList.toggle('js-opened');
    bodyLock.classList.toggle('lock');

    if (!(navOpenBtn.classList.contains('js-hidden'))) {
      subMenu.classList.remove('open');
      thisArrow.classList.remove('active');
      mobileLink.classList.remove('active');
      bodyLock.classList.remove('lock');
    }
    // pageContent.classList.add('js-opened');
  });

  //close nav
  // navCloseBtn.addEventListener('click', function () {
  //   navOpenBtn.classList.remove('js-hidden');

  //   nav.classList.remove('js-opened');
  //   page.classList.remove('js-opened');

  //   //   // pageContent.classList.remove('js-opened');
  // });

  //closing navigation if click outside it
  page.addEventListener('click', function (e) {

    var evTarget = e.target;

    if ((evTarget !== nav) && (nav.classList.contains('js-opened')) && (evTarget !== navOpenBtn) && (evTarget.parentNode !== navOpenBtn)) {

      navOpenBtn.classList.remove('js-hidden');

      nav.classList.remove('js-opened');
      page.classList.remove('js-opened');

      subMenu.classList.remove('open');
      thisArrow.classList.remove('active');
      mobileLink.classList.remove('active');
      bodyLock.classList.remove('lock');

      // pageContent.classList.remove('js-opened');
    }

  });

  // $(document).on('click touchstart', function (e) {
  //   if (!$(e.target).is(nav)) {
  //     $(nav).removeClass('active');
  //   };
  // });
  // Burger
  // =============================



  var slickOpts = {
    slidesToShow: 1,
    slidesToScroll: 1,
    //centerMode: true,
    easing: 'swing', // see http://api.jquery.com/animate/
    dots: true,
    arrows: false,
    fade: true,
    speed: 700,
    customPaging: function (slick, index) {
      return '<button>' + ('0') + (index + 1) + '</button>';
    }
  };
  // Init slick carousel
  $('#slider').slick(slickOpts);



  // Slick Slider
  if ($('.scrap-metal__slider').length > 0) {
    $('.scrap-metal__slider').slick({
      arrows: true,
      dots: false,
      // responsive: [{
      //     breakpoint: 768,
      //     settings: {
      //       appendArrows: $('.scrap-metal__image')
      //     }
      //   },
      // ]
    });
  }

  // Slick Slider
  // =============================


  //Plus minus counter

  $('.count-btn').click(function (e) {
    var button_classes, value = +$('.counter').val();
    button_classes = $(e.currentTarget).prop('class');
    if (button_classes.indexOf('up_count') !== -1) {
      value = (value) + 1;
    } else {
      value = (value) - 1;
    }
    value = value < 0 ? 0 : value;
    $('.counter').val(value);
  });
  $('.counter').click(function () {
    $(this).focus().select();
  });



  // Scroll UP

  // var btn = $("#button");

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 300) {
  //     btn.addClass("show");
  //   } else {
  //     btn.removeClass("show");
  //   }
  // });

  // btn.on("click", function (e) {
  //   e.preventDefault();
  //   $("html, body").animate({
  //       scrollTop: 0,
  //     },
  //     "300"
  //   );
  // });

  //Scroll Up
  // =============================



  // Accordion Menu


  $(document).on("click", ".accordion__header, [data-accordion-navigation] a", function (e) {
    e.preventDefault();
    var $this = $(this),
      windowScroll = $(window).scrollTop(),
      $headerMain = $(".header.fixed .header__main");

    if ($this.hasClass("accordion__header")) {
      var $currentAccordion = $this.closest(".accordion");
    } else {
      var $currentAccordion = $($this.attr("href"));
    }

    var $accordionOthers = $currentAccordion.siblings(".accordion");

    $accordionOthers
      .removeClass("accordion--active")
      .find(".accordion__content:visible").slideUp(250);

    $currentAccordion.toggleClass("accordion--active");
    $currentAccordion.find(".accordion__content").slideToggle(250);

    setTimeout(function () {
      var headerMainHeight = 0;
      if ($headerMain.length) {
        headerMainHeight = $headerMain.innerHeight();
      }
      if (windowScroll > $currentAccordion.offset().top) {

        $("html, body").animate({
          scrollTop: $currentAccordion.offset().top - headerMainHeight - 30
        }, 600);
      } else {
        if (!$this.hasClass("accordion__header")) {
          //
          $("html, body").animate({
            scrollTop: $currentAccordion.offset().top - headerMainHeight - 30
          }, 600);
        }

      }
    }, 300);
  });
  // Accordion Menu
  // ============================




  // Init fancyBox
  $('[data-fancybox="reviews-images"]').fancybox({
    thumbs: {
      showOnStart: true
    },
    hash: true
  });

  // Init Slick
  if ($('.reviews__slider').length > 0) {
    $(".reviews__slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true,
      responsive: [{
          breakpoint: 1110,
          settings: {
            arrows: true,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 997,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }



  if ($('.partners__slider').length > 0) {
    $(".partners__slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true,
      responsive: [{
          breakpoint: 1110,
          settings: {
            arrows: true,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 997,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  if ($('.slider-for').length > 0) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      responsive: [{
        breakpoint: 881,
        settings: {
          arrows: true,
          fade: false,
        }
      }, ]
    });
  }
  if ($('.slider-nav').length > 0) {
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      // variableWidth: true,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 1366,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      }, ]
    });
  }


  // // Open thumbs view straight away for demo purposes
  // $.fancybox.defaults.thumbs.autoStart = true;

  // // ============================
  // // Init 1st slider and fancybox
  // // ============================

  // // fancybox
  // $().fancybox({
  //   selector : '.reviews__slider .slick-slide:not(.slick-cloned)',
  //   backFocus : false
  // });

  // // Slick
  // $(".reviews__slider").slick({
  //   slidesToShow   : 5,
  //   infinite : true,
  //   dots     : false,
  //   arrows   : true
  // });


  // // ============================================
  // // Attach custom click event on cloned elements, 
  // // trigger click event on corresponding link
  // // ============================================
  // $(document).on('click', '.slick-cloned', function(e) {
  //   var $slides = $(this)
  //   .parent()
  //   .children('.slick-slide:not(.slick-cloned)');

  //   $slides
  //     .eq( ( $(this).attr("data-slick-index") || 0) % $slides.length )
  //     .trigger("click.fb-start", { $trigger: $(this) });

  //   return false;
  // });




  //Кнопка Развернуть
  $("#toggle").click(function () {
    var elem = $("#toggle").text();
    if (elem == "Развернуть") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Спрятать");
      $("#text").toggleClass('active');
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Развернуть");
      $("#text").removeClass('active');
    }
  });


  // // 
  // // =================================




  //Динамический адаптив

  (function () {
    let originalPositions = [];
    let daElements = document.querySelectorAll('[data-da]');
    let daElementsArray = [];
    let daMatchMedia = [];
    //Заполняем массивы
    if (daElements.length > 0) {
      let number = 0;
      for (let index = 0; index < daElements.length; index++) {
        const daElement = daElements[index];
        const daMove = daElement.getAttribute('data-da');
        if (daMove != '') {
          const daArray = daMove.split(',');
          const daPlace = daArray[1] ? daArray[1].trim() : 'last';
          const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
          const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
          const daDestination = document.querySelector('.' + daArray[0].trim())
          if (daArray.length > 0 && daDestination) {
            daElement.setAttribute('data-da-index', number);
            //Заполняем массив первоначальных позиций
            originalPositions[number] = {
              "parent": daElement.parentNode,
              "index": indexInParent(daElement)
            };
            //Заполняем массив элементов 
            daElementsArray[number] = {
              "element": daElement,
              "destination": document.querySelector('.' + daArray[0].trim()),
              "place": daPlace,
              "breakpoint": daBreakpoint,
              "type": daType
            }
            number++;
          }
        }
      }
      dynamicAdaptSort(daElementsArray);

      //Создаем события в точке брейкпоинта
      for (let index = 0; index < daElementsArray.length; index++) {
        const el = daElementsArray[index];
        const daBreakpoint = el.breakpoint;
        const daType = el.type;

        daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
        daMatchMedia[index].addListener(dynamicAdapt);
      }
    }
    //Основная функция
    function dynamicAdapt(e) {
      for (let index = 0; index < daElementsArray.length; index++) {
        const el = daElementsArray[index];
        const daElement = el.element;
        const daDestination = el.destination;
        const daPlace = el.place;
        const daBreakpoint = el.breakpoint;
        const daClassname = "_dynamic_adapt_" + daBreakpoint;

        if (daMatchMedia[index].matches) {
          //Перебрасываем элементы
          if (!daElement.classList.contains(daClassname)) {
            let actualIndex = indexOfElements(daDestination)[daPlace];
            if (daPlace === 'first') {
              actualIndex = indexOfElements(daDestination)[0];
            } else if (daPlace === 'last') {
              actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
            }
            daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
            daElement.classList.add(daClassname);
          }
        } else {
          //Возвращаем на место
          if (daElement.classList.contains(daClassname)) {
            dynamicAdaptBack(daElement);
            daElement.classList.remove(daClassname);
          }
        }
      }
      customAdapt();
    }

    //Вызов основной функции
    dynamicAdapt();

    //Функция возврата на место
    function dynamicAdaptBack(el) {
      const daIndex = el.getAttribute('data-da-index');
      const originalPlace = originalPositions[daIndex];
      const parentPlace = originalPlace['parent'];
      const indexPlace = originalPlace['index'];
      const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
      parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
    }
    //Функция получения индекса внутри родителя
    function indexInParent(el) {
      var children = Array.prototype.slice.call(el.parentNode.children);
      return children.indexOf(el);
    }
    //Функция получения массива индексов элементов внутри родителя 
    function indexOfElements(parent, back) {
      const children = parent.children;
      const childrenArray = [];
      for (let i = 0; i < children.length; i++) {
        const childrenElement = children[i];
        if (back) {
          childrenArray.push(i);
        } else {
          //Исключая перенесенный элемент
          if (childrenElement.getAttribute('data-da') == null) {
            childrenArray.push(i);
          }
        }
      }
      return childrenArray;
    }
    //Сортировка объекта
    function dynamicAdaptSort(arr) {
      arr.sort(function (a, b) {
        if (a.breakpoint > b.breakpoint) {
          return -1
        } else {
          return 1
        }
      });
      arr.sort(function (a, b) {
        if (a.place > b.place) {
          return 1
        } else {
          return -1
        }
      });
    }
    //Дополнительные сценарии адаптации
    function customAdapt() {
      //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
  }());

  // // ================================






  // Tabs
  $('.history__tabs-wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.history__tabs-wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.history__tabs-wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  // //====================================




  //About-company-slider
  var $slider = $('.history__gallery-wrapper');


  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + '/' + slidesCount)
    };

    $slider.on('init', function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
  }

  var $sliderCharity = $('.history__charity-slider');

  if ($sliderCharity.length) {
    var currentSlideCharity;
    var slidesCountCharity;
    var sliderCounterCharity = document.createElement('div');
    sliderCounterCharity.classList.add('charity-slider__counter');

    var updateSliderCounterCharity = function (slick, currentIndex) {
      currentSlideCharity = slick.slickCurrentSlide() + 1;
      slidesCountCharity = slick.slideCount;
      $(sliderCounterCharity).text(currentSlideCharity + '/' + slidesCountCharity)
    };

    $sliderCharity.on('init', function (event, slick) {
      $sliderCharity.append(sliderCounterCharity);
      updateSliderCounterCharity(slick);
    });

    $sliderCharity.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounterCharity(slick, currentSlide);
    });

    $sliderCharity.slick();
  }


  // //==========================================


  $.validator.addMethod("regexpName", function (value, element) {
    return /^[A-Za-zА-Яа-я]+/.test(value);
  }, "Это поле должно содержать Имя и Фамилию!");

  $.validator.addMethod("regexpLang", function (value, element) {
    return /^[А-Яа-я]+$/.test(value);
  }, "Это поле должно быть на русском языке!");

  $.validator.addMethod("regexpLogin", function (value, element) {
    return /^[A-Za-z0-9]+$/.test(value);
  }, "Логин должен состоять из латинских букв и цифр!");

  $.validator.addMethod("regexpPassword", function (value, element) {
    return /[A-Za-zА-Яа-я]+/.test(value);
  }, "Пароль должен содержать минимум 6 символов и 1 букву!");
  $.validator.addMethod("regexpEmail", function (value, element) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
  }, "Email должен содержать минимум 6 символов и 1 букву!");


  //Validation Form

  $("#callback__form").validate({
    rules: {
      name: {
        regexpName: true,
        required: true,
        minlength: 3,
      },
      phone: {
        required: true,
        minlength: 18,
      }
    }
  });
  $("#work__form").validate({
    rules: {
      name: {
        regexpName: true,
        required: true,
        minlength: 3,
      },
      pos: {
        regexpName: true,
        required: true,
        minlength: 3,
      },
      email: {
        regexpEmail: true,
        required: true,
        email: true
      },
      address: {
        required: true,
        minlength: 3,
      },
      phone: {
        required: true,
        minlength: 18,
      }
    }
  });
  $("#form__offers").validate({
    rules: {
      name: {
        regexpName: true,
        required: true,
        minlength: 3,
      },
      pos: {
        regexpName: true,
        required: true,
        minlength: 3,
      },
      email: {
        regexpEmail: true,
        required: true,
        email: true
      },
      address: {
        required: true,
        minlength: 3,
      },
      phone: {
        required: true,
        minlength: 18,
      },
      org: {
        required: true,
        minlength: 3,
      }
    }
  });
  $("#order__form").validate({
    rules: {
      name: {
        regexpName: true,
        required: true,
        minlength: 3,
      },
      email: {
        regexpEmail: true,
        required: true,
        email: true
      },
      address: {
        required: true,
        minlength: 3,
      },
      phone: {
        required: true,
        minlength: 18,
      }
    }
  });


  /* инициализация маски телефона (плагин maskedinput) */
  $('.mask-phone').mask('+0 (000) 000-00-00');


  // Мобильное меню 2-го уровня

  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  var body = document.querySelector('body');

  if (isMobile.any()) {
    body.classList.add('touch');
    var arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
      var thisLink = arrow[i].previousElementSibling;
      var subMenu = arrow[i].nextElementSibling;
      var thisArrow = arrow[i];
      var mobileLink = document.querySelector('.menu__mobile-link');
      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function () {
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
        mobileLink.classList.toggle('active')
      });
    }
  } else {
    body.classList.add('mouse');
  }



  // Отображение имени добавляемого файла
  Array.prototype.forEach.call(
    document.querySelectorAll(".file-upload__button"),
    function (button) {
      const hiddenInput = button.parentElement.querySelector(
        ".file-upload__input"
      );
      const label = button.parentElement.querySelector(".file-upload__label");
      const defaultLabelText = "Файл не выбран";

      // Set default text for label
      label.textContent = defaultLabelText;
      label.title = defaultLabelText;

      button.addEventListener("click", function () {
        hiddenInput.click();
      });

      hiddenInput.addEventListener("change", function () {
        const filenameList = Array.prototype.map.call(hiddenInput.files, function (
          file
        ) {
          return file.name;
        });

        label.textContent = filenameList.join(", ") || defaultLabelText;
        label.title = label.textContent;
      });
    }
  );







  // var map;

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: {
  //       lat: -34.397,
  //       lng: 150.644
  //     },
  //     zoom: 8
  //   });
  // }

});