const assert = require('assert');
const { findindex } = require('./index');
const { testArrayMethodCallback } = require('../shared/test/array-method-callback.test');

describe('findindex()', () => {
    it('Метод возвращает индекс корректно', () => {
        assert.equal(findindex(['a', 'b', 'c', 'd'], el => el === 'c'), 2)
    });
    it('Callback функция не обнаружила элемент с заданным условием', () => {
        assert.equal(findindex(['a', 'b', 'c', 'd'], el => false), -1)
    });
    testArrayMethodCallback(findindex);
})
