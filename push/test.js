const assert = require('assert');
const { push } = require('./index');

describe('push()', () => {
    it('Длина массива изменилась', () => {
        const array = ['a', 'b', 'c', 'd'];
        const element = '1';

        push(array, element);
        assert.equal(array.length, 5);
    });
    it('Функция возвращает длину массива', () => {
        assert.equal(push(['a', 'b', 'c', 'd'], 1), 5);
    });
    it('Массив изменяется ожидаемо', () => {
        const array = ['a', 'b', 'c', 'd'];
        const element = '1';

        push(array, element);
        assert.deepEqual(array, ['a', 'b', 'c', 'd', '1']);
    });
    it('Массив изменяется ожидаемо при push нескольких элементов', () => {
        const array = ['a', 'b', 'c', 'd'];

        push(array, 'e', 'f', 'g');
        assert.deepEqual(array, ['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
});
