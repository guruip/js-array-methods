const reduceRight = (array, callback, initialValue) => {
    const isInitialValue = typeof initialValue !== 'undefined';
    const initialIndex = isInitialValue ? array.length - 1 : array.length - 2;
    let result = isInitialValue ? initialValue : array[array.length - 1];

    for (let i = initialIndex; i >= 0; i--) {
        result = callback(result, array[i], i, array);
    }

    return result;
};

module.exports.reduceRight = reduceRight;
