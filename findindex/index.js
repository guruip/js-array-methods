const findindex = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) {
            return i;
        }
    }

    return -1;
}

module.exports.findindex = findindex;
