// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {

   let result = false
   let isCar = kind === 'car'
   let isTruck = kind === 'truck'

  if (isCar || isTruck) {result = true}
  
  return result  
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {

 let buyOption1 = option1 < option2
 let buyOption2 = option1 > option2

  if (buyOption1 === true) {
    return option1 + ' is clearly the better choice.'
  } else {
    return option2 + ' is clearly the better choice.'
  }
  
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */


export function calculateResellPrice(originalPrice, age) {

    let newPriceEstimate 


  
  //if the vehicle is less than 3 years old, it costs 80% 

  if (age < 3) {
    newPriceEstimate = originalPrice * 0.8
  }
  
  // If it is more than 10 years old, it costs 50%. 

  if (age > 10) {
    newPriceEstimate = originalPrice * 0.5
  }
  
  // If the vehicle is at least 3 years old but not older than 10 years, it costs 70%

  if (age >= 3 && age <= 10) {
    newPriceEstimate = originalPrice * 0.7
  }

  return newPriceEstimate
}
