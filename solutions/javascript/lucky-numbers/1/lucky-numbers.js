// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  
  const firstArray = array1.join("")

  const secondArray = array2.join("")

  //console.log("firstArray", firstArray, "secondArray", secondArray)

  const sumOfArrays = Number(firstArray) + Number(secondArray)

  return sumOfArrays

  //console.log('sumOfArrays', sumOfArrays)

}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {

   const stringValue = String(value);

  //  const someValue = "item1-item2-item3-item4"
  //  const splitValue = stringValue.split("-");
  // ["item1", "item2", "item3", "item4"]


  //  const splitValue = stringValue.split("");
  //  const reversedValue = splitValue.reverse();
  //  const joinedValue = reversedValue.join("");
  const joinedValue = stringValue.split("").reverse().join("")

   const isPalindrome = stringValue === joinedValue;

   return isPalindrome

}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {


  //  const noInput = String(input)
  //  console.log('noInput', noInput)
   if (input === '' || input === undefined || input === null) {
    
    return("Required field")
   }
   

   const numberInput = Number(input) > 0
   console.log('number input', numberInput)
   if (numberInput !== true) {
    return('Must be a number besides 0')
   } else {
    return('')
   }
  
}
