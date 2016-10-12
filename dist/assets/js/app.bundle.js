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
	
	$(document).on('ready', function () {
	  'use strict';
	
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
	});

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map