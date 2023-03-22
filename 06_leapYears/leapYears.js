const leapYears = function(year) {
    let is_leap = false;

    if(year % 4 == 0){
        if(year % 100 != 0){
            is_leap = true;
        } else if (year % 400 == 0){
            is_leap = true;
        }
    }

    return is_leap;
};

// Do not edit below this line
module.exports = leapYears;
