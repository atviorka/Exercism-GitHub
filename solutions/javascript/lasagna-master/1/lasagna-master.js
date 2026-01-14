/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


// 1st challenge


/** @type {(remainingTime?: number) => string} */

export function cookingStatus(remainingTime) {


    // console.log('---------remaining time-------', remainingTime)

    // 1st way

//   if (remainingTime === 0) {
//     return('Lasagna is done.')
//   } if (remainingTime !== 0 && remainingTime !== undefined) {
//     return('Not done, please wait.')
//   } if (remainingTime === undefined) {
//     return('You forgot to set the timer.')
//   }

// 2nd way


//   if (remainingTime === 0) {
//     return('Lasagna is done.')
//   } if (remainingTime === undefined) {
//     return('You forgot to set the timer.')
//   } else {
//     return('Not done, please wait.')
//   } 

// 3rd way
 
    if (remainingTime === 0) {
    return('Lasagna is done.')
  } if (remainingTime === undefined) {
    return('You forgot to set the timer.')
  } 
    return('Not done, please wait.')


}


// 2nd challenge 

export function preparationTime(layers, minutes = 2) {

// need to know how many layers (get the length of the array)

// const layersNeeded = layers.length

// console.log('-----layersNeeded------', layersNeeded)

// // we got the minutes already

// // total prep time is layers * minutes

// const totalPrepTime = layersNeeded * minutes

// return totalPrepTime

return layers.length * minutes

}


//3rd challenge

export function quantities(arrayOfLayers) {

// console.log('------------')

const amountsOfStuff = {
    noodles: 0,
    sauce: 0,
}

for (let i = 0; i < arrayOfLayers.length; i++) {
  //console.log('--i--', i)
  //console.log('current layer', arrayOfLayers[i])
  const currentLayer = arrayOfLayers[i]

  if (currentLayer === 'noodles') {
    amountsOfStuff.noodles += 50  
  }

  if (currentLayer === 'sauce') {
    amountsOfStuff.sauce += 0.2  
  }

  //console.log('----amountOfStuff----', amountsOfStuff)
}

return amountsOfStuff

}


// 4th challenge

//this won't have a loop but will need to use a diff method mentioned in the introdocution

export function addSecretIngredient(friendsList, myList) {
  //console.log('------------START')

// console.log('--friendsList--', friendsList)
// console.log('------myList------', myList)

const position = friendsList.length
// console.log('------------', position)

const lastRecipeItem = friendsList[position - 1]

// console.log('friendsList', friendsList)
// console.log('position', position)
// console.log(`lastRecipeItem friendsList[${position}]`, lastRecipeItem)


const updatedList = myList.push(lastRecipeItem)

//console.log('-------', updatedList)

}



//5th challenge 

//First, calculate the factor that you need to apply to all amounts based on the target portions.
// One way to ensure the arguments is not modified is to use a new object to save the results.
// Use a for...in loop to go through all the entries in the original recipe and fill the object accordingly.


export function scaleRecipe(recipe, numberOfPortions) {

// const onePortion = recipe.value
// const noodlesForOne = recipe.noodles / 2
// const sauceForOne = recipe.sauce / 2

console.log("------")
  // console.log("recipe", recipe)
  // console.log("numberOfPortions", numberOfPortions)

  // const recipeForOne = {
  //   noodles: recipe.noodles / 2,
  //   sauce: recipe.sauce / 2,
  //   mozarella: recipe.mozarella / 2,
  //   meat: recipe.meat / 2
  // }

  // const scaledRecipe = {
  //   noodles: recipeForOne.noodles * numberOfPortions,
  //   sauce: recipeForOne.sauce * numberOfPortions,
  //   mozarella: recipeForOne.mozarella * numberOfPortions,
  //   meat: recipeForOne.meat * numberOfPortions
  // }

  // let recipeForOne = {}

  // for (let ingredient in recipe) {
  //   recipeForOne[ingredient] = recipe[ingredient]  / 2
  // }


  // let scaledRecipe = {}
  
  // for (let ingredient in recipeForOne) {
  //    scaledRecipe[ingredient] = recipeForOne[ingredient] * numberOfPortions
  //    console.log('----scaled recipe---', scaledRecipe)
  // }



   let scaledRecipe = {}

   for (let ingredient in recipe) {

      scaledRecipe[ingredient] = (recipe[ingredient] / 2) * numberOfPortions 
   }


  return scaledRecipe

}