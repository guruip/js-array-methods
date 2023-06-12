const find = (array, callback) => {
    let element; 

    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) {
            element = array[i];
            break;
        }
    }

    return element;
}

module.exports.find = find;
