const sumAll = function (n1, n2) {
    let result = 0;

    if (typeof n1 == "number" && typeof n2 == "number"
        && n1 > 0 && n2 > 0) {
        if (n1 > n2) {
            let aux = n2;
            n2 = n1;
            n1 = aux;
        }

        for (let i = n1; i <= n2; i++) {
            result += i;
        }
    } else {
        result = "ERROR";
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
