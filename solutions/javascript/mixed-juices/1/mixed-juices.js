// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

    let juicePrepTime

    switch (name) {
      case 'Pure Strawberry Joy':
        juicePrepTime = 0.5
        break;
      case 'Energizer': 
      case 'Green Garden':
        juicePrepTime = 1.5
        break;
      case 'Tropical Island':
        juicePrepTime = 3
        break;
      case 'All or Nothing':
        juicePrepTime = 5
        break;
      default:
        juicePrepTime = 2.5
 }

  return juicePrepTime
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

    console.log("---------")
  
   let numberOfLimesToCut = 0
   let wedgesCounted = 0

  // Take the first lime before the loop starts
  
  let currentLime = limes.shift();
  
  // Keep cutting while we need more wedges AND we still have a lime
  
  while ((wedgesCounted < wedgesNeeded) && currentLime) {
    
    numberOfLimesToCut += 1 
    
    //calcualte number of wedges in lime
    
    switch (currentLime) {
      case 'small':
        wedgesCounted += 6
        console.log("small")
        break;

      case 'medium':
        wedgesCounted += 8
        console.log("medium")
        break;

      case 'large': 
        wedgesCounted += 10
        console.log("large")
        break;
      default:
        wedgesCounted += 0
    } 
       
    currentLime = limes.shift() 

  }
  
   return numberOfLimesToCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

  do { 
    let thisDrink = orders.shift()
    let minutesForThisDrink = timeToMixJuice(thisDrink)
    timeLeft -= minutesForThisDrink
      
    
  } while ((timeLeft > 0) && orders.length > 0)

  return orders
}
