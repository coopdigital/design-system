/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/frontend-components.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/frontend-components.js":
/*!***********************************!*\
  !*** ./js/frontend-components.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_bling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bling */ \"./js/modules/bling.js\");\n/* harmony import */ var _coopdigital_coop_frontend_components_forms_checkboxes_radios_checkboxes_radios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coopdigital/coop-frontend-components/forms/checkboxes-radios/_checkboxes-radios */ \"./node_modules/@coopdigital/coop-frontend-components/forms/checkboxes-radios/_checkboxes-radios.js\");\n/* harmony import */ var _coopdigital_coop_frontend_components_global_global_nav_global_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coopdigital/coop-frontend-components/global/global-nav/global-nav */ \"./node_modules/@coopdigital/coop-frontend-components/global/global-nav/global-nav.js\");\n\n\n\n\n\nif (Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('.coop-c-checkbox-radio')) {\n  Object(_coopdigital_coop_frontend_components_forms_checkboxes_radios_checkboxes_radios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$$\"])('.coop-c-checkbox-radio'));\n}\n\nif (Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('.coop-c-nav')) {\n  Object(_coopdigital_coop_frontend_components_global_global_nav_global_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$$\"])('.coop-c-nav'));\n}\n\n//# sourceURL=webpack:///./js/frontend-components.js?");

/***/ }),

/***/ "./js/modules/bling.js":
/*!*****************************!*\
  !*** ./js/modules/bling.js ***!
  \*****************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\nvar $ = document.querySelector.bind(document);\nvar $$ = document.querySelectorAll.bind(document);\n\nNode.prototype.on = window.on = function (name, fn) {\n  this.addEventListener(name, fn);\n};\n\nNodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line\n\nNodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {\n  this.forEach(function (elem) {\n    elem.on(name, fn);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./js/modules/bling.js?");

/***/ }),

/***/ "./node_modules/@coopdigital/coop-frontend-components/forms/checkboxes-radios/_checkboxes-radios.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@coopdigital/coop-frontend-components/forms/checkboxes-radios/_checkboxes-radios.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction coopCheckRadio(input) {\n  if (!input) return;\n\n  var inputs = document.querySelectorAll('.coop-c-checkbox-radio__input');\n  var labels = document.querySelectorAll('.coop-c-checkbox-radio__label');\n  var group = document.querySelectorAll('.coop-c-checkbox-radio');\n  var checkboxes = [];\n  var radios = [];\n\n  function removeClassName(e,t) {\n    if (typeof e == 'string') {\n      e = xGetElementById(e);\n    }\n    var ec = ' ' + e.className.replace(/^\\s+|\\s+$/g,'') + ' ';\n    var nc = ec;\n    if (ec.indexOf(' '+t+' ') != -1) {\n      nc = ec.replace(' ' + t + ' ',' ');\n    }\n    e.className = nc.replace(/^\\s+|\\s+$/g,'');\n    return true;\n  }\n\n  for (var i = 0; i < inputs.length; i++) {\n    if (inputs[i].type == 'checkbox') {\n      checkboxes.push(inputs[i]);\n      if (inputs[i].checked) {\n        checked.push(inputs[i]);\n      }\n    }\n    if (inputs[i].type == 'radio') {\n      radios.push(inputs[i]);\n      if (inputs[i].checked) {\n        checked.push(inputs[i]);\n      }\n    }\n  }\n\n  for (var j = 0; j < checkboxes.length; j++) {\n    checkboxes[j].onclick = function() {\n      if (this.checked == true) {\n        this.parentElement.className += ' coop-js-is--selected';\n      } else {\n        removeClassName(this.parentElement, 'coop-js-is--selected');\n      }\n    }\n  }\n\n  var prev = null\n  for (var r = 0; r < radios.length; r++) {\n    radios[r].onclick = function(e) {\n      if(prev != this) {\n        if(prev !== null) {\n          prev.parentElement.classList.remove('coop-js-is--selected')\n        }\n        this.parentElement.className += ' coop-js-is--selected';\n        prev = this\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (coopCheckRadio);\n\n\n//# sourceURL=webpack:///./node_modules/@coopdigital/coop-frontend-components/forms/checkboxes-radios/_checkboxes-radios.js?");

/***/ }),

/***/ "./node_modules/@coopdigital/coop-frontend-components/global/global-nav/global-nav.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@coopdigital/coop-frontend-components/global/global-nav/global-nav.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction coopGlobalNav(input) {\n  if (!input) return;\n\n    var $window = $(window)\n\n    var memberButton = $('#js-coop-c-nav-btn-member')\n\n    function checkWidth() {\n      var windowsize = $window.width();\n      if (windowsize < 960) {\n        $('#js-coop-c-nav__list').prepend(memberButton);\n      }\n      if (windowsize > 960) {\n        $('.js_nav-toggle').removeClass('js-is--active');\n        $('#js-coop-c-nav-list-secondary li:eq(1)').after(memberButton);\n        $('#js-coop-c-nav__list').removeClass('js-is--open');\n        $('.coop-c-nav__menu-trigger').removeClass('js-is--active');\n        // $(\".coop-c-nav__list-item\").on({\n        //   mouseenter: function () {\n        //     $('body').addClass('js-has--overlay');\n        //   },\n        //   mouseleave: function () {\n        //     $('body').removeClass('js-has--overlay');\n        //   }\n        // });\n      }\n    }\n\n    $(window).resize(checkWidth);\n\n    var menuTrigger = $('.coop-c-nav__menu-trigger');\n    var toggleTrigger = $('.js_nav-toggle');\n    var toggleContent = $('.js_nav-toggle-content');\n    var windowWidth = 960;\n\n    menuTrigger.on('click', function (e) {\n      // TODO: change to feature touch detection isTouchEnabled\n      if (isSmallScreen()) {\n        e.preventDefault()\n      }\n      // $('body').toggleClass('js-has--overlay');\n      closeAllToggle($(this))\n      toggleMobileNav($(this))\n      toggleTargetActive($(this))\n    })\n\n    function init() {\n      bindEvents()\n      addAria()\n      initClickTracking()\n      checkWidth();\n    }\n\n    init()\n\n    function bindEvents() {\n\n      var $self = this\n\n      $('.js_nav-toggle').on('click.coop-c-nav', function (e) {\n\n        var $this = $(this)\n        var isLevelOne = $this.children().hasClass('coop-c-nav__level-1')\n\n        // if navItem is levelOne and on mobile or touch device, prevent top link\n        if (isSmallScreen() || isTouchEnabled() && isLevelOne) {\n          e.preventDefault()\n        }\n\n        // if both trigger and content are active and showing - toggle them\n        if ($('.js_nav-toggle').hasClass('js-is--active') && $('.js_nav-toggle').next().hasClass('js-is--open')) {\n          // toggle current item clicked\n          toggleCurrentNavItemActiveState($this)\n        } else {\n          // remove other active items and toggle $this one\n          removeSiblingOrChildActiveStates($this)\n          toggleCurrentNavItemActiveState($this)\n        }\n\n        //if mobile scroll animate to active navItem\n        if (isSmallScreen()) {\n          animateToActiveElement($this)\n        }\n\n      })\n\n    }\n\n    function removeSiblingOrChildActiveStates($this) {\n      removeOthersActive($this)\n      closeOtherToggles($this)\n      removeOtherAriaExapanded($this)\n      removeOtherAriaHidden($this)\n    }\n    function toggleCurrentNavItemActiveState($this) {\n      toggleTargetActive($this)\n      toggleContentShown($this)\n      toggleAriaExpanded($this)\n      toggleAriaHidden($this)\n    }\n    function animateToActiveElement($this) {\n      // animate active element into view if window width under 960px\n      $('html,body').animate({\n        'scrollTop': $this.position().top\n      }, 500)\n    }\n    function initClickTracking() {\n      // insert click tracking for global nav on coop-co-uk\n      /* Some quite specific things happening here for tracking on coop.co.uk\n         and how we currently have some nav items labelled via ids and some not\n         Also some tracking ids change between desktop and touch devices for toggles\n         Needs an improved method of tracking using ensighten - not sure what yet!\n      */\n      var self = this\n      $.each($('.coop-c-nav__link'), function (idx, el) {\n        if (($(el).hasClass('js_nav-toggle') || $(el).parent().hasClass('js_nav-toggle')) && $(el).attr('id') !== 'cn_trigger_active_shop') {\n          $(el).attr('id', function (_, elID) {\n            if (self.isSmallScreen()) {\n              return elID.replace(/cn_trigger_active_|cn_/, 'cn_trigger_active_')\n            } else if (!self.isTouchEnabled()) {\n              return elID.replace(/trigger_active_/, '')\n            }\n          })\n        }\n      })\n    }\n    function closeAllToggle($this) {\n      $('.js_nav-toggle.js-is--active').not($this).removeClass('js-is--active')\n      $('.js_nav-toggle-content.js-is--open').not($this.next()).removeClass('js-is--open')\n    }\n    function toggleMobileNav($this) {\n      $('.coop-c-nav__list').toggleClass('js-is--open');\n      $('.coop-c-header').toggleClass('js-no--shadow');\n    }\n    function toggleTargetActive($this) {\n      $this.toggleClass('js-is--active');\n    }\n    function toggleContentShown($this) {\n      $this.next().toggleClass('js-is--open');\n    }\n    function removeOthersActive($this) {\n      $this.closest('.js_nav-toggle-content').find('.js_nav-toggle.js-is--active').removeClass('js-is--active');\n    }\n    function closeOtherToggles($this) {\n      $this.closest('.js_nav-toggle-content.toggle-show').find('.js_nav-toggle-content.js-is--open').removeClass('js-is--open');\n    }\n    function addAria() {\n      var self = this\n      $.each($('.js_nav-toggle'), function (idx, el) {\n        $(el).attr('aria-expanded', 'false');\n      })\n      $.each($('.js_nav-toggle-content'), function (idx, el) {\n        $(el).attr('aria-hidden', 'true');\n      })\n    }\n    function toggleAriaExpanded($this) {\n      if ($this.attr('aria-expanded') === 'false') {\n        $this.attr('aria-expanded', 'true')\n      } else {\n        $this.attr('aria-expanded', 'false')\n      }\n    }\n    function removeOtherAriaExapanded($this) {\n      // Find any same level or below expanded navitems and set expanded to false\n      $this.closest('.js_nav-toggle-content').find('[aria-expanded=\"true\"]').attr('aria-expanded', 'false')\n    }\n    function removeOtherAriaHidden($this) {\n      // Find any same level or below aria-hidden=\"false\" navitems and set aria-hidden=\"true\"\n      $this.closest('.js_nav-toggle-content').find('[aria-hidden=\"false\"]').attr('aria-hidden', 'true')\n    }\n    function toggleAriaHidden($this) {\n      if ($this.next().attr('aria-hidden') === 'true') {\n        $this.next().attr('aria-hidden', 'false')\n      } else {\n        $this.next().attr('aria-hidden', 'true')\n      }\n    }\n    function isTouchEnabled() {\n      return (('ontouchstart' in window) ||\n             (navigator.maxTouchPoints > 0) ||\n             (navigator.msMaxTouchPoints > 0))\n    }\n    function isSmallScreen() {\n      return window.innerWidth < 960\n    }\n\n  //   $(function(){\n  //     $('.coop-c-nav').setup_navigation();\n  //   });\n  //\n  //   $.fn.setup_navigation = function(settings) {\n  //     settings = jQuery.extend({\n  //       menuHoverClass: 'focus',\n  //     }, settings);\n  //\n  //     // Set tabIndex to -1 so that links can't receive focus until menu is open\n  //     $(this).find('> li > a').next('ul').find('a').attr('tabIndex',-1);\n  //\n  //     $(this).find('> li > a').hover(function(){\n  //       $(this).closest('ul').find('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1);\n  //     });\n  //     $(this).find('> li > a').focus(function(){\n  //       $(this).closest('ul').find('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1);\n  //       $(this).next('ul')\n  //         .addClass(settings.menuHoverClass)\n  //         .find('a').attr('tabIndex',0);\n  //     });\n  //\n  //   // Hide menu if click or focus occurs outside of navigation\n  //   $(this).find('a').last().keydown(function(e){\n  //     if(e.keyCode == 9) {\n  //       // If the user tabs out of the navigation hide all menus\n  //       $('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1);\n  //     }\n  //   });\n  //   $(document).click(function(){ $('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1); });\n  //\n  //   $(this).click(function(e){\n  //     e.stopPropagation();\n  //   });\n  // }\n\n  $(\"html\").removeClass(\"no-js\");\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (coopGlobalNav);\n\n\n//# sourceURL=webpack:///./node_modules/@coopdigital/coop-frontend-components/global/global-nav/global-nav.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/extract-text-webpack-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/src/index.js):\\nError: argument `$color` of `lighten($color, $amount)` must be a color\\n    at options.error (/Applications/MAMP/htdocs/design-system/node_modules/node-sass/lib/index.js:291:26)\\n    at runLoaders (/Applications/MAMP/htdocs/design-system/node_modules/webpack/lib/NormalModule.js:286:20)\\n    at /Applications/MAMP/htdocs/design-system/node_modules/loader-runner/lib/LoaderRunner.js:364:11\\n    at /Applications/MAMP/htdocs/design-system/node_modules/loader-runner/lib/LoaderRunner.js:230:18\\n    at context.callback (/Applications/MAMP/htdocs/design-system/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Promise.resolve.then.then.catch (/Applications/MAMP/htdocs/design-system/node_modules/postcss-loader/src/index.js:208:9)\\n    at <anonymous>\");\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ })

/******/ });