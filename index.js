const returnFirstTwoDrivers = function (arr) {
  return [arr[0], arr[1]];
};
const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
  return function (fare) {
    return int * fare;
  };
};

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
};

const selectDifferentDrivers = function (arrayOfDrivers, func) {
  return func(arrayOfDrivers);
};
