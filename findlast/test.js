const assert = require('assert');
const { findlast } = require('./index');
const { testArrayMethodCallback } = require('../shared/test/array-method-callback.test');

describe('findlast()', () => {
    it('Вернулся элемент удовлетворяющий условию функции callback', () => {
        assert.equal(findlast([4, 22, 3, 40, 4], el => el > 20), 40);
    });
    it('Элемента удовлетворяющиго условию функции callback нет', () => {
        assert.equal(findlast([4, 2, 3, 1, 4], el => false), undefined);
    });
    it('Вернулся элемент удовлетворяющий условию функции callback', () => {
        assert.equal(findlast(['a', 'b', 'c', 'b', 'd'], el => el === 'b'), 'b');
    });
    testArrayMethodCallback(findlast);
});
