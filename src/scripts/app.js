var func = {
  "headerFixed": function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 1) {
        $(".header").addClass("header_sticky");
        $(".logo__img-fallback").attr("src", "assets/images/cvp-logo-fallback-blue.png")
      } else {
        $(".header").removeClass("header_sticky");
        $(".logo__img-fallback").attr("src", "assets/images/cvp-logo-fallback.png")
      }
    });
  },

  "slickMain": function () {
    //slider on 1st screen
    $(document).ready(function () {
      var time = 7;
      var $bar1,
        $slick,
        isPause,
        tick,
        percentTime;

      $slick = $('.slider-container');

      $slick.on("init", function (event, slick) {
        firstItem = $(".slider__item_1")
        $(firstItem).find(".slider__path1").addClass("path");
        setTimeout(function () {
          $(firstItem).find(".slider__path2").addClass("path2");
        }, 1000);
        setTimeout(function () {
          $(firstItem).find(".slider-bg-img").show();
          $(firstItem).find(".slider-bg-img").addClass("animated zoomIn");
        }, 2000);
      })
      $slick.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        fade: true,
        pauseOnFocus: false
      });
      $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $($(".slider__item")[currentSlide]).find(".slider__path1").removeClass("path")
        $($(".slider__item")[currentSlide]).find(".slider__path2").removeClass("path2")
        if ($("html").hasClass("svgforeignobject")) {
          $(".slider-bg-img").hide();
          $(".slider-bg-img").removeClass("animated zoomIn");
        }
      });
      $slick.on('afterChange', function (event, slick, currentSlide) {
        $($(".slider__item")[currentSlide]).find(".slider__path1").addClass("path")
        setTimeout(function () {
          $($(".slider__item")[currentSlide]).find(".slider__path2").addClass("path2")
        }, 1000);
        if ($("html").hasClass("svgforeignobject")) {
          setTimeout(function () {
            $(".slider-bg-img").show();
            $(".slider-bg-img").addClass("animated zoomIn");
          }, 2000);
        }
      });

      $bar1 = $('.slider__progress-bar-1 .slider__progress-bar-active');
      $bar2 = $('.slider__progress-bar-2 .slider__progress-bar-active');
      $bar3 = $('.slider__progress-bar-3 .slider__progress-bar-active');

      $('.slider-container').on({
        mouseenter: function () {
          isPause = true;
        },
        mouseleave: function () {
          isPause = false;
        }
      })

      function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
      }


      function interval() {
        if (isPause === false) {
          percentTime += 1 / (time + 0.1);
          if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 0) {
            $(".slider__progress-text-1").css("color", "#0060aa");
            $(".slider__progress-text-2").css("color", "#888e9c");
            $(".slider__progress-text-3").css("color", "#888e9c");
            $bar1.css({
              width: percentTime + "%"
            });
          } else if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 1) {
            $(".slider__progress-text-1").css("color", "#888e9c");
            $(".slider__progress-text-2").css("color", "#0060aa");
            $(".slider__progress-text-3").css("color", "#888e9c");
            $bar2.css({
              width: percentTime + "%"
            });
          } else if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 2) {
            $(".slider__progress-text-1").css("color", "#888e9c");
            $(".slider__progress-text-2").css("color", "#888e9c");
            $(".slider__progress-text-3").css("color", "#0060aa");
            $bar3.css({
              width: percentTime + "%"
            });
          }

          if (percentTime >= 100) {
            $slick.slick('slickNext');
            startProgressbar();
          }
        }
      }

      function resetProgressbar() {
        $bar1.css({
          width: 0 + '%'
        });
        $bar2.css({
          width: 0 + '%'
        });
        $bar3.css({
          width: 0 + '%'
        });
        clearTimeout(tick);
      }

      startProgressbar();

      $(".slider__progress-item").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $slick.slick("slickGoTo", indexItem)
        resetProgressbar()
        startProgressbar()
      })

    });
    //history slider

    $(document).ready(function () {
      $('.history-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: ".history-slider__arrow-right",
        prevArrow: ".history-slider__arrow-left",
        responsive: [{
            breakpoint: 1280
          },
          {
            breakpoint: 802,
            settings: {
              arrows: false
            }
          }
        ]
      });

      $(".history-slider__years").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.history-slider__list').slick("slickGoTo", indexItem)
        $(".history-slider__years").removeClass("history-slider__years-active")
        $(this).addClass("history-slider__years-active")
      })

      $('.history-slider__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".history-slider__years").removeClass("history-slider__years-active")
        $(".history-slider__years-" + (nextSlide + 1)).addClass("history-slider__years-active")
      });

      $(".history-slider__progress-item").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.history-slider__list').slick("slickGoTo", indexItem)
        $(".history-slider__progress-item").removeClass("history-slider__progress-item-active")
        $(this).addClass("history-slider__progress-item-active")
      })

      $('.history-slider__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".history-slider__progress-item").removeClass("history-slider__progress-item-active")
        $(".history-slider__progress-item-" + (nextSlide + 1)).addClass("history-slider__progress-item-active")
      });

    });
  },

  "slick": function () {
    //license slider
    $(document).ready(function () {
      $(".license__list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: ".license__arrow-left",
        nextArrow: ".license__arrow-right"
      })

      $(".license__progress-item").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.license__list').slick("slickGoTo", indexItem)
        $(".license__progress-item").removeClass("license__progress-item-active")
        $(this).addClass("license__progress-item-active")
        console.log(indexItem)
      })

      $('.license__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".license__progress-item").removeClass("license__progress-item-active")
        $(".license__progress-item-" + (nextSlide + 1)).addClass("license__progress-item-active")
      });

    });

    //steps slider
    $(document).ready(function () {
      /* $('.steps__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: ".steps__arrow-right",
        prevArrow: ".steps__arrow-left",
        responsive: [{
          breakpoint: 1280,
          settings: {
            centerMode: true,
            centerPadding: "0px"
          }
        }, {
          breakpoint: 802,
          settings: "unslick"
        }]
      }); */
      $slick_slider = $('.steps__list');
      settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: ".steps__arrow-right",
        prevArrow: ".steps__arrow-left",
        responsive: [{
          breakpoint: 1280,
          settings: {
            centerMode: true,
            centerPadding: "0px"
          }
        }, {
          breakpoint: 802,
          settings: "unslick"
        }]
      }
      $slick_slider.slick(settings);
      // reslick only if it's not slick()
      $(window).on('resize', function () {
        if ($(window).width() < 768) {
          if ($slick_slider.hasClass('slick-initialized')) {
            $slick_slider.slick('unslick');
          }
          return
        }

        if (!$slick_slider.hasClass('slick-initialized')) {
          return $slick_slider.slick(settings);
        }
      });

      $(".steps__tabs-item").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.steps__list').slick("slickGoTo", indexItem)
        $(".steps__tabs-item").removeClass("steps__tabs-item-active")
        $(this).addClass("steps__tabs-item-active")
        console.log(indexItem)
      })

      $('.steps__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".steps__tabs-item").removeClass("steps__tabs-item-active")
        $(".steps__tabs-item-" + (nextSlide + 1)).addClass("steps__tabs-item-active")
      });
    });

    //hero slider
    $(document).ready(function () {
      $(".hero__list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: ".hero__arrow-left",
        nextArrow: ".hero__arrow-right"
      })

      $(".hero__progress-item").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.hero__list').slick("slickGoTo", indexItem)
        $(".hero__progress-item").removeClass("hero__progress-item-active")
        $(this).addClass("hero__progress-item-active")
        console.log(indexItem)
      })

      $('.hero__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".hero__progress-item").removeClass("hero__progress-item-active")
        $(".hero__progress-item-" + (nextSlide + 1)).addClass("hero__progress-item-active")
      });
    });

    //review slider
    $(document).ready(function () {
      $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: ".reviews__arrow-right",
        prevArrow: ".reviews__arrow-left"
      });

      $(".reviews__progress-item").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.reviews__slider').slick("slickGoTo", indexItem)
        $(".reviews__progress-item").removeClass("reviews__progress-item-active")
        $(this).addClass("reviews__progress-item-active")
      })

      $('.reviews__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".reviews__progress-item").removeClass("reviews__progress-item-active")
        $(".reviews__progress-item-" + (nextSlide + 1)).addClass("reviews__progress-item-active")
      });
    });

    $(document).ready(function () {
      $('.docs__item-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: ".docs__item-arrow-right",
        prevArrow: ".docs__item-arrow-left"
      });

      $(".docs__item-progress-item").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.docs__item-list').slick("slickGoTo", indexItem)
        $(".docs__item-progress-item").removeClass("docs__item-progress-item-active")
        $(this).addClass("docs__item-progress-item-active")
      })

      $('.docs__item-list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".docs__item-progress-item").removeClass("docs__item-progress-item-active")
        $(".docs__item-progress-item-" + (nextSlide + 1)).addClass("docs__item-progress-item-active")
      });
    });

    //advantages mobile slider

    $(document).ready(function () {
      $('.advantages-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.advantages-content-slider',
        swipeToSlide: true,
        touchThreshold: 10
        /* variableWidth: true */
      });
      $('.advantages-slider').on('click', '.slick-slide', function (e) {
        e.stopPropagation();
        var index = $(this).data("slick-index");
        if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
          $('.slick-slider').slick('slickGoTo', index);
        }
      });
      $(".advantages__progress-item").click(function (e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.advantages-slider').slick("slickGoTo", indexItem)
        $(".advantages__progress-item").removeClass("advantages__progress-item-active")
        $(this).addClass("advantages__progress-item-active")
      })

      $('.advantages-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".advantages__progress-item").removeClass("advantages__progress-item-active")
        $(".advantages__progress-item-" + (nextSlide + 1)).addClass("advantages__progress-item-active")
      });
    });

    //advantages mobile content slider

    $(document).ready(function () {
      $('.advantages-content-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.advantages-slider',
      });
    });
  },
  "advantagesHover": function () {
    $(".advantages-circle__item").on("mouseenter", function () {
      $(".advantages-circle__item").removeClass("advantages-circle__item-active")
      $(this).addClass("advantages-circle__item-active")
      var itemId = $(this).index()
      $(".advantages-circle__info-item").removeClass("advantages-circle__info-item-active")
      $(".advantages-circle__info-item").eq(itemId).addClass("advantages-circle__info-item-active")
      $(".advantages__dot").removeClass("advantages__dot-active")
      $(".advantages__dot").eq(itemId).addClass("advantages__dot-active")
      $(".advantages__dot").eq(itemId - 1).addClass("advantages__dot-active")
    })
  },
  "questionsAccord": function () {
    $(".questions__item").click(function () {
      if ($(this).hasClass("questions__item-active")) {
        $(this).removeClass("questions__item-active")
        $(this).find(".questions__img-fallback").attr("src", "assets/images/line-blue.png")
        $(this).find(".questions__img-fallback").css("margin-left", "-14px")
      } else {
        $(".questions__item").removeClass("questions__item-active")
        $(this).addClass("questions__item-active")
        $(".questions__img-fallback").attr("src", "assets/images/line-blue.png")
        $(".questions__img-fallback").css("margin-left", "-14px")
        $(this).find(".questions__img-fallback").attr("src", "assets/images/line-white.png")
        $(this).find(".questions__img-fallback").css("margin-left", "0")
      }
    });
  },
  "textareaResize": function () {
    $('.ask__input_question').autoResize();
  },
  "popups": function () {
    $('.slider-button_popup').magnificPopup({
      closeBtnInside: true,
      type: 'inline',
      midClick: true,
      fixedContentPos: false,
      callbacks: {
        open: function () {
          $("body").addClass("body-hidden");
        },
        beforeClose: function () {
          $("body").removeClass("body-hidden");
        }
      }
    });
    /* $(".feedback__submit").magnificPopup({
      modal: true,
      type: 'inline',
      midClick: true,
      fixedContentPos: false
    }); */
    $(".expert__button").magnificPopup({
      type: 'inline',
      midClick: true,
      fixedContentPos: false,
      callbacks: {
        open: function () {
          $("body").addClass("body-hidden");
        },
        beforeClose: function () {
          $("body").removeClass("body-hidden");
        }
      }

    });
    $(".hesitate__button").magnificPopup({
      type: 'inline',
      midClick: true,
      fixedContentPos: false,
      callbacks: {
        open: function () {
          $("body").addClass("body-hidden");
        },
        beforeClose: function () {
          $("body").removeClass("body-hidden");
        }
      }
    });
    $(".contacts__footer-button").magnificPopup({
      type: 'inline',
      midClick: true,
      fixedContentPos: false,
      callbacks: {
        open: function () {
          $("body").addClass("body-hidden");
        },
        beforeClose: function () {
          $("body").removeClass("body-hidden");
        }
      }
    });
    $(".docs__item-wrap").magnificPopup({
      type: 'image',
      callbacks: {
        open: function () {
          $("body").addClass("body-hidden");
        },
        beforeClose: function () {
          $("body").removeClass("body-hidden");
        }
      }
    });
  },
  "hoverArrows": function () {
    $(".steps__arrow-left").on("mouseenter", function () {
      $(this).find(".steps__arrow-img-fallback").attr("src", "assets/images/line-left-white.png")
    })
    $(".steps__arrow-left").on("mouseleave", function () {
      $(this).find(".steps__arrow-img-fallback").attr("src", "assets/images/line-left-blue.png")
    })
    $(".steps__arrow-right").on("mouseenter", function () {
      $(this).find(".steps__arrow-img-fallback").attr("src", "assets/images/line-right-white.png")
    })
    $(".steps__arrow-right").on("mouseleave", function () {
      $(this).find(".steps__arrow-img-fallback").attr("src", "assets/images/line-right-blue.png")
    })
    $(".license__arrow-left").on("mouseenter", function () {
      $(this).find(".license__arrow-img-fallback").attr("src", "assets/images/line-left-white.png")
    })
    $(".license__arrow-left").on("mouseleave", function () {
      $(this).find(".license__arrow-img-fallback").attr("src", "assets/images/line-left-blue.png")
    })
    $(".license__arrow-right").on("mouseenter", function () {
      $(this).find(".license__arrow-img-fallback").attr("src", "assets/images/line-right-white.png")
    })
    $(".license__arrow-right").on("mouseleave", function () {
      $(this).find(".license__arrow-img-fallback").attr("src", "assets/images/line-right-blue.png")
    })
    $(".reviews__arrow-left").on("mouseenter", function () {
      $(this).find(".reviews__arrow-img-fallback").attr("src", "assets/images/line-left-white.png")
    })
    $(".reviews__arrow-left").on("mouseleave", function () {
      $(this).find(".reviews__arrow-img-fallback").attr("src", "assets/images/line-left-blue.png")
    })
    $(".reviews__arrow-right").on("mouseenter", function () {
      $(this).find(".reviews__arrow-img-fallback").attr("src", "assets/images/line-right-white.png")
    })
    $(".reviews__arrow-right").on("mouseleave", function () {
      $(this).find(".reviews__arrow-img-fallback").attr("src", "assets/images/line-right-blue.png")
    })
    $(".hero__arrow-left").on("mouseenter", function () {
      $(this).find(".hero__arrow-img-fallback").attr("src", "assets/images/line-left-white.png")
    })
    $(".hero__arrow-left").on("mouseleave", function () {
      $(this).find(".hero__arrow-img-fallback").attr("src", "assets/images/line-left-blue.png")
    })
    $(".hero__arrow-right").on("mouseenter", function () {
      $(this).find(".hero__arrow-img-fallback").attr("src", "assets/images/line-right-white.png")
    })
    $(".hero__arrow-right").on("mouseleave", function () {
      $(this).find(".hero__arrow-img-fallback").attr("src", "assets/images/line-right-blue.png")
    })
  },

  "mailScript": function () {
    $(document).ready(function () {
      //E-mail Ajax Send
      "use strict";
      $(function () {
        $('#feedback-form').bind('submit', function () {
          var fd = new FormData(this);
          if (!$(".feedback__input").hasClass("is-invalid")) {
            $.ajax({
              type: 'post',
              url: 'post.php',
              contentType: false,
              processData: false,
              data: fd,
              success: function () {
                if ($('#success-popup').length) {
                  $.magnificPopup.open({
                    items: {
                      src: $('#success-popup')
                    },
                    type: 'inline'
                  });
                  $('#feedback-form').each(function () {
                    this.reset();
                  });
                }
              },
              failure: function () {
                setTimeout(function () {
                  $('.failure-message').show(); // or fade, css display however you'd like.
                }, 5000);
              }
            });
          }
          return false;
        });
      });
      $(function () {
        $('#consult-form').bind('submit', function () {
          var fd = new FormData(this);
          if (!$(".feedback__input").hasClass("is-invalid")) {
            $.ajax({
              type: 'post',
              url: 'post.php',
              contentType: false,
              processData: false,
              data: fd,
              success: function () {
                if ($('#success-popup').length) {
                  $.magnificPopup.open({
                    items: {
                      src: $('#success-popup')
                    },
                    type: 'inline'
                  });
                  $('#consult-form').each(function () {
                    this.reset();
                  });
                }
              },
              failure: function () {
                setTimeout(function () {
                  $('.failure-message').show(); // or fade, css display however you'd like.
                }, 5000);
              }
            });
          }
          return false;
        });
      });
      $(function () {
        $('#ask-form').bind('submit', function () {
          var fd = new FormData(this);
          if (!$(".ask__input").hasClass("is-invalid")) {
            $.ajax({
              type: 'post',
              url: 'post-question.php',
              contentType: false,
              processData: false,
              data: fd,
              success: function () {
                if ($('#success-popup').length) {
                  $.magnificPopup.open({
                    items: {
                      src: $('#success-popup')
                    },
                    type: 'inline'
                  });
                  $('#ask-form').each(function () {
                    this.reset();
                  });
                }
              },
              failure: function () {
                setTimeout(function () {
                  $('.failure-message').show(); // or fade, css display however you'd like.
                }, 5000);
              }
            });
          }
          return false;
        });
      });
      $(function () {
        $('#history-form').bind('submit', function () {
          var fd = new FormData(this);
          if (!$(".feedback__input").hasClass("is-invalid")) {
            $.ajax({
              type: 'post',
              url: 'post-inner.php',
              contentType: false,
              processData: false,
              data: fd,
              success: function () {
                if ($('#success-popup').length) {
                  $.magnificPopup.open({
                    items: {
                      src: $('#success-popup')
                    },
                    type: 'inline'
                  });
                  $('#history-form').each(function () {
                    this.reset();
                  });
                }
              },
              failure: function () {
                setTimeout(function () {
                  $('.failure-message').show(); // or fade, css display however you'd like.
                }, 5000);
              }
            });
          }
          return false;
        });
      });
      $(function () {
        $('#team-form').bind('submit', function () {
          var fd = new FormData(this);
          if (!$(".ask__input").hasClass("is-invalid")) {
            $.ajax({
              type: 'post',
              url: 'post-question.php',
              contentType: false,
              processData: false,
              data: fd,
              success: function () {
                if ($('#success-popup').length) {
                  $.magnificPopup.open({
                    items: {
                      src: $('#success-popup')
                    },
                    type: 'inline'
                  });
                  $('#team-form').each(function () {
                    this.reset();
                  });
                }
              },
              failure: function () {
                setTimeout(function () {
                  $('.failure-message').show(); // or fade, css display however you'd like.
                }, 5000);
              }
            });
          }
          return false;
        });
      });
      $(function () {
        $('#docs-form').bind('submit', function () {
          var fd = new FormData(this);
          if (!$(".feedback__input").hasClass("is-invalid")) {
            $.ajax({
              type: 'post',
              url: 'post-inner.php',
              contentType: false,
              processData: false,
              data: fd,
              success: function () {
                if ($('#success-popup').length) {
                  $.magnificPopup.open({
                    items: {
                      src: $('#success-popup')
                    },
                    type: 'inline'
                  });
                  $('#docs-form').each(function () {
                    this.reset();
                  });
                }
              },
              failure: function () {
                setTimeout(function () {
                  $('.failure-message').show(); // or fade, css display however you'd like.
                }, 5000);
              }
            });
          }
          return false;
        });
      });
    });
  },
  "smoothAnchorScroll": function () {
    $(document).on('click', 'a[href="#questions"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
      }, 500);
    });
  },
  "docsHoverSlider": function () {
    $(".docs__item-wrap").mouseover(function () {
      $(".docs__zoom").css("display", "block");
    })
    $(".docs__item-wrap").mouseleave(function () {
      $(".docs__zoom").css("display", "none");
    })
  },
  "lazyLoadImages": function () {
    var myLazyLoad = new LazyLoad({
      elements_selector: ".lazy",
      threshold: 800
    });
  },
  "adaptiveStepItem": function () {
    (function ($) {
      var $window = $(window),
        $step = $('.steps__item');

      function resize() {
        if ($window.width() < 802) {
          return $step.addClass('steps__item_mobile');
        }

        $step.removeClass('steps__item_mobile');
      }

      $window
        .resize(resize)
        .trigger('resize');
    })(jQuery);
    $(".steps__item_mobile").click(function () {
      if ($(this).hasClass("steps__item_mobile_active")) {
        $(this).removeClass("steps__item_mobile_active")
      } else {
        $(".steps__item_mobile").removeClass("steps__item_mobile_active")
        $(this).addClass("steps__item_mobile_active")
      }
    })
  },
  "burgerMenu": function () {
    $('.menu-burger').on('click', function () {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('body').toggleClass("body-hidden")
      $('.menu-burger').text() == "⚌" ? $('.menu-burger').text('✕') : $('.menu-burger').text("⚌");
    });
    /* if ($(".menu-burger").hasClass("fs")) {
      $('body').css('overflow-y', 'hidden');
    } else {
      $('body').css('overflow-y', 'auto');
    } */
    $(".menu__link_include").on("click", function () {
      $(".menu-wrapper").addClass("animated fadeOutLeft")
      setTimeout(function () {
        $(".menu-wrapper").css("display", "none")
      }, 300);
      setTimeout(function () {
        $(".submenu-wrapper").css("display", "flex")
        $(".submenu-wrapper").removeClass("animated fadeOutRight")
        $(".submenu-wrapper").addClass("animated fadeInRight")
      }, 400);
    })
    $(".back-button").on("click", function () {
      $(".submenu-wrapper").addClass("animated fadeOutRight")
      setTimeout(function () {
        $(".submenu-wrapper").css("display", "none")
      }, 300);
      setTimeout(function () {
        $(".menu-wrapper").css("display", "flex")
        $(".menu-wrapper").removeClass("fadeOutLeft")
        $(".menu-wrapper").addClass("fadeInLeft")
      }, 400);
    })
  },
  "reviewImagesChange": function () {
    if ($(window).width() < 481) {
      $(".reviews__img_1").attr("data-src", "assets/images/otziv1.jpg");
      $(".reviews__img_2").attr("data-src", "assets/images/otziv2.jpg");
      $(".reviews__img_3").attr("data-src", "assets/images/otziv3.jpg");
      $(".reviews__img_1").attr("src", "assets/images/otziv1.jpg");
      $(".reviews__img_2").attr("src", "assets/images/otziv2.jpg");
      $(".reviews__img_3").attr("src", "assets/images/otziv3.jpg");
    } else {
      $(".reviews__img_1").attr("data-src", "assets/images/reviews-1.png");
      $(".reviews__img_2").attr("data-src", "assets/images/reviews-2.png");
      $(".reviews__img_3").attr("data-src", "assets/images/reviews-3.png");
      $(".reviews__img_1").attr("src", "assets/images/reviews-1.png");
      $(".reviews__img_2").attr("src", "assets/images/reviews-2.png");
      $(".reviews__img_3").attr("src", "assets/images/reviews-3.png");
    }
  },
  "mouseParallax": function () {
    //ice parallax
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.court-bg-ice-1').css('bottom', ((460 - (ypos / 80)) + "px"));
      $('.court-bg-ice-1').css('left', ((750 + (xpos / 80)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.court-bg-ice-2').css('bottom', ((531 - (ypos / 90)) + "px"));
      $('.court-bg-ice-2').css('left', ((942 + (xpos / 90)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.court-bg-ice-3').css('bottom', ((604 - (ypos / 90)) + "px"));
      $('.court-bg-ice-3').css('left', ((1010 + (xpos / 90)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.court-bg-ice-4').css('top', ((369 + (ypos / 80)) + "px"));
      $('.court-bg-ice-4').css('left', ((1000 + (xpos / 80)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.court-bg-ice-5').css('top', ((197 + (ypos / 70)) + "px"));
      $('.court-bg-ice-5').css('left', ((97 + (xpos / 70)) + "px"));
    });
    //folder parallax
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.license__parallax-item-1').css('top', ((0 + (ypos / 80)) + "px"));
      $('.license__parallax-item-1').css('left', ((0 + (xpos / 80)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.license__parallax-item-2').css('bottom', ((-183 - (ypos / 60)) + "px"));
      $('.license__parallax-item-2').css('left', ((-46 + (xpos / 60)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.license__parallax-item-3').css('top', ((62 + (ypos / 60)) + "px"));
      $('.license__parallax-item-3').css('left', ((-159 + (xpos / 60)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.license__parallax-item-4').css('top', ((-60 + (ypos / 60)) + "px"));
      $('.license__parallax-item-4').css('right', ((213 - (xpos / 60)) + "px"));
    });
    //command parallax
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.ask-image-1').css('top', ((0 + (ypos / 80)) + "px"));
      $('.ask-image-1').css('left', ((-160 + (xpos / 80)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.ask-image-2').css('top', ((140 + (ypos / 70)) + "px"));
      $('.ask-image-2').css('left', ((-40 + (xpos / 70)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.ask-image-3').css('top', ((136 + (ypos / 80)) + "px"));
      $('.ask-image-3').css('right', ((-140 - (xpos / 80)) + "px"));
    });
    $(window).mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.ask-image-4').css('top', ((0 + (ypos / 70)) + "px"));
      $('.ask-image-4').css('right', ((-70 - (xpos / 70)) + "px"));
    });
  }
}

var app = {
  'init': function () {
    func.slickMain();
    func.slick();
    func.questionsAccord();
    func.advantagesHover();
    func.textareaResize();
    func.popups();
    func.mailScript();
    func.headerFixed();
    func.hoverArrows();
    func.smoothAnchorScroll();
    func.docsHoverSlider();
    func.adaptiveStepItem();
    func.burgerMenu();
    func.mouseParallax();
  },
  'scroll': function () {

  },
  'load': function () {
    func.lazyLoadImages();
  },
  'resize': function () {
    func.reviewImagesChange();
  },
};

$(function () {
  app.init();
  $(window).on('load', function () {
    app.load();
  });
  $(window).on('resize', function () {
    app.resize();
  });
  $(window).on('scroll', function () {
    app.scroll();
  })
})