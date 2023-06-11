const assert = require('assert');
const { find } = require('./index');

describe('find()', () => {
    it('Вернулся элемент удовлетворяющий условию функции callback', () => {
        assert.equal(find([4, 2, 3, 1, 4], el => {
            if (el === 3) {
                return el;
            }
        }), 3);
    });
    it('Элемента удовлетворяющиго условию функции callback нет', () => {
        assert.equal(find([4, 2, 3, 1, 4], el => {
            if (el === 5) {
                return el;
            }
        }), undefined);
    })
})
