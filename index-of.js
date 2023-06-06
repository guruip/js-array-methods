const indexOf = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
        if (el === arr[i]) {
            return i;
        }
    }

    return -1;
}
