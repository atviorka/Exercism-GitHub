// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  // console.log("-------");
  // console.log(`Running translate2d(${dx}, ${dy})`);

  return function moveCoordinates(x, y) {
    const nextX = x + dx;
    const nextY = y + dy;

    // console.log(`moveCoordinates(${x}, ${y}) by ${dx}, ${dy}`);
    // console.log(`moveCoordinates returns ${[nextX, nextY]}`);
    return [nextX, nextY];
  };
}

// const moveby3AndMinus5 = translate2d(3, -5);

// moveby3AndMinus5(0, 0);
// // [3, -5]

// moveby3AndMinus5(4, 5);
// // [7, 0]

// const moveByTen = translate2d(10, 10);

// moveByTen(0, 0);
// // [10, 10]

// moveByTen(4, 5);
// // [14, 15]

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function moveCoordinates(x, y) {
    const nextX = x * sx;
    const nextY = y * sy;

    return [nextX, nextY];
  };
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} functionA the first function to apply
 * @param {function} functionB the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(functionA, functionB) {
  return function composedTransformation(x, y) {
    const firstTransform = functionA(x, y);
    // [transformedX, transformedY]
    const secondTransform = functionB(firstTransform[0], firstTransform[1]);
    // [doubleTransformedX, doubleTransformedY]
    return secondTransform;
  };
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let lastX;
  let lastY;
  let lastAnswer;

  console.log("--- creating memoizedFunction");

  // This returns a new function that encloses the local variable counter
  return function memoizedFunction(x, y) {
    console.log(`called function with x ${x}, y ${y}`);
    console.log(`lastX = ${lastX}, lastY = ${lastY}`);

    // Check if input matches lastInput
    if (lastX === x && lastY === y) {
      console.log(`lastX & lastY match, return lastAnswer: ${lastAnswer}`);
      // if it does, return lastAnswer
      return lastAnswer;
    } else {
      console.log(
        `No match, save ${x} to lastX, ${y} to lastY and get new answer`,
      );
      lastX = x;
      lastY = y;

      lastAnswer = f(x, y);
      console.log(`saved lastAnswer as ${lastAnswer}`);
      return lastAnswer;
    }
  };
}
