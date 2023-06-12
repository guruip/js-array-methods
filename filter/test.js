const assert = require('assert');
const { filter } = require('./index');
const { testArrayMethodCallback } = require('../shared/test/array-method-callback.test');

describe('filter()', () => {
    it('Возвращает отфильтрованный массив', () => {
        assert.deepEqual(filter(['a', 'b', 'c', 'd'], el => el > 'b'), ['c', 'd']);
    });
    it('Массив пуст', () => {
        assert.deepEqual(filter([], () => false), []);
    });
    it('Входящий массив не изменяется', () => {
        assert.deepEqual(filter(['g', 'b', 'c', 'd'], el => true), ['g', 'b', 'c', 'd']);
    });
    it('Возращается пустрой массив так как ни один элемент не соответствует условию функции', () => {
        assert.deepEqual(filter(['g', 'b', 'c', 'd'], el => false), []);
    });
    testArrayMethodCallback(filter);
});
