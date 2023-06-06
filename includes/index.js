const includes = (array, searchElement) => {
    for (const element of array) {
        if (element === searchElement) {
            return true;
        }
    }

    return false;
};

module.exports.includes = includes;
