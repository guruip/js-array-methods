const assert = require('assert');
const { reduceRight } = require('./index');

describe('reduceRight()', () => {
    it('Вычислить сумму чисел массива с initialValue = 0', () => {
        assert.equal(reduceRight([1, 2, 3, 4], (prev, next) => prev + next, 0), 10);
    });
    it('Вычислить сумму чисел массива с initialValue = 5', () => {
        assert.equal(reduceRight([1, 2, 3, 4], (prev, next) => prev + next, 5), 15);
    });
    it('Вычислить сумму чисел массива без initialValue', () => {
        assert.equal(reduceRight([1, 2, 3, 4], (prev, next) => prev + next), 10);
    });
});
