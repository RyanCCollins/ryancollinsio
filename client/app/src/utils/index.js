export default class Functors {
  static Identity = x => ({
    map: f => Functors.Identity(f(x)),
    fold: f => f(x),
    inspect: () => `Functors.Identity(${x})`,
  });
  static Right = x => ({
    map: f => Functors.Right(f(x)),
    fold: (_, g) => g(x),
    inspect: () => `Functors.Right(${x})`,
  });
  static Left = x => ({
    map: () => Functors.Left(x),
    fold: f => f(x),
    inspect: () => `Functors.Left(${x})`,
  });
  static Sum = x => ({
    x,
    concat: ({ x: y }) =>
      Functors.Sum(x + y),
    inspect: () => `Functors.Sum(${x})`,
  });
  static All = x => ({
    x,
    concat: ({ x: y }) =>
      Functors.All(x && y),
    inspect: () => `Functors.All(${x})`,
  });
  static First = x => ({
    x,
    concat: () =>
      Functors.First(x),
    inspect: () => `Functors.First(${x})`,
  });
}

/* eslint-disable */
export function findScrollParents (element, horizontal) {
  var result = [];
  var parent = element.parentNode;
  while (parent && parent.getBoundingClientRect) {
    var rect = parent.getBoundingClientRect();
    // 10px is to account for borders and scrollbars in a lazy way
    if (horizontal) {
      if (rect.width && parent.scrollWidth > (rect.width + 10)) {
        result.push(parent);
      }
    } else {
      if (rect.height && parent.scrollHeight > (rect.height + 10)) {
        result.push(parent);
      }
    }
    parent = parent.parentNode;
  }
  if (result.length === 0) {
    result.push(document);
  }
  return result;
}

export function debounce(func, wait = 100, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
/* eslint-disable-line */
