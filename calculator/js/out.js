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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* abstract */var Calculator = function () {
    function Calculator(selectorName) {
        _classCallCheck(this, Calculator);

        this.name = selectorName;
        this.$calculatorDOMElement = $(selectorName);

        this.firstNumberArray = [];
        this.secondNumberArray = [];
        this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.initEvents();
    }

    /* Abstract method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */


    _createClass(Calculator, [{
        key: "add",
        value: function add(numberX, numberY) {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
            return [0, 0, 0, 0, 0, 0, 0, 0];
        }

        /* Abstract method changing number
        *  @param {jQuery element} root Parent element
        */

    }, {
        key: "changeNumber",
        value: function changeNumber(root) {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
        }

        /* Abstract method changing Result
        */

    }, {
        key: "updateResult",
        value: function updateResult() {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
        }

        /* Get the name of calculator selector
        *  @return {string}
        */

    }, {
        key: "getName",
        value: function getName() {
            return "Hello I am " + this.name;
        }

        /* Check what number is set in both numbers and add
        *  @return {string}
        */

    }, {
        key: "checkNumber",
        value: function checkNumber() {
            var root = this.$calculatorDOMElement;
            var $firstNumber = root.children(".group-number").children("label:first-child");
            var $secondNumber = root.children(".group-number").children("label:nth-child(2)");
            var $resultNumber = root.children(".group-number").children(".result-bit");

            for (var i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
                this.firstNumberArray[i] = parseInt($firstNumber.eq(j).find('.active').text());
                this.secondNumberArray[i] = parseInt($secondNumber.eq(j).find('.active').text());
                this.resultNumberArray[i] = parseInt($resultNumber.eq(j).find('.active').text());
            }
            this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
        }

        /* Set event click on number
        */

    }, {
        key: "initEvents",
        value: function initEvents() {
            var _this = this;

            this.$calculatorDOMElement.find(".display-number").on('click', function (event) {
                var parentLabel = $(event.target).parent(".display-number");
                _this.changeNumber(parentLabel);
            });
        }
    }]);

    return Calculator;
}();

exports.Calculator = Calculator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BinaryCalculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BinaryCalculator = function (_Calculator) {
    _inherits(BinaryCalculator, _Calculator);

    function BinaryCalculator(settings) {
        _classCallCheck(this, BinaryCalculator);

        var _this = _possibleConstructorReturn(this, (BinaryCalculator.__proto__ || Object.getPrototypeOf(BinaryCalculator)).call(this, settings)); //settings to .binary-calculator


        console.log(_this.getName());
        return _this;
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */


    _createClass(BinaryCalculator, [{
        key: "add",
        value: function add(numberX, numberY) {
            var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (var i = numberX.length - 1; i >= 0; i--) {
                var carryBit = numberX[i] + numberY[i] + result[i];
                if (carryBit === 2) {
                    result[i] = 0;
                    result[i - 1] = 1;
                } else if (carryBit === 3) {
                    result[i] = 1;
                    result[i - 1] = 1;
                } else {
                    result[i] = carryBit;
                }
            }
            return result;
        }

        /* Method changing number
        *  @param {jQuery element} root Parent element
        */

    }, {
        key: "changeNumber",
        value: function changeNumber(root) {
            var _this2 = this;

            var activeElement = root.find('.active');
            activeElement.removeClass("active");
            activeElement.siblings().addClass("active");
            root.children(":first-child").slideToggle(function () {
                _this2.checkNumber();
                _this2.updateResult();
            });
        }

        /* Method changing Result
        */

    }, {
        key: "updateResult",
        value: function updateResult() {
            var root = this.$calculatorDOMElement;
            var $resultNumber = root.children(".group-number").children(".result-bit");
            for (var i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
                var valueResult = parseInt($resultNumber.eq(j).find(".active").text());
                if (this.resultNumberArray[i] != valueResult) {
                    var activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
                    activeElement.siblings().addClass("active");
                    $resultNumber.eq(j).children(":first-child").slideToggle();
                }
            }
        }
    }]);

    return BinaryCalculator;
}(_Calculator2.Calculator);

exports.BinaryCalculator = BinaryCalculator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DecCalculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Calculator2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecCalculator = function (_Calculator) {
    _inherits(DecCalculator, _Calculator);

    function DecCalculator(settings) {
        _classCallCheck(this, DecCalculator);

        var _this = _possibleConstructorReturn(this, (DecCalculator.__proto__ || Object.getPrototypeOf(DecCalculator)).call(this, settings));

        console.log(_this.getName());

        _this.displayedTooltip = false;
        return _this;
    }

    _createClass(DecCalculator, [{
        key: 'changeNumber',
        value: function changeNumber(root) {
            var activeElement = root.find('.active');
            activeElement.attr("contenteditable", true);
            activeElement.trigger('focus');
            if (!this.displayedTooltip) {
                this.showTooltip();
                this.displayedTooltip = true;
            }
        }
    }, {
        key: 'showTooltip',
        value: function showTooltip() {
            var tooltip = $('.tooltip');
            tooltip.show();
        }
    }, {
        key: 'hideTooltip',
        value: function hideTooltip() {
            var tooltip = $('.tooltip');
            tooltip.hide();
        }
    }, {
        key: 'add',
        value: function add(numberX, numberY) {
            var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

            for (var i = numberX.length - 1; i >= 0; i--) {
                result[i] += numberX[i] + numberY[i];

                if (result[i] > 9) {
                    result[i - 1] = 1;
                    result[i] = result[i] % 10;
                }
            }
            console.log(result);
            return result;
        }
    }, {
        key: 'updateResult',
        value: function updateResult() {
            var root = this.$calculatorDOMElement;
            var $resultNumber = root.children('.group-number').children('.result-bit');

            for (var i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
                $resultNumber.eq(j).children('.active').text(this.resultNumberArray[i]);
            }
        }
    }, {
        key: 'checkInput',
        value: function checkInput(event) {
            console.log(event);
            if (event.originalEvent.keyCode === 8 || event.originalEvent.keyCode === 46) {
                return true;
            }
            if (event.originalEvent.keyCode > 57 || event.originalEvent.keyCode < 48) {
                return false;
            }
            if ($(event.target).text().length >= 1) {
                return false;
            }
            return true;
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            var _this2 = this;

            _get(DecCalculator.prototype.__proto__ || Object.getPrototypeOf(DecCalculator.prototype), 'initEvents', this).call(this);

            this.$calculatorDOMElement.find('.operator-bar span').on('click', function (event) {
                _this2.checkNumber();
                _this2.updateResult();
            });

            this.$calculatorDOMElement.find('.active').bind({
                keydown: this.checkInput
            });

            this.$calculatorDOMElement.find('.tooltip').on('click', function (event) {
                _this2.hideTooltip();
            });
        }
    }]);

    return DecCalculator;
}(_Calculator2.Calculator);

exports.DecCalculator = DecCalculator;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BinaryCalculator = __webpack_require__(1);

var _DecCalculator = __webpack_require__(2);

__webpack_require__(3);

$(document).ready(function () {
    var bitCalc = new _BinaryCalculator.BinaryCalculator(".binary-calculator");
    var decCalc = new _DecCalculator.DecCalculator(".dec-calculator");
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background: #607D8B; }\n\nh2 {\n  font-family: \"Anton\", sans-serif;\n  font-size: 2.6em;\n  text-align: center;\n  color: #fff;\n  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3);\n  padding: 0.8em;\n  box-sizing: border-box; }\n\n.info {\n  width: 45vw;\n  max-width: 600px;\n  font-family: \"Anton\", sans-serif;\n  line-height: 1.4;\n  margin: 0 auto;\n  text-align: center;\n  color: #fff; }\n\nsection {\n  margin-bottom: 50px; }\n\n.binary-calculator, .dec-calculator {\n  display: block;\n  width: 1000px;\n  height: 270px;\n  position: relative;\n  left: 10vw;\n  margin-top: 7vh; }\n  .binary-calculator .group-number, .dec-calculator .group-number {\n    position: absolute; }\n  .binary-calculator .display-number,\n  .binary-calculator .result-bit, .dec-calculator .display-number,\n  .dec-calculator .result-bit {\n    display: block;\n    width: 90px;\n    height: 90px;\n    position: absolute;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: \"Anton\", sans-serif;\n    font-size: 36px; }\n  .binary-calculator .display-number, .dec-calculator .display-number {\n    cursor: pointer;\n    background: #7b96a3;\n    border-radius: 10%; }\n    .binary-calculator .display-number:hover, .dec-calculator .display-number:hover {\n      font-size: 45px; }\n  .binary-calculator .display-number__value--zero, .binary-calculator .display-number__value--one, .dec-calculator .display-number__value--zero, .dec-calculator .display-number__value--one {\n    display: block;\n    float: left;\n    width: 90px;\n    height: 90px;\n    text-align: center;\n    line-height: 90px; }\n  .binary-calculator .display-number__value--zero,\n  .binary-calculator .display-number__value--one, .dec-calculator .display-number__value--zero,\n  .dec-calculator .display-number__value--one {\n    color: #fff; }\n  .binary-calculator .result-bit .display-number__value--zero,\n  .binary-calculator .result-bit .display-number__value--one, .dec-calculator .result-bit .display-number__value--zero,\n  .dec-calculator .result-bit .display-number__value--one {\n    color: #fff; }\n  .binary-calculator .operator-bar, .dec-calculator .operator-bar {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 5px;\n    background: #b2ebf2;\n    top: 205px;\n    left: 90px;\n    border-radius: 5px; }\n    .binary-calculator .operator-bar span, .dec-calculator .operator-bar span {\n      font-size: 90px;\n      position: absolute;\n      top: -140px;\n      left: 25px;\n      font-family: \"Anton\", sans-serif;\n      color: #b2ebf2;\n      cursor: pointer; }\n  .binary-calculator .group-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(1) {\n    right: 0px; }\n    .binary-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(1) .result-bit, .dec-calculator .group-number:nth-of-type(1) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(2) {\n    right: 100px; }\n    .binary-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(2) .result-bit, .dec-calculator .group-number:nth-of-type(2) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(3), .dec-calculator .group-number:nth-of-type(3) {\n    right: 200px; }\n    .binary-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(3) .result-bit, .dec-calculator .group-number:nth-of-type(3) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(4), .dec-calculator .group-number:nth-of-type(4) {\n    right: 300px; }\n    .binary-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(4) .result-bit, .dec-calculator .group-number:nth-of-type(4) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(5), .dec-calculator .group-number:nth-of-type(5) {\n    right: 400px; }\n    .binary-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(5) .result-bit, .dec-calculator .group-number:nth-of-type(5) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(6), .dec-calculator .group-number:nth-of-type(6) {\n    right: 500px; }\n    .binary-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(6) .result-bit, .dec-calculator .group-number:nth-of-type(6) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(7), .dec-calculator .group-number:nth-of-type(7) {\n    right: 600px; }\n    .binary-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(7) .result-bit, .dec-calculator .group-number:nth-of-type(7) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(8), .dec-calculator .group-number:nth-of-type(8) {\n    right: 700px; }\n    .binary-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(8) .result-bit, .dec-calculator .group-number:nth-of-type(8) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(9), .dec-calculator .group-number:nth-of-type(9) {\n    right: 800px; }\n    .binary-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(9) .result-bit, .dec-calculator .group-number:nth-of-type(9) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(10), .dec-calculator .group-number:nth-of-type(10) {\n    right: 900px; }\n    .binary-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(10) .result-bit, .dec-calculator .group-number:nth-of-type(10) .result-bit {\n      top: 210px; }\n  .binary-calculator .group-number:nth-of-type(11), .dec-calculator .group-number:nth-of-type(11) {\n    right: 1000px; }\n    .binary-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(2) {\n      top: 100px; }\n    .binary-calculator .group-number:nth-of-type(11) .result-bit, .dec-calculator .group-number:nth-of-type(11) .result-bit {\n      top: 210px; }\n  .binary-calculator .display-17,\n  .binary-calculator .display-18, .dec-calculator .display-17,\n  .dec-calculator .display-18 {\n    visibility: hidden; }\n  .binary-calculator .result-9, .dec-calculator .result-9 {\n    border-bottom: 5px solid #7b96a3; }\n    .binary-calculator .result-9:after, .dec-calculator .result-9:after {\n      content: 'carry';\n      position: absolute;\n      bottom: -1px;\n      left: 0;\n      text-align: center;\n      font-size: .5em;\n      font-family: \"Anton\", sans-serif;\n      width: 100%;\n      color: #fff; }\n\n.tooltip {\n  display: none; }\n\n.tooltip {\n  background: lightslategrey;\n  border: 2px solid #666666;\n  font-size: 20px;\n  padding: 10px;\n  position: relative;\n  text-align: center;\n  width: 158px;\n  top: -111px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  -moz-box-shadow: 0px 0px 5px #aaa;\n  -webkit-box-shadow: 0px 0px 5px #aaa;\n  box-shadow: 0px 0px 5px #aaa; }\n\n.chatBubbleArrow {\n  border-color: lightslategrey transparent transparent transparent;\n  border-style: solid;\n  border-width: 10px;\n  height: 0px;\n  width: 0px;\n  position: absolute;\n  bottom: -19px;\n  left: 30px; }\n\n.chatBubbleArrowBorder {\n  border-color: #666666 transparent transparent transparent;\n  border-style: solid;\n  border-width: 10px;\n  height: 0;\n  width: 0;\n  position: absolute;\n  bottom: -22px;\n  left: 30px; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);