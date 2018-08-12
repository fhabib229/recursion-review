// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var acc = [];

  var search = function (element) {
    var classList = element.classList;
    var children = element.childNodes;

    _.each(classList, function(name) {
      console.log(name);
      if (name === className) {
        console.log('It goes here!');
        acc.push(element);
        console.log(JSON.stringify(acc));
      }
    });

    _.each(children, function(child) {
      search(child);
    });
  };

  search(body);

  return acc;
};
