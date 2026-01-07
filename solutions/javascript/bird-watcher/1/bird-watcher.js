// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  console.log("-----------")
  
  let totalBirds = 0
  
  for (let i = 0; i < birdsPerDay.length; i = i + 1) {
    totalBirds += birdsPerDay[i]
    console.log("total birds" + totalBirds)

    // Shorthand version
    //totalBirds += birdsPerDay[i]
    // is the same as doing this:
    //totalBirds = totalBirds + birdsPerDay[i]
  }

  return totalBirds
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */


export function birdsInWeek(birdsPerDay, week) {

  console.log("------------")
  let totalBirds = 0
  let startDay = (week * 7) - 7
  let endDay = week * 7
  console.log("startDay: " +  startDay + " week: " + week)
  console.log("endDay " + endDay)
    
  for (let i = startDay; i < endDay; i = i + 1) {
    totalBirds += birdsPerDay[i]
  }

  return totalBirds
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */



export function fixBirdCountLog(birdsPerDay) {
 
  console.log("------")
    
  for (let i = 0; i < birdsPerDay.length; i = i + 2) {
    birdsPerDay[i] += 1 
    
    console.log(birdsPerDay + "-----" + i)
    
     }

  return birdsPerDay
}
