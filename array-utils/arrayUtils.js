const forEach = function (callback, thisArg) {
  // Let O be ? ToObject(this value).
  let O = Object(this);
  // Let len be ? ToLength(? Get(O, "length")).
  let len = O.length;
  //  If IsCallable(callbackfn) is false, throw a TypeError exception.
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' must be a function');
  }
  //  If thisArg is present, let T be thisArg; else let T be undefined.
  let T = thisArg || undefined;
  //  Let k be 0.
  let k = 0;
  //Repeat, while k < len
  while (k < len) {
    // Let Pk be ! ToString(k).
    // Let kPresent be ? HasProperty(O, Pk).
    // If kPresent is true, then
    //  Pk = String(k);
    // kPresent = O.hasOwnProperty(Pk);

    if (k in O) {
      // Let kValue be ? Get(O, Pk).
      let kValue = O[k];
      // Perform ? Call(callbackfn, T, « kValue, k, O »).
      callback.call(T, kValue, k, O);
    }
    // Increase k by 1.
    k++;
  }
}

const map = function (callback, thisArg) {
  // Let O be ? ToObject(this value).
  let O = Object(this);
  // Let len be ? ToLength(? Get(O, "length")).
  let len = O.length;
  //  If IsCallable(callbackfn) is false, throw a TypeError exception.
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' must be a function');
  }
  //  If thisArg is present, let T be thisArg; else let T be undefined.
  let T = thisArg || undefined;
  //  Let A be ? ArraySpeciesCreate(O, len).
  let A = new Array(len);
  // Let k be 0.
  let k = 0;
  // Repeat, while k < len
  while (k < len) {
    // Let Pk be ! ToString(k).
    // Let kPresent be ? HasProperty(O, Pk).
    // If kPresent is true, then
    if (k in O) {
      // Let kValue be ? Get(O, Pk).
      let kValue = O[k];
      // Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
      let mappedValue = callback.call(T, kValue, k, O);

      // Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
      A[k] = mappedValue;

    }
    // Increase k by 1.
    k++;
  }
  // Return A. 
  return A;

}

const filter = function (callback, thisArg) {
  // Let O be ? ToObject(this value).
  let O = Object(this);
  // Let len be ? ToLength(? Get(O, "length")).
  let len = O.length;
  //  If IsCallable(callbackfn) is false, throw a TypeError exception.
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' must be a function');
  }
  //  If thisArg is present, let T be thisArg; else let T be undefined.
  let T = thisArg || undefined;
  //  Let A be ? ArraySpeciesCreate(O, len).
  let A = new Array(0);
  // Let k be 0.
  let k = 0;
  // Let to be 0.
  let to = 0;
  // Repeat, while k < len
  while (k < len) {
    // Let Pk be ! ToString(k).
    // Let kPresent be ? HasProperty(O, Pk).
    // If kPresent is true, then
    if (k in O) {
      // Let kValue be ? Get(O, Pk).
      let kValue = O[k];
      // Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
      if (callback.call(T, kValue, k, O)) {
        // f selected is true, then
        // Perform ? CreateDataPropertyOrThrow(A, ! ToString(to), kValue).
        A[to] = kValue;
        // Increase to by 1.
        to++;
      }
    }
    // Increase k by 1.
    k++;
  }
  return A;

}

const reduce = function (callback, initialValue) {
  // Let O be ? ToObject(this value).
  let O = Object(this);
  // Let len be ? ToLength(? Get(O, "length")).
  let len = O.length;
  // If IsCallable(callbackfn) is false, throw a TypeError exception.
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' must be a function');
  }
  // If len is 0 and initialValue is not present, throw a TypeError exception.
  if (len === 0 && !initialValue) {
    throw new TypeError('We need an initial value');
  }
  // Let k be 0.
  let k = 0;
  // Let accumulator be undefined.
  let accumulator;
  let kPresent;
  if (initialValue) {
    accumulator = intialValue;
  } else {
    // Let kPresent be false.
    kPresent = false;
    // Repeat, while kPresent is false and k < len
    while (!kPresent && k < len) {
      // Let Pk be ! ToString(k).
      Pk = String(k);
      // Set kPresent to ? HasProperty(O, Pk).
      kPresent = O.hasOwnProperty(Pk);

      if (kPresent) {
        // If kPresent is true, then

        // Set accumulator to ? Get(O, Pk).
        accumulator = O[Pk];
      }
      // increase k by 1.
      k++;
    }
    // If kPresent is false, throw a TypeError exception.
    if (!kPresent) {
      throw new TypeError('No intial value');
    }
  }
  // Repeat, while k < len
  while (k < len) {
    // Let Pk be ! ToString(k).
    // Let kPresent be ? HasProperty(O, Pk).
    // If kPresent is true, then
    if (k in O) {
      // Let kValue be ? Get(O, Pk).
      let kValue = O[k];
      // Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
      accumulator = callback(accumulator, kValue, k, O);
    }
    // Increase k by 1.
    k++;
  }
  // Return accumulator. 
  return accumulator;
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
}