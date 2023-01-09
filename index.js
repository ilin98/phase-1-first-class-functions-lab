const returnFirstTwoDrivers = function(names) {
        return names.slice(0,2);
};

const returnLastTwoDrivers = function(names) {
    return names.slice(names.length - 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int;
    }
};

const fareDoubler = function(num){
    return createFareMultiplier(2)(num);
};

const fareTripler = function(num){
    return createFareMultiplier(3)(num);
}

const selectDifferentDrivers = function(names, cb) {
    return cb(names);
}
