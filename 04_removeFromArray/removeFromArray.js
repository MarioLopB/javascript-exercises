const removeFromArray = function (array, n1 = "", n2 = "") {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i] != n1 || array[i] != n2){
            result.push(array[i]);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
