const assert = require('assert');
const { includes } = require('./index');

describe('includes()', () => {
    it('Элемент существует в массиве', () => {
        assert.equal(includes([1, 2, 3], 2), true);
    });
    it('Элемента не существует в массиве', () => {
        assert.equal(includes([1, 2, 3], 4), false);
    });
    it('Пустой массив', () => {
        assert.equal(includes([], 3), false);
    });
});
