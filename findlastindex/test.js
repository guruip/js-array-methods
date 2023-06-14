const assert = require('assert');
const { findLastIndex } = require('./index');
const { testArrayMethodCallback } = require('../shared/test/array-method-callback.test');

describe('findLastIndex()', () => {
    it('Вернулся элемент удовлетворяющий условию функции callback', () => {
        assert.equal(findLastIndex([4, 22, 3, 40, 4], el => el > 20), 3);
    });
    it('Элемента удовлетворяющиго условию функции callback нет', () => {
        assert.equal(findLastIndex([4, 2, 3, 1, 4], el => false), - 1);
    });
    it('Вернулся элемент удовлетворяющий условию функции callback', () => {
        assert.equal(findLastIndex(['a', 'b', 'c', 'b', 'd'], el => el === 'b'), 3);
    });
    testArrayMethodCallback(findLastIndex);
});
