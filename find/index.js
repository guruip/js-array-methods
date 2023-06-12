const find = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
}

module.exports.find = find;
