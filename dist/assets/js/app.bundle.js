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
	});

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map