const assert = require('assert');
const { forEach } = require('./index');
const { testArrayMethodCallback } = require('../shared/test/array-method-callback.test');

describe('forEach()', () => {
    testArrayMethodCallback(forEach);
});
