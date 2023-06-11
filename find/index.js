const find = (array, callback) => {
    let element; 

    for (let i = 0; i < array.length; i++){
        if (callback(array[i])) {
            element = callback(array[i]);
        }
    }

    return element;
}

module.exports.find = find;
