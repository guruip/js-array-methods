const includes = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
        if (el === arr[i]) {
            return true;
        }
    }

    return false;
}
