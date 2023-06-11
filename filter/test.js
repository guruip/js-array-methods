const assert = require('assert');
const { filter } = require('./index');

describe('filter()', () => {
    it('Возвращает отфильтрованный массив', () => {
        assert.deepEqual(filter([1, 2, 3, 4], el => {
            if (el > 2) {
                return el;  
            }   
        }), [3, 4]);
    });
    it('Массив пуст', () => {
        assert.deepEqual(filter([], () => {
            return null;
        }), []);
    });
});
