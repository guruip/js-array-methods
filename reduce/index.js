const reduce = (array, callback, initialValue) => {
    const isInitialValue = typeof initialValue !== 'undefined';
    const initialIndex = Number(!isInitialValue);
    let result = isInitialValue ? initialValue : array[0];

    for (let i = initialIndex; i < array.length; i++) {
        result = callback(result, array[i], i, array);
    }

    return result;
};

module.exports.reduce = reduce;
