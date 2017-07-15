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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$selector = $selector;
exports.$selectorAll = $selectorAll;
exports.$on = $on;
exports.$location = $location;
exports.$delegate = $delegate;
exports.isHidden = isHidden;
function $selector(selector, scope) {
  return (scope || document).querySelector(selector);
}

function $selectorAll(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}

function $on(target, type, callback) {
  target.addEventListener(type, callback);
}

function $location(url) {
  window.location = url;
}

function $delegate(scope, selector, type, callback) {

  var itens = $selectorAll(selector, scope);

  for (var i = 0; i <= itens.length - 1; i++) {
    $on(itens[i], type, callback);
  }
}

function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === 'none';
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.isLoggedIn = isLoggedIn;
exports.getUser = getUser;
exports.updateUser = updateUser;

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = new _store2.default();

function login(email, password) {
  if (email == 'login@example.com' && password == '123') {
    var state = store.get();
    state.user.isLoggedIn = true;
    store.set(state);
    (0, _helpers.$location)('#/profile');
    return true;
  } else {
    return false;
  }
}

function logout() {
  var state = store.get();
  state.user.isLoggedIn = false;
  store.set(state);
  (0, _helpers.$location)('#/login');
}

function isLoggedIn() {
  var state = store.get();
  return state.user.isLoggedIn;
}

function getUser() {
  var state = store.get();
  return state.user;
}

function updateUser(user) {
  var state = store.get();
  state.user = user;
  store.set(state);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.updateView = updateView;

var _helpers = __webpack_require__(0);

var _services = __webpack_require__(1);

var _elements = __webpack_require__(5);

var _login = __webpack_require__(9);

var _login2 = _interopRequireDefault(_login);

var _profile = __webpack_require__(11);

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var routeActived = '';

var Route = function () {
  function Route() {
    _classCallCheck(this, Route);

    this.routes = [{
      path: 'login',
      component: _login2.default
    }, {
      path: 'profile',
      component: _profile2.default,
      private: true
    }, {
      path: '',
      component: _login2.default
    }];
  }

  _createClass(Route, [{
    key: 'setRoute',
    value: function setRoute(hash) {
      var route = hash.replace(/^#\//, '');

      var selectRoute = this.routes.filter(function (view) {
        return view.path == route;
      });
      routeActived = selectRoute[0];

      if (routeActived.private && !(0, _services.isLoggedIn)()) {
        (0, _services.logout)();
      } else {
        updateView();
      }
    }
  }]);

  return Route;
}();

exports.default = Route;
function updateView() {
  var view = new routeActived.component();
  (0, _helpers.$selector)('#app').innerHTML = view.getTemplate();
  view.create();
  (0, _elements.updateElements)();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _route = __webpack_require__(2);

var _route2 = _interopRequireDefault(_route);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = new _route2.default();

var setRoute = function setRoute() {
  return route.setRoute(document.location.hash);
};

(0, _helpers.$on)(window, 'load', setRoute);
(0, _helpers.$on)(window, 'hashchange', setRoute);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _route = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    this.store = {
      user: {
        fullname: 'Jessica Parker',
        phone: '(949) 325 - 68594',
        location: 'Newport Beach, CA',
        category: 'Business',
        website: 'www.seller.com',
        isLoggedIn: false,
        reviews: 6,
        followers: 15
      }
    };
  }

  _createClass(Store, [{
    key: 'get',
    value: function get() {
      return this.store;
    }
  }, {
    key: 'set',
    value: function set(store) {
      this.store = store;
      (0, _route.updateView)();
    }
  }]);

  return Store;
}();

exports.default = Store;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateElements = updateElements;

var _textfield = __webpack_require__(6);

var _popover = __webpack_require__(7);

var _modal = __webpack_require__(8);

function updateElements() {
  (0, _textfield.bindTextfields)();
  (0, _popover.bindPopover)();
  (0, _modal.bindModal)();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindTextfields = bindTextfields;

var _helpers = __webpack_require__(0);

function bindTextfields() {

  function toggleFilled(event, element) {
    var field = element || event.target;
    if (field.value != '') {
      field.classList.add('textfield__input--filled');
    } else {
      field.classList.remove('textfield__input--filled');
    }
  }

  var itens = (0, _helpers.$selectorAll)('.textfield__input');

  for (var i = 0; i <= itens.length - 1; i++) {
    toggleFilled(false, itens[i]);
    (0, _helpers.$on)(itens[i], 'change', toggleFilled);
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindPopover = bindPopover;

var _helpers = __webpack_require__(0);

function bindPopover() {

  function togglePopover(event) {

    var button = this;
    var popoverId = button.dataset.popover;
    var popover = (0, _helpers.$selector)('#' + popoverId);

    if ((0, _helpers.isHidden)(popover)) {
      popover.classList.remove('hide');
    } else {
      popover.classList.add('hide');;
    }
  }

  (0, _helpers.$delegate)(document, '[data-popover]', 'click', togglePopover);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindModal = bindModal;

var _helpers = __webpack_require__(0);

function bindModal() {

  function openModal(event) {
    var button = this;
    var id = button.dataset.modal;
    var modal = (0, _helpers.$selector)('#' + id);

    if ((0, _helpers.isHidden)(modal)) {
      modal.classList.remove('hide');
    }
  }

  function closeModal(event) {
    var button = this;
    var id = button.dataset.closeModal;
    var modal = (0, _helpers.$selector)('#' + id);
    if (!(0, _helpers.isHidden)(modal)) {
      modal.classList.add('hide');
    }
  }

  (0, _helpers.$delegate)(document, '[data-modal]', 'click', openModal);
  (0, _helpers.$delegate)(document, '[data-close-modal]', 'click', closeModal);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _login2 = __webpack_require__(10);

var _login3 = _interopRequireDefault(_login2);

var _helpers = __webpack_require__(0);

var _services = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
  function Login() {
    _classCallCheck(this, Login);

    this.template = '' + _login3.default;
  }

  _createClass(Login, [{
    key: 'create',
    value: function create() {
      var form = (0, _helpers.$selector)('.login');
      (0, _helpers.$on)(form, 'submit', this.login);
    }
  }, {
    key: 'login',
    value: function login(event) {
      event.preventDefault();

      var email = (0, _helpers.$selector)('#email').value;
      var password = (0, _helpers.$selector)('#password').value;

      if (!(0, _services.login)(email, password)) {
        console.log('login error');
      }
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate() {
      return this.template;
    }
  }]);

  return Login;
}();

exports.default = Login;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "\n<form action=\"#/profile\" class=\"login\">\n  <div class=\"login__card\">\n    <h2 class=\"login__card__title\">Login</h2>\n    <div class=\"login__card__content\">\n      <div class=\"textfield\">\n        <input class=\"textfield__input\" type=\"email\" id=\"email\" required>\n        <label class=\"textfield__label\" for=\"email\">Email</label>\n      </div>\n      <div class=\"textfield\">\n        <input class=\"textfield__input\" type=\"password\" id=\"password\" required>\n        <label class=\"textfield__label\" for=\"password\">Password</label>\n      </div>\n      <aside class=\"help-block\">\n        <p>By signing up or clicking continue, I confirm that I haveread and agree to the <a href=\"#\">Terms</a> and <a href=\"#\">Privacy Policy</a>.</p>\n      </aside>\n    </div>\n    <div class=\"login__card__actions\">\n      <button class=\"button\" type=\"submit\">Login</button>\n    </div>\n  </div>\n</form>\n";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// sub components


var _profile = __webpack_require__(12);

var _profile2 = _interopRequireDefault(_profile);

var _helpers = __webpack_require__(0);

var _services = __webpack_require__(1);

var _profileEditPopover = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Profile = function () {
  function Profile() {
    _classCallCheck(this, Profile);

    var user = (0, _services.getUser)();
    this.template = eval('`' + _profile2.default + '`');
  }

  _createClass(Profile, [{
    key: 'create',
    value: function create() {
      (0, _helpers.$delegate)(document, '[data-action="logout"]', 'click', _services.logout);
      (0, _helpers.$delegate)(document, '[data-action="save"]', 'submit', this.updateItem);

      var myScroll = new IScroll('.menu__wrapper', { scrollX: true, scrollY: false });
    }
  }, {
    key: 'updateItem',
    value: function updateItem(event) {
      event.preventDefault();
      var form = this;
      var user = (0, _services.getUser)();

      // updates all value
      if (this.name === 'profile-edit-modal') {
        var fullname = (0, _helpers.$selector)('[name="fullname"]', form);
        var website = (0, _helpers.$selector)('[name="website"]', form);
        var phone = (0, _helpers.$selector)('[name="phone"]', form);
        var location = (0, _helpers.$selector)('[name="location"]', form);
        user.fullname = fullname.value;
        user.website = website.value;
        user.phone = phone.value;
        user.location = location.value;
      }

      // updates just one value
      if (this.name === 'profile-edit-item') {
        var field = (0, _helpers.$selector)('.textfield__input', this);
        user[field.name] = field.value;
      }

      (0, _services.updateUser)(user);
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate() {
      return this.template;
    }
  }]);

  return Profile;
}();

exports.default = Profile;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "\n<main class=\"container\">\n  <header class=\"header\">\n    <div class=\"header__options clearfix\">\n      <button data-action=\"logout\" class=\"button button--link pull-right hide-large\" type=\"button\">Logout</button>\n      <button data-action=\"logout\" class=\"button button--outlined pull-right show-large\" type=\"button\">Logout</button>\n    </div>\n    <section class=\"profile\">\n      <button class=\"profile__upload-button button button--outlined pull-right show-large\" type=\"button\"><span class=\"ion-android-camera\" aria-hidden=\"true\"></span> Upload Cover Image</button>\n      <figure>\n        <div class=\"profile__image\">\n          <img src=\"src/images/profile_image.jpg\" alt=\"profile\">\n        </div>\n        <figcaption class=\"profile__content\">\n          <h2>${user.fullname}</h2>\n          <ul>\n            <li><a href=\"#\"><span class=\"ion-ios-telephone-outline\" aria-hidden=\"true\"></span> ${user.phone}</a></li>\n            <li><address><span class=\"ion-ios-location-outline\" aria-hidden=\"true\"></span> ${user.location}</address></li>\n          </ul>\n\n          <div class=\"profile__content__feedback\">\n            <div class=\"profile__content__rating\">\n              <span class=\"ion-ios-star\" aria-hidden=\"true\"></span>\n              <span class=\"ion-ios-star\" aria-hidden=\"true\"></span>\n              <span class=\"ion-ios-star\" aria-hidden=\"true\"></span>\n              <span class=\"ion-ios-star\" aria-hidden=\"true\"></span>\n              <span class=\"ion-ios-star-outline\" aria-hidden=\"true\"></span>\n            </div>\n            <p class=\"profile__content__reviews\"><strong>${user.reviews}</strong> reviews</p>\n          </div>\n\n          <div class=\"profile__content__followers\">\n            <span class=\"ion-ios-plus\" aria-hidden=\"true\"></span>\n            <strong>${user.followers}</strong>\n            Followers\n          </div>\n        </figcaption>\n      </figure>\n    </section>\n    <nav class=\"menu\">\n      <div class=\"menu__wrapper\">\n        <ul>\n          <li class=\"active\"><a href=\"#/profile\">About</a></li>\n          <li><a href=\"#/profile\">Settings</a></li>\n          <li><a href=\"#/profile\">Option1</a></li>\n          <li><a href=\"#/profile\">Option2</a></li>\n          <li><a href=\"#/profile\">Option3</a></li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <section class=\"content\">\n\n    <div class=\"profile-info\">\n      <button data-modal=\"modal-edit-profile\" type=\"button\" class=\"button button--edit pull-right hide-large\"><span class=\"ion-edit\" aria-hidden=\"true\"></span></button>\n      <h1>Profile info</h1>\n      <ul class=\"profile-info__list\">\n        <li>\n          <h4 class=\"profile-info__item\">${user.fullname}</h4>\n          <profile-edit-popover data-id=\"popover-first-name\" data-name=\"fullname\" data-value=\"${user.fullname}\" data-label=\"Name\"></profile-edit-popover>\n        </li>\n        <li>\n          <h5 class=\"profile-info__item\">${user.category}</h5>\n          <profile-edit-popover data-id=\"popover-category\" data-name=\"category\" data-value=\"${user.category}\" data-label=\"Category\"></profile-edit-popover>\n        </li>\n        <li>\n          <span class=\"profile-info__item\">\n            <span class=\"ion-android-globe\" aria-hidden=\"true\"></span> ${user.website}\n          </span>\n          <profile-edit-popover data-id=\"popover-website\" data-name=\"website\" data-value=\"${user.website}\" data-label=\"Website\"></profile-edit-popover>\n        </li>\n        <li>\n          <span class=\"profile-info__item\">\n            <span class=\"ion-ios-telephone-outline\" aria-hidden=\"true\"></span> ${user.phone}\n          </span>\n          <profile-edit-popover data-id=\"popover-phone\" data-name=\"phone\" data-value=\"${user.phone}\" data-label=\"Phone\"></profile-edit-popover>\n        </li>\n        <li>\n          <span class=\"profile-info__item\">\n            <span class=\"ion-ios-home-outline\" aria-hidden=\"true\"></span> ${user.location}\n          </span>\n          <profile-edit-popover data-id=\"popover-location\" data-name=\"location\" data-value=\"${user.location}\" data-label=\"City, State &amp; ZIP\"></profile-edit-popover>\n        </li>\n      </ul>\n    </div>\n\n    <div id=\"modal-edit-profile\" class=\"edit-profile modal hide hide-large\">\n      <form name=\"profile-edit-modal\" novalidate data-action=\"save\">\n        <div class=\"modal__actions\">\n          <button data-close-modal=\"modal-edit-profile\" type=\"submit\" class=\"button button--link pull-right\">Save</button>\n          <button data-close-modal=\"modal-edit-profile\" type=\"button\" class=\"button button--link pull-right\">Cancel</button>\n        </div>\n        <h3>Profile info</h3>\n        <div class=\"textfield\">\n          <input class=\"textfield__input\" type=\"text\" id=\"field_name\" name=\"fullname\" value=\"${user.fullname}\">\n          <label class=\"textfield__label\" for=\"field_name\">Name</label>\n        </div>\n        <div class=\"textfield\">\n          <input class=\"textfield__input\" type=\"url\" id=\"field_website\" name=\"website\" value=\"${user.website}\">\n          <label class=\"textfield__label\" for=\"field_website\">Website</label>\n        </div>\n        <div class=\"textfield\">\n          <input class=\"textfield__input\" type=\"text\" id=\"field_phone\" name=\"phone\" value=\"${user.phone}\">\n          <label class=\"textfield__label\" for=\"field_phone\">Phone Number</label>\n        </div>\n        <div class=\"textfield\">\n          <input class=\"textfield__input\" type=\"text\" id=\"field_location\" name=\"location\" value=\"${user.location}\">\n          <label class=\"textfield__label\" for=\"field_location\">City, State &amp; ZIP</label>\n        </div>\n      </form>\n    </div>\n\n  </section>\n</main>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileEditPopover = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentProfileEditPopover = function (_HTMLElement) {
  _inherits(ComponentProfileEditPopover, _HTMLElement);

  function ComponentProfileEditPopover() {
    _classCallCheck(this, ComponentProfileEditPopover);

    return _possibleConstructorReturn(this, (ComponentProfileEditPopover.__proto__ || Object.getPrototypeOf(ComponentProfileEditPopover)).call(this));
  }

  _createClass(ComponentProfileEditPopover, [{
    key: 'createdCallback',
    value: function createdCallback() {

      var id = this.dataset.id;
      var value = this.dataset.value;
      var label = this.dataset.label;
      var name = this.dataset.name;

      this.innerHTML = '\n      <div class="profile-edit-item">\n        <button data-popover="' + id + '" type="button" class="button button--edit show-large"><span class="ion-edit" aria-hidden="true"></span></button>\n        <aside id="' + id + '" class="profile-info__edit-item popover hide">\n          <form name="profile-edit-item" novalidate data-action="save">\n            <div class="textfield">\n              <input class="textfield__input" type="text" name="' + name + '" id="field_' + id + '" value="' + value + '">\n              <label class="textfield__label" for="field_' + id + '">' + label + '</label>\n            </div>\n            <div class="popover__actions">\n              <button data-popover="' + id + '" type="submit" class="button">Save</button>\n              <button data-popover="' + id + '" type="button" class="button button--outlined">Cancel</button>\n            </div>\n          </form>\n        </aside>\n      </div>\n    ';
    }
  }]);

  return ComponentProfileEditPopover;
}(HTMLElement);

var ProfileEditPopover = exports.ProfileEditPopover = document.registerElement('profile-edit-popover', ComponentProfileEditPopover);

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map
