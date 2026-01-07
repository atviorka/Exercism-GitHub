// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export function buildSign(occasion, name) {
    
  const birthdaySign = `Happy ${occasion} ${name}!`
  return birthdaySign
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export function buildBirthdaySign(age) {
  
   const birthdaySign = age >= 50 ? "mature" : "young"
   return(`Happy Birthday! What a ${birthdaySign} fellow you are.`)
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {
  
  const graduationSign1 = `Congratulations ${name}!
Class of ${year}`
  return graduationSign1 
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {
  
  const signLength = sign.length
  console.log('------------signLenght----------', signLength)
  const signCost = (signLength * 2) + 20
  console.log('-----------signCost------------', signCost)
  const result = `Your sign costs ${signCost.toFixed(2)} ${currency}.`

  return result
}
