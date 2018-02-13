function isPrime(number) {
  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  var y = Math.sqrt(number);
  var x = Math.ceil(y);

  for (var i = 3; i <= x; i+=2) {
    if (number % i === 0) {
      return false;
    } 
  }
  return true;
}

function numMax(arrayNumber) {
  var text = Math.max.apply(null,arrayNumber);
  return text;
}

function largestPrimeFactors(number) {
  var arrayPrime =[],
      boolean;

  for(i = 2; i < number; i++){
    if (number % i===0) {
      boolean = isPrime (i);

      if (boolean === true) {
        arrayPrime.push(i);
      }
    }  
  }
  var numPrime = arrayPrime; 
  return numMax(numPrime);
}

module.exports = largestPrimeFactors;

