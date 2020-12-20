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
    //   Let Pk be ! ToString(k).
    // Let kPresent be ? HasProperty(O, Pk).
    // If kPresent is true, then
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


// export {
//   forEach,
//   map,
//   filter,
//   reduce,
// }