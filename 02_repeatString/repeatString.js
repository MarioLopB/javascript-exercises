const repeatString = function (buffer, n) {
    let result = "";

    if (n < 0) {
        result = 'ERROR';
    } else {
        for (let i = 0; i < n; i++) {
            result += buffer;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
