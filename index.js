// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers= function(drivers) {
  let newArray= drivers.slice(0, 2)
  return newArray
}

const returnLastTwoDrivers= function(drivers) {
  let newArray= drivers.slice(-2)
  return newArray
}

let selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(interger) {
   const fareQuintupler= (fare) => fare * interger
   return fareQuintupler
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}  

const fareTripler= function(fare) {
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers= function(drivers, driverFun) {
  return driverFun(drivers)
}