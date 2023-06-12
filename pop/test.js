const assert = require('assert');
const { pop } = require('./index');

describe('pop()', () => {
    it('Длина массива изменилась', () => {
        const array = ['a', 'b', 'c', 'd'];

        pop(array);
        assert.equal(array.length, 3);
    });
    it('Массив возвращает элемент', () => {
        assert.equal(pop(['a', 'b', 'c', 'd']), 'd');
    });
    it('Массив изменяется ожидаемо', () => {
        const array = ['a', 'b', 'c', 'd'];

        pop(array);
        assert.deepEqual(array, ['a', 'b', 'c']);
    });
    it('Возвращается тот же массив', () => {
        const array = ['a', 'b', 'c', 'd'];

        pop(array);
        assert.equal(array, array);
    });
    it('Массив пуст', () => {
        assert.equal(pop([]), undefined);
    });
});
