const largestPrimeFactors = require('../src/largestPrimeFactors');

test('largest prime factor from 42 is 7', () => {
  expect(largestPrimeFactors(42)).toBe(7);
})

