// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {

    return ratePerHour * 8

}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {

   let ratePerDay = dayRate(ratePerHour) 
   let totalDaysWorked = budget / ratePerDay
   let roundedDaysWorked = Math.floor(totalDaysWorked)

  console.log(totalDaysWorked)
  console.log(roundedDaysWorked)

  return roundedDaysWorked;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  
  let fullMonth = (numDays / 22) 
  let numFullMonths = Math.floor(fullMonth);
  

   let numDiscountableDays = (numFullMonths * 22) 
   let discountMultiplier = 1 - discount
  
   let discountedDaysCost = numDiscountableDays * dayRate(ratePerHour) * discountMultiplier
    console.log("------")
    console.log("numDiscountableDays", numDiscountableDays)
    console.log("dayRate", dayRate(ratePerHour))
    console.log("discount", discount)
    console.log("discountMultiplier", discountMultiplier)
    console.log("------")

  
  console.log(discountedDaysCost)
 
  
   let numFullPriceDays = numDays - numDiscountableDays
   let fullPriceDaysCost = numFullPriceDays * dayRate(ratePerHour)

   console.log(fullPriceDaysCost)
  
  let totalCostOfProject = discountedDaysCost + fullPriceDaysCost
  console.log(numDays, numDiscountableDays, numFullPriceDays)
 
  
  return Math.ceil(totalCostOfProject);

}

//Help them estimate their cost for such projects, given an hourly rate, the number of billable days the project contains, and a monthly discount rate. 

// Get ratePerDay
// Get numFullMonths
// Get numDiscountableDays: (numFullMonths * 22)
// Get numFullPriceDays = numDays - numDiscountableDays
// Calc discounted days cost = numDiscountableDays * ratePerDay * discoutn
// Calc full Price days cost = numFullPriceDays * ratePerDay
// add discounted days cost and full price days cost
// Round number down
// return the answer