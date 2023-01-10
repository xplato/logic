var react = require('react');

var interweave = function interweave(_ref, values) {
  var key = _ref[0],
    extras = _ref.slice(1);
  if (values === void 0) {
    values = [];
  }
  return key === undefined ? values : [key].concat(interweave(values, extras));
};
var range = function range(start, end, step) {
  if (step === void 0) {
    step = 1;
  }
  return Array.from({
    length: (end - start) / step + 1
  }, function (_, i) {
    return start + i * step;
  });
};

var removeWhitespaceAndMakeLowerCase = function removeWhitespaceAndMakeLowerCase(str) {
  return str.toLowerCase().replace(/\s/g, "");
};
var kebabize = function kebabize(str) {
  return str.replaceAll(" ", "-").split("").map(function (letter, index) {
    if (letter === "-") {
      return "-";
    }
    return letter.toUpperCase() === letter ? "" + (index !== 0 ? "-" : "") + letter.toLowerCase() : letter;
  }).join("");
};
var toSlug = function toSlug(str) {
  return str.replaceAll(" ", "-").toLowerCase();
};
var capitalize = function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

var generateMods = function generateMods(mods) {
  var keys = Object.keys(mods);
  if (keys.length === 0) {
    return "";
  }
  return keys.map(function (key) {
    var value = mods[key];
    if (value === true) {
      return kebabize(key);
    }
    if (!value) {
      return "";
    }
    return kebabize(key) + "-" + (typeof value === "number" ? value : kebabize(value));
  });
};
var smoothScrollTo = function smoothScrollTo(elementID) {
  var element = document.getElementById(elementID);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
};

var omitFields = function omitFields(object, fields) {
  return Object.assign({}, object, Object.assign.apply(Object, [{}].concat(fields.map(function (key) {
    var _ref;
    return _ref = {}, _ref[key] = undefined, _ref;
  }))));
};

var useDynamicPanel = function useDynamicPanel() {
  var ref = react.useRef(null);
  var _useState = react.useState(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  var handleWindowClick = function handleWindowClick(ev) {
    var _ref$current;
    if (ref.current && typeof ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains) === "function" && !ref.current.contains(ev.target)) {
      close(ev);
    }
  };
  react.useEffect(function () {
    if (typeof window !== "undefined" && ref.current && isOpen) {
      window.addEventListener("click", handleWindowClick);
    }
    return function () {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [ref.current, isOpen]);
  var open = function open(ev) {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(true);
  };
  var close = function close(ev) {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(false);
  };
  var toggle = function toggle(ev) {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(function (isOpen) {
      return !isOpen;
    });
  };
  return {
    ref: ref,
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle
  };
};

var usePrevious = function usePrevious(value) {
  var ref = react.useRef();
  react.useEffect(function () {
    ref.current = value;
  }, []);
  return ref.current;
};

exports.capitalize = capitalize;
exports.generateMods = generateMods;
exports.interweave = interweave;
exports.kebabize = kebabize;
exports.omitFields = omitFields;
exports.range = range;
exports.removeWhitespaceAndMakeLowerCase = removeWhitespaceAndMakeLowerCase;
exports.smoothScrollTo = smoothScrollTo;
exports.toSlug = toSlug;
exports.useDynamicPanel = useDynamicPanel;
exports.usePrevious = usePrevious;
//# sourceMappingURL=index.js.map
