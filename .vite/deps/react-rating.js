import {
  __toESM,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/react-rating/lib/react-rating.esm.js
var import_react = __toESM(require_react());
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
var style = {
  display: "inline-block",
  borderRadius: "50%",
  border: "5px double white",
  width: 30,
  height: 30
};
var Style = {
  empty: _objectSpread({}, style, {
    backgroundColor: "#ccc"
  }),
  full: _objectSpread({}, style, {
    backgroundColor: "black"
  }),
  placeholder: _objectSpread({}, style, {
    backgroundColor: "red"
  })
};
var _iconNode = function _iconNode2(icon) {
  if (import_react.default.isValidElement(icon)) {
    return icon;
  }
  if (_typeof(icon) === "object" && icon !== null) {
    return import_react.default.createElement("span", {
      style: icon
    });
  }
  if (Object.prototype.toString.call(icon) === "[object String]") {
    return import_react.default.createElement("span", {
      className: icon
    });
  }
};
var RatingSymbol = function(_React$PureComponent) {
  _inherits(RatingSymbol2, _React$PureComponent);
  function RatingSymbol2() {
    _classCallCheck(this, RatingSymbol2);
    return _possibleConstructorReturn(this, _getPrototypeOf(RatingSymbol2).apply(this, arguments));
  }
  _createClass(RatingSymbol2, [{
    key: "render",
    value: function render() {
      var _iconContainerStyle;
      var _this$props = this.props, index = _this$props.index, inactiveIcon = _this$props.inactiveIcon, activeIcon = _this$props.activeIcon, percent = _this$props.percent, direction = _this$props.direction, readonly = _this$props.readonly, onClick = _this$props.onClick, onMouseMove = _this$props.onMouseMove;
      var backgroundNode = _iconNode(inactiveIcon);
      var showbgIcon = percent < 100;
      var bgIconContainerStyle = showbgIcon ? {} : {
        visibility: "hidden"
      };
      var iconNode = _iconNode(activeIcon);
      var iconContainerStyle = (_iconContainerStyle = {
        display: "inline-block",
        position: "absolute",
        overflow: "hidden",
        top: 0
      }, _defineProperty(_iconContainerStyle, direction === "rtl" ? "right" : "left", 0), _defineProperty(_iconContainerStyle, "width", "".concat(percent, "%")), _iconContainerStyle);
      var style2 = {
        cursor: !readonly ? "pointer" : "inherit",
        display: "inline-block",
        position: "relative"
      };
      function handleMouseMove(e) {
        if (onMouseMove) {
          onMouseMove(index, e);
        }
      }
      function handleMouseClick(e) {
        if (onClick) {
          e.preventDefault();
          onClick(index, e);
        }
      }
      return import_react.default.createElement("span", {
        style: style2,
        onClick: handleMouseClick,
        onMouseMove: handleMouseMove,
        onTouchMove: handleMouseMove,
        onTouchEnd: handleMouseClick
      }, import_react.default.createElement("span", {
        style: bgIconContainerStyle
      }, backgroundNode), import_react.default.createElement("span", {
        style: iconContainerStyle
      }, iconNode));
    }
  }]);
  return RatingSymbol2;
}(import_react.default.PureComponent);
var Rating = function(_React$PureComponent) {
  _inherits(Rating2, _React$PureComponent);
  function Rating2(props) {
    var _this;
    _classCallCheck(this, Rating2);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rating2).call(this, props));
    _this.state = {
      // Indicates the value that is displayed to the user in the form of symbols.
      // It can be either 0 (for no displayed symbols) or (0, end]
      displayValue: _this.props.value,
      // Indicates if the user is currently hovering over the rating element
      interacting: false
    };
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.symbolMouseMove = _this.symbolMouseMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.symbolClick = _this.symbolClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  _createClass(Rating2, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var valueChanged = this.props.value !== nextProps.value;
      this.setState(function(prevState) {
        return {
          displayValue: valueChanged ? nextProps.value : prevState.displayValue
        };
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.value !== this.props.value) {
        return;
      }
      if (prevState.interacting && !this.state.interacting) {
        return this.props.onHover();
      }
      if (this.state.interacting) {
        this.props.onHover(this.state.displayValue);
      }
    }
  }, {
    key: "symbolClick",
    value: function symbolClick(symbolIndex, event) {
      var value = this.calculateDisplayValue(symbolIndex, event);
      this.props.onClick(value, event);
    }
  }, {
    key: "symbolMouseMove",
    value: function symbolMouseMove(symbolIndex, event) {
      var value = this.calculateDisplayValue(symbolIndex, event);
      this.setState({
        interacting: !this.props.readonly,
        displayValue: value
      });
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this.setState({
        displayValue: this.props.value,
        interacting: false
      });
    }
  }, {
    key: "calculateDisplayValue",
    value: function calculateDisplayValue(symbolIndex, event) {
      var percentage = this.calculateHoverPercentage(event);
      var fraction = Math.ceil(percentage % 1 * this.props.fractions) / this.props.fractions;
      var precision = Math.pow(10, 3);
      var displayValue = symbolIndex + (Math.floor(percentage) + Math.floor(fraction * precision) / precision);
      return displayValue > 0 ? displayValue > this.props.totalSymbols ? this.props.totalSymbols : displayValue : 1 / this.props.fractions;
    }
  }, {
    key: "calculateHoverPercentage",
    value: function calculateHoverPercentage(event) {
      var clientX = event.nativeEvent.type.indexOf("touch") > -1 ? event.nativeEvent.type.indexOf("touchend") > -1 ? event.changedTouches[0].clientX : event.touches[0].clientX : event.clientX;
      var targetRect = event.target.getBoundingClientRect();
      var delta = this.props.direction === "rtl" ? targetRect.right - clientX : clientX - targetRect.left;
      return delta < 0 ? 0 : delta / targetRect.width;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, readonly = _this$props.readonly, quiet = _this$props.quiet, totalSymbols = _this$props.totalSymbols, value = _this$props.value, placeholderValue = _this$props.placeholderValue, direction = _this$props.direction, emptySymbol = _this$props.emptySymbol, fullSymbol = _this$props.fullSymbol, placeholderSymbol = _this$props.placeholderSymbol, className = _this$props.className, id = _this$props.id, style2 = _this$props.style, tabIndex = _this$props.tabIndex;
      var _this$state = this.state, displayValue = _this$state.displayValue, interacting = _this$state.interacting;
      var symbolNodes = [];
      var empty = [].concat(emptySymbol);
      var full = [].concat(fullSymbol);
      var placeholder = [].concat(placeholderSymbol);
      var shouldDisplayPlaceholder = placeholderValue !== 0 && value === 0 && !interacting;
      var renderedValue;
      if (shouldDisplayPlaceholder) {
        renderedValue = placeholderValue;
      } else {
        renderedValue = quiet ? value : displayValue;
      }
      var fullSymbols = Math.floor(renderedValue);
      for (var i = 0; i < totalSymbols; i++) {
        var percent = void 0;
        if (i - fullSymbols < 0) {
          percent = 100;
        } else if (i - fullSymbols === 0) {
          percent = (renderedValue - i) * 100;
        } else {
          percent = 0;
        }
        symbolNodes.push(import_react.default.createElement(RatingSymbol, _extends({
          key: i,
          index: i,
          readonly,
          inactiveIcon: empty[i % empty.length],
          activeIcon: shouldDisplayPlaceholder ? placeholder[i % full.length] : full[i % full.length],
          percent,
          direction
        }, !readonly && {
          onClick: this.symbolClick,
          onMouseMove: this.symbolMouseMove,
          onTouchMove: this.symbolMouseMove,
          onTouchEnd: this.symbolClick
        })));
      }
      return import_react.default.createElement("span", _extends({
        id,
        style: _objectSpread({}, style2, {
          display: "inline-block",
          direction
        }),
        className,
        tabIndex,
        "aria-label": this.props["aria-label"]
      }, !readonly && {
        onMouseLeave: this.onMouseLeave
      }), symbolNodes);
    }
  }]);
  return Rating2;
}(import_react.default.PureComponent);
function noop() {
}
noop._name = "react_rating_noop";
var RatingAPILayer = function(_React$PureComponent) {
  _inherits(RatingAPILayer2, _React$PureComponent);
  function RatingAPILayer2(props) {
    var _this;
    _classCallCheck(this, RatingAPILayer2);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(RatingAPILayer2).call(this, props));
    _this.state = {
      value: props.initialRating
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  _createClass(RatingAPILayer2, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.initialRating
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(value, e) {
      var _this2 = this;
      var newValue = this.translateDisplayValueToValue(value);
      this.props.onClick(newValue);
      if (this.state.value !== newValue) {
        this.setState({
          value: newValue
        }, function() {
          return _this2.props.onChange(_this2.state.value);
        });
      }
    }
  }, {
    key: "handleHover",
    value: function handleHover(displayValue) {
      var value = displayValue === void 0 ? displayValue : this.translateDisplayValueToValue(displayValue);
      this.props.onHover(value);
    }
  }, {
    key: "translateDisplayValueToValue",
    value: function translateDisplayValueToValue(displayValue) {
      var translatedValue = displayValue * this.props.step + this.props.start;
      return translatedValue === this.props.start ? translatedValue + 1 / this.props.fractions : translatedValue;
    }
  }, {
    key: "tranlateValueToDisplayValue",
    value: function tranlateValueToDisplayValue(value) {
      if (value === void 0) {
        return 0;
      }
      return (value - this.props.start) / this.props.step;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, step = _this$props.step, emptySymbol = _this$props.emptySymbol, fullSymbol = _this$props.fullSymbol, placeholderSymbol = _this$props.placeholderSymbol, readonly = _this$props.readonly, quiet = _this$props.quiet, fractions = _this$props.fractions, direction = _this$props.direction, start = _this$props.start, stop = _this$props.stop, id = _this$props.id, className = _this$props.className, style2 = _this$props.style, tabIndex = _this$props.tabIndex;
      function calculateTotalSymbols(start2, stop2, step2) {
        return Math.floor((stop2 - start2) / step2);
      }
      return import_react.default.createElement(Rating, {
        id,
        style: style2,
        className,
        tabIndex,
        "aria-label": this.props["aria-label"],
        totalSymbols: calculateTotalSymbols(start, stop, step),
        value: this.tranlateValueToDisplayValue(this.state.value),
        placeholderValue: this.tranlateValueToDisplayValue(this.props.placeholderRating),
        readonly,
        quiet,
        fractions,
        direction,
        emptySymbol,
        fullSymbol,
        placeholderSymbol,
        onClick: this.handleClick,
        onHover: this.handleHover
      });
    }
  }]);
  return RatingAPILayer2;
}(import_react.default.PureComponent);
RatingAPILayer.defaultProps = {
  start: 0,
  stop: 5,
  step: 1,
  readonly: false,
  quiet: false,
  fractions: 1,
  direction: "ltr",
  onHover: noop,
  onClick: noop,
  onChange: noop,
  emptySymbol: Style.empty,
  fullSymbol: Style.full,
  placeholderSymbol: Style.placeholder
};
var react_rating_esm_default = RatingAPILayer;
export {
  react_rating_esm_default as default
};
//# sourceMappingURL=react-rating.js.map
