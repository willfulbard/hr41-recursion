// Recursion Test Specs
// Recursion Problems by Laura Weaver 
// HR41

var htmlStrings = [
  '<div id="targetHTML"><article class="targetArticle"><article class="targetArticle"></article></article><article class="targetArticle"></article></div>'
];

describe('Recursion', function(){
  describe('classicFibonacci', function(){
    it('Should match the results of the Fibonacci Sequence.', function(){
        var expected = 12586269025;
        var result = classicFibonacci(50);
        expect(result).to.equal(expected);
        expect(classicFibonacci(20)).to.equal(6765);
    });
  });

  describe('factorial', function(){
    it('Should return factorial of that number.', function(){
        var expected = 720;
        var result = factorial(6);
        expect(expected).to.equal(result);
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
    // But a demonstration of its usefulness is nice. 
    it('Should match results of getElementsByClassName.length', function(){
      htmlStrings.forEach(function(htmlString){
        var $rootElement = $(htmlString);
        $('body').append($rootElement);

        var result = tagCount(document.body, 'article');
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
        expect(expected).to.equal(result);
    });

    it('Should return true when found.', function(){
        var expected = true;
        var result = searchBinary(testlist, 13);
        expect(expected).to.equal(result);
    });
  });

});

