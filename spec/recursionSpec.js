// Recursion Test Specs
// Recursion Problems by Laura Weaver 
// HR41

var htmlStrings = [
  '<div id="targetHTML"><article class="targetArticle"><article class="targetArticle"></article></article><article class="targetArticle"></article></div>'
];

describe('Recursion', function(){
  describe('classicFibonacci', function(){
    it('Should match the results of the Fibonacci Sequence.', function(){
        var expected = 2584;
        var result = classicFibonacci(18);
        expect(result).to.equal(expected);
        expect(classicFibonacci(20)).to.equal(6765);
    });

    it('Should use recursion.', function(){
      var originalFibonacci = classicFibonacci;
      classicFibonacci = sinon.spy(classicFibonacci);
      classicFibonacci(10);

      var fibonacciCallSize = classicFibonacci.callCount >= 2;
 
      expect(fibonacciCallSize).to.equal(true);
    });
  });

  describe('factorial', function(){
    it('Should return factorial of input number.', function(){
        var expected = 720;
        var result = factorial(6);
        expect(result).to.equal(expected);
    });

    it('Should use recursion.', function(){
      var originalFactorial = factorial;
      factorial = sinon.spy(factorial);
      factorial(8);

      var factorialCallSize = factorial.callCount >= 2;
 
      expect(factorialCallSize).to.equal( true );
      });
  });

  describe('flatten', function() {
    it('Can flatten nested arrays', function() {
      var nestedArray = [1, [2], [3, [[[4]]]]];

      expect(flatten(nestedArray)).to.eql([1,2,3,4]);
    });
  });

  describe('tagCount', function(){

    //Yes, we could totally use getElementsByTagName to find this as well.
    // But a demonstration of getElementsByClassName's usefulness is nice. 
    it('Should count total type of elements within DOM.', function(){
      htmlStrings.forEach(function(htmlString){
        var $rootElement = $(htmlString);
        $('body').append($rootElement);

        var result = tagCount(document.body, 'ARTICLE');
        var expected = document.getElementsByClassName('targetArticle').length;
        expect(result).to.equal(expected);

        $rootElement.remove();
      });
      $('body').removeClass('targetClassName');
    });
  });

  describe('searchBinary', function(){
    var testlist = [0, 1, 2, 8, 13, 17, 19, 32, 42,];

    it('Should return false when not found.', function(){
        var expected = false;
        var result = searchBinary(testlist, 3);
        expect(result).to.equal(expected);
    });

    it('Should return true when found.', function(){
        var expected = true;
        var result = searchBinary(testlist, 13);
        expect(result).to.equal(expected);
    });
  });

});

