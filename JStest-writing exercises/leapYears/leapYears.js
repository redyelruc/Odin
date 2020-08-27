const leapYears = function(yearIn) {
    if (yearIn % 4 === 0) {
        if (yearIn % 100 === 0 && yearIn % 400 !== 0) {
            return false;
        }
        return true;
    }
    return false;
}

module.exports = leapYears
