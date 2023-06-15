const assert = require('assert');

module.exports.testArrayMethodCallback = (arrayMethod, isReverted = false) => {
    it('Аргументы в callback передаются корректно', (done) => {
        let callbackCallsCount = 0;
        const mockArray = ['a', 'b', 'c'];

        arrayMethod(mockArray, (element, index, array) => {
            callbackCallsCount++;
            
            if (callbackCallsCount > 3) {
                done('Callback был вызван более 3 раз!');
            }

            const mockIndex = isReverted
                ? mockArray.length - callbackCallsCount
                : callbackCallsCount - 1;

            assert.equal(element, mockArray[mockIndex]);
            assert.equal(index, mockIndex);
            assert.equal(array, mockArray);
        });

        done();
    });
};
