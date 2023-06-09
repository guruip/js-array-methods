const assert = require('assert');
const { forEach } = require('./index');

describe('forEach()', () => {
    it('Аргументы в callback передаются коректро', (done) => {
        let callbackCallsCount = 0;
        const inputArray = [1, 2, 3];
        const callsArguments = {
            call1: {el: 1, i: 0, array: inputArray},
            call2: {el: 2, i: 1, array: inputArray},
            call3: {el: 3, i: 2, array: inputArray}
        };

        const checkCallArguments = (el, i, array, callNumber) => {
            const key = 'call' + callNumber;

            assert.equal(el, callsArguments[key].el);
            assert.equal(i, callsArguments[key].i);
            assert.equal(array, callsArguments[key].array);
        };

        forEach(inputArray, (el, i, array) => {
            callbackCallsCount++;

            switch (callbackCallsCount) {
                case 1: {
                    checkCallArguments(el, i, array, 1);
                    break;
                }  
                case 2: {
                    checkCallArguments(el, i, array, 2);
                    break;
                }
                case 3: {
                    checkCallArguments(el, i, array, 3);
                    break;
                }      
            }
        });

        assert.equal(callbackCallsCount, 3);
        done();
    });
});
