module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(10);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPortal = __webpack_require__(15);

	var _reactPortal2 = _interopRequireDefault(_reactPortal);

	var _arrayIncludes = __webpack_require__(16);

	var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

	var _isTouchDevice = __webpack_require__(14);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	var _toMomentObject = __webpack_require__(17);

	var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

	var _toLocalizedDateString = __webpack_require__(18);

	var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

	var _isInclusivelyAfterDay = __webpack_require__(19);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _isInclusivelyBeforeDay = __webpack_require__(20);

	var _isInclusivelyBeforeDay2 = _interopRequireDefault(_isInclusivelyBeforeDay);

	var _isNextDay = __webpack_require__(21);

	var _isNextDay2 = _interopRequireDefault(_isNextDay);

	var _isSameDay = __webpack_require__(22);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	var _OutsideClickHandler = __webpack_require__(23);

	var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

	var _DateRangePickerInput = __webpack_require__(24);

	var _DateRangePickerInput2 = _interopRequireDefault(_DateRangePickerInput);

	var _DayPicker = __webpack_require__(25);

	var _DayPicker2 = _interopRequireDefault(_DayPicker);

	var _close = __webpack_require__(26);

	var _close2 = _interopRequireDefault(_close);

	var _DateRangePickerShape = __webpack_require__(27);

	var _DateRangePickerShape2 = _interopRequireDefault(_DateRangePickerShape);

	var _constants = __webpack_require__(9);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var propTypes = _DateRangePickerShape2['default'];

	var defaultProps = {
	  startDateId: _constants.START_DATE,
	  endDateId: _constants.END_DATE,
	  focusedInput: null,
	  minimumNights: 1,
	  isDayBlocked: function () {
	    function isDayBlocked() {
	      return false;
	    }

	    return isDayBlocked;
	  }(),
	  disabledDays: [],
	  isOutsideRange: function () {
	    function isOutsideRange(day) {
	      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
	    }

	    return isOutsideRange;
	  }(),
	  enableOutsideDays: false,
	  numberOfMonths: 2,
	  showClearDates: false,
	  disabled: false,

	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  withPortal: false,
	  withFullScreenPortal: false,

	  onDatesChange: function () {
	    function onDatesChange() {}

	    return onDatesChange;
	  }(),
	  onFocusChange: function () {
	    function onFocusChange() {}

	    return onFocusChange;
	  }(),
	  onPrevMonthClick: function () {
	    function onPrevMonthClick() {}

	    return onPrevMonthClick;
	  }(),
	  onNextMonthClick: function () {
	    function onNextMonthClick() {}

	    return onNextMonthClick;
	  }(),

	  // i18n
	  monthFormat: 'MMMM YYYY',
	  phrases: {
	    closeDatePicker: 'Close',
	    clearDates: 'Clear Dates'
	  }
	};

	var DateRangePicker = function (_React$Component) {
	  _inherits(DateRangePicker, _React$Component);

	  function DateRangePicker(props) {
	    _classCallCheck(this, DateRangePicker);

	    var _this = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, props));

	    _this.state = {
	      hoverDate: null
	    };

	    _this.isTouchDevice = (0, _isTouchDevice2['default'])();

	    _this.onOutsideClick = _this.onOutsideClick.bind(_this);
	    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
	    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
	    _this.onDayClick = _this.onDayClick.bind(_this);

	    _this.onClearFocus = _this.onClearFocus.bind(_this);
	    _this.onStartDateChange = _this.onStartDateChange.bind(_this);
	    _this.onStartDateFocus = _this.onStartDateFocus.bind(_this);
	    _this.onEndDateChange = _this.onEndDateChange.bind(_this);
	    _this.onEndDateFocus = _this.onEndDateFocus.bind(_this);
	    _this.clearDates = _this.clearDates.bind(_this);
	    return _this;
	  }

	  _createClass(DateRangePicker, [{
	    key: 'onClearFocus',
	    value: function () {
	      function onClearFocus() {
	        this.props.onFocusChange(null);
	      }

	      return onClearFocus;
	    }()
	  }, {
	    key: 'onDayClick',
	    value: function () {
	      function onDayClick(day, modifiers, e) {
	        if (e) e.preventDefault();
	        if ((0, _arrayIncludes2['default'])(modifiers, 'blocked')) return;

	        var focusedInput = this.props.focusedInput;
	        var _props = this.props;
	        var startDate = _props.startDate;
	        var endDate = _props.endDate;

	        if (focusedInput === _constants.START_DATE) {
	          this.props.onFocusChange(_constants.END_DATE);

	          startDate = day;
	          if ((0, _isInclusivelyAfterDay2['default'])(day, endDate)) {
	            endDate = null;
	          }
	        } else if (focusedInput === _constants.END_DATE) {
	          if ((0, _isInclusivelyBeforeDay2['default'])(day, startDate)) {
	            startDate = day;
	            endDate = null;
	          } else {
	            endDate = day;
	            if (!startDate) {
	              this.props.onFocusChange(_constants.START_DATE);
	            } else {
	              this.props.onFocusChange(null);
	            }
	          }
	        }

	        this.props.onDatesChange({ startDate: startDate, endDate: endDate });
	      }

	      return onDayClick;
	    }()
	  }, {
	    key: 'onDayMouseEnter',
	    value: function () {
	      function onDayMouseEnter(day) {
	        if (this.isTouchDevice) return;

	        this.setState({
	          hoverDate: day
	        });
	      }

	      return onDayMouseEnter;
	    }()
	  }, {
	    key: 'onDayMouseLeave',
	    value: function () {
	      function onDayMouseLeave() {
	        if (this.isTouchDevice) return;

	        this.setState({
	          hoverDate: null
	        });
	      }

	      return onDayMouseLeave;
	    }()
	  }, {
	    key: 'onEndDateChange',
	    value: function () {
	      function onEndDateChange(endDateString) {
	        var endDate = (0, _toMomentObject2['default'])(endDateString);

	        var _props2 = this.props;
	        var startDate = _props2.startDate;
	        var isOutsideRange = _props2.isOutsideRange;
	        var onDatesChange = _props2.onDatesChange;
	        var onFocusChange = _props2.onFocusChange;

	        var isEndDateValid = endDate && !isOutsideRange(endDate) && !(0, _isInclusivelyBeforeDay2['default'])(endDate, startDate);
	        if (isEndDateValid) {
	          onDatesChange({ startDate: startDate, endDate: endDate });
	          onFocusChange(null);
	        } else {
	          onDatesChange({
	            startDate: startDate,
	            endDate: null
	          });
	        }
	      }

	      return onEndDateChange;
	    }()
	  }, {
	    key: 'onEndDateFocus',
	    value: function () {
	      function onEndDateFocus() {
	        var _props3 = this.props;
	        var startDate = _props3.startDate;
	        var onFocusChange = _props3.onFocusChange;
	        var orientation = _props3.orientation;
	        var disabled = _props3.disabled;

	        if (!startDate && orientation === _constants.VERTICAL_ORIENTATION && !disabled) {
	          // Since the vertical datepicker is full screen, we never want to focus the end date first
	          // because there's no indication that that is the case once the datepicker is open and it
	          // might confuse the user
	          onFocusChange(_constants.START_DATE);
	        } else if (!disabled) {
	          onFocusChange(_constants.END_DATE);
	        }
	      }

	      return onEndDateFocus;
	    }()
	  }, {
	    key: 'onOutsideClick',
	    value: function () {
	      function onOutsideClick() {
	        var _props4 = this.props;
	        var focusedInput = _props4.focusedInput;
	        var onFocusChange = _props4.onFocusChange;

	        if (!focusedInput) return;

	        onFocusChange(null);
	      }

	      return onOutsideClick;
	    }()
	  }, {
	    key: 'onStartDateChange',
	    value: function () {
	      function onStartDateChange(startDateString) {
	        var startDate = (0, _toMomentObject2['default'])(startDateString);

	        var endDate = this.props.endDate;
	        var _props5 = this.props;
	        var isOutsideRange = _props5.isOutsideRange;
	        var onDatesChange = _props5.onDatesChange;
	        var onFocusChange = _props5.onFocusChange;

	        var isStartDateValid = startDate && !isOutsideRange(startDate);
	        if (isStartDateValid) {
	          if ((0, _isInclusivelyBeforeDay2['default'])(endDate, startDate)) {
	            endDate = null;
	          }

	          onDatesChange({ startDate: startDate, endDate: endDate });
	          onFocusChange(_constants.END_DATE);
	        } else {
	          onDatesChange({
	            startDate: null,
	            endDate: endDate
	          });
	        }
	      }

	      return onStartDateChange;
	    }()
	  }, {
	    key: 'onStartDateFocus',
	    value: function () {
	      function onStartDateFocus() {
	        if (!this.props.disabled) {
	          this.props.onFocusChange(_constants.START_DATE);
	        }
	      }

	      return onStartDateFocus;
	    }()
	  }, {
	    key: 'getDayPickerContainerClasses',
	    value: function () {
	      function getDayPickerContainerClasses() {
	        var _props6 = this.props;
	        var focusedInput = _props6.focusedInput;
	        var orientation = _props6.orientation;
	        var withPortal = _props6.withPortal;
	        var withFullScreenPortal = _props6.withFullScreenPortal;
	        var hoverDate = this.state.hoverDate;

	        var showDatepicker = focusedInput === _constants.START_DATE || focusedInput === _constants.END_DATE;

	        var dayPickerClassName = (0, _classnames2['default'])('DateRangePicker__picker', {
	          'DateRangePicker__picker--show': showDatepicker,
	          'DateRangePicker__picker--invisible': !showDatepicker,
	          'DateRangePicker__picker--start': focusedInput === _constants.START_DATE,
	          'DateRangePicker__picker--end': focusedInput === _constants.END_DATE,
	          'DateRangePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
	          'DateRangePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
	          'DateRangePicker__picker--portal': withPortal || withFullScreenPortal,
	          'DateRangePicker__picker--full-screen-portal': withFullScreenPortal,
	          'DateRangePicker__picker--valid-date-hovered': hoverDate && !this.isBlocked(hoverDate)
	        });

	        return dayPickerClassName;
	      }

	      return getDayPickerContainerClasses;
	    }()
	  }, {
	    key: 'getDayPickerDOMNode',
	    value: function () {
	      function getDayPickerDOMNode() {
	        return _reactDom2['default'].findDOMNode(this.dayPicker);
	      }

	      return getDayPickerDOMNode;
	    }()
	  }, {
	    key: 'clearDates',
	    value: function () {
	      function clearDates() {
	        this.props.onDatesChange({ startDate: null, endDate: null });
	        this.props.onFocusChange(_constants.START_DATE);
	      }

	      return clearDates;
	    }()
	  }, {
	    key: 'doesNotMeetMinimumNights',
	    value: function () {
	      function doesNotMeetMinimumNights(day) {
	        var _props7 = this.props;
	        var startDate = _props7.startDate;
	        var isOutsideRange = _props7.isOutsideRange;
	        var focusedInput = _props7.focusedInput;
	        var minimumNights = _props7.minimumNights;

	        if (focusedInput !== _constants.END_DATE) return false;

	        if (startDate) {
	          var dayDiff = day.diff(startDate, 'days');
	          return dayDiff < minimumNights && dayDiff >= 0;
	        }
	        return isOutsideRange((0, _moment2['default'])(day).subtract(minimumNights, 'days'));
	      }

	      return doesNotMeetMinimumNights;
	    }()
	  }, {
	    key: 'isDayAfterHoveredStartDate',
	    value: function () {
	      function isDayAfterHoveredStartDate(day) {
	        var _props8 = this.props;
	        var startDate = _props8.startDate;
	        var endDate = _props8.endDate;
	        var hoverDate = this.state.hoverDate;

	        return !!startDate && !endDate && (0, _isNextDay2['default'])(hoverDate, day) && (0, _isSameDay2['default'])(hoverDate, startDate);
	      }

	      return isDayAfterHoveredStartDate;
	    }()
	  }, {
	    key: 'isEndDate',
	    value: function () {
	      function isEndDate(day) {
	        return (0, _isSameDay2['default'])(day, this.props.endDate);
	      }

	      return isEndDate;
	    }()
	  }, {
	    key: 'isHovered',
	    value: function () {
	      function isHovered(day) {
	        return (0, _isSameDay2['default'])(day, this.state.hoverDate);
	      }

	      return isHovered;
	    }()
	  }, {
	    key: 'isInHoveredSpan',
	    value: function () {
	      function isInHoveredSpan(day) {
	        var _props9 = this.props;
	        var startDate = _props9.startDate;
	        var endDate = _props9.endDate;
	        var hoverDate = this.state.hoverDate;

	        var isForwardRange = !!startDate && !endDate && (day.isBetween(startDate, hoverDate) || (0, _isSameDay2['default'])(hoverDate, day));
	        var isBackwardRange = !!endDate && !startDate && (day.isBetween(hoverDate, endDate) || (0, _isSameDay2['default'])(hoverDate, day));

	        return isForwardRange || isBackwardRange;
	      }

	      return isInHoveredSpan;
	    }()
	  }, {
	    key: 'isInSelectedSpan',
	    value: function () {
	      function isInSelectedSpan(day) {
	        var _props10 = this.props;
	        var startDate = _props10.startDate;
	        var endDate = _props10.endDate;

	        return day.isBetween(startDate, endDate);
	      }

	      return isInSelectedSpan;
	    }()
	  }, {
	    key: 'isLastInRange',
	    value: function () {
	      function isLastInRange(day) {
	        return this.isInSelectedSpan(day) && (0, _isNextDay2['default'])(day, this.props.endDate);
	      }

	      return isLastInRange;
	    }()
	  }, {
	    key: 'isStartDate',
	    value: function () {
	      function isStartDate(day) {
	        return (0, _isSameDay2['default'])(day, this.props.startDate);
	      }

	      return isStartDate;
	    }()
	  }, {
	    key: 'isBlocked',
	    value: function () {
	      function isBlocked(day) {
	        var _props11 = this.props;
	        var isDayBlocked = _props11.isDayBlocked;
	        var isOutsideRange = _props11.isOutsideRange;

	        return isDayBlocked(day) || isOutsideRange(day) || this.doesNotMeetMinimumNights(day);
	      }

	      return isBlocked;
	    }()
	  }, {
	    key: 'maybeRenderDayPickerWithPortal',
	    value: function () {
	      function maybeRenderDayPickerWithPortal() {
	        var _props12 = this.props;
	        var focusedInput = _props12.focusedInput;
	        var withPortal = _props12.withPortal;
	        var withFullScreenPortal = _props12.withFullScreenPortal;

	        if (withPortal || withFullScreenPortal) {
	          return _react2['default'].createElement(_reactPortal2['default'], { isOpened: focusedInput !== null }, this.renderDayPicker());
	        }

	        return this.renderDayPicker();
	      }

	      return maybeRenderDayPickerWithPortal;
	    }()
	  }, {
	    key: 'renderDayPicker',
	    value: function () {
	      function renderDayPicker() {
	        var _this2 = this;

	        var _props13 = this.props;
	        var isDayBlocked = _props13.isDayBlocked;
	        var isOutsideRange = _props13.isOutsideRange;
	        var numberOfMonths = _props13.numberOfMonths;
	        var orientation = _props13.orientation;
	        var monthFormat = _props13.monthFormat;
	        var onPrevMonthClick = _props13.onPrevMonthClick;
	        var onNextMonthClick = _props13.onNextMonthClick;
	        var withPortal = _props13.withPortal;
	        var withFullScreenPortal = _props13.withFullScreenPortal;
	        var enableOutsideDays = _props13.enableOutsideDays;

	        var modifiers = {
	          blocked: function () {
	            function blocked(day) {
	              return _this2.isBlocked(day);
	            }

	            return blocked;
	          }(),
	          'blocked-calendar': function () {
	            function blockedCalendar(day) {
	              return isDayBlocked(day);
	            }

	            return blockedCalendar;
	          }(),
	          'blocked-out-of-range': function () {
	            function blockedOutOfRange(day) {
	              return isOutsideRange(day);
	            }

	            return blockedOutOfRange;
	          }(),
	          'blocked-minimum-nights': function () {
	            function blockedMinimumNights(day) {
	              return _this2.doesNotMeetMinimumNights(day);
	            }

	            return blockedMinimumNights;
	          }(),
	          valid: function () {
	            function valid(day) {
	              return !_this2.isBlocked(day);
	            }

	            return valid;
	          }(),
	          // before anything has been set or after both are set
	          hovered: function () {
	            function hovered(day) {
	              return _this2.isHovered(day);
	            }

	            return hovered;
	          }(),

	          // while start date has been set, but end date has not been
	          'hovered-span': function () {
	            function hoveredSpan(day) {
	              return _this2.isInHoveredSpan(day);
	            }

	            return hoveredSpan;
	          }(),
	          'after-hovered-start': function () {
	            function afterHoveredStart(day) {
	              return _this2.isDayAfterHoveredStartDate(day);
	            }

	            return afterHoveredStart;
	          }(),
	          'last-in-range': function () {
	            function lastInRange(day) {
	              return _this2.isLastInRange(day);
	            }

	            return lastInRange;
	          }(),

	          // once a start date and end date have been set
	          'selected-start': function () {
	            function selectedStart(day) {
	              return _this2.isStartDate(day);
	            }

	            return selectedStart;
	          }(),
	          'selected-end': function () {
	            function selectedEnd(day) {
	              return _this2.isEndDate(day);
	            }

	            return selectedEnd;
	          }(),
	          'selected-span': function () {
	            function selectedSpan(day) {
	              return _this2.isInSelectedSpan(day);
	            }

	            return selectedSpan;
	          }()
	        };

	        var onOutsideClick = withPortal ? this.onOutsideClick : function () {};

	        return _react2['default'].createElement('div', { className: this.getDayPickerContainerClasses() }, _react2['default'].createElement(_DayPicker2['default'], {
	          ref: function () {
	            function ref(_ref) {
	              _this2.dayPicker = _ref;
	            }

	            return ref;
	          }(),
	          orientation: orientation,
	          enableOutsideDays: enableOutsideDays,
	          modifiers: modifiers,
	          numberOfMonths: numberOfMonths,
	          onDayMouseEnter: this.onDayMouseEnter,
	          onDayMouseLeave: this.onDayMouseLeave,
	          onDayMouseDown: this.onDayClick,
	          onDayTouchTap: this.onDayClick,
	          onPrevMonthClick: onPrevMonthClick,
	          onNextMonthClick: onNextMonthClick,
	          monthFormat: monthFormat,
	          withPortal: withPortal || withFullScreenPortal,
	          onOutsideClick: onOutsideClick
	        }), withFullScreenPortal && _react2['default'].createElement('button', {
	          className: 'DateRangePicker__close',
	          type: 'button',
	          onClick: this.onOutsideClick
	        }, _react2['default'].createElement('span', { className: 'screen-reader-only' }, this.props.phrases.closeDatePicker), _react2['default'].createElement(_close2['default'], null)));
	      }

	      return renderDayPicker;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _props14 = this.props;
	        var startDate = _props14.startDate;
	        var endDate = _props14.endDate;
	        var focusedInput = _props14.focusedInput;
	        var showClearDates = _props14.showClearDates;
	        var disabled = _props14.disabled;
	        var startDateId = _props14.startDateId;
	        var endDateId = _props14.endDateId;
	        var phrases = _props14.phrases;
	        var withPortal = _props14.withPortal;
	        var withFullScreenPortal = _props14.withFullScreenPortal;

	        var startDateString = (0, _toLocalizedDateString2['default'])(startDate);
	        var endDateString = (0, _toLocalizedDateString2['default'])(endDate);

	        var onOutsideClick = !withPortal && !withFullScreenPortal ? this.onOutsideClick : function () {};

	        return _react2['default'].createElement('div', { className: 'DateRangePicker' }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_DateRangePickerInput2['default'], {
	          startDateId: startDateId,
	          startDatePlaceholderText: this.props.startDatePlaceholderText,
	          isStartDateFocused: focusedInput === _constants.START_DATE,
	          endDateId: endDateId,
	          endDatePlaceholderText: this.props.endDatePlaceholderText,
	          isEndDateFocused: focusedInput === _constants.END_DATE,
	          onStartDateChange: this.onStartDateChange,
	          onStartDateFocus: this.onStartDateFocus,
	          onStartDateShiftTab: this.onClearFocus,
	          onEndDateChange: this.onEndDateChange,
	          onEndDateFocus: this.onEndDateFocus,
	          onEndDateTab: this.onClearFocus,
	          startDate: startDateString,
	          endDate: endDateString,
	          showClearDates: showClearDates,
	          onClearDates: this.clearDates,
	          disabled: disabled,
	          phrases: phrases
	        }), this.maybeRenderDayPickerWithPortal()));
	      }

	      return render;
	    }()
	  }]);

	  return DateRangePicker;
	}(_react2['default'].Component);

	exports['default'] = DateRangePicker;

	DateRangePicker.propTypes = propTypes;
	DateRangePicker.defaultProps = defaultProps;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = require("../constants");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	module.exports = require("../utils/isTouchDevice");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-portal");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("array-includes");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("../utils/toMomentObject");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("../utils/toLocalizedDateString");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("../utils/isInclusivelyAfterDay");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("../utils/isInclusivelyBeforeDay");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("../utils/isNextDay");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("../utils/isSameDay");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("./OutsideClickHandler");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("./DateRangePickerInput");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("./DayPicker");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: "render",
	    value: function () {
	      function render() {
	        return _react2["default"].createElement(
	          "svg",
	          _extends({ viewBox: "0 0 12 12" }, this.props),
	          _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("../shapes/DateRangePickerShape");

/***/ }
/******/ ]);