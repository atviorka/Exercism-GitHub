

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */

//task 1


export function canExecuteFastAttack(knightIsAwake) {
  // let canAttack;
  
  // if (knightIsAwake == true) {
  //   canAttack = false;
  // }
  

  // if (knightIsAwake == false) {
  //   canAttack = true;
  // }

  // canAttack = !knightIsAwake;



  // return canAttack;


  return !knightIsAwake;
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {

//  let allowToSpy = false; //was used for 1, 2 & 3 ways


//1st way
  
  //  if (knightIsAwake == true) {
  //    allowToSpy = true;
  //  }

  // if (archerIsAwake == true) {
  //    allowToSpy = true;
  //  }

  // if (prisonerIsAwake == true) {
  //    allowToSpy = true;
  //  }


//2nd way
  
// if (knightIsAwake == true || archerIsAwake == true || prisonerIsAwake == true) {
//   allowToSpy = true;
// }

//3rd way

// if ((knightIsAwake || archerIsAwake || prisonerIsAwake) == true) {
//   allowToSpy = true;
// }


  
//   return allowToSpy;

  //4.a  way

//return ((knightIsAwake || archerIsAwake || prisonerIsAwake) == true)

  
//4.b  way

  const allowToSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;

return allowToSpy;
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */



  
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {

  // let canSignal = false;

 // if (archerIsAwake == false && prisonerIsAwake == true) {
 //   canSignal = true;
 // }

 //  return canSignal;

    const result =  !archerIsAwake && prisonerIsAwake;

return result;
  
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */


// If Annalyn has her pet dog with her she can rescue the prisoner if the archer is asleep. The knight is scared of the dog and the archer will not have time to get ready before Annalyn and the prisoner can escape.

// If Annalyn does not have her dog then she and the prisoner must be very sneaky! Annalyn can free the prisoner if the prisoner is awake and the knight and archer are both sleeping, but if the prisoner is sleeping they can't be rescued: the prisoner would be startled by Annalyn's sudden appearance and wake up the knight and archer.

export function canFreePrisoner(knightIsAwake,archerIsAwake,prisonerIsAwake,petDogIsPresent) {

   let result = false;
  
   if (petDogIsPresent && !archerIsAwake) {
     result = true;
   }  


   if(!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake) {
     result = true;
   }
  
   return result;
}



