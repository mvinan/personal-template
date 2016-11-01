/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	/*
	 * Module Dependencies
	 */
	
	$(function () {
	
	  new WOW({
	    offset: 150
	  }).init();
	
	  $('a[href*="#"]:not([href="#"])').click(function () {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top + 60
	        }, 500);
	        return false;
	      }
	    }
	  });
	
	  var $items = $('.Menu .List .List-item'),
	      $listContainer = $('.ListContainer'),
	      $contactForm = $('.Contact-form'),
	      $fieldInput = $contactForm.find('.field input, textarea');
	
	  var $menu = $('#menu');
	
	  var color = {
	    red: '#FE2851',
	    black: '#242424'
	  };
	
	  $('.button.hamburguer').click(function () {
	    $listContainer.toggleClass('is-active');
	    $(this).toggleClass('is-active');
	
	    //Menu
	    if ($listContainer.hasClass('is-active')) {
	      $items.map(function (i, item) {
	        setTimeout(function () {
	          $(item).addClass('is-showing');
	        }, 150 * i);
	      });
	    } else {
	      $items.removeClass('is-showing');
	    }
	  });
	
	  $fieldInput.focusin(function () {
	    $(this).siblings('label').css({ color: color.red });
	  }).focusout(function () {
	    $(this).siblings('label').css({ color: color.black });
	  });
	
	  $("#slider").responsiveSlides({
	    auto: true,
	    pager: true,
	    nav: true,
	    prevText: "",
	    nextText: ""
	  });
	
	  $('.rslides_nav').wrapAll('<div class="navigation row align-right" />');
	  $('.rslides_nav.prev').append('<i class="fi-arrow-left"></i>');
	  $('.rslides_nav.next').append('<i class="fi-arrow-right"></i>');
	
	  //Menu change colors with scrolling down
	  function menuOnScroll(el) {
	    var wScroll = el.scrollTop();
	    if (wScroll > 1) {
	      $menu.css({ 'backgroundColor': 'white' }).addClass('shadow');
	
	      $menu.find('.Brand .Brand-blue').removeClass('is-active'); //IMAGE REMOVE BLUE CLASS
	      $menu.find('.Brand .Brand-red').addClass('is-active'); //IMAGE ADD RED CLASS
	      $menu.find('.List a').addClass('is-descending'); //LINKS INITALS
	    } else {
	      $menu.css({ 'backgroundColor': 'transparent' }).removeClass('shadow');
	
	      $menu.find('.Brand .Brand-blue').addClass('is-active'); //IMAGE ADD BLUE CLASS IN MENU
	      $menu.find('.Brand .Brand-red').removeClass('is-active'); //IMAGE REMOVE RED CLASS IN MENU
	      $menu.find('.List a').removeClass('is-descending'); //LINKS REMOVE DESCENDING
	    }
	  }
	
	  //MATCHES IF MENU IS ON MOBILE DEVICES
	  var mobile = window.matchMedia("(max-width: 600px)");
	
	  function handlerOnChange(media) {
	    if (media.matches) {
	      $menu.addClass('menu-mobile');
	    } else {
	      $menu.removeClass('menu-mobile');
	    }
	  }
	
	  $(window).on('scroll', function () {
	    var self = $(this);
	    menuOnScroll(self);
	  });
	
	  mobile.addListener(handlerOnChange);
	  handlerOnChange(mobile);
	
	  //Set Circles
	  var $heroCircle = $('.hero .circle'),
	      $meCircle = $('.Me .circle');
	
	  new TweenMax.set($heroCircle, { x: "50%", y: "50%" });
	  new TweenMax.set($meCircle, { x: "50%", y: "-50%" });
	
	  //Parrallax on mouse move in hero
	  var parallax = function parallax(resistance, mouse, elem) {
	    var $el = $(elem);
	    new TweenMax.to($el, 0.2, {
	      x: -((mouse.clientX - window.innerWidth / 2) / resistance),
	      y: -((mouse.clientY - window.innerHeight / 2) / resistance)
	    });
	  };
	
	  $('.hero, #menu, .Me').on('mousemove', function (mouse) {
	    parallax(20, mouse, '.title');
	    parallax(20, mouse, '.profession');
	    parallax(-50, mouse, '.hero .circle');
	    parallax(-50, mouse, '.Me .circle');
	  });
	
	  //Slick Library
	  var slickOptions = {
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    responsive: [{
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 1
	      }
	    }]
	  };
	
	  $('.slick').slick(slickOptions);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map