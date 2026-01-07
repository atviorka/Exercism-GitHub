
export const EXPECTED_MINUTES_IN_OVEN = 40;
/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  const remainingMinutes = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  return remainingMinutes;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  const preparationTime = numberOfLayers * 2;
  return preparationTime;
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  console.log("numberOfLayers: " + numberOfLayers + " actualMinutesInOven: " + actualMinutesInOven)
  
  const preparationMinutes = preparationTimeInMinutes(numberOfLayers);
  const totalMinutes = preparationMinutes + actualMinutesInOven;
  
  console.log("calculated totalMinutes as: " + totalMinutes);
  console.log("---");
  return totalMinutes;
}  

let test1Passed = false
const test1Result = totalTimeInMinutes(1, 5)
if (test1Result === 7) {
  test1Passed = true
}    

let test2Passed = false
const test2Result = totalTimeInMinutes(4, 15)
if (test2Result === 23) {
  test2Passed = true
}    

let test3Passed = false
const test3Result = totalTimeInMinutes(1, 30)
if (test3Result === 32) {
  test3Passed = true
}    

if (test1Passed === true && test2Passed === true && test3Passed === true) {
  const allTestsPassed = true
}