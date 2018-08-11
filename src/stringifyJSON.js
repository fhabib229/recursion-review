// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // test string concatentation as method for passing first test
  // let arr = [{'a': 'apple'}];
  // let firstVal = 'Fill me in.';
  // return arr + '';

  // if obj === typeof string
    // return '"' + obj + '"';

  // if obj === null
    // do something
  // if obj === function
    // do something

  // when obj === object literal, collect key and value pairs by iterating through obj
  if (!Array.isArray(obj)) {
    var stringObj = '{';
    var objKeys = Object.keys(obj);
    for (var key in obj) {
      var stringKey = stringifyJSON(key);
      var stringValue = stringifyJSON(obj[key]);

      stringObj.concat(stringKey, stringValue);

      if (key === objKeys[objKeys.length - 1]) {
        stringObj.concat('}');
      }
    }
    return stringObj;
  }
    // declaring variable that is set equal to '{'
    // call stringifyJSON on key value pairs and concatenate onto our variable
    // use array to store keys for referencing how many key value pairs are in obj using Object.keys(obj)
      // if key === arr[arr.length -1 ]
        // end with '}'
        // return variable
};
