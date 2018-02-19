const each = require('jest-each');
const largestPrimeFactors = require('../src/largestPrimeFactors');

each ([
	[13195, 29],
	[42, 7],
	]).describe('.largestPrimeFactors(%s)',(a, expected) => {
	test('return ${expected}', () => {
		expect(largestPrimeFactors(a)).toBe(expected);
	})
})