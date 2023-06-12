const assert = require('assert');

module.exports.testArrayMethodCallback = (arrayMethod) => {
    it('Аргументы в callback передаются корректно', (done) => {
        let callbackCallsCount = 0;
        const mockArray = ['a', 'b', 'c'];
        const mockArguments = [
            { element: 'a', index: 0, array: mockArray },
            { element: 'b', index: 1, array: mockArray },
            { element: 'c', index: 2, array: mockArray }
        ];
        const testArguments = (element, index, array) => {
            const arguments = mockArguments[callbackCallsCount - 1];

            if (callbackCallsCount > 3) {
                done('Callback был вызван более 3 раз!');
            }

            assert.equal(element, arguments.element, 'Аргумент element не был передан!');
            assert.equal(index, arguments.index, 'Аргумент index не был передан!');
            assert.equal(array, arguments.array, 'Аргумент array не был передан!');
        };

        arrayMethod(mockArray, (element, index, array) => {
            callbackCallsCount++;
            testArguments(element, index, array);
        });

        done();
    });
};
