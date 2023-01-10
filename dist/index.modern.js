import { useRef, useState, useEffect } from 'react';

const interweave = ([key, ...extras], values = []) => key === undefined ? values : [key, ...interweave(values, extras)];
const range = (start, end, step = 1) => {
  return Array.from({
    length: (end - start) / step + 1
  }, (_, i) => start + i * step);
};

const kebabize = str => {
  return str.replaceAll(" ", "-").split("").map((letter, index) => {
    if (letter === "-") {
      return "-";
    }
    return letter.toUpperCase() === letter ? `${index !== 0 ? "-" : ""}${letter.toLowerCase()}` : letter;
  }).join("");
};
const capitalize = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const generateMods = mods => {
  const keys = Object.keys(mods);
  if (keys.length === 0) {
    return [""];
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
  }).filter(Boolean);
};
const smoothScrollTo = elementID => {
  const element = document.getElementById(elementID);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
};

const deepCopy = object => {
  if (object === null || typeof object !== "object") {
    return object;
  }
  if (Array.isArray(object)) {
    return object.map(item => deepCopy(item));
  }
  const copiedObject = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      copiedObject[key] = deepCopy(object[key]);
    }
  }
  return copiedObject;
};
const omitFields = (object, fields) => {
  return Object.assign({}, object, Object.assign({}, ...fields.map(key => ({
    [key]: undefined
  }))));
};
const pickFields = (object, fields) => {
  const newObject = {};
  for (const field of fields) {
    newObject[field] = object[field];
  }
  return newObject;
};
const removeFields = (object, fields) => {
  const newObject = deepCopy(object);
  for (const field of fields) {
    delete newObject[field];
  }
  return newObject;
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
  if (ref.current) {
    return ref.current;
  }
  return value;
};

export { capitalize, deepCopy, generateMods, interweave, kebabize, omitFields, pickFields, range, removeFields, smoothScrollTo, useDynamicPanel, usePrevious };
//# sourceMappingURL=index.modern.js.map
