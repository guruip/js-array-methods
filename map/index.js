const map = (arr, callback) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }

    return newArr;
}

module.exports.map = map;
