const assert = require('assert');
const { map } = require('./index');
const { testArrayMethodCallback } = require('../shared/test/array-method-callback.test');

describe('map()', () => {
    it('Элементы массива возводятся в куб', () => {
        assert.deepEqual(map([1, 2, 3], el => {
            return el ** 3;
        }), [1, 8, 27]);
    });
    it('Массив пуст', () => {
        assert.deepEqual(map([], () => {
            return null;
        }), []);
    });
    testArrayMethodCallback(map);
});
