const push = (array, elementN) => {
    
    if (Array.isArray(elementN)) {
        for (let i = 0; i < elementN.length; i++) {
            array[array.length] = elementN[i];
        }
    } else {
        array[array.length] = elementN;
    }

    return array.length;
};

module.exports.push = push;
