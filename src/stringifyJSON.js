// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // test string concatentation as method for passing first test
  // let arr = [{'a': 'apple'}];
  // let firstVal = 'Fill me in.';
  // return arr + '';

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    let finalArr = [];

    for (var i = 0; i < obj.length; ++i) {
      finalArr.push(stringifyJSON(obj[i]));
    }
    return '[' + finalArr + ']';
  }
  // when obj === object literal, collect key and value pairs by iterating through obj
  if (!Array.isArray(obj) && typeof obj === 'object') {
    let finalObj = [];
    var stringObj = '{';
    var objKeys = Object.keys(obj);
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
        // console.log("Function is hitting here: ", obj);
      }
      var stringKey = stringifyJSON(key);
      var stringValue = stringifyJSON(obj[key]);


      if (key === objKeys[objKeys.length - 1]) {
        finalObj.push(stringKey + ':' + stringValue);
      } else {
        finalObj.push(stringKey + ':' + stringValue);
      }
    }
    return stringObj + finalObj + '}';
  }
  return '' + obj;

};
