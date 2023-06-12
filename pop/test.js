const assert = require('assert');
const { pop } = require('./index');

describe('pop()', () => {
    it('Длина массива изменилась', () => {
        const array = ['a', 'b', 'c', 'd'];

        pop(array);
        assert.equal(array.length, 3);
    });
    it('Функция возвращает элемент', () => {
        assert.equal(pop(['a', 'b', 'c', 'd']), 'd');
    });
    it('Массив изменяется ожидаемо', () => {
        const array = ['a', 'b', 'c', 'd'];

        pop(array);
        assert.deepEqual(array, ['a', 'b', 'c']);
    });
    it('Массив пуст', () => {
        assert.equal(pop([]), undefined);
    });
});
