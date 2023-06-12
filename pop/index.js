const pop = (arr) => {
    const lastElement = arr[arr.length - 1];

    if (arr.length > 0) arr.length--;
    
    return lastElement;
}

module.exports.pop = pop;
