const assert = require('assert');
const { reduce } = require('./index');

describe('reduce()', () => {
    it('Вычислить сумму чисел массива с initialValue = 0', () => {
        assert.equal(reduce([1, 2, 3, 4], (prev, next) => prev + next, 0), 10);
    });
    it('Вычислить сумму чисел массива с initialValue = 5', () => {
        assert.equal(reduce([1, 2, 3, 4], (prev, next) => prev + next, 5), 15);
    });
    it('Вычислить сумму чисел массива без initialValue', () => {
        assert.equal(reduce([1, 2, 3, 4], (prev, next) => prev + next), 10);
    });
});
