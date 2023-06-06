const map = (arr, callback) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(i + 1))
    }

    return newArr;
}