const includes = (arr, el) => {
    for (let elem of arr) {
            if (elem === el) {
            return true;
        }
    }

    return false;
}
