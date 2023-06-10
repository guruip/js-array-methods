const filter = (arr, callback) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(callback(arr[i]));
        }
    }
    
    return newArr;
}

module.exports.filter = filter;
