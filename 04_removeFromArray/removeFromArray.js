const removeFromArray = function (array, ...nums) {
    let result = [];

    array.forEach((item) => {
        if(!nums.includes(item)){
            result.push(item);
        }
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
