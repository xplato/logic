import { useRef, useState, useEffect } from 'react';

const removeWhitespaceAndMakeLowerCase = str => {
  return str.toLowerCase().replace(/\s/g, "");
};
const kebabize = str => {
  return str.replaceAll(" ", "-").split("").map((letter, index) => {
    if (letter === "-") {
      return "-";
    }
    return letter.toUpperCase() === letter ? `${index !== 0 ? "-" : ""}${letter.toLowerCase()}` : letter;
  }).join("");
};
const toSlug = str => {
  return str.replaceAll(" ", "-").toLowerCase();
};
const capitalize = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const generateMods = mods => {
  const keys = Object.keys(mods);
  if (keys.length === 0) {
    return "";
  }
  return keys.map(key => {
    const value = mods[key];
    if (value === true) {
      return kebabize(key);
    }
    if (!value) {
      return "";
    }
    return `${kebabize(key)}-${typeof value === "number" ? value : kebabize(value)}`;
  });
};
const smoothScrollTo = elementID => {
  const element = document.getElementById(elementID);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
};

const omitFields = (object, fields) => {
  return Object.assign({}, object, Object.assign({}, ...fields.map(key => ({
    [key]: undefined
  }))));
};

const useDynamicPanel = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleWindowClick = ev => {
    var _ref$current;
    if (ref.current && typeof ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains) === "function" && !ref.current.contains(ev.target)) {
      close(ev);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined" && ref.current && isOpen) {
      window.addEventListener("click", handleWindowClick);
    }
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [ref.current, isOpen]);
  const open = ev => {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(true);
  };
  const close = ev => {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(false);
  };
  const toggle = ev => {
    if (ev) {
      ev.stopPropagation();
    }
    setIsOpen(isOpen => !isOpen);
  };
  return {
    ref,
    isOpen,
    open,
    close,
    toggle
  };
};

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, []);
  return ref.current;
};

export { capitalize, generateMods, kebabize, omitFields, removeWhitespaceAndMakeLowerCase, smoothScrollTo, toSlug, useDynamicPanel, usePrevious };
//# sourceMappingURL=index.modern.js.map
