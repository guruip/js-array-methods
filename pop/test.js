const assert = require('assert');
const { pop } = require('./index');

describe('pop()', () => {
    it('Длина массива изменилась', () => {
        assert.equal(pop([1, 2, 3].length), 2);
    });
    it('Длина массива не изменилась', () => {
        assert.equal(pop([]).length, 0);
    });
});
