const pop = (arr) => {
    const lastElement = arr.length;

    if (arr.length > 0) arr.length --;
    
    return lastElement;
}

module.exports.pop = pop;
