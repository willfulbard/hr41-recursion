// Recursion Problems
// Assigned by Laura Weaver
// HR41

// classicFibonacci takes the end number as a parameter.
// 
// NOTE: to pass the "must use recursion" check in the test environment, 
// you must use recursion on the classicFibonacci function itself. Thus, inner function recursion won't trigger it. 
var classicFibonacci = function(endNumber) {
  if (endNumber === 0) {
    return 0
  }

  if (endNumber <= 1) {
    return 1
  }

  return classicFibonacci(endNumber - 2) + classicFibonacci(endNumber - 1);

};

// Takes a starting number and multiplies it by one less than itself until 0. 
// Thus, 1×2×3×4 = 24; factorial(4) === 24;
//
// NOTE: to pass the "must use recursion" check in the test environment, 
// you must use recursion on the factorial function itself. Thus, inner function recursion won't trigger it. 
var factorial = function(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Takes a multidimensional array and converts it to a one-dimensional array.
// The new array should contain all elements of the multidimensional array.
//
// Hint: Use Array.isArray to check if something is an array
var flatten = function(array){
  var result = [];

  var flattenRecurse = function(array) {
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) === true) {
        flattenRecurse(array[i]);
      } else {
        result.push(array[i]);
      }
    }
  };
  flattenRecurse(array);
  return result;
};

// Takes DOM to be checked and the tag you are looking to count as parameters. 
// Thus, tagCount(document.body, 'SPAN');
//
// BONUS if it defaults to document.body if there is only one argument. 
var tagCount = function(givenDOM, tagName) {
  var count = arguments[2];
  if (arguments[2] === undefined) {
    count = 0;
  }

  if (arguments.length === 1) {
    tagName = arguments[0];
    givenDOM = document.body;
  }
  
  if (givenDOM.nodeType !== Node.ELEMENT_NODE) {
    return count;
  }

  if (givenDOM.nodeName === tagName) {
    count++;
  }

  var childNodes = givenDOM.childNodes;
  for (var prop in childNodes) {
    count = tagCount(childNodes[prop], tagName, count);
  }
  return count;
};

// Takes a ordered list of integers as its argument. 
// Should start from the middle and move outwards. 
// For inspiration: http://interactivepython.org/runestone/static/pythonds/SortSearch/TheBinarySearch.html
var searchBinary = function(orderedList, item) {
  if (orderedList.length === 0) {
    return false;
  }

  var middle = Math.floor(orderedList.length / 2);
  var middleItem = orderedList[middle];

  if (item === middleItem) {
    return true;
  }
  
  if (orderedList.length === 1) {
    return false;
  }

  if (item < middleItem) {
    return searchBinary(orderedList.slice(0,middle));
  } else {
    return searchBinary(orderedList.slice(middle+1));
  }

};


// Additional problems for consideration

// Same as factorial, but instead of returning the n!,
// it returns the array of factorial numbers up to (and including) n! 
// NOTE: One may remove the result argument, and write in a private closure function instead.
var factorialArray = function(num) {
  if (num < 0) {
    return undefined;
  }
  var result = [];
  var _recurseFactorial = function (num) {
    if (num >= 0) {
      result.unshift(factorial(num));
      _recurseFactorial(num - 1);
    }
  };

  _recurseFactorial(num);
  return result;
};
