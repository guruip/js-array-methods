const assert = require('assert');
const { indexOf } = require('./index');

describe('indexOf()', () => {
    it('Элемент существует в массиве. Вернется его индекс', () => {
        assert.equal(indexOf([1, 2, 3, 4], 3), 2)
    });
    it('Элемент отсутствует в массиве. Вернется -1', () => {
        assert.equal(indexOf([1, 2, 3, 4], 5), -1)
    });
    it('Массив пустой. Вернется -1', () => {
        assert.equal(indexOf([], 5), -1)
    });
    it('В мссиве 2 искомых элемента. Вернется первый по индексу', () => {
        assert.equal(indexOf([1, 2, 5, 3, 5], 5), 2)
    });
});