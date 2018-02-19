function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  }

  var sq = Math.ceil(Math.sqrt(num));

  for (var i = 3; i <= sq; i+=2) {
    if (num % i === 0) {
      return false;
    } 
  }
  return true;
}



function largestPrimeFactors(num) {
  var arrayPrime =[],
      loopPrime;

  for(i = 2; i < num; i++){
    if (num % i === 0) {
      loopPrime = isPrime(i);

      if (loopPrime === true) {
        arrayPrime.push(i);
      }
    }  
  }
  var maxNumPrime = Math.max.apply(null, arrayPrime); 
  return maxNumPrime;
}

module.exports = largestPrimeFactors;

