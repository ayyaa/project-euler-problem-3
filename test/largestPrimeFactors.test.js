const largestPrimeFactors = require('../src/largestPrimeFactors');

test('largest prime factor from 13195 is 29', () => {
  expect(largestPrimeFactors(13195)).toBe(29);
})

